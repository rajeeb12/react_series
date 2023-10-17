import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  return (
    <UserContextProvider>
      <h1>React using context</h1>
      <Login />
      <Profile />
      <div>Hi</div>
    </UserContextProvider>
  )
}

export default App;
