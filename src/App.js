import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import './App.css';
import RootLayout from './components/RootLayout';
import Home from './components/home/Home';
import Register from './components/register/Register';
import Login from './components/login/Login';
import AdminProfile from './components/admin-profile/AdminProfile';
import UserProfile from './components/user-profile/UserProfile'

function App() {


  const browserRouterObj=createBrowserRouter([
    {
      path:'/',
      element:<RootLayout />,
      children:[
        {
          path:'/',
          element:<Home />
        },
        {
          path:'register',
          element:<Register />
        },
        {
          path:'login',
          element:<Login />
        },
        {
          path:'admin-profile',
          element:<AdminProfile />
        },
        {
          path:'user-profile',
          element:<UserProfile />
        }
      ]
    }
  ])


  return (
    <div>
      <RouterProvider router={browserRouterObj} />
    </div>
  );
}

export default App;
