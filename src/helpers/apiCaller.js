import axios from 'axios'

const API = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
  let changeUrl = API;
  if(country){
    changeUrl = `${API}/countries/${country}`
  }
  try{
    const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(changeUrl);
    const modifiedData = {confirmed, recovered, deaths, lastUpdate};
    return modifiedData;
  }catch (e) {
    console.log(e);
  }
}
export const fetchDailyData = async () => {
  try{
    const {data} = await axios.get(`${API}/daily`);
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      reportDate: dailyData.reportDate,
    }))
    return modifiedData;
    // console.log(response);
  }catch (e) {
    console.log(e)
  }
}
export const countries = async () => {
  try{
    const {data: {countries}} = await axios.get(`${API}/countries`);
    return countries.map((country) => country.name)
  }catch (e) {
    console.log(e);
  }
}