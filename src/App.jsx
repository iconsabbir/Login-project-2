
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './Layout/Main'
import SignUp from './Pages/SingUp/SignUp'
import Login from './Pages/Login/Login'

function App() {
  const router = createBrowserRouter([
    {
     path:'/',
     element:<Main></Main>,
     children:[
      {
        path:"/",
        element: <SignUp></SignUp>

      },
      {
        path:"/signup",
        element:<SignUp></SignUp>
      },
      {
        path:"/login",
        element:<Login></Login>
      }
     ]
    }
  ])

  return (
    <>
     <div>
      <RouterProvider router={router}></RouterProvider>
     </div>
    </>
  )
}

export default App
