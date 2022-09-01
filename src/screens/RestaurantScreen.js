import { useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { ArrowLeftIcon } from "react-native-heroicons/solid";

import { urlFor } from "../../sanity";

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
    <ScrollView>
      <View className="relative">
        <Image
          source={{
            uri: urlFor(imgUrl).url(),
          }}
          className="w-full h-56 p-4 bg-gray-300"
        />
        <TouchableOpacity
          onPress={navigation.goBack}
          className="absolute p-2 bg-gray-100 rounded-full top-14 left-5"
        >
          <ArrowLeftIcon size={20} color="#00CCBB" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default RestaurantScreen;
