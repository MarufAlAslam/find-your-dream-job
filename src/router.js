import { createBrowserRouter } from "react-router-dom";
import Main from "./pages/main/Main";
import Home from "./pages/home/Home";
import JobDetails from "./components/jobDetails/JobDetails";
import AppliedJobs from "./pages/appliedJobs/AppliedJobs";
import Statistics from "./pages/statistics/Statistics";

// browser router file
const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch("./data.json").then(res => res.json())
            },
            {
                path: "/job-details",
                element: <JobDetails />,
            },
            {
                path: "/applied",
                element: <AppliedJobs />
            },
            {
                path: "/statistics",
                element: <Statistics />
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