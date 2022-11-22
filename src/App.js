import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2019, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2019, 12, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2019, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2019, 5, 12),
  },
  {
    id: "e5",
    title: "water",
    amount: 18.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e6", title: "bad", amount: 543.49, date: new Date(2020, 4, 12) },
  {
    id: "e7",
    title: "wv golf 4",
    amount: 794.67,
    date: new Date(2020, 2, 28),
  },
  {
    id: "e8",
    title: "music exp",
    amount: 80,
    date: new Date(2020, 5, 12),
  },
  {
    id: "e9",
    title: "mom suprise",
    amount: 280.12,
    date: new Date(2021, 7, 14),
  },
  { id: "e10", title: "computer", amount: 699.49, date: new Date(2021, 2, 12) },
  {
    id: "e11",
    title: "A book",
    amount: 54.67,
    date: new Date(2021, 8, 28),
  },
  {
    id: "e12",
    title: "Games",
    amount: 150,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e13",
    title: "A jacket",
    amount: 117.12,
    date: new Date(2022, 7, 14),
  },
  { id: "e14", title: "Coffe", amount: 21.49, date: new Date(2022, 2, 12) },
  {
    id: "e15",
    title: "School supplies",
    amount: 180.67,
    date: new Date(2022, 9, 28),
  },
  {
    id: "e16",
    title: "Sneacers",
    amount: 250,
    date: new Date(2022, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
