/* eslint-disable no-unused-vars */
import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from "react-router-dom"
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import Jobs from "./pages/JobsPage";
import JobPage, { jobLoader } from "./pages/JobPage";
import AddJobsPage from "./pages/AddJobsPage";
import NotFound from "./pages/NotFound"
import EditJob from "./pages/EditJob";



const App = () => {

  const addJob = async (newJob) => {
    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });
    return;
  }

  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    });
    return;
  }


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout/>} >
    <Route index element={<HomePage/>} />
    <Route path="/jobs" element = {<Jobs/>}/>
    <Route path="/jobs/edit/:id" element = {<EditJob updateJobSubmit={updateJob}/>} loader={jobLoader}/> 
    <Route path="/jobs/:id" element = {<JobPage deleteJob={deleteJob}/>} loader={jobLoader}/> 
    <Route path = "addjobspage" element = {<AddJobsPage addJobSubmit={addJob}/>}/>

    <Route path="*" element={<NotFound/>}/>
    </Route>
  )
)


  return (
    <RouterProvider router={router}/> 
  )
}

export default App