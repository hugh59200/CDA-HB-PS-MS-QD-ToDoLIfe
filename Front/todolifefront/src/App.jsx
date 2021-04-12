import Routes from './shared/routes/Routes';
import { BrowserRouter as Router} from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

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
