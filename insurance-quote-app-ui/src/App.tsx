import './App.css';
import NavBar from './common-elements/NavBar';
import InsuranceProductList from './insurance-products/InsuranceProductList';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import StepperPage from './stepper-component/stepper-page';

function App() {
  return (
    <div >
      <Router>
      <NavBar></NavBar>
      <div className='body'>
        <Routes>
          <Route path="/" element={<InsuranceProductList />} />
          <Route path="/info/:vehicle" element={<StepperPage />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
