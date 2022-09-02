import { View, Text, TouchableOpacity, Image } from "react-native";
import { urlFor } from "../../sanity";

const DishRow = ({ id, name, description, price, image }) => {
  return (
    <TouchableOpacity className="p-4 bg-white border border-gray-200">
      <View className="flex-row">
        <View className="flex-1 pr-2">
          <Text className="mb-1 text-lg">{name}</Text>
          <Text className="text-gray-400">{description}</Text>
          <Text className="mt-2 text-gray-400">£{price}</Text>
        </View>

        <View>
          <Image
            style={{
              borderWidth: 1,
              borderColor: "#F3F3F4",
            }}
            source={{ uri: urlFor(image).url() }}
            className="w-20 h-20 p-4 bg-gray-300"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DishRow;
