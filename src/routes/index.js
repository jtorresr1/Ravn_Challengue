import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';
import Dashboard from '../views/Dashboard';
import FourOFour from '../views/Error/404';

export default function RoutesApplication() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Dashboard />} exact />
        <Route element={<FourOFour />} />
      </Routes>
    </Router>
  );
}
