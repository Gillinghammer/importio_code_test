import React from 'react';

export default class Row extends React.Component {
  render() {
    var columnHeaders = this.props.headerData;
    var first_column = columnHeaders[0];
    var row = this.props.rowData
    if(this.props.rowData != null){
      var tableData = columnHeaders.map(function(column, i){
        switch(column.type) {
          case "CURRENCY":
          return (
            <td key={i} >
            ${row[column.name]}
            </td>
            )
          break;
          case "IMAGE":
          return (
            <td key={i} >
            <img src={row[column.name]} className="img-rounded img-responsive" />
            </td>
            )
          break;
          case "URL":
          return (
            <td key={i} >
              <a href={row[column.name]} target="_blank" >link</a>
            </td>
            )
          break;
          default:
          return (
            <td key={i} >
            {row[column.name]}
            </td>
            )
        }
      });
    }
    return (
      <tr key={Math.random()} role="row" className={this.props.rowIndex % 2 === 0 ? "even" : "odd" }>
      {tableData}
      </tr>
      )
  }
}