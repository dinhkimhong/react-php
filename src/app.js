import React, {Component} from "react";
import ProductTable from "./product_table";
import ProductLabelTable from "./product_label_table";
import ProductData from "./functions/product_data";
import SearchBar from "./search_bar";

class App extends Component{

	constructor(){
		super();
		this.state={};
		this.state.products=[];
		this.state.products_label=[];
		this.state.search="";
		this.state.searchBy="";
		this.handleChange = this.handleChange.bind(this);
		this.handleAddLabel = this.handleAddLabel.bind(this);
		this.handleRemoveLabel = this.handleRemoveLabel.bind(this);
	}

	componentDidMount(){
		this.handleGetAll();
		this.handleGetAllLabel();
	}

	handleGetAll(){
		ProductData('all','').then((result)=>{
			this.setState({products : result.productData})
		})
	}

	handleGetAllLabel(){
		ProductData('all_labels','').then((result)=>{
			this.setState({products_label: result.labelData})

		})
	}

	handleChange(event){
		const name = event.target.name;
		const value = event.target.value;
		this.setState({[name]: value})
	}

	handleAddLabel(product){
		let product_id = product.id;
		let long_description = product.long_description;
		let postData = {product_id: product_id};
		ProductData('add_label', postData).then((result)=>{
			if(result.success){
				let product_label = {"product_id": product_id, "long_description": long_description};
				this.state.products_label.push(product_label);
				this.setState({products_label: this.state.products_label});
			} else {
				alert(result.fail);
			}
		})					
	}

	handleRemoveLabel(product){
		let id = product.product_id;
		let postData = {product_id: id};
		ProductData('remove_label', postData).then((result)=>{
			if(result.success){
				let index = this.state.products_label.indexOf(product);
				this.state.products_label.splice(index,1);				
				this.setState({products_label: this.state.products_label});
			} else {
				alert(result.fail);
			}
		})			
	}

	render(){
		return(
			<div>
				<SearchBar search={this.state.search} handleChange={this.handleChange} />
				<ProductTable 
					products = {this.state.products}
					searchInput = {this.state.search}
					searchBy = {this.state.searchBy}
					handleAddLabel = {this.handleAddLabel}
					products_label = {this.state.products_label}
				/>
				<ProductLabelTable 
					products_label = {this.state.products_label} 
					handleRemoveLabel = {this.handleRemoveLabel}
				/>
			</div>
		)
	}

}
export default App;