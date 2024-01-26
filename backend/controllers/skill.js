// const { api } = require("../util/axios");
const axios = require('axios');

// 링크 스킬 조회
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

// 차수 별 스킬 조회
exports.getCharacterClassSkill = async (req, res, next) => {
  const {ocid, date, character_skill_grade} = req.query;
  // console.log(characterName);
  try{
    const {data} = await axios.get(`${process.env.NODE_APP_MAPLE_BASE_URL}/character/skill`,
     {
      params: { ocid, date, character_skill_grade },
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
// 6차 패시브 스킬
exports.getCharacterHexaStat = async (req, res, next) => {
  const {ocid, date} = req.query;
  // console.log(characterName);
  try{
    const {data} = await axios.get(`${process.env.NODE_APP_MAPLE_BASE_URL}/character/hexamatrix-stat`,
     {
      params: { ocid, date },
      headers:{
        'Content-Type': 'application/json',
        "x-nxopen-api-key": process.env.NODE_APP_MAPLE_API_KEY,
        "accept": "application/json"
      }
    })
    // console.log(data)
    const hexaStat = [
      {
        stat_level: data.character_hexa_stat_core[0].main_stat_level,
        stat_name: data.character_hexa_stat_core[0].main_stat_name,
        stat_pos: 'main'
      },{
        stat_level: data.character_hexa_stat_core[0].sub_stat_level_1,
        stat_name: data.character_hexa_stat_core[0].sub_stat_name_1,
        stat_pos: 'additional'
      },{
        stat_level: data.character_hexa_stat_core[0].sub_stat_level_2,
        stat_name: data.character_hexa_stat_core[0].sub_stat_name_2,
        stat_pos: 'additional'
      }
    ]
    // console.log(hexaStat);
    const resultData = {
      date: data.date,
      character_class: data.character_class,
      character_hexa_stat_core: hexaStat
    }
    const result = {
      statusCode: 200,
      result: resultData
    }
    res.status(200).json(result);
  }catch(e){console.log('error')}
}