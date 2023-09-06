import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./routes/ErrorPage";
import HomePage from "./routes/HomePage";
import LoginPage from "./routes/LoginPage";
import RegisterPage from "./routes/RegisterPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/login",
        element: <LoginPage />
      },
      {
        path: "/register",
        element: <RegisterPage />
      }
    ]
  }
])

export default router