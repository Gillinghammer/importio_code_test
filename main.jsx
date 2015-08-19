import React from "react";
import ReactDOM from "react-dom";
import Table from "./components/Table";

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
          results: data.results,
          columns: data.outputProperties
        });
      }
    }.bind(this));
  },
  render: function() {
    return (
      <div>
        <Table data={this.state} />
      </div>
      );
  }
});

var stackOverflowApi = 'https://api.import.io/store/data/4a249746-6aa2-4784-8945-6d9eb31a9f2d/_query?input/webpage/url=http%3A%2F%2Fstackexchange.com%2F&_user=6b04bec0-900e-47f3-a4f3-006b5a3f5bd4&_apikey=6b04bec0900e47f3a4f3006b5a3f5bd44111ef767b93bfc8a9ec2eee02437e695c039568864ecc5a7d5b1ed415b2f7c8563c67de7abdc2012859ed453490d8f9b57cad63a93016ba1c459028ade07329'

// var ikeaApi = "https://api.import.io/store/data/2a6e4562-1ec5-40d8-876b-5a9d6ad0bd6e/_query?input/webpage/url=http%3A%2F%2Fwww.ikea.com%2Fus%2Fen%2Fsearch%2F%3Fquery%3Dchair&_user=b81b82d5-5dc6-4c91-9791-3c4279727744&_apikey=b81b82d55dc64c9197913c42797277446e16bb52081e38838e61bfced0460ef53fec7dc8c4818e762e8004039e2739716b0ca23bd7bff1efd3c0dabd7b2fab335aa2f8420df378bd247d8386e2bd3ad8"

// //large data set w images
// var stayApi = 'https://api.import.io/store/data/f27c0c90-2277-4895-ae6c-4d91523c2d4f/_query?input/webpage/url=http%3A%2F%2Fwww.stay.com%2Fsan-francisco%2Fattractions%2F&_user=6b04bec0-900e-47f3-a4f3-006b5a3f5bd4&_apikey=6b04bec0900e47f3a4f3006b5a3f5bd44111ef767b93bfc8a9ec2eee02437e695c039568864ecc5a7d5b1ed415b2f7c8563c67de7abdc2012859ed453490d8f9b57cad63a93016ba1c459028ade07329'

$(()=> {
  ReactDOM.render(
    <App source={stackOverflowApi} />,
    $("#react")[0]
    )
});