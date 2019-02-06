import React, {Component} from "react";
import PropTypes from "prop-types";

class LabelRow extends Component{
	render(){
		return(
			<tr>
				<td>{this.props.product.long_description}</td>
				<td><button className="btn btn-danger" onClick={()=>this.props.handleRemoveLabel(this.props.product)}>Remove</button></td>
			</tr>
		)
	}

}

LabelRow.propTypes = {
	product: PropTypes.object.isRequired,
	handleRemoveLabel: PropTypes.func.isRequired
}
export default LabelRow;