/*import React, { Component } from 'react'
import CitiesList from './CitiesList';

class VisibleCities extends Component {
  constructor() {
    super()
    this.state = {
      cities: [],
      filteredCities: []
    }
  }

  componentWillMount() {
    this.setState({
      cities,
      filteredCities: cities
    })
  }

  filterCitites = (cityFilter) => {
    let filteredCities = this.state.cities
    filteredCities = filteredCities.filter((city) => {
      let cityName = city.cityName.toLowerCase()
      return cityName.indexOf(
        cityFilter.toLowerCase()) !== -1
    })
    this.setState({
      filteredCities
    })
  }

  render() {
    return (
      <CitiesList cities={this.state.filteredCities} match={this.props.match} onChange={this.filterCities} />
    )
  }
}

export default VisibleCities*/