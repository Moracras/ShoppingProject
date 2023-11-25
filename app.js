const btnDivs = document.getElementById("btns");
const productDivs = document.getElementById("products");
const searchInput = document.getElementById("searchInput");
const categoryTitle = document.getElementById("category");

let products = []

const getProducts = async () =>{
    const res = await fetch("https://anthonyfs.pythonanywhere.com/api/products/")
    const data = await res.json()
    console.log(data);
    products = data
    category()
}
getProducts()

const category =() =>{
    console.log(products);
    const categoryArr = products.map(item=> item.category)
    console.log(categoryArr);
}