const AWS = require("aws-sdk");
require("dotenv").config();

AWS.config.update({
  region: process.env.AWS_DEFAULT_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const dynamoClient = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = "nbaplayerstats";

async function getPlayers() {
  const params = {
    TableName: TABLE_NAME,
  };
  const players = await dynamoClient.scan(params).promise();
  return players;
}

async function getPlayerById(id) {
  const params = {
    TableName: TABLE_NAME,
    Key: {
      id,
    },
  };
  const player = await dynamoClient.get(params).promise();
  return player;
}

module.exports = {
  dynamoClient,
  getPlayerById,
  getPlayers,
};
