import { FlatList, Text, View } from "react-native";

function renderExpenseItem(itemData) {
  return (
    <View>
      <Text>{itemData.item.description}</Text>
    </View>
  );
}

function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
}

export default ExpensesList;
