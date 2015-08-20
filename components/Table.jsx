import React from 'react';
import Row from './Row.jsx';
import TableHeader from './TableHeader.jsx';

export default class Table extends React.Component {
  render() {
    var resultsData = this.props.data.results;
    var columns = this.props.data.columns;
    if(resultsData[0] != null){
      var tableRows = resultsData.map(function(value, index) {
        return <Row headerData={columns} rowData={value} key={Math.random()} rowIndex={index} />;
      });
    }
    return (
      <table className="table table-striped">
        <thead>
          <TableHeader headerData={this.props.data.columns} key={Math.random()} />
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </table>
      );
  }
}