import { useRoute } from "@react-navigation/native";
import { View, Text } from "react-native";

const RestaurantScreen = () => {
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

  return (
    <View>
      <Text>RestaurantScreen</Text>
    </View>
  );
};

export default RestaurantScreen;
