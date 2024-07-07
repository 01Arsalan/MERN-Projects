import './App.css'
import React, { useReducer, useState } from 'react';
import useLogger from './Hooks/customHook1';

const ACTIONS = {
  ADD_TODO: 'add-todo',
  REMOVE_TODO: 'remove-todo',
  COMPLETED_TODO: 'completed-todo'
}

const initialTodos = []

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...state, newToDO(action.payload.name)]
    case ACTIONS.COMPLETED_TODO:
      return state.map(todo=>{
        if(todo.id==action.payload.id){
          return {...todo, completed: !todo.completed}
        }
        return todo
      })
    case ACTIONS.REMOVE_TODO:
      return state.filter(todo=>{
        if(todo.id!=action.payload.id){
          return todo
        }
        return
      })
    default:
      console.log("default")
  }
};

function App() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);
  const [name, setName] = useState("")



  function handleSubmit(e) {
    e.preventDefault()
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name } })
    setName("")
  }

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button>Submit</button>
      </form>
      {todos.map((todo) => {
        return ToDO(todo ,dispatch)
      })}
    </>
  );
}





function ToDO(item,dispatch) {
  return (
    <div key={item.id}>
      <span style={{color: item.completed ? "green" : "red"}}>{item.name}</span>
      <button onClick={()=>dispatch({type:ACTIONS.COMPLETED_TODO, payload:{id:item.id}})}>Toggle</button>
      <button onClick={()=>dispatch({type:ACTIONS.REMOVE_TODO, payload:{id:item.id}})}>Delete</button>
    </div>
  )
}
function newToDO(name) {
  return { id: Date.now(), name, completed: false }
}



export default App;

