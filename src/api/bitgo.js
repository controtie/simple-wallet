const BitGoJS = require('bitgo');

// Read the user authentication section to get your API access token
const bitgo =
  new BitGoJS.BitGo({ env: 'test', accessToken: process.env.REACT_APP_ACCESS_TOKEN });

let coin = bitgo.coin('tbtc');


