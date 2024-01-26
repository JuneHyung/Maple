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

exports.getCharacterCashEquipment = async (req, res, next) => {
  const { ocid, date } = req.query;

  try {
    const { data } = await axios.get(`${process.env.NODE_APP_MAPLE_BASE_URL}/character/cashitem-equipment`, {
      params: { ocid, date },
      headers: {
        "Content-Type": "application/json",
        "x-nxopen-api-key": process.env.NODE_APP_MAPLE_API_KEY,
        accept: "application/json",
      },
    });

    const {preset_no, cash_item_equipment_preset_1, cash_item_equipment_preset_2, cash_item_equipment_preset_3} = data;
    const resultData = {date: data.date, preset_no:data.preset_no, cash_item_equipment_list: []};
    switch(preset_no){
      case 1:
        resultData["cash_item_equipment_list"] = cash_item_equipment_preset_1;
        break;
      case 2: 
        resultData["cash_item_equipment_list"] = cash_item_equipment_preset_2;
        break;
      case 3: 
          resultData["cash_item_equipment_list"] = cash_item_equipment_preset_3;
        break;
      default: break;
    }
    const result = {
      statusCode: 200,
      result: resultData,
    };
    res.status(200).json(result);
  } catch (e) {
    console.log("error");
  }
};
