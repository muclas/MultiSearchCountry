import React from 'react';

export default class SearchBoxes extends React.Component {
  constructor(props){
    super(props);

    this.countryFilterChanged = this.contryFilterChanged.bind(this);
    this.capitalFilterChanged = this.capitalFilterChanged.bind(this);
    this.regionFilterChanged = this.regionFilterChanged.bind(this);
    this.subregionFilterChanged = this.subregionFilterChanged.bind(this);
  }

  contryFilterChanged(e) {
    this.props.onCountryFilterChanged(e.target.value);
  }

  capitalFilterChanged(e) {
    this.props.onCapitalFilterChanged(e.target.value);
  }

  regionFilterChanged(e) {
    this.props.onRegionFilterChanged(e.target.value);
  }

  subregionFilterChanged(e) {
    this.props.onSubregionFilterChanged(e.target.value);
  }
  
  render() {
    return (
      <div>
      <input type="text" onChange={this.countryFilterChanged} value={this.props.countryFilter} placeholder="Filter by Country" />
      <input type="text" onChange={this.capitalFilterChanged} value={this.props.capitalFilter} placeholder="Filter by Capital" />
      <input type="text" onChange={this.regionFilterChanged} value={this.props.regionFilter} placeholder="Filter by Region" />
      <input type="text" onChange={this.subregionFilterChanged} value={this.props.subregionFilter} placeholder="Filter by Subregion" />
      </div>
    );
  }
}