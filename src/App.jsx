import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Pnf from "./pages/Pnf";
import AllSpots from "./pages/AllSpots";
import ViewSpot from "./pages/ViewSpot";
import AddStory from "./pages/AddStory";
import AllStories from "./pages/AllStories";
import Profile from "./pages/Profile";
import AddReview from "./pages/AddReview";
import AllReviews from "./pages/AllReviews";


import AdminHome from "./admin/pages-admin/AdminHome";
import AdminAddSpot from "./admin/pages-admin/AdminAddSpot";
import AdminManageSpots from "./admin/pages-admin/AdminManageSpots";
import AdminApproveStories from "./admin/pages-admin/AdminApproveStories";
import Feedbacks from "./admin/pages-admin/Feedbacks";
import AllUsers from "./admin/pages-admin/AllUsers";



import Footer from "./components/Footer";

function App() {
  const location = useLocation();

  // Pages where footer should NOT appear
  const hideFooterRoutes = ["/","/login","register"];

  const shouldHideFooter = hideFooterRoutes.includes(location.pathname);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/allspots" element={<AllSpots />} />
        <Route path="/viewspot" element={<ViewSpot />} />
        <Route path="/addstory" element={<AddStory />} />
        <Route path="/allstories" element={<AllStories />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/add/review" element={<AddReview />} />
        <Route path="/allreviews" element={<AllReviews />} />

        {/* ADMIN ROUTES */}
        <Route path="/admin/home" element={<AdminHome />} />
        <Route path="/admin/addspot" element={<AdminAddSpot />} />
        <Route path="/admin/managespot" element={<AdminManageSpots />} />
        <Route path="/admin/approve/stories" element={<AdminApproveStories />} />
        <Route path="/admin/feedbacks" element={<Feedbacks />} />
        <Route path="/admin/allusers" element={<AllUsers />} />
        

        <Route path="/*" element={<Pnf />} />
      </Routes>

      {/* FOOTER CONDITION */}
      {!shouldHideFooter && <Footer />}
    </>
  );
}

export default App;
