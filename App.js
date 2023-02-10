import { StyleSheet, StatusBar } from "react-native";
import { RestaurantsScreen } from "./src/features/restaurant/screens/restaurants.screen";

export default function App() {
  return (
    <>
      <RestaurantsScreen />
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
