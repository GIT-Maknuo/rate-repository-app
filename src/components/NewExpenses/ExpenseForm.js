import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //state por separdo
  const [enteredTitle, setTitle] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [enteredDate, setDate] = useState("");

  //state concentrado
  /*const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });*/

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
/*      setUserInput({
      ...userInput,
      enteredTitle: event.target.value, 
    }); */
  }; 

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
/*     setUserInput({
      ...userInput,
      enteredAmount: event.target.value,
    }); */
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
/*     setUserInput({
      ...userInput,
      enteredDate: event.target.value,
    }); */
  };

  const submitHandler = (event) =>{
    event.preventDefault();

    const expenseData = {
        title: enteredTitle,
        amount : enteredAmount,
        date: new Date(enteredDate)
    };

    props.onSaveExpenseData(expenseData);
    setTitle('');
    setAmount('');
    setDate('');
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
      <div className="new-expense__control">
          <label>Folio</label>
          <input
            value={enteredAmount}
            type="text" 
           // type="number"
           // min="0.01"
           // step="0.01"
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Fecha</label>
          <input
            value={enteredDate}
            type="date"
            min="2019-01-01"
            max="2023-03-23"
            onChange={dateChangeHandler}
          />
        </div>
        
        <div className="new-expense__control">
          <label>POS</label>
          <input 
            value={enteredTitle}
            type="text" 
            onChange={titleChangeHandler} 
        />
        </div>
      </div>
      <div className="new-expense__actions2">
          <button >Escanear</button>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Completar</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
