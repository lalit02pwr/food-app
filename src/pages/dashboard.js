import React from 'react';
import './dashboard.css';




const ProductItem = (props)=>{
	console.log('gg', props);
	return(
		<div className="product__item">
		
			<div className="item__pic">
			    <img src={props.recipes.image} className="img_item" />
			</div>
			<div className="item__info">
				 <span className="item__type">{props.recipes.name}</span>
				 <span className="item__price">&#8377;{props.recipes.price}</span>
				 <button className="btn__item-order pull-right" onClick={()=>props.addCartCount()}>ADD TO BAG</button>
			</div>
		</div>
	)
}
 
const Category = (props)=>{
	console.log('cc', props);
	var categoryClass = (props.activeCategory ==  props.data.name)?'category__item active':'category__item';

	return(
		<div className={categoryClass} onClick={()=>props.setActiveCategory(props.data.name)}>
		     <img src={props.data.image} className="logo_img"/>
		     <span className="category__title">{props.data.name}</span>
		</div>
		)
}

class Dashboard extends React.Component{
	state ={
		activeCategory:'Dessert'
	}
	setActiveCategory(category){
		console.log("category",category)
		this.setState({activeCategory:category});
	}
	render(){
		const categories = this.props.categories;
		console.log('categories',categories);
		const recipes = this.props.recipes;
		console.log('recipes',recipes);
		return(
			<div className="dashboard">
				{/*<div className="search">
					<input type="text" className="search_input"/>
					<button className="search_bar_btn">
						<img src="assets/img/search_bar.jpg" className="search_bar_img"/>
					</button>
				</div>*/}
				<div className="actionbar">
					<h3 className="slect_categories">SELECT CATEGORIES</h3>
					<i className="filter">Filter <img src="assets/img/filter_icon.png" className="filter_icon_img"/></i>
				</div>
				<div className="available__categories">
				    {
						categories.map((elem,index)=>{
							return(
								<Category key={index} activeCategory={this.state.activeCategory} 
									setActiveCategory= {this.setActiveCategory.bind(this)} data={elem}>
								</Category>
							      )
					    	})
					}

				</div>
				<div className="product__container">
				    <div className="product__item">
                      {
						recipes.map((elm,index)=>{
							return(
									(elm.category == this.state.activeCategory)?
										<ProductItem  key={index} addCartCount={this.props.addCartCount} recipes={elm}></ProductItem >
						      		:""
					      		)
					    	})
					}

				    </div>
                    {/*<ProductItem price={10} name={"Breakfast Platter"} imgSrc={"assets/img/maxres_bp.jpg"}></ProductItem>
					<ProductItem price={15} name={"Lunch Platter"} imgSrc={"assets/img/lunch_1.jpg"}></ProductItem>
					<ProductItem price={100} name={"Brunch Platter"} imgSrc={"assets/img/brunch_1.jpg"}></ProductItem>
					<ProductItem price={30} name={"Dinner Platter"} imgSrc={"assets/img/dinner.jpg"}></ProductItem>
					<ProductItem price={40} name={"Dinner Platter"} imgSrc={"assets/img/food.jpg"}></ProductItem>
					<ProductItem price={125} name={"Dinner Platter"} imgSrc={"assets/img/brunch.jpg"}></ProductItem>*/}
				</div>
			</div>
		)
	}
}

export default Dashboard;