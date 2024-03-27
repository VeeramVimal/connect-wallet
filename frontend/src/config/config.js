// const dotenv = require("dotenv");
// const path = require("path");
// dotenv.config({ path: path.join(__dirname, "../../.env") });

export const APP_HOST = process.env.API_APP_HOST || 'localhost'
export const APP_PORT = process.env.API_APP_PORT || 4000
export const HOST = `${APP_HOST}:${APP_PORT}`

// export const API_URL = `http://${HOST}/v1`
// export const API_URL_BASE = `http://${HOST}`
// export const API_URL_BASE = `https://airdop-api.d-ecosystem.io`
export const API_URL_BASE = `http://${HOST}`

export const REACT_APP_HOST = process.env.REACT_APP_HOST || 'localhost'
export const REACT_APP_PORT = process.env.REACT_APP_PORT || 3000
export const REACT_HOST = `${REACT_APP_HOST}:${REACT_APP_PORT}`
export const SOCKET_URL = `http://${HOST}`

export const REACT_APP_URL = `https://airdrop.d-ecosystem.io`

export const web_3_config = {
    chainIdnumber : '97',
    rpcURL : 'https://data-seed-prebsc-1-s3.binance.org:8545/',
    networkName : 'BNB Smart Chain Testnet',
    currencyName : 'tBNB',
    currencySymbol : 'tBNB',
    explorerURL : 'https://testnet.bscscan.com/',

}