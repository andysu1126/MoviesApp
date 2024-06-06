import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import RNPicker from "../../components/RNPicker";
import { getSearch } from "../../api/api";
import List from "../../components/List";

function Page() {
  const [input, setInput] = useState("");
  const [dropdownSelection, setDropdownSelection] = useState("movie");
  const [contentData, setContentData] = useState([]);
  const [alert, setAlert] = useState(false);
  const selectionArr = [
    { label: "multi", value: "multi" },
    { label: "movie", value: "movie" },
    { label: "tv", value: "tv" },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.searchOptions}>
        <View style={styles.textWrapper}>
          <Text>Search Movie/Tv Show Name</Text>
          <Text style={styles.redThing}>*</Text>
        </View>
        <View style={[styles.searchBar, alert && styles.alert]}>
          <Ionicons name="search-outline" size={24} color="black" />
          <TextInput
            placeholder="i.e. James Bond, CSI"
            style={{ paddingHorizontal: 10 }}
            onChangeText={(text) => setInput(text)}
          />
        </View>
        <View style={styles.textWrapper}>
          <Text>Choose Search Type</Text>
          <Text style={styles.redThing}>*</Text>
        </View>
        <View style={styles.selectionRow}>
          <RNPicker
            dropdownSelection={dropdownSelection}
            onDropDown={setDropdownSelection}
            selectionArr={selectionArr}
            alert={alert}
          />
          <TouchableOpacity
            style={styles.btn}
            onPress={async () => {
              if (input === "" || input === null) {
                setAlert(true);
                return;
              }
              setAlert(false);
              const result = await getSearch(dropdownSelection, input);
              console.log(
                result.filter((item) => item.media_type !== "person")
              );
              setContentData(
                result.filter((item) => item.media_type !== "person")
              );
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons name="search" size={24} color="#ffffff" />
              <Text style={{ color: "#ffffff" }}>Seacrh</Text>
            </View>
          </TouchableOpacity>
        </View>
        {alert && (
          <Text style={{ color: "#fd0000ff", fontSize: 12 }}>
            Movie/TV show name is required
          </Text>
        )}
      </View>

      <View>
        {contentData.length === 0 ? (
          <Text style={styles.instruction}>Please initiate a search</Text>
        ) : (
          <List data={contentData} isTv={dropdownSelection} />
        )}
      </View>
    </View>
  );
}

export default Page;
const styles = StyleSheet.create({
  container: {
    // alignItems: "flex-start",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    marginVertical: 40,
    marginHorizontal: 10,
  },
  searchBar: {
    backgroundColor: "#bab7b730",
    flexDirection: "row",
    padding: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
    width: "100%",
  },
  alert: {
    borderColor: "#fd0000ff",
    borderWidth: 1,
  },
  textWrapper: { flexDirection: "row", alignItems: "flex-start" },
  redThing: { color: "red", marginLeft: 5, marginTop: -2 },
  selectionRow: { flexDirection: "row", alignItems: "center" },
  btn: {
    backgroundColor: "#0fd0f1",
    padding: 5,
    paddingVertical: 6,
    flex: 1,
    marginHorizontal: 5,
    alignItems: "center",
    borderRadius: 8,
  },
  instruction: {
    color: "#606060ab",
    fontSize: 25,
    fontWeight: "bold",
    marginVertical: 60,
  },
  searchOptions: {
    width: "90%",
    marginVertical: 10,
  },
});
