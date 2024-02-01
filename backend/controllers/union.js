const axios = require('axios');

exports.getCharacterUnion = async (req, res, next) => {
  const {ocid, date} = req.query;
  
  try{
    const {data} = await axios.get(`${process.env.NODE_APP_MAPLE_BASE_URL}/user/union`,
     {
      params: {ocid, date},
      headers:{
        'Content-Type': 'application/json',
        "x-nxopen-api-key": process.env.NODE_APP_MAPLE_API_KEY,
        "accept": "application/json"
      }
    })
    // console.log(data)
    const result = {
      statusCode: 200,
      result: data
    }
    res.status(200).json(result);
  }catch(e){
    console.log(e)
  }
}

exports.getCharacterUnionRaider = async (req, res, next) => {
  const {ocid, date} = req.query;
  
  try{
    const {data} = await axios.get(`${process.env.NODE_APP_MAPLE_BASE_URL}/user/union-raider`,
     {
      params: {ocid, date},
      headers:{
        'Content-Type': 'application/json',
        "x-nxopen-api-key": process.env.NODE_APP_MAPLE_API_KEY,
        "accept": "application/json"
      }
    })
    // console.log(data)
    const result = {
      statusCode: 200,
      result: data
    }
    res.status(200).json(result);
  }catch(e){
    console.log(e)
  }
}

// 유니온 아티팩트 정보 조회
exports.getCharacterUnionArtifact = async (req, res, next) => {
  const {ocid, date} = req.query;
  
  try{
    const {data} = await axios.get(`${process.env.NODE_APP_MAPLE_BASE_URL}/user/union-artifact`,
     {
      params: {ocid, date},
      headers:{
        'Content-Type': 'application/json',
        "x-nxopen-api-key": process.env.NODE_APP_MAPLE_API_KEY,
        "accept": "application/json"
      }
    })
    const resultData = {
      ...data,
      union_artifact_crystal: data.union_artifact_crystal.map(el=>{return {...el, name: el.name.split(' : ')[1]}})
    }
    
    const result = {
      statusCode: 200,
      result: resultData
    }
    res.status(200).json(result);
  }catch(e){
    console.log(e)
  }
}

