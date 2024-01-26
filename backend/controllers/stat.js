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
    // console.log(result);
    res.status(200).json(result);
  } catch (e) {
    console.log(e);
  }
};

exports.getCharacterHyperStat = async (req, res, next) => {
  const { ocid, date } = req.query;
  
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
    const { use_preset_no, hyper_stat_preset_1, hyper_stat_preset_2, hyper_stat_preset_3, hyper_stat_preset_1_remain_point, hyper_stat_preset_2_remain_point, hyper_stat_preset_3_remain_point} = data;
    const resultData = {
      date: data.date,
      preset_no: Number(use_preset_no),
      hyper_stat_list: [],
      hyper_stat_remain_point: 0
    }

    switch(Number(use_preset_no)){
      case 1:
        resultData["hyper_stat_list"] = hyper_stat_preset_1;
        resultData["hyper_stat_remain_point"] = hyper_stat_preset_1_remain_point;
        break;
      case 2:
        resultData["hyper_stat_list"] = hyper_stat_preset_2;
        resultData["hyper_stat_remain_point"] = hyper_stat_preset_2_remain_point;
        break;
      case 3:
        resultData["hyper_stat_list"] = hyper_stat_preset_3;
        resultData["hyper_stat_remain_point"] = hyper_stat_preset_3_remain_point;
        break;
      default: break;
    }

    // console.log(resultData)

    const result = {
      statusCode: 200,
      result: resultData,
    };
    res.status(200).json(result);
  } catch (e) {
    console.log(e);
  }
};

exports.getCharacterSymbol = async (req, res, next) => {
  const { ocid, date } = req.query;
  // console.log('d', ocid, date);
  try {
    const { data } = await axios.get(`${process.env.NODE_APP_MAPLE_BASE_URL}/character/symbol-equipment`, {
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
    // console.log(result);
    res.status(200).json(result);
  } catch (e) {
    console.log(e);
  }
};
