import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import logo from './logo.svg';
 import './App.css';
import Header from './components/Header'
import Product from './components/Product'
import Qrcode from './components/Qrcode'
import ReadQrcode from './components/ReadQrcode'
import LegacyModeExample from './components/LegacyModeExample'
import PickerColor from './components/PickerColor'
import Result from './components/Result'
import FontSize from './components/FontSize'
import Form from './components/Form'

class App extends Component {
    constructor(props) {
        super(props);
        this.state ={
            productTable: [
                {
                    id:1,
                    name:'iphone x',
                    price:202,
                    status:true
                },
                {
                    id:2,
                    name:'oppo',
                    price:201,
                    status:false
                },
                {
                    id:3,
                    name:'huwei',
                    price:202,
                    status:true
                }
            ],
            color:'red',
            fontSize:12,
            isActive :true
        };
        //this.setState=this.setState.bind(this);
    }
    showInfo(product) {
        if(product.status) {
            return <div className="ml-30">
            <h2>id:{product.id}</h2>
            <h2>name:{product.name}</h2>
            <h2>old:{product.old}</h2>
            <h2>status:{product.status ? 'active' : 'pending'}</h2>
        </div>
        }
    }
    onClick (){
        console.log('lcik me');
    }
    onAddProduct = () =>{
        console.log(this.refs.name.value);
    }
    onSetState = () =>{
        // if(this.state.isActive === true) {
        //     this.setState({
        //         isActive :false
        //     });
        // }else{
        //     this.setState({
        //         isActive :true
        //     });
        // }

        this.setState({
            isActive : !this.state.isActive
        });

    }
    onSetColor = (params) =>  {
        this.setState ({
            color:params
        });
    }
    onChangeSize = (value) => {
        this.setState({
            fontSize:(this.state.fontSize + value >=8 && this.state.fontSize + value <= 36) ? this.state.fontSize + value : this.state.fontSize
        });
    }
    onReset = () =>{
        this.setState({
            color:'red',
            fontSize:12
        });
    }
  render() {
    var a=5;
    var product = {id:1,name:'hoang',old:'24', status:true};
    var users=[
        {
            id:1,
            name:'ten a',
            age:202
        },
        {
            id:2,
            name:'ten b',
            age:201
        },
        {
            id:3,
            name:'ten c',
            age:202
        }

    ];
    var products=[
        {
            id:1,
            name:'iphone x',
            price:202,
            status:false
        },
        {
            id:2,
            name:'oppo',
            price:201,
            status:true
        },
        {
            id:3,
            name:'huwei',
            price:202,
            status:true
        }

    ];
    let mapProduct =products.map((pro, index) => {
        let result = '';
       
        if(pro.status) {
            result = <Product key={pro.id} name={pro.name} price={pro.price}>{pro.name}</Product>
        }
        return result;
    });
    let mapTable = this.state.productTable.map((pro, index) => {
        let result = null;
        
        if(pro.status) {
            result = <tr key={index}>
                        <td>{index}</td>
                        <td>{pro.name}</td>
                        <td><span className="label label-success">{pro.price}</span></td>
                    </tr>
        }
        return result;
    });
    var elements =users.map((user, index) =>{
        return <div className="ml-30" key={user.id}>
            <h2>
                {user.name}
            </h2>
            <p>{user.age}</p>
        </div>
    });
    return (
      <div>
     
        {/*<ReadQrcode />*/}
        <LegacyModeExample />
      {/* <Header />*/}
        <div className="row">
            <Form />
          <Qrcode />
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <PickerColor color={this.state.color} onReceiveColor={this.onSetColor} />
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <FontSize onChangeSize={this.onChangeSize} onReset={this.onReset} fontSize={this.state.fontSize} />
            </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <Result fontSize={this.state.fontSize} color={this.state.color} />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="panel panel-danger">
                <div className="panel-heading">
                    <h3 className="panel-title">add product</h3>
                </div>
                <div className="panel-body">
                    <div className="form-group">
                        <label >name product</label>
                        <input type="text" ref="name" className="form-control" />
                    </div>
                    <button type="submit" onClick={this.onAddProduct} className="btn btn-default">Save</button>
                </div>
            </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <table className="table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>name</th>
                      <th>price</th>
                    </tr>
                  </thead>
                  <tbody>
                {mapTable}
                  </tbody>
                </table>
                <button type="button" onClick={this.onSetState} className="btn btn-default">Active:{this.state.isActive === true ? 'true' : 'false'}</button>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              {mapProduct}
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <button type="button" className="btn btn-default" onClick={this.onClick}>button click</button>
          </div>
        </div>
        {this.showInfo(product)} <br/>
        {elements}
      </div>
    );
  }
}

export default App;
