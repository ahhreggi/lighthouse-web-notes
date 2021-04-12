import React from "react" // in newer versions of React, we don't need this

export default function TodoListItem(props) {
  // const {description, completed, deadline} = props;

  const bgColor = props.completed ? "green" : "red"
  const parsedDate = new Date(props.deadline)
  return (
    <li style={{ backgroundColor: bgColor }}>
      <h1>
        <h2>{props.description}</h2>
        <h2>{parsedDate.toDateString()}</h2>
      </h1>
    </li>
  )
}