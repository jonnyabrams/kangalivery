import { useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { View, Text } from "react-native";

const RestaurantScreen = () => {
  const navigation = useNavigation();

  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default RestaurantScreen;
