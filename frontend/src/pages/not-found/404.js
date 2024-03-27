// import Svg from "./Svg";
import Logo from "../../assest/Logo.png"
import './not-found.css';


function PageNotFound() {
 
  return (
    <div className="banner-overral-top-section">
      <div className='container'>
        <nav class="navbar navbar-expand-lg bg-transparent fixed-top mt-2">
          <div class="container">
            <a class="navbar-brand" href="#"><img src={Logo} alt="logo" /></a>

            
          </div>
        </nav>

        {/* <div className='row '>
          <div className='col'>
            <Svg />
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default PageNotFound;
