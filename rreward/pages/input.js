import React, { useState } from "react";

const MyPage = () => {
  const [inputData, setInputData] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: inputData }),
      });

      if (response.ok) {
        // Handle success, maybe show a success message to the user
        console.log("Data sent successfully!");
      } else {
        // Handle error, maybe show an error message to the user
        console.error("Failed to send data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h1>My Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Input Data:
          <input
            type="text"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MyPage;
