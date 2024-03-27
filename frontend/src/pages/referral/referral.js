import { useEffect, useState } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

import Logo from "../../assest/Logo.png"
import '../../core/style.css'
import Web3 from 'web3';
import Swal from 'sweetalert2';
import axios from 'axios';
import { API_URL_BASE } from '../../config/config';
// import { AiFillTwitterCircle } from 'react-icons/ai';
// import $ from "jquery";
// import Svg from "../Svg";
function Referral() {
  const {id} = useParams();
  const [refs, setRefs] = useState("");
  const [canvasRef, setCanvasRef] = useState("");
  const [accountaddress, setaccountaddress] = useState('');

  // url ref using useEffect
  useEffect(() => {
    setRefs(window.location.href.split('?')[1]);
    if(refs) setCanvasRef(refs.slice(2));
  }, [refs?.length]);
  const userRegister = async (userObject) => {
    await axios.post(`${API_URL_BASE}/register`, userObject, {
      "headers": {
        "Access-Control-Allow-Origin": "*",
        'Content-Type': 'application/json',
      }
    }).then((res) => {
      if (res.data.message == "Useraddressexists") {
        window.location.href = "/dashboard";
      } else {
        window.location.href = "/dashboard"
      }
    });
  }
  const referDetails = async (userAddress, userObject) => {
    console.log("userAddress, userObject", userAddress, userObject);
    await axios({
      method: 'POST',
      url: `${API_URL_BASE}/create-refer?userKey=${id}`,
      data: {
        toUserAddress: userAddress
      },
      headers: {
        "Access-Control-Allow-Origin": "*",
        'Content-Type': 'application/json',
      }
    }).then(async (res) => {
        console.log("userRegisteruserRegister======", res);
      if (res) await userRegister(userObject)
    }).catch(err => console.log(err));
  }
  
  const addchain = async () => {
    const web3js = new Web3(window.ethereum);
    if (!window.ethereum) {
      Swal.fire('Metamask not detected');
    } else if(window.ethereum.networkVersion=='5272'){
        console.log("asdasdasd");
        const account = await window.ethereum.request({ method: 'eth_requestAccounts' });
      var useraddress = account[0];
      var percentage = 50;
      var userObject = {
        useraddress,
        percentage
      };
      //** referal address fetch the refers details*/ 
      if (id) {
        await referDetails(account[0], userObject)
      } else {
        await userRegister(userObject)
      }
    }
    
    else {
      const chainIdnumber = '5272';
      const rpcURL = 'https://mainnetcoin.d-ecosystem.io';
      const networkName = 'D Chain Mainnet';
      const currencyName = 'DCX';
      const currencySymbol = 'DCX';
      const explorerURL = 'https://mainnet-explorer.d-ecosystem.io';
      const chainId = await web3js.utils.toHex(chainIdnumber);

      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
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
      const account = await window.ethereum.request({ method: 'eth_requestAccounts' });
      var useraddress = account[0];
      var percentage = 50;
      var userObject = {
        useraddress,
        percentage
      };
      //** referal address fetch the refers details*/ 
      if (id) {
        await referDetails(account[0], userObject)
      } else {
        await userRegister(userObject)
      }
    }
  }

  const getaddress = async () => {
    const web3js = new Web3(window.ethereum);
    const chainid =await web3js.eth.getChainId()
   
    if (chainid == '5272') {
      const account = await window.ethereum.request({ method: 'eth_requestAccounts' });
      var useraddress = account[0];
      var percentage = 50;
      var userObject = {
        useraddress,
        percentage
      };
      //** referal address fetch the refers details*/ 

      setaccountaddress(account[0])

    } else {
      setaccountaddress(1)
    }
  }

  useEffect(() => {
    getaddress();
  }, []);

  return (
    <div className="banner-overral-top-section">
      <div className='container'>
        <nav class="navbar navbar-expand-lg bg-transparent fixed-top mt-2">
          <div class="container">
            <a class="navbar-brand" href="#"><img src={Logo} alt="logo" /></a>

            <div class="" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a type="button" onClick={addchain} class="navbar-connect-wallet">{accountaddress == 1 ? "Connect Metamask" : accountaddress} <FaAngleDoubleRight className='mb-1 ms-1 fs-15' /></a>
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

export default Referral;
