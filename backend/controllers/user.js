// const { api } = require("../util/axios");
const axios = require("axios");

exports.getCharacterOCID = async (req, res, next) => {
  const { characterName } = req.query;
  console.log(characterName);
  try {
    const { data } = await axios.get(`${process.env.NODE_APP_MAPLE_BASE_URL}/id`, {
      params: { character_name: characterName },
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
    res.json(e);
    console.log("error");
    console.log(e);
  }
};

exports.getCharacterRankOverall = async (req, res, next) => {
  const { classKey, date } = req.query;

  try {
    const { data } = await axios.get(`${process.env.NODE_APP_MAPLE_BASE_URL}/ranking/overall`, {
      params: { class: classKey, date, page: 1 },
      headers: {
        "Content-Type": "application/json",
        "x-nxopen-api-key": process.env.NODE_APP_MAPLE_API_KEY,
        accept: "application/json",
      },
    });

    const result = {
      statusCode: 200,
      result: data.ranking.slice(0, 50),
    };
    res.status(200).json(result);
  } catch (e) {
    res.json(e);
    console.log("error");
    console.log(e);
  }
};
