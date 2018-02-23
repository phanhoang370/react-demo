import React, { Component } from 'react';


class FontSize extends Component {
    constructor(props) {
        super(props);
    }
    changeSize (value) {
        this.props.onChangeSize(value);
    }
    reSetDefault = () => {
        this.props.onReset(); 
    }
    
  render() {
        
    return (
      <div>
        <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3 className="panel-title">size : {this.props.fontSize}</h3>
                    </div>
                    <div className="panel-body">
                        <button type="button" onClick={() => this.changeSize(2)} className="btn btn-success">tang </button>
                        <button type="button" onClick={() => this.changeSize(-2)} className="btn btn-success">giam </button>
                    </div>
                </div>
                <button type="button" onClick={this.reSetDefault} className="btn btn-primary">reset</button>
    </div>
    );
  }
}

export default FontSize;
