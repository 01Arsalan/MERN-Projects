import * as React from 'react';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import TodoItem from './TodoItem';
import Form from './Form';
import Nav from './Nav';


const initialState = () => {
    const data = JSON.parse(localStorage.getItem("todos"))
    if (!data) return []
    return data
}


export default function CheckboxList() {
    const [todos, setTodos] = React.useState(() => initialState())

    React.useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    const handleToggle = (id) => {
        setTodos(todos => todos.map(todo => todo.id == id ? { ...todo, completed: !todo.completed } : { ...todo }))
    };

    const deleteTOdo = (id) => {
        setTodos(todos => todos.filter((t => t.id != id)))
    }

    return (
        <Box sx={{width:1000,display:"flex",flexDirection:"column",alignItems:"center",marginBottom:83}}>
            <Nav/>
            <Form setTodos={setTodos}/>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {todos.map((todo) => (<TodoItem todo={todo} deleteTOdo={deleteTOdo} handleToggle={() => handleToggle(todo.id)} key={todo.id} />))}
            </List>
        </Box>
    );
}
