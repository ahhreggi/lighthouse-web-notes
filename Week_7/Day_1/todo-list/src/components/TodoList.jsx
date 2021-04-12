import React from "react" // in newer versions of React, we don't need this
import TodoListItem from "./TodoListItem"

// 1: {
//   id: 1,
//   description: "Read for a billion seconds",
//   deadline: "2021-04-12T14:53:51.703Z",
//   completed: false
// }


export default function TodoList(props) {
  // Everything in todo is given as prop to TodoListItem
  // Include a unique key prop so React can differentiate between items => efficiency/speed => if one gets updated, only that one will be updated
  const parsedTodoListItems = Object.values(props.todoListData).map(todo => <TodoListItem key={todo.id} {...todo} />)
  return (
    <section>
      <h1>I am todo list with {props.potatoes} potatoes</h1>
      <ul>
        {parsedTodoListItems}
      </ul>
    </section>
  )
}