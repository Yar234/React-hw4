import { useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'

import { Form } from '../components/Form/Form'
import { MessageList } from '../components/MessageList/MessageList'
import { ChatList } from '../components/ChatList/ChatList'

import { AUTHOR } from '../constants'


export function ChatsPage({ onAddChat, onAddMessage, messages, chats, deleteChat }) {
  const { chatId } = useParams()

  useEffect(() => {
    if (chatId &&
      messages[chatId]?.length > 0 &&
      messages[chatId][messages[chatId].length - 1].author === AUTHOR.user
    ) {
      const timeout = setTimeout(() => {
        onAddMessage(chatId, {
          author: AUTHOR.bot,
          text: 'Im BOT'
        })
      }, 1500)

      return () => {
        clearTimeout(timeout)
      }
    }
  }, [chatId, messages])

  const handleAddMessage = (message) => {
    if (chatId) {
      onAddMessage(chatId, message)
    }
  }

  if (chatId && !messages[chatId]) {
    return <Navigate to="/chats" replace />
  }

  return (
    <>
      <ChatList chats={chats} onAddChat={onAddChat} deleteChat={deleteChat} />
      <Form addMessage={handleAddMessage} />
      <MessageList messages={chatId ? messages[chatId] : []} />
    </>
  )
}