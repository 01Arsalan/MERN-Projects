import React from "react"
import TextField from "@mui/material/TextField"
import Box from "@mui/material/Box"
import InputAdornment from "@mui/material/InputAdornment"
import IconButton from '@mui/material/IconButton'
import Create from '@mui/icons-material/Create'

export default function Form({ setTodos }) {
    const [item, setItem] = React.useState('')

    function submit(e) {
        e.preventDefault()
        if (item.length < 1) return
        setTodos(todos => [...todos, { id: crypto.randomUUID(), text: item, completed: false }])
        setItem("")
    }

    return (
        <>
            <form onSubmit={(e) => submit(e)} style={{marginTop:"1rem"}}>
                <TextField id="filled-basic"
                    label="ToDo" variant="filled"
                    value={item} onChange={(e) => setItem(e.target.value)}
                    // adding delete icon in input-field
                    InputProps={{
                        endAdornment: <InputAdornment position="end" >
                            <IconButton edge="end" onClick={(e) => { submit(e) }}>
                                <Create />
                            </IconButton>
                        </InputAdornment>
                    }}
                    style={{width:360}}
                />
            </form>
        </>
    )
}