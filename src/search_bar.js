import React, {Component} from "react";

class SearchBar extends Component{
	render(){
		return(
			<div className="form-inline">
				<label> Search: </label>
				<select className="custom-select" name="searchBy" onChange={this.props.handleChange}>
					<option value="">All</option>
					<option value="barcode">Barcode</option>
					<option value="long_description">Long Description</option>
					<option value="tax_group">Tax Group</option>	
				</select>
				<input type="text" className="form-control" name="search" value={this.props.search} onChange={this.props.handleChange} />
			</div>
		)
	}

}

export default SearchBar;