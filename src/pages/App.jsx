import { createHashRouter, RouterProvider, Link, Outlet } from 'react-router-dom';
import Home from './Home';
import Calculator from './Calculator';
import Formulas from './Formulas';
import Meals from './Meals';

const CommonHeader = () => {
  return (
    <header className='mb-7 font-bold py-3 text-[ghostwhite] bg-[limegreen] text-center shadow'>
      <h1 className='m-0 text-[32px]/[32px]'>
        <Link to='/'>Nutre</Link>
      </h1>
    </header>
  );
};

const Layout = () => {
  return (
    <>
      <CommonHeader />
      <Outlet />
    </>
  )
}

const router = createHashRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/calculadora',
        element: <Calculator />
      },
      {
        path: '/formulas',
        element: <Formulas />
      },
      {
        path: '/diario',
        element: <Meals />,
      },
    ]
  }
])

export default function App() {
  return (
    <RouterProvider router={router} />
  );
};