import React from "react" // in newer versions of React, we don't need this
import "./TodoListItem.css"

export default function TodoListItem(props) {
  // const {description, completed, deadline} = props;

  // const bgColor = props.completed ? "green" : "red"
  const parsedDate = new Date(props.deadline)
  // const line = props.completed ? "line-through" : "";
  return (
    <li>
      {props.description &&
      <>
        <h1 className={`todo ${props.completed ? 'completed' : ''}`}>{props.description}</h1>
        <h2>{parsedDate.toDateString()}</h2>
      </>
      }
      {!props.description && <h1>INVALID DESCRIPTION ARRR</h1>}
    </li>
  )
}