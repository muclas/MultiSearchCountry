import React from 'react';
import SearchBoxes from './SearchBoxes';
import CountryList from './CountryList';

export default class SearchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countryFilter: '',
      capitalFilter: '',
      regionFilter: '',
      subregionFilter: '',
      list: [ ],
    };
    this.countryFilterChanged = this.contryFilterChanged.bind(this);
    this.capitalFilterChanged = this.capitalFilterChanged.bind(this);
    this.regionFilterChanged = this.regionFilterChanged.bind(this);
    this.subregionFilterChanged = this.subregionFilterChanged.bind(this);
  }

  componentWillMount() {
    this.setState({
      loading: true,
    });
  }
  componentDidMount() {
    fetch("https://raw.githubusercontent.com/mledoze/countries/master/countries.json")
    .then(response => {
      return response.json();
    })
    .then(js => {
      this.setState({
        list: js.map(j => {
          return { 
            Country: j.name.official,
            Capital: j.capital.length > 0 ? j.capital[0] : '',
            Region: j.region,
            Subregion: j.subregion,
            Latitude: j.latlng[0],
            Longitude: j.latlng[1],
          };
        })
      })
    })
  }

  contryFilterChanged(e) {
    this.setState({
      countryFilter: e,
    });
  }

  capitalFilterChanged(e) {
    this.setState({
      capitalFilter: e,
    });
  }

  regionFilterChanged(e) {
    this.setState({
      regionFilter: e,
    });
  }

  subregionFilterChanged(e) {
    this.setState({
      subregionFilter: e,
    });
  }

  render() {
    return (
      <div>
        <SearchBoxes countryFilter={this.state.countryFilter}
          onCountryFilterChanged={this.countryFilterChanged}
          capitalFilter={this.state.capitalFilter}
          onCapitalFilterChanged={this.capitalFilterChanged}
          regionFilter={this.state.regionFilter}
          onRegionFilterChanged={this.regionFilterChanged}
          subregionFilter={this.state.subregionFilter}
          onSubregionFilterChanged={this.subregionFilterChanged} />
        <CountryList list={this.state.list}
          countryFilter={this.state.countryFilter}
          capitalFilter={this.state.capitalFilter}
          regionFilter={this.state.regionFilter}
          subregionFilter={this.state.subregionFilter} />
      </div>
    );
  }
}