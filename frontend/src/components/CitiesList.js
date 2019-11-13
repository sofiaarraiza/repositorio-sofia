import React, {Component} from 'react';
const API = 'http://localhost:5000/cities';
//import AddCitiesList from './AddCitiesList.js';
//const DEFAULT_QUERY = 'redux';

class CitiesList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isFetching: true,
            cities: null
        };
    }

    async componentDidMount() {
        
      fetch(API)
        .then(response => response.json())
        .then( data => this.setState( {cities: data, isFetching: false}))
        .catch(err => {            console.log("error: " + err)        });
        // const resppuesta = await info.json();
        // this.setState({ cities: resppuesta });
        // console.log(resppuesta);

        //const cities = this.state.cities;

    }

    render() {
      if(this.state.isFetching){
        return (<div> loading </div>)
      }

      if(!this.state.isFetching){
        const cityItems = this.state.cities.map((city)=> <li key={city._id} className="citiesPage-list">{city.name + " " + city.country}</li>);
        return <div><ul className="citiesPage-ul"> {cityItems} </ul></div>
        //<li key={todo.id}>
        //<AddCitiesList cities={cities} /> 
        //<div> {this.state.cities[0].name + " " + this.state.cities[0].country}</div>
        // <ComponenteCiuadad pros{name y citi} />
      }

    }
}

export default CitiesList;


//const numbers = [1, 2, 3, 4, 5];
//ReactDOM.render(
//  <NumberList numbers={numbers} />,
//  document.getElementById('root')
//);