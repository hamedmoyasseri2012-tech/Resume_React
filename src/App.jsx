import Header from "./assets/Component/Header";
import Home from "./Pages/Home";
import { useState } from "react";

const App = () => {
  const [form, setForm] = useState({
    picture: null,
    name: "",
    summary: "",
    workProfile: "",
    address: "",
    phone: "",
    email: "",
    skills: "",
    education: [{ title: "", description: "" }],
    projectsEnabled: true,
    projects: [{ title: "", description: "" }],
    experienceEnabled: true,
    experiences: [{ title: "", description: "" }],
    awardsEnabled: true,
    awards: "",
  });
  return (
    <div>
      <Header />
      <Home />
    </div>
  );
};

export default App;
