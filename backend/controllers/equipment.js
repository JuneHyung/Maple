const axios = require("axios");

exports.getCharacterEquipment = async (req, res, next) => {
  const { ocid, date } = req.query;

  try {
    const { data } = await axios.get(`${process.env.NODE_APP_MAPLE_BASE_URL}/character/item-equipment`, {
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
    console.log("error");
  }
};
