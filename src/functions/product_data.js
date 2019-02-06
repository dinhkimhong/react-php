import React from "react";

function ProductData(action, inputData){
	let URL = 'http://localhost/kitchen_quickies/controller/product.php';
	
	return new Promise((resolve, reject)=>{
		fetch(URL+'?action='+action,{
			method: 'POST',
			headers:
			{
				'Accept': 'application/json',
				'Content-Type': 'application/json'				
			},
			body:JSON.stringify(inputData)
		})
		.then((response) => response.json()
			.then((res) => {
				resolve(res);
			})
		)
		.catch((error)=>{
			reject(error)
		})
	})



}

export default ProductData;