import React, {Component} from 'react';
import './App.css';
import TaskForm from './components/TaskForm'
import Control from './components/Control'
import TaskList from './components/TaskList'


class Crud extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks:[],
            isDisplayForm: false
        }
    }
    componentWillMount(){
        if(localStorage && localStorage.getItem('tasks')){
            var tasks = JSON.parse(localStorage.getItem('tasks'));
            this.setState({
                tasks:tasks
            })
        }
    }

    onGenerate=() => {
        var tasks = [
            {
                id: this.generateID(),
                name:'hoc php',
                status: false

            },
            {
                id: this.generateID(),
                name:'hoc react',
                status: true

            },
            {
                id: this.generateID(),
                name:'hoc js',
                status: true

            }
        ];
       this.setState({
           tasks:tasks
       });
       localStorage.setItem('tasks', JSON.stringify(tasks));


    }
    s4(){
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    generateID(){
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4() +this.s4()+ this.s4()+ this.s4();
    }
    onShowForm = () =>{
        this.setState({
            isDisplayForm: !this.state.isDisplayForm
        })
    }
    onCloseForm = () => {
        this.setState({
            isDisplayForm:!this.state.isDisplayForm
        });
    }
    onSubmit = (data) => {
        var {tasks}= this.state;
        data.id=this.generateID();
        task.push(data);
        this.setState({
            tasks:tasks
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
        //console.log(data);
    }
    render() {
    var {tasks, isDisplayForm} = this.state;  //var tasks = this.state.tasks
    var elementTaskForm = isDisplayForm ? <TaskForm onForm={this.onCloseForm} onSubmit={this.onSubmit} /> :''
        return (
            <div className="container">
                <div className="row">
                    <h3 className="center">Manage work</h3>
                    <div className={isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' :''}>
                        {elementTaskForm}
                    </div>
                    <div className={isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' :'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
                        <button type="button" className="btn btn-primary" onClick={this.onShowForm}>
                            <span className="fa fa-plus mr-5"></span>Thêm Công Việc
                        </button>
                        <button type="button" className="btn btn-primary ml-5" onClick={this.onGenerate}>
                            <span className="fa fa-plus mr-5" ></span>Generate Data
                        </button>

                        <Control />

                        <div className="row mt-15">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <TaskList tasks={tasks} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Crud;
