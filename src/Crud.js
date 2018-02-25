import React, {Component} from 'react';
import './App.css';
import TaskForm from './components/TaskForm'
import Control from './components/Control'
import TaskList from './components/TaskList'
import demo from './redux/demo'


class Crud extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks:[],
            isDisplayForm: false,
            taskEdit:null,
            filter:{
                name:'',
                status:-1
            }
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
        if(this.state.isDisplayForm && this.state.taskEdit !== null) {
            this.setState({
                isDisplayForm: true,
                taskEdit:null
            });
        }else {
            this.setState({
                isDisplayForm: !this.state.isDisplayForm,
                taskEdit:null
            });
        }

    }
    onCloseForm = () => {
        this.setState({
            isDisplayForm:!this.state.isDisplayForm
        });
    }
    onSubmit = (data) => {
        var {tasks}= this.state;
        if(data.id === ''){
            data.id=this.generateID();
            tasks.push(data);
        }else {
            var index = this.findIndex(data.id);
            tasks[index] = data;
        }

        this.setState({
            tasks:tasks,
            taskEdit:null
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));

    }
    onUpdateStatus = (id) => {
        var {tasks} = this.state;
        var index = this.findIndex(id);
        if(index !== -1) {
            tasks[index].status =!tasks[index].status;
            this.setState({
                tasks:tasks
            });
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }
    findIndex = (id) => {
        var {tasks} = this.state;
        var result= -1;
        tasks.forEach((task, index) => {
            if(task.id === id) {
                result = index;
            }
        });
        return result;
    }
    onDeleteId = (id) => {
        var {tasks} = this.state;
        var index = this.findIndex(id);

        if(index !== -1) {
            tasks=tasks.slice(1);

            this.setState({
                tasks:tasks
            });
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
        this.onCloseForm();

    }
    onOpenForm = () => {
        this.setState({
            isDisplayForm: true
        })
    }
    onUpdate = (id) => {
        var {tasks} = this.state;
        var index = this.findIndex(id);
         var taskEditing=tasks[index];
        console.log(taskEditing);
            this.setState({
                taskEdit:taskEditing
            });
            localStorage.setItem('tasks', JSON.stringify(tasks));
            console.log(this.state.taskEdit);
        this.onOpenForm();
    }
    onFilter = (filterName, filterStatus) => {
        console.log(filterName, '-',filterStatus);
        filterStatus=parseInt(filterStatus, 10);
        this.setState({
            filter:{
                name:filterName,
                status:filterStatus
            }
        });
    }
    render() {
    var {tasks, isDisplayForm, taskEdit, filter} = this.state;  //var tasks = this.state.tasks
        // if(fi)
    var elementTaskForm = isDisplayForm ? <TaskForm onForm={this.onCloseForm} task={taskEdit} onSubmit={this.onSubmit} /> :''
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
                        {/*<button type="button" className="btn btn-primary ml-5" onClick={this.onGenerate}>*/}
                            {/*<span className="fa fa-plus mr-5" ></span>Generate Data*/}
                        {/*</button>*/}

                        <Control />

                        <div className="row mt-15">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <TaskList onFilter={this.onFilter} onUpdateStatus={this.onUpdateStatus} onUpdate={this.onUpdate} onDeleteId={this.onDeleteId} tasks={tasks} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Crud;
