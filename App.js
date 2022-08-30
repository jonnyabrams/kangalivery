import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

const App = () => {
  return (
    <View>
      <Text className="text-red-500">Hello world</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default App;
