import { createBrowserRouter } from "react-router-dom";

// browser router file
const router = createBrowserRouter([
    {
        path: "/",
        element: "Hello World!"
    },
    {
        path: "*",
        element: "404 Not Found"
    }
])

export default router;