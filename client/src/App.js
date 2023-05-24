import React, { useEffect, useState } from "react";
import "./App.css";
import AppLayout from "./UI/landing-page/Layout";

function App() {
  const [users, setUsers] = useState([]);

  return (
    <AppLayout className="App">
      <h1>Welcome</h1>
    </AppLayout>
  );
}

export default App;
