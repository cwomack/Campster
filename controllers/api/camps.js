const APIKey = process.env.REACT_APP_API_KEY
const axios = require("axios");

module.exports = {searchCamps};

// Make a request for a user with a given ID
function searchCamps(req, res) {
    axios({url: `https://ridb.recreation.gov/api/v1/campsites/2?APIKey=${APIKey}`,
    headers: {APIKey: APIKey},
    method: 'GET'
})
        .then(function (response) {
            // handle success
            console.log(response.data);
            res.json(response.data)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
}

