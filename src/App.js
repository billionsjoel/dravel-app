import './App.css';
import {
  Route,
  Routes,
  BrowserRouter,
  Navigate
} from 'react-router-dom';
import Splash from './pages/splash';

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
