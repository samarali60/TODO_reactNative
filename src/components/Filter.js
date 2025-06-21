import { View, Text,TouchableOpacity } from 'react-native'
import { styles } from "../../styles"; 
const Filter = ({ activeFilter, setActiveFilter }) => {
  return (
      <View style={{ ...styles.filterContainer, marginTop: 15 }}>
        <TouchableOpacity
          style={styles.filterBtn}
          activeOpacity={0.7}
          onPress={() => setActiveFilter("All")}
        >
          <Text
            style={{
              ...styles.filterText,
              color: activeFilter === "All" ? "teal" : "black",
            }}
          >
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.filterBtn}
          activeOpacity={0.7}
          onPress={() => setActiveFilter("InProgress")}
        >
          <Text
            style={{
              ...styles.filterText,
              color: activeFilter === "InProgress" ? "teal" : "black",
            }}
          >
            Active
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.filterBtn}
          activeOpacity={0.7}
          onPress={() => setActiveFilter("Done")}
        >
          <Text
            style={{
              ...styles.filterText,
              color: activeFilter === "Done" ? "teal" : "black",
            }}
          >
            Done
          </Text>
        </TouchableOpacity>
      </View> 
  )
}

export default Filter