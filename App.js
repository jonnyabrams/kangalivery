import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  return (
    <NavigationContainer>
      <View>
        <Text className="text-red-500">Hello world</Text>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
};

export default App;
