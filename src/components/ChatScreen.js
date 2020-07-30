import React, { useState } from 'react'
import './ChatScreen.css'
import Avatar from '@material-ui/core/Avatar'

const ChatScreen = () => {
    const [input, setInput] = useState('')
    
    const [messages, setMessages] = useState([
    {
        name: "Sarah",
        image:
          "data:image/jpeg;base64,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",
        message: "Whats up ♥  ",
      },
      {
        name: "Ellen",
        image:
          "data:image/jpeg;base64,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",
        message: "What is going   ",
      },
      {
        message: "How are you dear",
      },
    ])

    const handleSend = (e) => {
      e.preventDefault()

      setMessages([...messages, {message:input}])
      setInput('')
    }

    return (
        <div className="chatScreen">
            <p className="chatScreen__timeStamp">You have been matched</p>
            {messages.map(message => (
              message.name ? 
              (
                <div className="chatScreen__message">
                <Avatar src={message.image} />
                <p className="chatScreen__text">{message.message}</p>
                </div>
              )
              :
              (
               <div className="chatScreen__message">
                  <p className= "chatScreen__textUser">{message.message}</p>
               </div> 
              )
            ))}
              <form className="chatScreen__input">
                <input className="chatScreen__inputField"
                  value={input}
                  onChange={e => setInput(e.target.value)}    
                  placeholder="Type a message..." 
                  type="text"/>
                <button onClick={handleSend} type="submit" className="chatScreen__inputButton">Send</button>
              </form>
        </div>
    )
}

export default ChatScreen
