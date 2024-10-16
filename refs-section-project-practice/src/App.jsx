import React from "react"
import { useState } from "react"
 
import ProjectsSidebar from "./components/Projects-sidebar";
import StartingUserInterface from "./components/Starting-user-interface";
import NewProjectForm from "./components/New-project-form";

function App() {

  const projectList = []

  const [newProject, setNewProject] = useState(false) 

  const handleChange = () => {
    setNewProject(true)
  }

  return (
    <main className=" w-[100%] h-[100vh] flex justify-between ">
      <ProjectsSidebar projects={projectList} addNewProject={handleChange} />
       {newProject ? <NewProjectForm /> : <StartingUserInterface createNewProject={handleChange} /> } 
    </main>
  );
}

export default App;
