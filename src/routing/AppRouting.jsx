import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "../components/Home";
import Analyzer from "../components/Analyzer";
import Feedback from "../components/Feedback";

const AppRouting = () =>{
    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/analyzer',
            element: <Analyzer />
        },
        {
            path: '/feedback',
            element: <Feedback />
        }
    ])
    return <RouterProvider router={appRouter} />
}

export default AppRouting;