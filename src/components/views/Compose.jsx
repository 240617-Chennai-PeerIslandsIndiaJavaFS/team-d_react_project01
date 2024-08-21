import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './GeneralStyles.css';

const Compose = () => {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/messages/receiver/1');
        setMessages(response.data.data);
      } catch (err) {
        setError('Error fetching messages');
        console.error(err);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div className="message-container message-mt-2">
      <h2 className="message-text-center message-mb-2">Messages</h2>
      {error && <div className="message-alert message-alert-danger">{error}</div>}
      <ul className="message-list">
        {messages.map((message) => (
          <li key={message.messageId} className="message-list-item">
            {message.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Compose;
