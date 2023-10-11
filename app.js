// i created a constructor to generate product objects cards 
// function productCardObj (Title, Price, Image){
//     this.Title 
//     this.Price
//     this.Image
// }
// i created a constructor to push product info in it   
var productArr = [];
// const productObject = {}

// read the data in the API 

fetch('https://fakestoreapi.com/products?limit=20')
.then(Response=>{
    if (!Response.ok){
        throw new Error('Network response was not ok');
    }
    return Response.json()
})
.then(json=> {
    console.log("txt ", json)
    return json 
})
// pushed the data into a new array
.then(data => {
    console.log("data ", data)
    productArr = data
    localStorage.setItem("productarray", JSON.stringify(productArr))
    // console.log("getLocal", )
    var localStorageData = JSON.parse(localStorage.getItem("productarray"));
    cardDisplay(localStorageData)
    cardDisplay(productArr)

})
.catch(error => {
    console.error('There was a problem with the fetch operation:', error)
})

// objects which will be rendered in the main section as a card from your app.js file.
function cardDisplay (cardsInfo) {
    console.log("info ", cardsInfo)
// const productObjCard = productObj.map (obj => {
//     for (key in objJsonRet) {
// var productObjArray = JSON.parse(productArr);

const productCardCo = document.getElementById("productCard");
    cardsInfo.map((product)=>{
        var cardData = `
        <div class="prodCard" >
            <img src="${product.image}" alt="${product.title}">
            <div class="cardContents">
                <p><span>Title:</span> ${product.title}</p>
                <p><span>Price:</span> ${product.price}</p>
                <p><span>Category:</span> ${product.category}</p>
                <input id="deleteBtn" type="delete" value="Delete" id="$delete.id}" onclick="stdClick(event)">
                <br>
                <input id="updateBtn" type="submit" value="Update" id="$update.id}" onclick="stdClick(event)">
            </div>
        </div>
        `;
        // document.getElementById('productObjCard').innerHTML += cardData;
        productCardCo.innerHTML += cardData;
    })  
    }
// }
// })



