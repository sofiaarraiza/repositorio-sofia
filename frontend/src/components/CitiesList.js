import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCities } from '../actions/getCities';
import { Link } from 'react-router-dom';


class CitiesList extends Component {
  componentDidMount() {
    this.props.getCities();
  }

  constructor() {
    super();
    this.state = {
      search: ''
    };
  }

  updateSearch(event) {
    this.setState({ search: event.target.value.substring(0, 20) })
  }

  render() {
    const cities = Array.from(this.props.cities.filter(
      (city) => {
        return city.name.toUpperCase().indexOf(this.state.search.toUpperCase()) === 0;
      }) || []);
    const cityItem = cities.map(city => (
      <li key={city._id} className="citiesPage-list">
        <div className="cityList-element">
          <Link to={`/mytinerary/${city._id}`} key={city._id} style={{ textDecoration: 'none' }}>
            <h4>{city.name + ", "}{city.country}</h4>
            <img src={city.image} alt="City" className="citiesPage-image" />
          </Link>
        </div>
      </li>
    ));
    return (
      <div className="citiesList-div">
        <input type="text"
          value={this.state.search} placeholder="Search by city"
          onChange={this.updateSearch.bind(this)} id="inputSearchBar"/>
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

const mapStateToProps = (state) => {
  return ({ cities: state.cities.cities })
}

export default connect(mapStateToProps, { getCities })(CitiesList);
