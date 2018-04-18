import React from 'react';

export default class CountryList extends React.Component {
  filterData(elem) {    
    if (((this.props.countryFilter.length > 0 && elem.Country.toLowerCase().indexOf(this.props.countryFilter.toLowerCase()) > -1) || this.props.countryFilter.length === 0) &&
      ((this.props.capitalFilter.length > 0 && elem.Capital.toLowerCase().indexOf(this.props.capitalFilter.toLowerCase()) > -1) || this.props.capitalFilter.length === 0) &&
      ((this.props.regionFilter.length > 0 && elem.Region.toLowerCase().indexOf(this.props.regionFilter.toLowerCase()) > -1) || this.props.regionFilter.length === 0) &&
      ((this.props.subregionFilter.length > 0 && elem.Subregion.toLowerCase().indexOf(this.props.subregionFilter.toLowerCase()) > -1) || this.props.subregionFilter.length === 0)) {
      return true;
    }
    return false;
  }

  render() {
    if (this.props.list.length > 0) {
      return (
        <table>
        <tr>
          <th>Country</th>
          <th>Capital</th>
          <th>Region</th>
          <th>Subregion</th>
          <th>Latitude</th>
          <th>Longitude</th>
        </tr>
        {this.props.list.map(m => {
          if (this.filterData(m)) {
          return (
            <tr>
              <td>{m.Country}</td>
              <td>{m.Capital}</td>
              <td>{m.Region}</td>
              <td>{m.Subregion}</td>
              <td>{m.Latitude}</td>
              <td>{m.Longitude}</td>
           </tr>
          );
          } else {
            return null;
          }
        })}
        </table>
      );
    } else {
      return null;
    }
  }
}