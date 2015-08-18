import React from "react";
import ReactDOM from "react-dom";

var App = React.createClass({
  getInitialState: function() {
    return {
      results: ''
    };
  },
  componentDidMount: function() {
    $.get(this.props.source, function(json_data) {
      var data = json_data;
      if (this.isMounted()) {
        this.setState({
          results: data.results
        });
      }
    }.bind(this));
  },
  getTable: function() {
    var resultsData = this.state.results;
    if(resultsData[0] != null){
      var tableData = resultsData.map(function(value) {
        console.log('value', value.productpadding_link_prices);
        return value
      });
    }
    return tableData;
  },
  render: function() {
    return (
      <div>
        {this.getTable()}
      </div>
    );
  }
});

$(()=> {
  ReactDOM.render(
    <App source="https://api.import.io/store/data/2a6e4562-1ec5-40d8-876b-5a9d6ad0bd6e/_query?input/webpage/url=http%3A%2F%2Fwww.ikea.com%2Fus%2Fen%2Fsearch%2F%3Fquery%3Dchair&_user=b81b82d5-5dc6-4c91-9791-3c4279727744&_apikey=b81b82d55dc64c9197913c42797277446e16bb52081e38838e61bfced0460ef53fec7dc8c4818e762e8004039e2739716b0ca23bd7bff1efd3c0dabd7b2fab335aa2f8420df378bd247d8386e2bd3ad8" />,
    $("#react")[0]
    )
});