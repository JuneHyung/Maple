// const { api } = require("../util/axios");
const axios = require('axios');

exports.getCharacterLinkSkill = async (req, res, next) => {
  const {ocid, date} = req.query;
  // console.log(characterName);
  try{
    const {data} = await axios.get(`${process.env.NODE_APP_MAPLE_BASE_URL}/character/link-skill`,
     {
      params: { ocid, date },
      headers:{
        'Content-Type': 'application/json',
        "x-nxopen-api-key": process.env.NODE_APP_MAPLE_API_KEY,
        "accept": "application/json"
      }
    })
    const result = {
      statusCode: 200,
      result: data
    }
    res.status(200).json(result);
  }catch(e){console.log('error')}

  
}