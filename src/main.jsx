import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Root from "./routes/Root"
import ErrorPage from './error-page'
import Contact from './routes/Contact'
const router=createBrowserRouter([
    {
        path:"/",
        element:<Root/>,
        errorElement:<ErrorPage />
    },
    {
        path:"contacts/:contactID",
        element:<Contact />
    }
]
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
            <RouterProvider router={router}></RouterProvider>

    </React.StrictMode>
  
 

   


)
