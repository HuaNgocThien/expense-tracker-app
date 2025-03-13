import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/style";

function ExpensesSummary({ expenses, periodName }) {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  const formattedAmount = expensesSum.toLocaleString("vi-VN") + " VND";

  return (
    <View style={styles.summaryContainer}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>{formattedAmount}</Text>
    </View>
  );
}

export default ExpensesSummary;

const styles = StyleSheet.create({
  summaryContainer: {
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  period: {
    fontFamily: "merriweather-bold",
    fontSize: 14,
    color: GlobalStyles.colors.primary400,
  },
  sum: {
    fontFamily: "playfair-bold",
    fontSize: 18,
    color: GlobalStyles.colors.moneyGreen,
  },
});
