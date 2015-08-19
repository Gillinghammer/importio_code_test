import React from 'react';

export default class TableHeader extends React.Component {
  render() {
    // console.log("header data:", this.props.headerData);
    if( this.props.headerData != null){
      var tableHeader = this.props.headerData.map(function(value, index) {
        return (
            <th key={value.name}>{value.name}</th>
          );
      });
    }
    return (
      <tr>
        {tableHeader}
      </tr>
      )
  }
}