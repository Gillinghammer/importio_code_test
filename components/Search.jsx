import React from 'react';

export default class Search extends React.Component {
  render() {
    return (
      <div className="input-group">
        <span className="input-group-addon" id="basic-addon1">Import.io API</span>
        <input type="text" className="form-control" placeholder="Username" aria-describedby="basic-addon1" value={this.props.val} onChange={this.props.handleChange} />
        <span className="input-group-btn">
                <button className="btn btn-default" type="button" onClick={this.props.fetch}>Fetch Data!</button>
              </span>
      </div>
      );
  }
}