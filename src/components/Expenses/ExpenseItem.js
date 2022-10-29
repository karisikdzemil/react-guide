import React, {useState} from "react";
import "./ExpenseItem.css";
import Card from "../UI/Card"
import ExpenseDate from "./ExpenseDate";
const ExpenseItem = (props) => {

  const [title, setTitle] = useState(props.title)
  const ClickHandler = () => {
    setTitle("Updated")
    title = props.title
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={ClickHandler}>change title</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
