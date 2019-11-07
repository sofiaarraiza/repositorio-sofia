function AddCitiesList(props) {
    const cities = props.cities;
    const listItems = this.state.cities.map((city)=> <li>{city.name + " " + city.country}</li>);
    return (
      <ul>{listItems}</ul>
    );
  }

  export default AddCitiesList;

  