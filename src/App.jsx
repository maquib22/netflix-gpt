import { createBrowserRouter } from "react-router-dom"
// import Header from "./Header"
import Login from "./components/Login"
import Browse from "./components/Browse"
import { RouterProvider } from "react-router-dom"


const App = () => {
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login />
        },
        {
            path:"/browse",
            element:<Browse />
        }
    ])
  return (
    <>
      <RouterProvider router={appRouter} />

    </>
       
  )
}

export default App