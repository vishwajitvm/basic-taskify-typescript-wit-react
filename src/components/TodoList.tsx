import React from 'react'
import './styles.css' ;
import { Todo } from '../model';
import SingleTodo from './SingleTodo';
import { Droppable } from 'react-beautiful-dnd';

interface props {
    todos: Todo[] ;
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>> ;
    completedTodos: Todo[]
    setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<props> = ({todos , setTodos , completedTodos , setCompletedTodos }: props) => {
  return (
    <div className="container">
      <Droppable droppableId="TodosList">
        {
          (provided, snapshot) => (
            <div className={`todos ${snapshot.isDraggingOver?"dragactive":""}`} ref={provided.innerRef} {...provided.droppableProps} > {/* DROPABLE PROPS */}
              <span className="todos__heading">
                Active Tasks
              </span>
              {
                todos.map((todo , index )=> (
                  <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} index={index} /> //todos={todos} send to delete or edit or mark complete 
                ))
              }
              { provided.placeholder }
            </div>
          )
        }
      </Droppable>

      <Droppable droppableId="TodosRemove">
        {
          (provided, snapshot) => (
            <div className={`todos remove ${snapshot.isDraggingOver?"dragcomplete":""}`} ref={provided.innerRef} {...provided.droppableProps} >
              <span className="todos__heading">
              Completed Tasks
              </span>
              {
                completedTodos.map(( todo , index) => (
                  <SingleTodo todo={todo} key={todo.id} todos={completedTodos} setTodos={setCompletedTodos} index={index} />
                ))
              }
              { provided.placeholder }
            </div>
          )
        }
      </Droppable>
    </div>
  )
}

export default TodoList
