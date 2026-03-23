const arr=[10,20,30,40];

// true => selected  false=> not selected
const filteredArr=arr.filter((number)=> number>20);
console.log(filteredArr);

let obj={
    name:"rohit",
    age:20,
    deposit:function(amount){
        console.log(amount);
    }
    
}

obj.deposit(10);
// 
arr.filtering=function (compare){
    const ans=[];
    for(let num of this){
        // this current object ko refer krta hai 
        if(compare(num)){
            ans.push(num);
        }
    }
    return ans;
}


const newArr=arr.filtering((num)=>num>25);
console.log(newArr);




const products = [
  { name: 'Laptop', onSale: false },
  { name: 'Headphones', onSale: true },
  { name: 'Mouse', onSale: true },
  { name: 'Monitor', onSale: false }
];

// We only want products where onSale is true
const salesItems = products.filter(product => product.name =="Laptop");

console.log(salesItems); 
// Output: [{ name: 'Headphones', onSale: true }, { name: 'Mouse', onSale: true }]

