import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // Import your Footer component
import Home from "./pages/Home";
import Courses from "./pages/Courses/Courses";
import Order from "./pages/Order";
import About from "./pages/About";
import Blog from "./pages/Blog";
import ContactUs from "./pages/ContactUs";
import CourseDetails from "./pages/Courses/CourseDetails";
import CourseContent from "./pages/Courses/CourseContent";
import MyFullYearCouese from "./pages/Courses/MyFullYearCouese";
import SKProgram from "./pages/Courses/SKProgram";
import KindergardenProgram from "./pages/Courses/KindergardenProgram";
import WeeklyContentVideos from "./pages/Courses/WeeklyContentVideos";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Courses />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course-details/:desc" element={<CourseDetails />} />
        <Route path="/course-content/:partName" element={<CourseContent />} />
        <Route
          path="/my-full-year-french-course"
          element={<MyFullYearCouese />}
        />
        <Route path="/order" element={<Courses />} />
        <Route path="/weekly-videos" element={<WeeklyContentVideos />} />
        <Route path="/sk-program" element={<SKProgram />} />
        <Route path="/kindergarden-program" element={<KindergardenProgram />} />
        <Route path="/about" element={<Courses />} />
        <Route path="/blog" element={<Courses />} />
        <Route path="/contact" element={<Courses />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
