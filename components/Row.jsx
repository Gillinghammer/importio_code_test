import React from 'react';

export default class Row extends React.Component {
  render() {
    var columnHeaders = this.props.headerData;
    var first_column = columnHeaders[0];
    console.log(this.props.rowData);
    var row = this.props.rowData
    if(this.props.rowData != null){
      var tableData = columnHeaders.map(function(column, i){
        console.log("Column: ", column.name + " " + column.type);
        console.log("rowData with column key", row[column.name]);
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
            <img src={row[column.name]} />
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
      <tr key={Math.random()}>
      {tableData}
      </tr>
      )
  }
}