import axios from "axios";
import moment from "moment";
import socketIOClient from "socket.io-client";
import React, { useState, useEffect } from "react";
import { API_URL_BASE, SOCKET_URL } from "../../config/config";
// import Config from '../../config/config'
const ListReferData = () => {
  const [listData, setListData] = useState([]);
  const [socketConnection, setSocketConnection] = useState(null);

  useEffect(() => {
    let socket = socketIOClient(SOCKET_URL, {
      // transports: ["polling"],
      transports: ["websocket"],
      origin: "*",
      // rejectUnauthorized: false
    });
    let socketUnsubscribe;
    if (socket) {
      socket.on("connect", function () {
        setSocketConnection(socket);
        socketUnsubscribe = socket;
      });
      socket.on("connect_error", (err) => {
        console.log("socket connect_error", err);
      });
      socket.on("disconnect", function () {
        console.log("socket disconnected");
      });
      socket.on('error', (error) => {
        console.error('Socket.io error:', error);
      });
    }
    return () => {
      if (socketUnsubscribe) {
        socketUnsubscribe.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (socketConnection != null) {
      getListReferData();
    }
  }, [socketConnection]);

  const getListReferData = async () => {
    const account = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    var useraddress = account[0];
    // await axios({
    //     method: 'POST',
    //     url: `${API_URL_BASE}/get-refers`,
    //     data: {
    //         userAddress: useraddress
    //     },
    //     headers: {
    //         "Access-Control-Allow-Origin": "*",
    //         'Content-Type': 'application/json',
    //     },
    // }).then((res) => {
    //     setListData(res.data.data)
    // }).catch((err) => console.log(err))
  };
  return (
    <div className="bf-table-responsive">
      <table className="bf-table mb-0 text-center">
        <thead className="table-top-header">
          <tr>
            <th className="table-top-header-first">User Details</th>
          </tr>
        </thead>
      </table>
      <table className="bf-table">
        <thead>
          <tr>
            <th>User ID </th>
            <th>Username</th>
            <th>UserStatus</th>
            <th>message</th>
            {/* <th>User ID</th>
            <th>Date & time</th>
            <th>Eligibilty statement</th>
            <th>Common Earned</th> */}
          </tr>
        </thead>
        <tbody>
          {listData.map((user) => {
            return (
              <tr>
                <td>{user._id}</td>
                <td>{moment(user.created_date).format("MM/DD/YYYY")}</td>
                <td>{user.percentage == 100 ? "Eligible" : "Not Eligible"}</td>
                <td>{user.percentage == 100 ? 20 : ""}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default ListReferData;
