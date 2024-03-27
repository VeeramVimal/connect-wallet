import { FaAngleDoubleRight } from 'react-icons/fa';
import '../App.css';

function App() {


  return (
    <div >

        <nav class="navbar navbar-expand-lg bg-transparent fixed-top">
          <div class="container">
            <a class="navbar-brand" href="#"><img src="https://d-ecosystem.io/static/media/main-logo.092fbffad51cd5a5ce9b.png" alt="logo" /></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a type="button" href='/dashboard' class="navbar-connect-wallet">Connect Wallet <FaAngleDoubleRight className='mb-1 ms-1 fs-15' /></a>
                </li>
              </ul>
            </div>
          </div>
        </nav>


    </div>
  );
}

export default App;
