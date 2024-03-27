import { useEffect, useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import Logo from "../../assest/Logo.png";
import "../../core/style.css";
import Web3 from "web3";
import Swal from "sweetalert2";
import axios from "axios";

import { API_URL_BASE, web_3_config, SOCKET_URL } from "../../config/config";
import { useNavigate, useParams } from "react-router-dom";
import { AiFillTwitterCircle } from "react-icons/ai";
// import $ from "jquery";
import Svg from "../../Svg";
import io from 'socket.io-client';
const socket = io(SOCKET_URL); 
function Banner() {
  const navigate = useNavigate();
  const [accountaddress, setaccountaddress] = useState("");
  const [connected, setConnected] = useState(false);
  // const [messages, setMessages] = useState([]);
  // const [input, setInput] = useState('');
  // useEffect(() => {
  //   socket.on('message', (data) => {
  //     // setMessages((prevMessages) => [...prevMessages, data]);
  //     console.log("socket=======", data);
  //   });

  //   return () => {
  //     socket.disconnect();
  //   };
  // }, []);
  // url ref using useEffect
  const loginData = async (payload) => {
    await axios
      .post(`${API_URL_BASE}/v1/auth/login`, payload, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        sessionStorage.setItem("accessToken", res.data.data.token.access.token);
        navigate("/dashboard");
      });
  };
  const userRegister = async (userObject) => {
    await axios
      .post(`${API_URL_BASE}/v1/auth/register`, userObject, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        if (res.data.data.user.message == "user already exist") {
          loginData(userObject);
        } else if (res.data.data.user.message == "user register Successfully") {
          sessionStorage.setItem(
            "accessToken",
            res.data.data.token.access.token
          );
          navigate("/dashboard");
        }
        // if (res.data.message == "Useraddressexists") {
        //   window.location.href = "/dashboard";
        // } else {
        //   window.location.href = "/dashboard"
        // }
      })
      .catch((err) => console.log("error: ", err));
  };
  // const referDetails = async (userAddress, userObject) => {
  //   await axios({
  //     method: 'POST',
  //     url: `${API_URL_BASE}/create-refer?userKey=${id}`,
  //     data: {
  //       toUserAddress: userAddress
  //     },
  //     headers: {
  //       "Access-Control-Allow-Origin": "*",
  //       'Content-Type': 'application/json',
  //     }
  //   }).then(async (res) => {
  //     if (res) await userRegister(userObject)
  //   }).catch(err => console.log(err));
  // }

  const addchain = async () => {
    const web3js = new Web3(window.ethereum);
    if (!window.ethereum) {
      Swal.fire("Metamask not detected");
    } else {
      // const chainIdnumber = '5272';
      // const rpcURL = 'https://mainnetcoin.d-ecosystem.io';
      // const networkName = 'D Chain Mainnet';
      // const currencyName = 'DCX';
      // const currencySymbol = 'DCX';
      // const explorerURL = 'https://mainnet-explorer.d-ecosystem.io';
      const chainIdnumber = web_3_config.chainIdnumber;
      const rpcURL = web_3_config.rpcURL;
      const networkName = web_3_config.networkName;
      const currencyName = web_3_config.currencyName;
      const currencySymbol = web_3_config.currencySymbol;
      const explorerURL = web_3_config.explorerURL;
      const chainId = await web3js.utils.toHex(chainIdnumber);

      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: chainId,
            chainName: networkName,
            rpcUrls: [rpcURL],
            blockExplorerUrls: [explorerURL],

            nativeCurrency: {
              name: currencyName,
              symbol: currencySymbol,
              decimals: 18,
            },
          },
        ],
      });
      const account = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      var useraddress = account[0];
      var percentage = 50;
      var userObject = {
        useraddress,
        // percentage
      };
      //** referal address fetch the refers details*/
      await userRegister(userObject);
    }
  };

  const getaddress = async () => {
    const web3js = new Web3(window.ethereum);
    const chainid = await web3js.eth.getChainId();

    if (chainid == "5272") {
      const account = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setaccountaddress(account[0]);
    } else {
      setaccountaddress(1);
    }
  };

  useEffect(() => {
    getaddress();
  }, []);

  return (
    <div className="banner-overral-top-section">
      <div className="container">
        <nav class="navbar navbar-expand-lg bg-transparent fixed-top mt-2">
          <div class="container">
            <a class="navbar-brand" href="#">
              <img src={Logo} alt="logo" />
            </a>

            <div class="" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a
                    type="button"
                    onClick={addchain}
                    class="navbar-connect-wallet"
                  >
                    {accountaddress == 1 ? "Connect Metamask" : accountaddress}{" "}
                    <FaAngleDoubleRight className="mb-1 ms-1 fs-15" />
                  </a>
                </li>
              </ul>
            </div>
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

export default Banner;
