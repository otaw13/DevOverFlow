import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./assets/css/index.css";
import HomePage from "./pages/HomePage/HomePage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import path from "path";
import QuestionsAndAns from "./pages/QuestionsPage/QuestionsAndAns.tsx";
import ErrorElement from "./atoms/ErrorElem.tsx";

const router = createBrowserRouter([{
  path: '/',
  element:<HomePage imgSource={""}/>,
  errorElement: <ErrorElement/>
},
{
  path:'/QuestionsAndAns',
  element: <QuestionsAndAns imgSource={""}/>
}]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
