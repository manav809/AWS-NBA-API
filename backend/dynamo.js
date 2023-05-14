const AWS = require("aws-sdk");
const config = require("./config")

AWS.config.update(config.AWS_configuration);

const dynamoClient = new AWS.DynamoDB.DocumentClient();

async function getPlayers() {
  const params = {
    TableName: config.AWS_table,
  };
  const players = await dynamoClient.scan(params).promise();
  return players;
}

async function getPlayerById(id) {
  const params = {
    TableName: config.AWS_table,
    Key: {
      id,
    },
  };
  const player = await dynamoClient.get(params).promise();
  return player;
}

module.exports = {
  getPlayerById,
  getPlayers,
};
