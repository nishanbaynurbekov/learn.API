 const API = "https://65ab6a1efcd1c9dcffc659a4.mockapi.io/api/v1/products"
 const geroy = document.querySelector(".chogu")
 const title_put = document.getElementById("title")
 const price_put = document.getElementById("price")
 const image_put = document.getElementById("image")
 const create_btn = document.getElementById("create")
 const cancel_btn = document.getElementById("cancel")

 async function createProduct() {
    let payload = {
        title: title_put.value,
        price: price_put.value,
        image: image_put.value,
    }
    try{
         const res = await fetch(API,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'},
            body: JSON.stringify(payload)
         });
        
        const data = await res.json();
        console.log(res);
        
    }
    catch (error) {
        console.log(error);
        
    }
 }

 create_btn.onclick = createProduct

 

 