import { BrowserRouter as Router} from 'react-router-dom';




import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

import Routes from './routes/Routes';
import NavBar from './components/navBar/NavBar'


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
