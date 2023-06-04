import React from 'react'
import './styles.css' ;
import { Todo } from '../model'
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";

type Props = {
    todo: Todo ;
    todos:Todo[] ;
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>> ;
}

const SingleTodo = ({ todo , todos , setTodos }: Props) => {
    //HANDEL MARK AS DONE 
    const handeleDone = (id: number) => {
        setTodos(todos.map(
            (todo) => todo.id === id?{ ...todo,isDone: !todo.isDone }:todo)) 
    }
  return (
    <form className='todos__single' >
        {
            todo.isDone? (
                <s className='todos__single--text'> { todo.todo } </s>
            ):(
                <span className='todos__single--text'> { todo.todo } </span>
            )
        }
      {/* <span className='todos__single--text'> { todo.todo } </span> */}
      <div>
      <span className='icon'> <AiFillEdit /> </span>
      <span className='icon'> <AiFillDelete /> </span>
      <span className='icon' onClick={() => handeleDone(todo.id)} > <MdDone /> </span>
      </div>
    </form>
  )
}

export default SingleTodo
