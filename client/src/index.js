import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Homepage from './components/Homepage';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Stars from './components/Stars';
import Music from './components/Music';
import GuidedMeditation from './components/GuidedMeditation';
import Breathwork from './components/Breathwork';
import SacredGeometry from './components/SacredGeometry';
import StorySharing from './components/StorySharing';
import AboutUs from './components/AboutUs';
import Header from './components/Header';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/stars",
        element: <Stars />,
      },
      {
        path: "/music",
        element: <Music />,
      },
      {
        path: "/guided-meditation",
        element: <GuidedMeditation />,
      },
      {
        path: "/breathwork",
        element: <Breathwork />,
      },
      {
        path: "/sacred-geometry",
        element: <SacredGeometry />,
      }, {
        path: "/story-sharing",
        element: <StorySharing />,
      }, {
        path: "/about-us",
        element: <AboutUs />,
      }]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
