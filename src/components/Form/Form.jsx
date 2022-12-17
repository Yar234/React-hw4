import PropTypes from 'prop-types'
import { useState } from 'react'
import { AUTHOR } from '../../constants'

import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

import styles from './Form.module.css'

export function Form({ addMessage }) {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    //todo...
    addMessage({
      author: AUTHOR.user,
      text
    })

    setText('')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={styles.wrapper}>
          <TextField fullWidth id="fullWidth"
            type='text'
            value={text}
            autoFocus
            noValidate
            autoComplete="off"
            placeholder='input message'
            onChange={(event) => setText(event.target.value)}
            size="small"
          />
          <Button className={styles.button} type='submit' size="medium"
            variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
        </div>
      </form>
    </>
  )
}

Form.propTypes = {
  addMessage: PropTypes.func
}