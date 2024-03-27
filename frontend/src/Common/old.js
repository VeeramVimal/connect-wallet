import { FaAngleDoubleRight } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import $ from "jquery";
import Svg from "../Svg"


import './App.css';
import { useEffect } from 'react';

function App() {


  return (
    <div className="banner-overral-top-section">
      <div className='container'>
        {/* <div class="container-ballon-section">
          <div class="balloon"></div>
          <div class="balloon"></div>
          <div class="balloon"></div>
        </div> */}
        <div className='row banner-overral-top-row-height'>
          <div className='col'>
            <nav class="navbar navbar-expand-lg bg-transparent fixed-top">
              <div class="container">
                <a class="navbar-brand" href="#"><img src="https://d-ecosystem.io/static/media/main-logo.092fbffad51cd5a5ce9b.png" alt="logo" /></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <button type="button" class="navbar-connect-wallet">Connect Wallet <FaAngleDoubleRight className='mb-1 ms-1 fs-15' /></button>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <Svg />
          </div>
        </div>
      </div>

      {/* <section class="py-5 banner-followus-section">
        <div class="container">
          <h3 class="fw-bold display-5 text-center mb-5">Follow</h3>
          <div class="row row-cols-1 row-cols-lg-4 g-4 justify-content-center">
            <div class="col">
              <div class="card">
                <i class="fa-brands fa-twitter"></i>
                <span class="follow-us-text-1">Twitter Page must 60% eligible</span>
                <button type="button" class="navbar-connect-wallet mx-auto mb-4 mt-2">Check <FaAngleDoubleRight className='mb-1 ms-1 fs-15' /></button>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <i class="fa-brands fa-discord"></i>
                <span class="follow-us-text-1">Discord Page must 70% eligible</span>
                <button type="button" class="navbar-connect-wallet mx-auto mb-4 mt-2">Check <FaAngleDoubleRight className='mb-1 ms-1 fs-15' /></button>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <i class="fa-brands fa-telegram"></i>
                <span class="follow-us-text-1">Telegram channel must 80% eligible</span>
                <button type="button" class="navbar-connect-wallet mx-auto mb-4 mt-2">Check <FaAngleDoubleRight className='mb-1 ms-1 fs-15' /></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-5 banner-Referral-section">
        <div class="container">
          <h3 class="fw-bold display-5 text-center mb-5">Referral</h3>
          <div class="row g-4 justify-content-center">
            <div class="col">
              <div class="card text-center">
                <div class="card-body">
                  <span class="referral-text-1">Share Your Invite code</span>
                  <p class="referral-text-2">ERETGG32133JSHD</p>
                  <button type="button" class="navbar-connect-wallet mx-auto mb-4 mt-2">INVITE YOUR Friend <FaAngleDoubleRight className='mb-1 ms-1 fs-15' /></button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section class="footer-section py-5">
        <div class="container ">
          <div class="row g-4 align-items-center">
            <div class="col-lg-12 text-center">
              <a class="navbar-brand-footer" href="/"><img src="https://d-ecosystem.io/static/media/main-logo.092fbffad51cd5a5ce9b.png" alt="logo" /></a>
              <div class="fs-14 pt-4">The world's first 100%<br /> decentralized matrix platform</div>

              <div class="d-flex flex-row gap-4 justify-content-center mt-4 mb-3">
                <a href="" target="_blank" rel="noreferrer" class="footer-text-1">Contact US</a>
                <a href="" target="_blank" rel="noreferrer" class="footer-text-1">Terms of Use</a>
                <a href="" target="_blank" rel="noreferrer" class="footer-text-1">Privacy Policy</a>
                <a href="" target="_blank" rel="noreferrer" class="footer-text-1">About US</a>
              </div>
              <span class="footer-text-2">© 2023 Copyright : D</span>
            </div>
          </div>
        </div>
      </section> */}

    </div>
  );
}

export default App;
