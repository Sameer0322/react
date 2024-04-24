import './App.css'
import UserContexrProvider from './context/UserContexrProvider'
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  

  return (
    <UserContexrProvider>
      <h1>React with Me</h1>
      <Login />
      <Profile />
    </UserContexrProvider>
    
  )
}

export default App
