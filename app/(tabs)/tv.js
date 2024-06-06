import { useEffect, useState } from "react";
import { Text, View, ActivityIndicator } from "react-native";
import RNPicker from "../../components/RNPicker";
import {
  getAirToday,
  getOnTheAir,
  getPopularTv,
  getTopTv,
} from "../../api/api";

import List from "../../components/List";

function Page() {
  const [dropdownSelection, setDropdownSelection] = useState("popular");
  const [contentData, setContentData] = useState([]);
  const [isTv, setIsTv] = useState("tv");
  const [isLoading, setIsLoading] = useState(false);
  const selectionArr = [
    { label: "popular", value: "popular" },
    { label: "airing today", value: "airing today" },
    { label: "top_rated", value: "top_rated" },
    { label: "on the air", value: "on the air" },
  ];
  useEffect(() => {
    setIsLoading(true);
    const fetchAirToday = async () => {
      try {
        const data = await getAirToday();
        setContentData(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchOnTheAir = async () => {
      try {
        const data = await getOnTheAir();
        setContentData(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchPopTv = async () => {
      try {
        const data = await getPopularTv();
        setContentData(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchTopTv = async () => {
      try {
        const data = await getTopTv();
        console.log(data);
        setContentData(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    if (dropdownSelection === "popular") {
      fetchPopTv();
    } else if (dropdownSelection === "airing today") {
      fetchAirToday();
    } else if (dropdownSelection === "top_rated") {
      fetchTopTv();
    } else if (dropdownSelection === "on the air") {
      fetchOnTheAir();
    }
    setIsLoading(false);
  }, [dropdownSelection]);
  return (
    <View style={{ marginHorizontal: 5 }}>
      <RNPicker
        dropdownSelection={dropdownSelection}
        onDropDown={setDropdownSelection}
        selectionArr={selectionArr}
      />
      {isLoading ? (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 70,
          }}
        >
          <ActivityIndicator
            size="large"
            color="#212121"
            marginHorizontal={10}
          />
          <Text style={{ fontSize: 20 }}>Loading...</Text>
        </View>
      ) : (
        <List data={contentData} isTv={isTv} />
      )}
    </View>
  );
}

export default Page;
