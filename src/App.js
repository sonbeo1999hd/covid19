import React from 'react';
import logo from './logo.svg';
import './style/style.scss'
import Cards from "./components/Card";
import Chart from "./components/Chart";
import CountryPicker from "./components/CountryPicker";
import {fetchData} from './helpers/apiCaller'
class App extends React.Component{
  constructor(props) {
    super();
    this.state={
      data: [],
      country: null
    }
  }
  async componentDidMount(){
    const fetchdata = await fetchData();
    this.setState({
      data: fetchdata,
    })
  }
  handleChangeCountry = async (country) => {
    const fetchdata = await fetchData(country);
    this.setState({
      data: fetchdata,
      country: country,
    })
  }
  render(){
    return (
      <div className="app">
        <h2>COVID 19 DATA</h2>
        <Cards data={this.state.data}></Cards>
        <CountryPicker handleChangeCountry={this.handleChangeCountry}></CountryPicker>
        <Chart data={this.state.data} country={this.state.country}></Chart>

      </div>
    );
  }
}

export default App;
