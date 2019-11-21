import React, { Component } from 'react';

class Itinerary extends Component {

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
