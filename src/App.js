import './App.css';
import {
  Route,
  Routes,
  BrowserRouter,
  Navigate,
} from 'react-router-dom';
import Splash from './pages/splash';
import HomePage from './pages/homePage';
import DetailsPage from './pages/detailsPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route
            path="*"
            element={<Navigate to="/" />}
          />
          <Route path="/home" element={<HomePage />} />
          <Route path="/details" element={<DetailsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
