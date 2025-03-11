import { StyleSheet, Text, View } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

function RecentScreen() {
  return (
    <View style={styles.container}>
      <ExpensesOutput expensesPeriod="Last 7 days" />
    </View>
  );
}

export default RecentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
