import './App.css';
import {
  Route,
  Routes,
  BrowserRouter,
} from 'react-router-dom';
import Splash from './pages/splash';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Splash />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
