var mysql = require("mysql");
var inquirer = require("inquirer");
var table = require("table");

var connection= mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Sandtown10!",
  database: "products_db"
});

connection.connect(function(err) {
	if(err) {
		console.log("error " + err.stack);
	} 
	loadProducts();
});

function loadProducts () {

	connection.query("SELECT * FROM products", function(err, data) {
		if (err) throw err;
		console.log(data)
		promptCustomerForItem(data);
	});

}

	function promptCustomerForItem(data) {
		
		inquirer.prompt([
		{
			type: "input",
			name: "choice",
			message: "What is the ID of the Item you would like to buy?"
		},
	   
	  ])

		.then(function(val) {
      		//checkIfShouldExit(val.choice);
      		var choiceId = parseInt(val.choice);
      		
      		
      		var product = checkInventory(choiceId, data);
      		
     		 if (product) {
     		 	
       			 promptCustomerForQuantity(product);
     	}
      		else {
       			 console.log("\nThat item is not in the inventory.");
        		loadProducts();
      	}
    });

 	function promptCustomerForQuantity(product) {
 		 inquirer.prompt([
 		 {
			type: "input",
			name: "quantity",
			message: "How many units of the product would you like to buy?",
		}
	])
 	 .then(function(val) {

      	//checkIfShouldExit(val.quantity);
      		var quantity = parseInt(val.quantity);
     
      if 	(quantity > product.stock_quantity) {
        	console.log("\nInsufficient quantity!");
        	loadProducts();
      }
      else {
        	makePurchase(product, quantity);
      }
    });

 }
 	   function makePurchase(product, quantity) {
  			
  			connection.query(
    		"UPDATE products SET stock_quantity = stock_quantity - ? WHERE id = ?",
    		[quantity, product.id],
   		    function(err, res) {
            var finalPrice = product.price_ * quantity;
      		console.log("\nSuccessfully purchased " + quantity + finalPrice + product.product_name + "'s!");
      		//loadProducts();
    }
  );
}
	function checkInventory(choiceId, data) {
  for (var i = 0; i < data.length; i++) {
    if (data[i].id === choiceId) {
      
      return data[i];
    }
  }

  return null;
}



}
