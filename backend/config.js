require("dotenv").config();

module.exports = {
  AWS_table: "nbaplayerstats",
  AWS_configuration: {
    region: process.env.AWS_DEFAULT_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
};
