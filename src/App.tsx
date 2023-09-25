import './App.css';
import Home from './Home';
import VehiclesList from './VehiclesList';
import ImagesList from './ImagesList';
import CheckoutForm from './CheckoutForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vehicles" element={<VehiclesList />} />
      <Route path="/images" element={<ImagesList />} />
      <Route path="/checkout" element={<CheckoutForm />} />
    </Routes>
  </Router>
  );
}

export default App;