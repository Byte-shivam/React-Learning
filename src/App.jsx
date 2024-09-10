import Chai from "./chai"

function App() {

  const userName= "shivam with chai"
  return (
    <>
    <Chai />
    <h1>chai aur react with vite.. {userName}</h1>
    </>
    // here userename with {} is called evaluated expression . it means it is a js but at final outcome
  )
}

export default App
