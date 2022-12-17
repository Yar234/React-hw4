import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';

import { useState } from "react";
import { Link } from "react-router-dom";
import { nanoid } from 'nanoid';

import styles from './ChatList.module.css'

export function ChatList({ onAddChat, chats, deleteChat }) {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onAddChat({
      id: nanoid(),
      name: value
    })

    setValue('')
  }



  return (
    <>
      <ul>
        {chats.map((chat) => (
          <li key={chat.id}>
            <Link to={`/chats/${chat.name}`}>
              {chat.name}<IconButton type='submit' onClick={() => deleteChat} aria-label="delete" size="small">
                <DeleteIcon fontSize="inherit" />
              </IconButton>
            </Link>
          </li>
        ))}
      </ul>

      <h1>ChatList</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.wrapper}>
          <TextField fullWidth id="fullWidth"
            type='text'
            value={value}
            autoFocus
            noValidate
            autoComplete="off"
            placeholder='input chat'
            onChange={handleChange}
            size="small"
          />
          <Button className={styles.button} type='submit' size="medium"
            variant="contained">
            Create Chat
          </Button>
        </div>
      </form>
    </>
  )
}