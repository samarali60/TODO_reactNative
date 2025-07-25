import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../../styles";
import { useDispatch, useSelector } from "react-redux";
import { FILTRATION_TYPES, setFilter } from "../redux/slices/TodoSlice";
const Filter = () => {
  const { filter, todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const handleFilterChange = (filter) => {
    dispatch(setFilter(filter));
  };
  if (todos.length === 0) return null;
  return (
    <>
      <View style={{ ...styles.dividerLine, marginTop: 15 }} />
      <View style={{ ...styles.filterContainer, marginTop: 15 }}>
        <TouchableOpacity
          style={styles.filterBtn}
          activeOpacity={0.7}
          onPress={() => handleFilterChange("all")}
        >
          <Text
            style={{
              ...styles.filterText,
              color: filter === FILTRATION_TYPES.ALL ? "teal" : "black",
            }}
          >
            {FILTRATION_TYPES.ALL.toUpperCase()}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.filterBtn}
          activeOpacity={0.7}
          onPress={() => handleFilterChange("in-progress")}
        >
          <Text
            style={{
              ...styles.filterText,
              color: filter === FILTRATION_TYPES.IN_PROGRESS ? "teal" : "black",
            }}
          >
            {FILTRATION_TYPES.IN_PROGRESS.toUpperCase()}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.filterBtn}
          activeOpacity={0.7}
          onPress={() => handleFilterChange("completed")}
        >
          <Text
            style={{
              ...styles.filterText,
              color: filter === FILTRATION_TYPES.COMPLETED ? "teal" : "black",
            }}
          >
            {FILTRATION_TYPES.COMPLETED.toUpperCase()}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Filter;
