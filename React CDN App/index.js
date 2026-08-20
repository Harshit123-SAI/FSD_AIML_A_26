const data=[
  {Image="https://m.media-amazon.com/images/I/518+W2zr3BL._AC_UF1000,1000_QL80_.jpg",price: "430/-"},
  {Image="https://m.media-amazon.com/images/I/6132FVQ5ZQL._AC_UF1000,1000_QL80_.jpg",price: "625/-"},
  {Image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdotFjzFvVfe6nRfsmqC3Gcvqh2MPZ7GPq-kHh2qIGLA&s",price: "530/-"}
]
function Book(props){
  const image=React.createElement("img",
                      {src:props.Image,
                        width:"50px",
                        height:"50px"
                      });
const h2 = React.createElement("h2",{color:"red"},"Price:"+props.price);
const child =React.createElement("div",{className:"card"},[image,h2]);
return child;
}
 /*const bookdata=data.map((i)=>{*/
const booklist=  React.createElement("div",{className:"booklist"},
    data.map((b)=>{
      Book(b)
    }))
const parent=document.getElementById("root");
ReactDOM.render(booklist,parent);

