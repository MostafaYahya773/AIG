import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './App.css';
import Layout from './Component/Layout/Layout';
import Home from './Component/Home/Home';
import Projects from './Component/Projects/Projects';
import AboutUs from './Component/AboutUs/AboutUs';
import NavHomeDetails from './Component/NavHomeDetails/NavHomeDetails';
import { CallContextProvider } from './Context/Context';
import SpecailAreasDetails from './Component/SpecailAreasDetails/SpecailAreasDetails';
import ArticalDetails from './Component/ArticalDetails/ArticalDetails';
import CallUs from './Component/CallUs/CallUs';
import ProjectDetails from './Component/ProjectDetails/ProjectDetails';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import Blog from './Component/Blog/Blog';

let query = new QueryClient();

function App() {
  let result = createBrowserRouter([
    {
      path: '',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'projects', element: <Projects /> },
        { path: 'about', element: <AboutUs /> },
        { path: 'blog', element: <Blog /> },
        { path: 'ProjectDetails/:id', element: <ProjectDetails /> },
        {
          path: 'SpecailAreasDetails/:name',
          element: <SpecailAreasDetails />,
        },
        { path: 'navHomeDetails/:typear/:typeen', element: <NavHomeDetails /> },
        { path: 'articaldetalis/:id', element: <ArticalDetails /> },
        { path: 'callus', element: <CallUs /> },
      ],
    },
  ]);
  return (
    <>
      <QueryClientProvider client={query}>
        <CallContextProvider>
          <RouterProvider router={result}></RouterProvider>
          <Toaster />
        </CallContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
