import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "../components/Home";
import Analyzer from "../components/Analyzer";

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
    ])
    return <RouterProvider router={appRouter} />
}

export default AppRouting;