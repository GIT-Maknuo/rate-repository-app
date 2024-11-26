import React  from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  /* const expenseDate = new Date(2023, 3, 28);
    const expenseTitle  = 'Seguro Automotriz';
    const expenseAmount =  13000;*/

  /* const day = props.date.toLocaleString('en-US', {day:'2-digit'})
    const month = props.date.toLocaleString('es-ES', {month:'long'})
    const year = props.date.getFullYear();*/


  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      {/* <button>Change title </button> */}
    </Card>
  );
};

export default ExpenseItem;
