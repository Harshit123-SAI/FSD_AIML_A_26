const data=[
    {image: "",price:"525/-"},
    {image: "",price:"625/-"},
    {image: "",price:"725/-"}
]
function Book(props){
 child=document.createElement("div");
child.setAttribute("class","card");
const image=document.createElement("img");
image.setAttribute("src",props.image)
image.setAttribute("width","75px");
image.setAttribute("height","75px");
image.style.margin="auto";
const h2=document.createElement("h2");
h2.innerText="Price:"+props.price;
child.appendChild(image);
child.append(h2);
}
const parent=document.getElementById("root");
for( i of data){

parent.appendChild(Book(i));
}
const booklist=document.getElementById("div");
booklist.setAttribute("class","booklist");
const parent=document.getElementById("root");
for( i of data){
  booklist.appendChild(Book(i))}
parent.appendChild(booklist);
