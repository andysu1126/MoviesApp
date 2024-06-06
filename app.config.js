require("dotenv").config();

export default {
  expo: {
    extra: {
      API_KEY: process.env.API_KEY,
    },
  },
};
