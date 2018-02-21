##Get Netflix Data:

  * Create the file `data.js` under the project root folder and paste in netflix data
  * example data.js
  ```
  var data = [
    {
      "deviceType": "Streaming Stick",
      "deviceDescription": "Google Chromecast streaming stick",
      "date": "9/15/17, 8:58:52 PM CDT",
      "timestamp": 1505527132732,
      "ipAddress": "<ip addr goes here>",
      "countryCode": "US",
      "country": "United States",
      "region": "TX",
      "location": "United States (TX)"
    }
  ];
  module.exports = data;
  ```

##Build Static App with Webpack:
`npm run build --display-error-details`

##Run server to host static files:
`node index`
