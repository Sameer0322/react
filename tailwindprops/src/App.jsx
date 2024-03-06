import './App.css'
import Card from './components/Card'
function App() {
  // let myObj={
  //   username: "Sameer",
  //   age: 21
  // }
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
      <Card username='chaiaurcode' btnText="click me"></Card>
      <Card username="Sameer" btnText="visit me"></Card>
    </>
  ) 
}

export default App
