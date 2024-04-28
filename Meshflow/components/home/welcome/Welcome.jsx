import { useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { router, useRouter } from "expo-router";
import styles from "./welcome.style";
import { SIZES, icons } from "../../../constants";
const jobTypes = ["Full-Time", "Part-time", "On-Contract"];

const Welcome = () => {
  const [activeJobType, setActiveJobTypes] = useState("Full-Time");
  const router = useRouter();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Welcome to Meshflow</Text>
        <Text style={styles.welcomeMessage}>
          Discover your next step with us !
        </Text>
      </View>
      <View style={styles.container}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder="What are you looking for ?"
            placeholderTextColor="white"
          />
          <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
            <Image
              source={icons.search}
              resizeMode="contain"
              style={styles.searchBtnImage}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.tabsContainer}>
          <FlatList
            data={jobTypes}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.tab(activeJobType, item)}
                onPress={() => {
                  setActiveJobTypes(item);
                  router.push(`/search/${item}`);
                }}
              >
                <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item}
            contentContainerStyle={{ columnGap: SIZES.small }}
            horizontal
          />
        </View>
      </View>
    </View>
  );
};

export default Welcome;
