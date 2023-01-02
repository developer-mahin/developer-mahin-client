import { createBrowserRouter } from "react-router-dom";
import SingleProductDetails from "../components/SingleProductDetails";
import Main from "../Layout/Main";
import Blogs from "../Pages/BLog/Blogs";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import About from "../Pages/Home/About";
import Contact from "../Pages/Home/Contact";
import Home from "../Pages/Home/Home";
import Projects from "../Pages/Home/Projects";
import Services from "../Pages/Home/Services";
import Skills from "../Pages/Home/Skills";
import ProjectsDetails from "../Pages/ProjectsDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/home",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/skills",
                element: <Skills></Skills>
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/services",
                element: <Services></Services>
            },
            {
                path: "/projects",
                element: <Projects></Projects>
            },
            {
                path: "/projects_details/:category_name",
                element: <ProjectsDetails></ProjectsDetails>,
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/category/${params.category_name}`)
                }
            },
            {
                path: "/details/:id",
                element: <SingleProductDetails></SingleProductDetails>,
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/details/${params.id}`)
                }
            }
        ]
    }
])

export default router