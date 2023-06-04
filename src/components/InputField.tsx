import React, { useRef } from 'react'
import './styles.css' ;

interface props{
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e: React.FormEvent) => void; //this function is not gona return anything
}

// const InputField = ({ todo , setTodo }:props) => {
   const InputField: React.FC<props> = ({ todo , setTodo , handleAdd }) => {
    const inputRef = useRef<HTMLFormElement>(null)
  return (
    <form className='input' onSubmit={(e) => { handleAdd(e); inputRef.current?.blur() } }>
      <input type="text" placeholder='Enter a task' className='input__box' value={todo} onChange={ (e) => setTodo(e.target.value) } />
      <button type='submit' className='input_submit'>Go</button>
    </form>
  )
}

export default InputField
