import React, { Component } from 'react';


class Product extends Component {
    constructor(props) {
        super(props);
        this.onAddToCart = this.onAddToCart.bind(this);
    }
onAddToCart () {
    alert(this.props.name);

}
onAddToCart2 = () => {
    alert(this.props.name);

}
onAddToCart3 (){
    alert(this.props.name);
}
  render() {
    return (
      <div>
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <a className="thumbnail">
                <img data-src="#" alt=""/>
                <div className="caption">
                    <h3>{this.props.name}</h3>
                    <p>{this.props.price}</p>
                    <button onClick={this.onAddToCart}>action</button>
                    <button onClick={() => this.onAddToCart3('success')}>action 2</button>
                </div>
            </a>
        </div>
    </div>
    );
  }
}

export default Product;
