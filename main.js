let grid= document.querySelector(".products");
let filterinput= document.querySelector("#filterInput");

fetch(" https://fakestoreapi.com/products")  //database api
  .then(res =>res.json())
  .then(json =>{

    // iterating products
    for (let value of json){
        addElement(grid, value)
    }
    
});


// add event listener
filterinput.addEventListener("keyup" , filterProducts);
function filterProducts(){
    let filtervalue =filterinput.value.toUpperCase();
    let item =grid.querySelectorAll(".item");

    for(let i=0 ; i<item.length ; i++){
        let span = item[i].querySelector(".title");

        if(span.innerHTML.toUpperCase().indexOf(filtervalue) > -1){
            item[i].style .display="initial";


        }else{
            item[i].style .display="none";
        }

    }
}













// get value from the api create dynamic element

function addElement(appendIn , value){
    let div = document.createElement("div");
    // div.className="item justify-self-center";

    div.className = "item flex-shrink-0 w-full sm:w-auto text-center";

    let {image, title, category, price } = value;

    div.innerHTML = `
         <img src="${image}" class="bg-cover img mx-auto" alt="img1" >
         <div class="text-center py-3 font-poppins">
         <h1 class="text-lg title">${title}</h1>
         <a href="#" class="block"><span class="text-sm text-red-400">${category}</span></a>
         <span class="block py-3">$<span class="text-md">${price}</span></span>
         <button class="border-2 px-8 py-1 bg-yellow-400 border rounded-md">Buy Now</button>
         </div>
    `
    appendIn.appendChild(div);
}


