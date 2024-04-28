import { MaterialIcons } from "@expo/vector-icons";
import { View, TouchableOpacity } from "react-native";

const Profile = () => (
  <View>
    <TouchableOpacity>
      <MaterialIcons name="account-circle" size={40} color="black" />
    </TouchableOpacity>
  </View>
);

export default Profile;
