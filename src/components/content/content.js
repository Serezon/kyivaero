import React from 'react'
import FlightBoard from './flightBoard'
import Search from './search'
import {Route} from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import urlParamsMaker from '../../helpers/urlMaker'
class Content extends React.Component {
  state = {
    newParamsView: '',
    newParams: '',
    date: ''
  }
  urlParamsMaker = new urlParamsMaker ();
  componentDidMount () {
    this.props.getApiData(this.props.mark, this.formateDate())
  }
  swithcesDates = (arg) => {
    let date = new Date();
    if(arg) {
      date.setDate(date.getDate() + arg)
    }
    let day = date.getDate()
    let month = date.getMonth()
    day = day.toString().length === 1 ? `0${day}` : day
    month = month.toString().length === 1 ? `0${month}` : month
    return `${day}/${month}`
  }
  formateDate = (arg) => {
    let date = new Date();
    if(arg) {
      date.setDate(date.getDate() + arg)
    }
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    day = day.toString().length === 1 ? `0${day}` : day
    month = month.toString().length === 1 ? `0${month}` : month
    return `${day}-${month}-${year}`
  }
  getDepartures = () => {
    let search = ''
    try{
      search = this.state.newParams.find((item) => (
        item['search']
      ))
    }catch(err) {
      search = false
    }
    if(search) {
      // console.log(this.state.newParams)
      this.props.departures(search)
    } else {
      this.props.departures()
    }
  }
  getArrivals = () => {
    let search = ''
    try{
      search = this.state.newParams.find((item) => (
        item['search']
      ))
    }catch(err) {
      search = false
    }
    if(search) {
      // console.log(this.state.newParams)
      this.props.arrivals(search)
    } else {
      this.props.arrivals()
    }
  }
  applyParamsChanges = (newParams) => {
    this.setState({
      newParamsView: newParams[1],
      newParams: newParams[0]
    })
  }
  flightsAccordingToDate = (arg) => {
    // console.log(this.formateDate(arg))
    // console.log(this.state.newParams)
    let search = ''
    try{
      search = this.state.newParams.find((item) => (
        item['search']
      ))
    }catch(err) {
      search = false
    }
    this.urlParamsMaker.addParam({
      date: this.formateDate(arg)
    })
    console.log(this.urlParamsMaker.urlParams)
    this.setState({
      newParamsView: this.urlParamsMaker.urlParams
    })
    if (search) {
      this.props.getApiData(this.props.mark, this.formateDate(arg), search)
    } else this.props.getApiData(this.props.mark, this.formateDate(arg))
    // ? this.props.getApiData(this.props.mark, this.formateDate(arg), this.state.newParams)
    // : this.props.getApiData(this.props.mark, this.formateDate(arg))
  }
  getContentWithParams = (newParams) => {
    let key = Object.keys(newParams)[0]
    let search = newParams[0].find((item) => (
      item['search']
    ))
      // console.log(newParams[0])
      if(search){
        this.props.getFlightsWithParams(search)
      } else this.props.mark === 'departure'
            ? this.getDepartures()
            : this.getArrivals()
    this.applyParamsChanges(newParams)
  }
  render () {
    if(this.props.items) {
      return (
        <Router>
        <div className="content">
          <Search applyParamsChanges={this.applyParamsChanges} urlParamsMaker={this.urlParamsMaker} getContentWithParams={this.getContentWithParams}></Search>
          <FlightBoard items={this.props.items} departures = {this.getDepartures} switchDateValue = {this.swithcesDates} flightsAccordingToDate = {this.flightsAccordingToDate} arrivals = {this.getArrivals} urlParams = {this.state.newParamsView}></FlightBoard>
        </div>
        </Router>
      );
    }
    return (
      <div className="content"></div>
    )

  }
}

export default Content