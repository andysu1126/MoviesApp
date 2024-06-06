import { useEffect, useState } from "react";
import { Text, View, ActivityIndicator } from "react-native";

import { getNowPlaying, getPopular, getTop, getUpcoming } from "../../api/api";

import RNPicker from "../../components/RNPicker";
import List from "../../components/List";

function Page() {
  const [dropdownSelection, setDropdownSelection] = useState("popular");
  const [contentData, setContentData] = useState([]);
  const [isTv, setIsTv] = useState("movie");
  const [isLoading, setIsLoading] = useState(false);
  const selectionArr = [
    { label: "popular", value: "popular" },
    { label: "now_playing", value: "now_playing" },
    { label: "top_rated", value: "top_rated" },
    { label: "upcoming", value: "upcoming" },
  ];

  useEffect(() => {
    setIsLoading(true);
    const fetchNowPlaying = async () => {
      try {
        const data = await getNowPlaying();
        setContentData(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchPopular = async () => {
      try {
        const data = await getPopular();
        setContentData(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchTop = async () => {
      try {
        const data = await getTop();
        setContentData(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchUpcoming = async () => {
      try {
        const data = await getUpcoming();
        setContentData(data.results);
      } catch (error) {
        console.log(error);
      }
    };

    if (dropdownSelection === "popular") {
      fetchPopular();
    } else if (dropdownSelection === "now_playing") {
      fetchNowPlaying();
    } else if (dropdownSelection === "top_rated") {
      fetchTop();
    } else if (dropdownSelection === "upcoming") {
      fetchUpcoming();
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
