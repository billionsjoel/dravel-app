import './App.css';
import {
  Route,
  Routes,
  BrowserRouter,
  Navigate,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Splash from './pages/splash';
import HomePage from './pages/homePage';
import DetailsPage from './pages/detailsPage';
import AddPage from './pages/addPage';
import DeletePage from './pages/deletePage';
import ReservationPage from './pages/reservation';
/* eslint-disable */

function App() {
  const isUser = useSelector((state) => state.dravelReducer.user);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="*"
            element={<Navigate to="/" />}
          />
          {
            !isUser.length > 0 ?

            <Route path="/" element={<Splash />} />

              :
              <>
              <Route path="/" element={<HomePage />} />
              <Route path="/details" element={<DetailsPage />} />
              <Route path="/reservation" element={<ReservationPage />} />
              <Route path="/add" element={<AddPage />} />
              <Route path="/delete" element={<DeletePage />} />
              </>
        }
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
