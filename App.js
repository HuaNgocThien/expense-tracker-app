import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import RecentScreen from "./screens/RecentExpensesScreen";
import AllExpensesScreen from "./screens/AllExpensesScreen";
import ManageExpensesScreen from "./screens/ManageExpenseScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

SplashScreen.preventAutoHideAsync();

const BottomTabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function ExpensesOverview() {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name="Recent" component={RecentScreen} />
      <BottomTabs.Screen name="AllExpenses" component={AllExpensesScreen} />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  const [fontLoaded] = useFonts({
    playfair: require("./assets/fonts/PlayfairDisplay-Regular.ttf"),
    "playfair-black": require("./assets/fonts/PlayfairDisplay-Black.ttf"),
    "playfair-bold": require("./assets/fonts/PlayfairDisplay-Bold.ttf"),
    merriweather: require("./assets/fonts/Merriweather-Regular.ttf"),
    "merriweather-black": require("./assets/fonts/Merriweather-Black.ttf"),
    "merriweather-bold": require("./assets/fonts/Merriweather-Bold.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontLoaded) {
      try {
        await SplashScreen.hideAsync();
      } catch (error) {
        console.warn("SplashScreen hide error:", error);
      }
    }
  }, [fontLoaded]);

  if (!fontLoaded) {
    return (
      <View style={styles.container}>
        <Text>Loading fonts...</Text>
      </View>
    );
  }
  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ExpensesOverview">
          <Stack.Screen name="ExpensesOverview" component={ExpensesOverview} />
          <Stack.Screen name="ManageExpense" component={ManageExpensesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
