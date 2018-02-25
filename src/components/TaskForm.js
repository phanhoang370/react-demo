import React, {Component} from 'react';


class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:'',
            name: '',
            status: true
        }
    }

    onClose = () => {
        this.props.onForm();
    }
    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if(name === 'status') {
            value= target.value === 'true' ? true : false;
        }
        this.setState({
            [name]:value
        });
    }
    componentWillMount () {
        if(this.props.task) {
            this.setState({
                id: this.props.task.id,
                name: this.props.task.name,
                status: this.props.task.status
            });
        }
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps && nextProps.task) {
            this.setState({
                id: nextProps.task.id,
                name: nextProps.task.name,
                status: nextProps.task.status
            });
        }else if(!nextProps.task) {
            this.state = {
                id:'',
                name: '',
                status: true
            }
        }
    }
    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.onClear();
        this.onClose();
    }
    onClear = () => {
        this.setState({
            name:'',
            status:false
        });
    }

    render() {
        var {id} =this.state;
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">{id !== '' ? 'update work' : 'add work'} <span
                    className="fa fa-times-circle text-right" onClick={this.onClose}></span></div>
                <div className="panel-body">
                    <form action="" onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Username: </label>
                            <input type="text" value={this.state.name} onChange={this.onChange} name="name"
                                   className="form-control"
                                   placeholder="Input field"/>
                        </div>
                        <div className="form-group">
                            <label>Status: </label>
                            <select name="status" value={this.state.status} onChange={this.onChange}
                                    className="form-control">
                                <option value={true}>active</option>
                                <option value={false}>isactive</option>

                            </select>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-warning float-l"><span
                                className="fa fa-plus mr-5 "></span>save
                            </button>
                            <button type="button" className="btn btn-danger float-r" onClick={this.onClear}><span
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
