import { Route, Routes } from 'react-router-dom';
import { publicRoute } from './Routes/publicRoutes'
import Navbar from './Components/Navbar';





function App() {
  return (
    <div >
      <Navbar>
        <Routes>


          {
            publicRoute.map(
              ({ path, Component }, index) => <Route key={index} path={path} element={<Component />} />)
          }
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
