import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { selectBasketItems } from "../features/basketSlice";
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

  console.log(groupedItemsInBasket)

  return (
    <View>
      <Text>BasketScreen</Text>
    </View>
  );
};

export default BasketScreen;
