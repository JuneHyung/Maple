const axios = require("axios");

exports.getCharacterBasic = async (req, res, next) => {
  const { ocid, date } = req.query;
  try {
    const { data } = await axios.get(`${process.env.NODE_APP_MAPLE_BASE_URL}/character/basic`, {
      params: { ocid, date },
      headers: {
        "Content-Type": "application/json",
        "x-nxopen-api-key": process.env.NODE_APP_MAPLE_API_KEY,
        accept: "application/json",
      },
    });
    const result = {
      statusCode: 200,
      result: data,
    };
    res.status(200).json(result);
  } catch (e) {
    console.log(e);
  }
};
exports.getCharacterStat = async (req, res, next) => {
  const { ocid, date } = req.query;
  // console.log('d', ocid, date);
  try {
    const { data } = await axios.get(`${process.env.NODE_APP_MAPLE_BASE_URL}/character/stat`, {
      params: { ocid, date },
      headers: {
        "Content-Type": "application/json",
        "x-nxopen-api-key": process.env.NODE_APP_MAPLE_API_KEY,
        accept: "application/json",
      },
    });
    // console.log(data)
    const result = {
      statusCode: 200,
      result: data,
    };
    res.status(200).json(result);
  } catch (e) {
    console.log(e);
  }
};

exports.getCharacterHyperStat = async (req, res, next) => {
  const { ocid, date } = req.query;
  // console.log('d', ocid, date);
  try {
    const { data } = await axios.get(`${process.env.NODE_APP_MAPLE_BASE_URL}/character/hyper-stat`, {
      params: { ocid, date },
      headers: {
        "Content-Type": "application/json",
        "x-nxopen-api-key": process.env.NODE_APP_MAPLE_API_KEY,
        accept: "application/json",
      },
    });
    // console.log(data)
    const result = {
      statusCode: 200,
      result: data,
    };
    res.status(200).json(result);
  } catch (e) {
    console.log(e);
  }
};

exports.getCharacterAbility = async (req, res, next) => {
  const { ocid, date } = req.query;
  // console.log('d', ocid, date);
  try {
    const { data } = await axios.get(`${process.env.NODE_APP_MAPLE_BASE_URL}/character/ability`, {
      params: { ocid, date },
      headers: {
        "Content-Type": "application/json",
        "x-nxopen-api-key": process.env.NODE_APP_MAPLE_API_KEY,
        accept: "application/json",
      },
    });
    // console.log(data)
    const result = {
      statusCode: 200,
      result: data,
    };
    console.log(result);
    res.status(200).json(result);
  } catch (e) {
    console.log(e);
  }
};
