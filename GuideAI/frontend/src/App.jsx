import { useState } from "react";

import "./App.css";

import AuthPage from "./AuthPage";// import autherntication page
import ChatsPage from "./ChatsPage";
function App() {
  const [user, setUser] = useState(undefined);//if user not authenticated lead to authentication page

  if (!user) { // if user is authenticate guide to chartspage and pass that data in
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
}

export default App;

