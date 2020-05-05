const _ = require("lodash");
const moment = require("moment");

const deepWalk = require('../utils/deepWalk');

// Add number of monitors in parsed JSON
const addMonitorsNumber = (monitors, parsedJSON) => {
  const numMonitors = monitors.length;
  parsedJSON.numMonitors = parsedJSON.numMonitors ? parsedJSON.numMonitors += numMonitors : numMonitors;
}

// Add end dates submission in the parsed JSON
const addEndDates = (oauthData, parsedJSON) => {
  const parsedOauthData = JSON.parse(oauthData);
  submissionsArray = parsedOauthData[Object.keys(parsedOauthData)[0]];
  // iterate on multiple submissions
  _.forEach(submissionsArray, (submission) => {
    const formattedEndDate = moment.utc(submission.endDate).format('L');
    parsedJSON[formattedEndDate] = parsedJSON[formattedEndDate] ? parsedJSON[formattedEndDate] += 1 : 1;
  })
}

/* take a deep walk in the input json and 
add number of monitors and end dates submission keys in parsed json */
const addMonitorsAndEndDates = (input, parsedJSON) => {
  try {
    deepWalk(input.Users, ['Monitors', 'OauthMonitorTokens'], function (value) {
      const monitors = value.Monitors;
      const oauthData = value.oauth_data;
      if(monitors){
        addMonitorsNumber(monitors, parsedJSON);
      }
      if (oauthData) {
        addEndDates(oauthData, parsedJSON);
      }
    });
  } catch (error) {
    console.log(error);
  }
}

// returns parsed data and adding required keys
const parsedData = async (input) => {
  const parsedJSON = {};
  parsedJSON.orgName = input.name || '';
  addMonitorsAndEndDates(input, parsedJSON);
  return parsedJSON;
};

module.exports = parsedData;
