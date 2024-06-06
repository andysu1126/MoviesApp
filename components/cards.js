import { Link } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function Cards({ item, isTv }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
          }}
          style={{ width: 125, height: 125 }}
        />
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.title}>{item.title || item.name}</Text>
        <Text>{item.popularity}</Text>
        <Text>{item.release_date || item.first_air_date}</Text>
        <Link href={`${item.id}?isTv=${isTv}`} asChild style={styles.button}>
          <TouchableOpacity>
            <Text style={styles.btnText}>More Details</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

export default Cards;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,

    alignItems: "center",
    marginVertical: 10,
    marginHorizontal: 5,
  },
  imageWrapper: {
    marginHorizontal: 10,
  },
  textWrapper: {
    marginHorizontal: 5,
    marginVertical: 0,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  button: {
    padding: 10,
    paddingHorizontal: 60,
    marginVertical: 5,
    backgroundColor: "#1376a1",

    borderRadius: 10,
  },
  btnText: {
    color: "white",
  },
});
