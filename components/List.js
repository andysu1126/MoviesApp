import { FlatList } from "react-native";

import Cards from "./cards";

function List({ data, isTv }) {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Cards isTv={isTv} item={item} />}
      style={{ marginBottom: 80 }}
    />
  );
}

export default List;
