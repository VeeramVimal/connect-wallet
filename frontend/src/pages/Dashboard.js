import React from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import $ from "jquery";
import ProgressBar from "@ramonak/react-progress-bar";
import "../core/style.css";
import axios from "axios";
import Swal from "sweetalert2";
import { API_URL_BASE, REACT_APP_URL } from "../config/config";
import ListReferData from "./referral/listReferData";
import Web3 from "web3";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickLogout = this.handleClickLogout.bind(this);
    // this.canvas = createRef();
    this.state = {
      theme: "dark-mode",
      isDarkMode: false,
      connected: false,
      userId: "",
      useraddress: "",
      listData: [],
    };
  }
  launchingsoon = async () => {
    Swal.fire("Launching on 29th march 2023");
  };
  setupMetaMaskListeners() {
    if (window.ethereum) {
      console.log("MetaMask is installed.");
      if (window.ethereum.isConnected()) {
        this.setState({
          connected: true,
        });
      }
      // Listen for account changes
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length === 0) {
          this.setState({
            connected: false,
          });
        }
      });
      // Listen for disconnect
      window.ethereum.on("disconnect", () => {
        this.setState({
          connected: false,
        });
      });
    } else {
      console.log("MetaMask is not installed.");
    }
  }
 
  getaddress = async () => {
    const account = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    var useraddress = account[0];
    this.setState({
      useraddress: account[0],
    });
    if (account[0]) localStorage.setItem("user_address", account[0]);

    var userObject = {
      useraddress,
    };
    // await axios
    //   .post(`${API_URL_BASE}/getpercent`, userObject, {
    //     headers: {
    //       "Access-Control-Allow-Origin": "*",
    //       "Content-Type": "application/json",
    //     },
    //   })
    //   .then(async (res) => {
    //     console.log(res, "percentage");
    //     this.setState({
    //       userId: res.data.login[0]._id,
    //       useraddress: res.data.login[0].useraddress,
    //       userpercentage: res.data.login[0].percentage,
    //     });

    //     if (res.data) {
    //       this.getPercentageDetails(useraddress);
    //       this.gainReferPercentage(useraddress);
    //     }
    //   })
    //   .catch((err) => console.log(err));
  };


  async componentDidMount() {
    await this.getaddress();
    this.setupMetaMaskListeners();
    // await this.getListData();
    if (localStorage.getItem("mode") === "dark-mode") {
      $("body").addClass("dark-mode");
      $("body").removeClass("light-mode");
      this.setState({ theme: "dark-mode" });
      this.setState({ isDarkMode: true });
    } else {
      $("body").addClass("light-mode");
      $("body").removeClass("dark-mode");
      this.setState({ theme: "light-mode" });
      this.setState({ isDarkMode: false });
    }
  }

  handleToggle = () => {
    if (this.state.theme === "light-mode") {
      $("body").addClass("dark-mode");
      $("body").removeClass("light-mode");
      this.setState({ theme: "dark-mode" });
      this.setState({ isDarkMode: true });
      localStorage.setItem("mode", "dark-mode");
    }
    if (this.state.theme === "dark-mode") {
      $("body").addClass("light-mode");
      $("body").removeClass("dark-mode");
      this.setState({ theme: "light-mode" });
      localStorage.setItem("mode", "light-mode");
      this.setState({ isDarkMode: false });
    }
  };

  setisDarkMode = () => {
    this.setState({ isDarkMode: true });
  };
  handleClickLogout = () => {
    //      // Clean up event listeners when component unmounts
    //   window.ethereum.removeAllListeners("accountsChanged");
    //   window.ethereum.removeAllListeners("disconnect");
    //  // Disconnect from MetaMask
    //   if (window.ethereum && window.ethereum.isConnected()) {
    //     window.ethereum.disconnect();
    //   }
    sessionStorage.removeItem("accessToken");
    window.location.href = "/login"
  };
  
  render() {
    return (
      <div>
        <div className="dashboard-overral-top-section pb-5">
          <div className="sidenav-main-section">
            <div className="container-fluid">
              <div className="row">
                <div className="col p-lg-0">
                  <div className="d-flex flex-row dashboard-white-section-1 align-items-center">
                    <div className="">
                      <h2 className="mb-0 dashboard-top-heading-1">
                        Dashboard
                      </h2>
                    </div>
                    <div className="ms-auto">
                      <DarkModeToggle
                        className="toggller-top"
                        onChange={this.handleToggle}
                        checked={this.state.isDarkMode}
                        size={70}
                      />
                    </div>
                    <button onClick={this.handleClickLogout}>Logout</button>
                  </div>
                  <div className="p-lg-5 mt-4 mx-4">
                    <div className="">
                      <div className="d-flex flex-lg-row flex-column">
                        <div className="">
                          <p className="dashboard-text-1 mb-4">
                            Eligibity Meter
                          </p>
                        </div>
                        <div className="ms-lg-auto dashboard-white-section-2 mb-5">
                          {/* { this.state.connected 
                           ? <p className="mb-0">{this.state.useraddress}</p>
                           : <p>hiii</p>
                           } */}
                          <p className="mb-0">{this.state.useraddress}</p>
                        </div>
                      </div>
                      
                    </div>
                  </div>

                  <div className="container-fluid  ">
                    <div className="bf-container-fluid dashboard-white-section-3 mt-4 mx-4 p-0">
                      {/* <div className="bf-table-responsive"> */}
                      <ListReferData />
                      {/* </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
