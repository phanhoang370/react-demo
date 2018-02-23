import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
        super(props);
        
        this.state = {
            username: 'aaa',
            password:'',
            description:'eee',
            selectGender:1,
            langRd:'vi',
            actives:true
        }
        this.onHandChange=this.onHandChange.bind(this);
      this.onHandSubmit=this.onHandSubmit.bind(this);
    }
  onHandChange (event) {
    var target = event.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
        [name]:value
    });

  }
  onHandSubmit (event) {
      alert('A name was submitted: ' + this.state.username);
      console.log(this.state);
        event.preventDefault();
  }
  render() {
    return (
         <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="panel panel-danger">
                <div className="panel-heading">
                    <h3 className="panel-title">form</h3>
                </div>
                <div className="panel-body main-form">
                    <form onSubmit={this.onHandSubmit}>
                       
                    
                        <div className="form-group">
                            <label >Username: </label>
                            <input type="text"  onChange={this.onHandChange} value={this.state.username} name="username" className="form-control"  placeholder="Input field" />
                        </div>
                        <div className="form-group">
                            <label >Password: </label>
                            <input type="password"  onChange={this.onHandChange} value={this.state.password} name="password" className="form-control"  placeholder="Input password" />
                        </div>
                        <div className="form-group">
                            <label >Description: </label>
                            <textarea onChange={this.onHandChange} value={this.state.description} name="description" cols="10" rows="10"></textarea>
                        </div>
                        <div className="form-group">
                            <label >Select: </label>
                            <select name="selectGender" value={this.state.selectGender}  onChange={this.onHandChange}>
                                <option value={0}>Grapefruit</option>
                                <option value={1}>Lime</option>

                            </select>
                        </div>
                        <div className="form-group radio">
                            <label ><input type="radio" onChange ={this.onHandChange} value="en" checked={this.state.langRd === "en"}  name="langRd"  />english </label>
                            <label ><input type="radio" onChange ={this.onHandChange}  name="langRd" value="vi" checked={this.state.langRd === "vi"}  />vietnamese </label>
                            <label>
                                <input
                                    name="actives"
                                    type="checkbox"
                                    checked={this.state.actives === true}
                                    value={true}
                                    onChange ={this.onHandChange} />
                                active
                            </label>
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
