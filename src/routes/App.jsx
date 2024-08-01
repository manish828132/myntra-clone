import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Spinner from "../components/Spinner"
import { useSelector } from "react-redux"
import DataFetch from "../components/DataFetch"



function App() {
  const {fetchDone}=useSelector((state)=>{return state.fetchStatus})

  console.log(fetchDone)

  return (
    <>
  <Header></Header>
  <DataFetch/>
  
  {(fetchDone)?<Outlet></Outlet>:<Spinner></Spinner>}
   
  

  <Footer></Footer>
    </>
  )
}

export default App
