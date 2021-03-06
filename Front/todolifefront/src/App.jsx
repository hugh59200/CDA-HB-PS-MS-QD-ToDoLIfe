import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import "react-toastify/dist/ReactToastify.css"
import '../src/assets/css/footer/footer.css'

import Footer from './components/footer/Footer';
import NavBar from './components/navBar/NavBar'
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/Routes';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes />
      </Router>

      {/* <MDBModalFooter /> */}

      <Footer/>
      
    </>
  );
}

export default App;
