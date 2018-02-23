import React, { Component } from 'react';


class Result extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            colors:['red','green', 'blue', '#ccc']
        }
    }
    setStyle () {
        return {
            color:this.props.color,
            borderColor:this.props.color,
            fontSize:this.props.fontSize
        };
    }
    
  render() {
        
    return (
      <div>
        <div className="panel panel-warning">
                <div className="panel-heading">
                        <h3 className="panel-title">result</h3>
                </div>
                <div className="panel-body">
                    <p>color : {this.props.color} - fontsize : {this.props.fontSize}</p>
                    <div>
                        <h3 style={this.setStyle()}>noi dung setting</h3>
                    </div>
                </div>
                
            </div>
    </div>
    );
  }
}

export default Result;
