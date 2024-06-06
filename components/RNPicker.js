import { StyleSheet, View } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { Chevron } from "react-native-shapes";

function RNPicker({ dropdownSelection, onDropDown, selectionArr, alert }) {
  const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      paddingVertical: 6,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: alert ? "red" : "grey",
      borderRadius: 4,
      color: "black",
      paddingRight: 40,
      width: 200,
    },
    inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 6,
      borderWidth: 1,
      borderColor: "black",
      borderRadius: 8,
      color: "black",
      paddingRight: 40,
      width: 200,
    },
  });

  return (
    <View
      style={{
        marginVertical: 30,
        flexDirection: "row",
        justifyContent: "center",
        width: "200",
      }}
    >
      <RNPickerSelect
        onValueChange={(value) => onDropDown(value)}
        items={selectionArr}
        value={dropdownSelection}
        useNativeAndroidPickerStyle={false}
        style={{
          ...pickerSelectStyles,

          iconContainer: {
            top: 12,
            right: 10,
          },
        }}
        Icon={() => {
          return <Chevron size={1.5} color="gray" />;
        }}
      />
    </View>
  );
}

export default RNPicker;
