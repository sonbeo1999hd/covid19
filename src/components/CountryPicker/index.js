import React, {useEffect, useState} from 'react';
import {NativeSelect, FormControl} from "@material-ui/core";
import {countries} from '../../helpers/apiCaller'
const CountryPicker = ({handleChangeCountry}) => {
  const [fetchCountries, setFetchCountries] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setFetchCountries(await countries());
    }
    fetchAPI();
  }, [])
  console.log(fetchCountries)
  return (
    <FormControl className={"country-picker container"}>
      <NativeSelect defaultValue={""} onChange={(e) => handleChangeCountry(e.target.value)}>
        <option value="">Global</option>
        {fetchCountries && fetchCountries.map((value, index) => <option key={index} value={value}>{value}</option>)}
      </NativeSelect>
    </FormControl>
  )
}
export default CountryPicker