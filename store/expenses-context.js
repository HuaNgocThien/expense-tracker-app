import { createContext, useReducer } from "react";

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
  {
    id: "e12",
    description: "Lunch with colleagues",
    amount: 400000,
    date: new Date("2025-03-18"),
  },
  {
    id: "e13",
    description: "Taxi fare",
    amount: 150000,
    date: new Date("2025-03-19"),
  },
  {
    id: "e14",
    description: "Grocery restock",
    amount: 600000,
    date: new Date("2025-03-20"),
  },
  {
    id: "e15",
    description: "Movie tickets",
    amount: 250000,
    date: new Date("2025-03-21"),
  },
  {
    id: "e16",
    description: "Coffee with friends",
    amount: 120000,
    date: new Date("2025-03-22"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expensesData) {
    dispatch({ type: "ADD", payload: expensesData });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expensesData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expensesData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
