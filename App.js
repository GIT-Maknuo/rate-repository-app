import{StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import { Input,Header } from 'react-native-elements';
import React, { useState } from 'react';
import './App.css';
import NewExpense from './src/components/NewExpenses/NewExpenses';
import Expenses from "./src/components/Expenses/Expenses";
import Logo from "./src/components/Images/Imagen";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 100011,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", 
    title: "New TV",  
    amount: 100012,     
    date: new Date(2021, 2, 12) 
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 100013,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 100013,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense =>{
    setExpenses(prevExpenses=>{
      return [expense, ...prevExpenses]
    });
  }
  

  return (
    <View style={styles.container}>
      <div className=".App">
        <img className="logo" src={Logo.img2} />
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses items={expenses} />
      </div>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#fff',
    alingItems:'center',
    justifyContent:'center',
  },
});

export default App;
