import { Pressable, StyleSheet, Text, View, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { GlobalStyles } from "../../constants/style";
import { getFormattedDate } from "../../utils/date";

function ExpenseItem({ id, description, amount, date }) {
  const navigation = useNavigation();

  const formattedAmount = amount.toLocaleString("vi-VN") + " VND";

  function expensePressHandler() {
    navigation.navigate("ManageExpense", {
      expenseId: id,
    });
  }

  return (
    <View style={styles.container}>
      <Pressable
        onPress={expensePressHandler}
        style={({ pressed }) => [
          styles.pressable,
          Platform.OS === "ios" && pressed ? styles.pressed : null,
        ]}
        android_ripple={{ color: GlobalStyles.colors.primary400 }}
      >
        <View style={styles.expenseItem}>
          <View>
            <Text style={[styles.textBase, styles.description]}>
              {description}
            </Text>
            <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
          </View>
          <View style={styles.amountContainer}>
            <Text style={styles.amount}>{formattedAmount}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default ExpenseItem;

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    overflow: "hidden",
  },
  pressable: {
    borderRadius: 6,
    backgroundColor: GlobalStyles.colors.lavenderMist,
    marginVertical: 8,
    elevation: 3,
    shadowColor: GlobalStyles.colors.grayText,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
  },
  expenseItem: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
  },
  textBase: {
    fontFamily: "merriweather",
  },
  description: {
    fontFamily: "playfair-bold",
    fontSize: 16,
    marginBottom: 4,
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: GlobalStyles.colors.softMint,
    elevation: 3,
  },
  amount: {
    color: GlobalStyles.colors.moneyGreen,
    fontFamily: "merriweather-bold",
  },
  pressed: {
    opacity: 0.75,
  },
});
