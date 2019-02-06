import React, {Component} from "react";
import PropTypes from "prop-types";


class ProductTableRow extends Component{


	render(){
		const {barcode, long_description, unit, price, tax_group} = this.props.product;
		return(
			<tr>
				<td>{barcode}</td>
				<td>{long_description}</td>
				<td>{unit}</td>
				<td>{price}</td>
				<td>{tax_group}</td>	
				<td><button className="btn btn-primary" onClick={()=>this.props.handleAddLabel(this.props.product)}>Add label</button></td>															
			</tr>
		)
	}
}

ProductTableRow.propTypes = {
	product: PropTypes.object.isRequired,
	handleAddLabel: PropTypes.func.isRequired
}
export default ProductTableRow;