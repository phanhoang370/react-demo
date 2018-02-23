import React, {Component} from 'react';


class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            selectActive: true
        }
    }

    onClose = () => {
        this.props.onForm();
    }
    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if(name === 'selectActive') {
            value= target.value === 'true' ? true : false;
        }
        this.setState({
            [name]:value
        });
    }
    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
    }

    render() {

        return (
            <div className="panel panel-warning">
                <div className="panel-heading">Panel Heading <span
                    className="fa fa-times-circle text-right" onClick={this.onClose}></span></div>
                <div className="panel-body">
                    <form action="" onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Username: </label>
                            <input type="text" value={this.state.username} onChange={this.onChange} name="username"
                                   className="form-control"
                                   placeholder="Input field"/>
                        </div>
                        <div className="form-group">
                            <label>Status: </label>
                            <select name="selectActive" value={this.state.selectActive} onChange={this.onChange}
                                    className="form-control">
                                <option value={true}>active</option>
                                <option value={false}>isactive</option>

                            </select>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-warning float-l"><span
                                className="fa fa-plus mr-5 "></span>save
                            </button>
                            <button type="submit" className="btn btn-danger float-r"><span
                                className="fa fa-close mr-5 "></span>cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default TaskForm;
