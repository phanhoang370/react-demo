import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
        super(props);
        
        this.state = {
            username: ''
        }
        this.onHandChange=this.onHandChange.bind(this);
    }
  onHandChange (event) {
    this.setState({
      username : event.target.value
    });
  }
  onHandSubmit (event) {
    event.preventDefault();
  }
  render() {
    return (
         <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="panel panel-danger">
                <div className="panel-heading">
                    <h3 className="panel-title">form</h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.onHandSubmit}>
                       
                    
                        <div className="form-group">
                            <label >Username: </label>
                            <input type="text" onChange={this.onHandChange} className="form-control" id="" placeholder="Input field" />
                        </div>
                        <button type="submit" className="btn btn-primary">save</button>
                    </form>
                </div>
            </div>
         </div>
       
    );
  }
}

export default Form;
