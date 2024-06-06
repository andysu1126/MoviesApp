import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { getDetails, getTvDetails } from "../api/api";

function Page() {
  const { id, isTv } = useLocalSearchParams();
  const [detail, setDetails] = useState({});
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await getDetails(id);
        setDetails(data);

        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    const fetchTvDetails = async () => {
      try {
        const data = await getTvDetails(id);
        setDetails(data);

        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    if (isTv === "movie") {
      fetchDetails();
    }
    if (isTv === "tv") {
      fetchTvDetails();
    }
    if (isTv === "multi") {
      fetchDetails().then((success) => {
        if (!success) {
          fetchTvDetails();
        }
      });
    }
  }, [id, isTv, navigation]);

  useEffect(() => {
    navigation.setOptions({
      title: detail.title || detail.name,
    });
  }, [detail, navigation]);
  const content = loading ? (
    <Text>Loading...</Text>
  ) : (
    <View style={styles.container}>
      <Text style={styles.title}>{detail.title}</Text>
      <Image
        style={styles.image}
        source={{
          uri: `https://image.tmdb.org/t/p/w500${detail.poster_path}`,
        }}
      />
      <View>
        <Text style={styles.description}>{detail.overview}</Text>
      </View>
      <View style={styles.static}>
        <Text>
          {"Popularity: " + detail.popularity + " | " + "Release Date: "}
          {detail.release_date || detail.first_air_date}
        </Text>
      </View>
    </View>
  );
  return content;
}

export default Page;
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 50,
    marginHorizontal: 55,
  },
  title: { fontSize: 30, fontWeight: "bold", marginVertical: 5 },
  image: { width: 250, height: 250, marginVertical: 30 },
  description: {
    lineHeight: 20,
  },
  static: {
    marginVertical: 30,
  },
});
