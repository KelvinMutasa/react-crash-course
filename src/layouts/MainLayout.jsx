import { Outlet } from "react-router-dom"
import Nav from "../components/Nav"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

const MainLayout = () => {
  return (
    <>
      <Nav/>
      <Outlet/>
      <ToastContainer/>
    </>
  )
}

export default MainLayout