import React from 'react'
import './styles.css' ;
import { Todo } from '../model';
import SingleTodo from './SingleTodo';

interface props {
    todos: Todo[] ;
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>> ;
}

const TodoList: React.FC<props> = ({todos , setTodos}: props) => {
  return (
    <div className="container">
      <div className="todos">
        <span className="todos__heading">
          Active Tasks
        </span>
        {
          todos.map(todo => (
            <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} /> //todos={todos} send to delete or edit or mark complete 
          ))
        }
      </div>

      <div className="todos remove">
      <span className="todos__heading">
          Completed Tasks
        </span>
        {
          todos.map(todo => (
            <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} /> //todos={todos} send to delete or edit or mark complete 
          ))
        }
      </div>
    </div>
  )
}

export default TodoList
