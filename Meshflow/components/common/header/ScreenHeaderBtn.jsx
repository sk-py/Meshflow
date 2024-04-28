import React, { useState } from "react";
import { View, TouchableWithoutFeedback, Animated } from "react-native";
import { Entypo } from "@expo/vector-icons";
// Import the necessary modules from React Native and Expo

const ScreenHeaderBtn = () => {
  // Create a functional component called ScreenHeaderBtn
  const [rotationValue] = useState(new Animated.Value(0));
  // Initialize an Animated value to control the rotation

  const handlePress = () => {
    // Define a function to handle the press event
    Animated.timing(rotationValue, {
      toValue: 1,
      duration: 1100,
      useNativeDriver: true,
    }).start(() => {
      rotationValue.setValue(0);
    });
    // Use Animated.timing to rotate the value over 1000ms (1 second)
  };

  const rotateInterpolate = rotationValue.interpolate({
    inputRange: [0, 0.5],
    outputRange: ["0deg", "360deg"],
  });
  // Interpolate the rotation value to produce an animated style

  const animatedStyle = {
    transform: [{ rotate: rotateInterpolate }],
  };
  // Define the animated style to be applied to the icon

  return (
    <View>
      {/* Render a View container */}
      <TouchableWithoutFeedback onPress={handlePress}>
        {/* Use TouchableWithoutFeedback to capture press events */}
        <Animated.View style={animatedStyle}>
          {/* Apply the animated style to the View */}
          <Entypo name="network" size={35} color="black" />
          {/* Render the Entypo icon */}
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default ScreenHeaderBtn;
// Export the ScreenHeaderBtn component
