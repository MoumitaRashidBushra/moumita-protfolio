import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home/Home";
import Skill from "../Page/Home/Skill/Skill";
import Services from "../Page/Home/Services/Services";
import Contact from "../Page/Home/Contact/Contact";
import About from "../Page/Home/About/About";
import Projects from "../Page/Home/Projects/Projects";
import ErrorPage from "../Page/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/",
                element: <About></About>,
            },
            {
                path: "#skill",
                element: <Skill></Skill>,
            },
            {
                path: "/",
                element: <Services></Services>,
            },
            {
                path: "/",
                element: <Projects></Projects>,
            },
            {
                path: "/",
                element: <Contact></Contact>,
            },
        ],
    },

]);


export default router;