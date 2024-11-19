import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./assets/css/index.css";
import HomePage from "./pages/HomePage/HomePage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import path from "path";
import QuestionsAndAns from "./pages/QuestionsPage/QuestionsAndAns.tsx";
import ErrorElement from "./atoms/ErrorElem.tsx";
import Pfp from "./assets/svg/Profile-Pic-S.svg";
import  Profile from "./templates/Profile.tsx";


const router = createBrowserRouter([{
  path: '/',
  element:<HomePage imgSource={Pfp}/>,
  errorElement: <ErrorElement/>
},
{
  path:'/QuestionsAndAns',
  element: <QuestionsAndAns imgSource={Pfp}/>
},
{
  path:'/Profile',
  element:<Profile imgSource={Pfp}/>
}]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
