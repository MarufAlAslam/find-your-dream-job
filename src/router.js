import { createBrowserRouter } from "react-router-dom";
import Main from "./pages/main/Main";

// browser router file
const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children: [
            {
                path: "/",
                element: "Homepage"
            },
            {
                path: "*",
                element: "404 Not Found"
            }
        ]
    },
    {
        path: "*",
        element: "404 Not Found"
    }
])

export default router;