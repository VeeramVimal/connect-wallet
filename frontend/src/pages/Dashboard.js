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

// import { RiAccountPinCircleLine } from "react-icons/ri";
// import { FaTelegramPlane, FaUserFriends } from "react-icons/fa";
// import { AiOutlineTwitter } from "react-icons/ai";
// import { SiDiscord } from "react-icons/si";
// import { CopyToClipboard } from "react-copy-to-clipboard";
// import { TbLayoutDashboard } from 'react-icons/tb';
// import { MdContentCopy } from "react-icons/md";
// import { useNavigate } from 'react-router-dom';
// import CopyToClipboard from "copy-to-clipboard";
// import moment from 'moment/moment';
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
      userpercentage: "",
      twitter: "",
      discord: "",
      telegram: "",
      refer_a_friend: "",
      copySuccess: false,
      copied: false,
      canvasRef: "",
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
  // gainReferPercentage = async () => {
  //   const account = await window.ethereum.request({
  //     method: "eth_requestAccounts",
  //   });
  //   var useraddress = account[0];
  //   console.log("useraddress===account[0]===", account[0]);
  //   if (useraddress) {
  //     await axios({
  //       method: "POST",
  //       url: `${API_URL_BASE}/gain-refer-percentage`,
  //       headers: {
  //         "Access-Control-Allow-Origin": "*",
  //         "Content-Type": "application/json",
  //       },
  //       data: {
  //         toUserAddress: useraddress,
  //       },
  //     })
  //       .then((res) => {
  //         // window.location.reload()
  //       })
  //       .catch((err) => console.log(err));
  //   }
  // };
  // getPercentageDetails = async (useraddress) => {
  //   if (useraddress) {
  //     await axios({
  //       method: "POST",
  //       // url: 'http://localhost:4000/single-percentage',
  //       url: `${API_URL_BASE}/single-percentage`,
  //       headers: {
  //         "Access-Control-Allow-Origin": "*",
  //         "Content-Type": "application/json",
  //       },
  //       data: {
  //         useraddress: useraddress,
  //       },
  //     })
  //       .then((res) => {
  //         this.setState({
  //           twitter: res.data.data.follow_twitter,
  //           discord: res.data.data.join_discord,
  //           telegram: res.data.data.join_telegram,
  //           refer_a_friend: res.data.data.refer_friend,
  //         });
  //       })
  //       .catch((err) => console.log(err));
  //   }
  // };
  getaddress = async () => {
    const account = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    var useraddress = account[0];
    console.log("useraddress=======", useraddress);
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

  updateUserPercentage = async (percentageData, clickPercentageData) => {
    const account = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    var useraddress = account[0];
    var twitter, discord, telegram, refer_a_friend;
    if (clickPercentageData === 60) twitter = 60;
    else if (clickPercentageData === 70) discord = 70;
    else if (clickPercentageData === 80) telegram = 80;
    else if (clickPercentageData === 90) refer_a_friend = 90;
    await axios({
      method: "PUT",
      // url: 'http://localhost:4000/update-percentage',
      url: `${API_URL_BASE}/update-percentage`,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      data: {
        useraddress: useraddress,
        percentage: percentageData,
        follow_twitter: twitter,
        join_discord: discord,
        join_telegram: telegram,
        refer_friend: refer_a_friend,
      },
    })
      .then((res) => {
        // window.location.reload();
      })
      .catch((err) => console.log(err));
  };
  //create a new refers details
  // newRefers = async () => {
  //   const account = await window.ethereum.request({
  //     method: "eth_requestAccounts",
  //   });
  //   var useraddress = account[0];
  //   await axios({
  //     method: "POST",
  //     url: `${API_URL_BASE}/new-refer-friend`,
  //     headers: {
  //       "Access-Control-Allow-Origin": "*",
  //       "Content-Type": "application/json",
  //     },
  //     data: {
  //       fromUseraddress: useraddress,
  //       toUserAddress: "",
  //     },
  //   })
  //     .then((res) => {})
  //     .catch((err) => console.log(err));
  // };

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
  // handleclick = (event) => {
  //   var percentageData = this.state.userpercentage;
  //   var twitter, discord, telegram, refer_a_friend
  //   var clickPercentage;

  //   switch (event.target.name) {
  //     case 'twitter':
  //       return (
  //         this.state.userpercentage === 50 && (
  //           this.setState({ twitter: 60 }),
  //           this.setState({ userpercentage: 60 }),
  //           this.updateUserPercentage(percentageData = 60, clickPercentage = 60),
  //           window.open("https://twitter.com/d_ecosystem", "_blank")
  //         )
  //       )
  //     case 'discord':
  //       return (
  //         this.state.twitter === 60 && (
  //           this.setState({ discord: 70 }),
  //           this.setState({ userpercentage: 70 }),
  //           this.updateUserPercentage(percentageData = 70, clickPercentage = 70),
  //           window.open("https://discord.com/invite/c5EbX2WgQJ", "_blank")
  //         )
  //       )
  //     case 'telegram':
  //       return (
  //         this.state.discord === 70 && (
  //           this.setState({ telegram: 80 }),
  //           this.setState({ userpercentage: 80 }),
  //           this.updateUserPercentage(percentageData = 80, clickPercentage = 80),
  //           window.open("https://t.me/d_ecosystem_group", "_blank")
  //         )
  //       )
  //     case 'refer_a_friend':
  //       return (
  //         (this.state.userpercentage === 100) ? (
  //           this.setState({ refer_a_friend: 100 }),
  //           this.setState({ userpercentage: 100 }),
  //           this.setState({ copied: true })
  //         ) : (this.state.telegram === 80) && (
  //           this.setState({ refer_a_friend: 90 }),
  //           this.setState({ userpercentage: 90 }),
  //           this.updateUserPercentage(percentageData = 90, clickPercentage = 90),
  //           this.setState({ copied: true }),
  //           this.newRefers()
  //         )
  //       )
  //     default:
  //       break;
  //   }
  // }
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
                      {/* <ProgressBar
                        className='eligibility-progress-bar'
                        completed={this.state.userpercentage}
                        bgColor="#1b9ffe"
                        height="20px"
                        baseBgColor="#FFFFFF"
                        labelColor="#fff4f4"
                        labelSize="14px"
                        maxCompleted={100}
                      /> */}
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
