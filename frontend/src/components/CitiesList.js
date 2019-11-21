import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCities } from '../actions/getCities';
import { Link } from 'react-router-dom';


class CitiesList extends Component {
  componentDidMount(){
    this.props.getCities();
  }

  constructor(){
    super();
    this.state ={
      search: ''
    };
  }

  updateSearch(event){
    this.setState({search: event.target.value.substring(0,20)})
  }

  render() {
    const cities = Array.from(this.props.cities.filter(
      (city) => {
        return city.name.toUpperCase().indexOf(this.state.search.toUpperCase()) == 0;
      }
    ) || []);
    const cityItem = cities.map(city => (

      <Link to={`/mytinerary/:${city._id}`}>
        <li key={city._id} className="citiesPage-list">
        {city.name + " "}{city.country}
        </li>
      </Link>
    ));
    return (
      <div className="citiesList-div">
          <input type="text" 
            value={this.state.search} placeholder="Search by city"
            onChange={this.updateSearch.bind(this)}/>
          <ul className="citiesPage-ul">
            

          {cityItem}

          </ul>
          
      </div>
    );
  }
}

CitiesList.propTypes = {
  getCities: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired
}

const mapStateToProps = (state) =>
{
  return ({
  
  cities: state.cities.cities
})
}
 
export default connect(mapStateToProps, { getCities })(CitiesList);

{/*class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      search: ''
    };
  }

  updateSearch = e => {
    console.log("e")
    console.log(e.target)
    this.setState({ search: e.target.value.substr(0, 20) })
  }
}*/


    /*let filteredCities = this.props.cities.filter(
      (city) => {
        return city.name.indexOf(this.state.search) !== -1;
      }
    );

    if (!this.state.isFetching) {
      const cityItems = this.props.cities.map((city) => <li key={city._id} className="citiesPage-list">{city.name + " " + city.country}</li>);
      return <div><ul className="citiesPage-ul">{cityItems}</ul>
        <input type="text"
          value={this.state.search}
          onChange={(e) => { this.updateSearch(e) }}
    />
      </div>
    }*/}
