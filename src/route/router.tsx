import RootLayout from "@/layout/root";
import Error from "@/pages/404";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Faq from "@/pages/faq";
import Home from "@/pages/home";
import HomeOneSingle from "@/pages/home-one-single";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/home-one-single",
                element: <HomeOneSingle />
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/faq',
                element:<Faq/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/404',
                element:<Error/>
            },
        ]
    },
    {
        path:'*',
        element:<Error/>
    },
])