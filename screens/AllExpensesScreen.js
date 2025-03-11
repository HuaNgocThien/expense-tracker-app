import { StyleSheet, Text, View } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

function AllExpensesScreen() {
  return (
    <View style={styles.container}>
      <ExpensesOutput expensesPeriod="Total"  />
    </View>
  );
}

export default AllExpensesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
