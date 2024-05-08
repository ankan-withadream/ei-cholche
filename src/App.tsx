import "./App.css";

import Layout from "./layout";
import Chats from "./pages/Chats";
import Contacts from "./pages/Contacts";
import Profile from "./pages/Profile";

function App() {
  return (
    <Layout>
      <Contacts />
    </Layout>
  );
}

export default App;
