import React from "react";

const Home = ({ onLogout }) => {
  return (
    <div>
      <h2>Home</h2>
      <p>Welcome to the home page!</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Home;
