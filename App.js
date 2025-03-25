import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Ionicons } from "@expo/vector-icons";
import { useCallback } from "react";
import RecentScreen from "./screens/RecentExpensesScreen";
import AllExpensesScreen from "./screens/AllExpensesScreen";
import ManageExpensesScreen from "./screens/ManageExpenseScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GlobalStyles } from "./constants/style";
import IconButton from "./components/ui/IconButton";
import ExpensesContextProvider from "./store/expenses-context";

SplashScreen.preventAutoHideAsync();

const BottomTabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function ExpensesOverview() {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        headerTintColor: GlobalStyles.colors.whiteApp,
        tabBarStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        tabBarActiveTintColor: GlobalStyles.colors.yellow,
        headerRight: ({ tintColor }) => (
          <IconButton
            icon={"add-circle-outline"}
            size={32}
            color={tintColor}
            onPress={() => {
              navigation.navigate("ManageExpense");
            }}
          />
        ),
      })}
    >
      <BottomTabs.Screen
        name="Recent"
        component={RecentScreen}
        options={{
          title: "Recent Expenses",
          headerTitleStyle: {
            fontFamily: "playfair-bold",
          },
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="receipt-outline" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpensesScreen}
        options={{
          title: "All Expenses",
          headerTitleStyle: {
            fontFamily: "playfair-bold",
          },
          tabBarLabel: "All Expenses",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
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
    <ExpensesContextProvider>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="ExpensesOverview"
            screenOptions={{
              headerStyle: {
                backgroundColor: GlobalStyles.colors.primary500,
              },
              headerTintColor: GlobalStyles.colors.whiteApp,
            }}
          >
            <Stack.Screen
              name="ExpensesOverview"
              component={ExpensesOverview}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ManageExpense"
              component={ManageExpensesScreen}
              options={{
                title: "Manage Expenses",
                presentation: "modal",
                headerTitleStyle: {
                  fontFamily: "playfair-bold",
                },
                headerLeft: () => <></>,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </ExpensesContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
