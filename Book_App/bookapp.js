const bookdata = [
  {image:"https://m.media-amazon.com/images/I/518+W2zr3BL._AC_UF1000,1000_QL80_.jpg",price:340},
  {image:"https://d2sofvawe08yqg.cloudfront.net/reactjs-documentation-pdf/s_hero?1620645510&1620645510",price:370},
  {image:"https://cdn-upmostlymulti.pressidium.com/wp-content/uploads/react-book-v2.png",price:390},
  
]
function Book(props){
  const image = React.createElement("img", {src:props.image,width:"100px",height:"100px"}, null);
  const h2 = React.createElement("h2",{},"Price:"+props.price);
  const bt = React.createElement("button",{onClick:()=>addToCart()},"AddToCart");
  const div = React.createElement("div", {className: "card"}, image, h2, bt);
  return div;
}
function viewCart(){
  if(cart.length==0){
    const h2 = React.createElement("h2",{},"cart is empty");
    const parent = document.getElementById("cart");
    parent.appendChild(h2);
  }else{
    const h2 = React.createElement("h2",{},"No of items"+cart.length);
    const parent = document.getElementById("cart");
    parent.appendChild(h2);
  }
}
const cart =[];
function addToCart(data){
   cart.push(data);
   console.log("data added in cart",data);
   alert("book add SuccessFully");
}
const bookstore = bookdata.map((b) => (
  Book(b)
))
const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);
    root.render(bookstore);