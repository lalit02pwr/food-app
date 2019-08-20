import React from 'react';
import './favorites.css';
import {Link} from 'react-router-dom'


const Item = (props) => {         
	return(
		<div className ="favorites__item">
			<div className ="item__img">
	            <img src={props.data.image} alt = "breakfast_platter"/>
			</div>
			<div className="item__detail">
				<span className="item__name">{props.data.name}</span>
				<span className="item__rate">&#8377;{props.data.price}</span>
			</div>
			<div>	
				<Link to= {"/product/"+props.data.name} onClick={()=>props.setActiveRecipe(props.data)} 
				className="btn__reorder pull-right">
						REORDER
				</Link>
			</div>	
		</div>
	)
}

class Favorites extends React.Component{

	render(){
		console.log(this.props, this.props.data);
		const data = this.props.data;
		return(
			<div className="favorites">
			    <div className="favorites__header">
			       <h3 className="favorites__title">FAVOURITES</h3>
			       <span className="color_yellow glyphicon glyphicon-shopping-cart pull-right">
			       		<span className="add_cart">{this.props.cartCount}</span>
			       </span>
			       <p className="favorites_subtitle">Enjoy what you have been ordering!</p>
			    </div>
			    <div className="favorites__cart">
			    
				   <div className="fevorite_items" style={{'display':"flex"}}>
					{
						data.map((elem,index)=>{
							return(
								(elem.isFavourite)?
									<Item key={index} setActiveRecipe = {this.props.setActiveRecipe} data={elem}>
									</Item>
							    :''
					    	)
					    	
						})
					}
					</div>
			      
				</div>
			</div>
		)
	}
}

export default Favorites;