import React, {Component} from "react";
import ProductTableRow from "./product_table_row";
import PropTypes from "prop-types";


class ProductTable extends Component{

	render(){
		const searchInput = this.props.searchInput.toLowerCase();
		const searchBy = this.props.searchBy;
		const handleAddLabel = this.props.handleAddLabel;

		const product = this.props.products.map(product=>{
			let long_description = product.long_description.toLowerCase();
			let tax_group = product.tax_group.toLowerCase();
			if(searchBy == "barcode" && product.barcode.indexOf(searchInput) === -1){
				return;
			} else if(searchBy == "long_description" && long_description.indexOf(searchInput) === -1){
				return;
			} else if(searchBy == "tax_group" && tax_group.indexOf(searchInput) === -1){
				return;
			} else if(product.barcode.indexOf(searchInput) === -1 && long_description.indexOf(searchInput) === -1 && tax_group.indexOf(searchInput) === -1){
				return;
			}

			return(<ProductTableRow key={product.id} product={product} handleAddLabel={handleAddLabel} products_label={this.props.products_label}/> )
		});

		return(
			<table className="table table-bordered form-group">
				<thead>
					<tr>
						<th scope="col">Barcode</th>
						<th scope="col">Long Description</th>
						<th scope="col">Unit</th>
						<th scope="col">Price</th>	
						<th scope="col">Tax Group</th>	
						<th scope="col">Action</th>																						
					</tr>

				</thead>
				<tbody>
					{product}
				</tbody>
			</table>
		)
	}
}

ProductTable.propTypes = {
	products: PropTypes.array.isRequired,
	products_label: PropTypes.array.isRequired,
	handleAddLabel: PropTypes.func.isRequired
}
export default ProductTable;