import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainLayout from "@/layout/MainLayout";

import Home from "@/pages/Home";
import About from "@/pages/About";
import YouthWing from "@/pages/YouthWing";
import ProjectsEvents from "@/pages/ProjectsEvents";
import ProjectDetails from "@/pages/ProjectDetails";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="youth-wing" element={<YouthWing />} />
          <Route path="projects-&-events" element={<ProjectsEvents />} />
          <Route path="projects-&-events/:slug" element={<ProjectDetails />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
