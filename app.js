// i created a constructor to generate product objects cards 
function productCardObj (Title, Price, Image){
    this.Title 
    this.Price
    this.Image
}
// i created a constructor to push product info in it   
const productObj = [];
// read the data in the API 
fetch('https://fakestoreapi.com/products')
.then(Response=>{
    if (!Response.ok){
        throw new Error('Network response was not ok');
    }
    return Response.json()
})
.then(json=>console.log(json))
// pushed the data into a new array
.then(data => {
    productObj.push({
    Title: data.Title,
    Price: data.Price,
    Image: data.Image,
})
})
.catch(error => {
    console.error('There was a problem with the fetch operation:', error)
})

// objects which will be rendered in the main section as a card from your app.js file.

const productObjCard = productObj.map (obj => {
    for (key in objJsonRet) {
        const cardData = `
            <div class="prodCard">
                <div>${Title}</div>
                <div>${Price}</div>
                <div>${Image}</div>
            </div>
            `;
            document.getElementById('productObjCard').innerHTML += cardData
    }
})
