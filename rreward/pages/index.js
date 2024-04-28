import React, { useState, useEffect } from "react";
import Link from "next/link";

const Home = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/hello")
      .then((response) => response.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div>
      <h1> next chl rhi hai </h1>
      <h1>{message}</h1>
      <Link href="/input">INPUT</Link>
    </div>
  );
};

export default Home;


//output.js
