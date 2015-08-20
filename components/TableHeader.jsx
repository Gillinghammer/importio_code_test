import React from 'react';

export default class TableHeader extends React.Component {
  render() {
    if( this.props.headerData != null){
      var tableHeader = this.props.headerData.map(function(value, index) {
        return (
            <th key={value.name} >{value.name}</th>
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