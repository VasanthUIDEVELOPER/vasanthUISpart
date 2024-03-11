const products=[{name:'shirt', price:20},
{name:'shoe', price:50},
{name:'hat', price:15}];
const totalpricereduc=products.reduce((sum,products)=> sum+products.price,0);
console.log("total price(reduce)",totalpricereduc)