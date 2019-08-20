import React from 'react';
import './details.css';


class Deatails extends React.Component{
  state={
    cartItem: 0,
  
  }

  addSameItem(){
    this.setState({cartItem: this.state.cartItem+1})
  }
  minusSameItem(){

    this.setState({cartItem: (this.state.cartItem<=0)? this.state.cartItem: this.state.cartItem-1})
    

  }

  render(){
      {console.log("ajsbjs",this.props.recipe)}
        return(  
                <div className="main">
                     <div className="image">
                      <img className="image" src={this.props.recipe.image} alt={this.props.recipe.name}/>
                     </div>
                     <div>
                         <div className="vegetable_soup">{this.props.recipe.name}<br/>
                           &#8377;{this.props.recipe.price}
                     </div>
                     <button className="btn">
                        <span onClick={()=>this.minusSameItem()}>-</span>
                        <span className="item_nmbr">{this.state.cartItem}</span>
                        <span onClick={()=>this.addSameItem()}>+</span>
                    </button>
                     </div>
                    <div className="category_rating">
                      <span className="category">Category:{this.props.recipe.category}</span>
                      <span className="rating"><img className="star_icon" src="https://img.icons8.com/color/48/000000/filled-star.png"/> 
                        {this.props.recipe.rating} Rating.({this.props.recipe.reviews} Reviews)
                     </span>
                  </div>
                   <div className="details">
                     <div className="detail">DETAILS</div>
                    <div className="about">{this.props.recipe.details}</div>
                    </div>
                </div>
       )
  }    
}
	  








export default Deatails;
