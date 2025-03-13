import { FlatList, StyleSheet, Text, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/style";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 1000000,
    date: new Date("2025-03-08"),
  },
  {
    id: "e2",
    description: "Grocery shopping",
    amount: 350000,
    date: new Date("2025-03-11"),
  },
  {
    id: "e3",
    description: "Electricity bill",
    amount: 1200000,
    date: new Date("2025-03-05"),
  },
  {
    id: "e4",
    description: "Monthly internet subscription",
    amount: 250000,
    date: new Date("2025-03-02"),
  },
  {
    id: "e5",
    description: "Dinner at a restaurant",
    amount: 500000,
    date: new Date("2025-03-10"),
  },
  {
    id: "e6",
    description: "New headphones",
    amount: 2000000,
    date: new Date("2025-02-25"),
  },
  {
    id: "e7",
    description: "Gym membership renewal",
    amount: 700000,
    date: new Date("2025-03-12"),
  },
  {
    id: "e8",
    description: "Fuel for car",
    amount: 800000,
    date: new Date("2025-03-09"),
  },
  {
    id: "e9",
    description: "Netflix subscription",
    amount: 180000,
    date: new Date("2025-03-06"),
  },
  {
    id: "e10",
    description: "Office supplies",
    amount: 300000,
    date: new Date("2025-03-04"),
  },
  {
    id: "e11",
    description: "Weekend trip expenses",
    amount: 2500000,
    date: new Date("2025-02-28"),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.whiteApp,
  },
});
