import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Routes';

function App() {
  return (
    <div className='font-ubuntu'>

    <RouterProvider router={router}>
    </RouterProvider>

    </div>
  );
}

export default App;
