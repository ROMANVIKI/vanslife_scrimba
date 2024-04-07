import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Vans from "./components/pages/Vans";
import VanDetails from "./components/pages/VanDetails";
import Layout from "./components/Layout";

import Dashboard from "./components/host/Dashboard";
import Income from "./components/host/Income";
import Reviews from "./components/host/Reviews";

import HostLayout from "./components/HostLayout";
import HostVans from "./components/pages/HostVans";
import HostVanDetail from "./components/pages/HostVanDetail";
import HostVanPrice from "./components/pages/HostVanPrice";
import HostVanPhotos from "./components/pages/HostVanPhotos";
import HostVanInfo from "./components/pages/HostVanInfo";
import NotFound from "./components/pages/NotFound";
import Login from "./components/pages/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="van/:id" element={<VanDetails />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="van/:id" element={<HostVanDetail />} >
              <Route index element={<HostVanInfo />}/>
              <Route path="pricing" element={<HostVanPrice />}/>
              <Route path="photos" element={<HostVanPhotos />}/>
            </Route>
          </Route>
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
