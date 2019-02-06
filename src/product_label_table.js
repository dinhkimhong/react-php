import React,{Component} from "react";
import LabelRow from "./label_row";
import PropTypes from "prop-types";

class ProductLabelTable extends Component{
	render(){
		const label = this.props.products_label.map(product=><LabelRow key={product.product_id} product={product} handleRemoveLabel={this.props.handleRemoveLabel} />);
		return(
			<table className="table table-bordered form-group">
				<thead>
					<tr>
						<th scope="col">Product</th>
						<th scope="col">Action</th>																						
					</tr>
				</thead>
				<tbody>
					{label}
				</tbody>
			</table>			
		)
	}

}

ProductLabelTable.propTypes = {
	products_label: PropTypes.array.isRequired,
	handleRemoveLabel: PropTypes.func.isRequired
}

export default ProductLabelTable;