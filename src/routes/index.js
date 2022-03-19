import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';
import Dashboard from '../views/Dashboard';
import FourOFour from '../views/Error/404';
import Tasks from '../views/Tasks';

export default function RoutesApplication() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Dashboard />} exact />
        <Route path="/mytask" element={<Tasks />} />
        <Route element={<FourOFour />} />
      </Routes>
    </Router>
  );
}
