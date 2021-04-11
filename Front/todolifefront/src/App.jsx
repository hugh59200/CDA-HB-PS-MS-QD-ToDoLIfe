import Routes from './shared/routes/Routes';
import { BrowserRouter as Router} from 'react-router-dom';
import NavBar from './shared/components/navBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes />
      </Router>
    </>
  );
}

export default App;
