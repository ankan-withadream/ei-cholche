import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Layout from "./layout";
import Chats from "./pages/Chats";
import Contacts from "./pages/Contacts";
import Profile from "./pages/Profile";


function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/chats"
          element={
            <Layout>
              <Chats />
            </Layout>
          }
        />

        <Route
          path="/contacts"
          element={
            <Layout>
              <Contacts />
            </Layout>
          }
        />

        <Route
          path="/profile"
          element={
            <Layout>
              <Profile />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
