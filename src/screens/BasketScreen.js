import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { XCircleIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";

import { urlFor } from "../../sanity";
import { selectBasketItems, removeFromBasket } from "../features/basketSlice";
import { selectRestaurant } from "../features/restaurantSlice";

const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
  const dispatch = useDispatch();

  // group same items together so you don't get eg. the same burger 5 times in your basket -
  // instead you get burger x 5 just once
  // this is saying it the key exists, then push the item into that key
  // so you end up with an object that's like { burger: [...]} which you can .length
  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupedItemsInBasket(groupedItems);
  }, [items]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-[#00CCBB] bg-white shadow-xs">
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-center text-gray-400">
              {restaurant.title}
            </Text>
          </View>

          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute bg-gray-100 rounded-full top-3 right-5"
          >
            <XCircleIcon color="#00CCBB" height={50} width={50} />
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center px-4 py-3 my-5 space-x-4 bg-white">
          <Image
            source={require("../../assets/kangalivery-logo.png")}
            className="p-4 bg-gray-300 rounded-full h-7 w-7"
          />
          <Text className="flex-1">Deliver in 50-75 mins</Text>
          <TouchableOpacity>
            <Text className="text-[#00CCBB]">Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView>
          {Object.entries(groupedItemsInBasket).map(([key, items]) => (
            <View key={key}>
              <Text>{items.length} x</Text>
              <Image
                source={{ uri: urlFor(items[0]?.image).url() }}
                className="w-12 h-12 rounded-full"
              />
              {/* items[0] as only need details of one of them */}
              <Text className="flex-1">{items[0]?.name}</Text>

              <Text className="text-gray-600">£{items[0]?.price}</Text>

              <TouchableOpacity>
                <Text
                  className="text-[#00CCBB] text-xs"
                  onPress={() => dispatch(removeFromBasket({ id: key }))}
                >
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
