import React, { useState, useEffect } from 'react';

function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/message') // Assuming Flask API endpoint
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.log(error));
  }, []);from flask import Flask

  app = Flask(__name__)

  @app.route('/')
  def index():
      return 'Hello, Flask!'

  if __name__ == '__main__':
      app.run(debug=True)


  return (
    <div>
      <h1>Hello, Next.js!</h1>
      <p>Message from Flask: {message}</p>
    </div>
  );
}

export default Home;

