import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Layout from "./layout";
import Chats from "./pages/Chats";
import Contacts from "./pages/Contacts";
import Profile from "./pages/Profile";
import ChatRoom from "./pages/Chatroom";
import { useEffect, useState } from "react";
import Login from "./pages/Auth/Login";

function App() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Useffect to query windown width.
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/chats"
          element={
            <Layout>
              <Chats />
            </Layout>
          }
        />

        <Route
          path="/chats/:roomId"
          element={
            <>
              {isMobile ? (
                <ChatRoom />
              ) : (
                <>
                  <Layout>
                    <Chats />
                  </Layout>
                  <ChatRoom />
                </>
              )}
            </>
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
