import React, { Component } from 'react';


class PickerColor extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            colors:['red','green', 'blue', '#ccc']
        }
    }
    showColor (color) {
        return {
            backgroundColor:color
        };
    }
    setActiveColor (color) {
        this.props.onReceiveColor(color);
    }
  render() {
        var elementColor =this.state.colors.map((color, index) =>{
        return <span key={index} style={this.showColor(color)} 
        className={this.props.color === color ? 'active' : ''} 
        onClick={ () => this.setActiveColor(color)}
        >
        </span>
    });
    return (
      <div>
        <div className="panel panel-primary">
            <div className="panel-heading">
                <h3 className="panel-title">color picker</h3>
            </div>
            <div className="panel-body body-color">
                {elementColor}
            </div>
        </div>
    </div>
    );
  }
}

export default PickerColor;
