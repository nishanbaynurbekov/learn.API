const API = "https://65ab6a1efcd1c9dcffc659a4.mockapi.io/api/v1/products" 
 const content = document.getElementById("content")
 const conteyner = document.querySelector(".conteyner")
 const input1 = document.getElementById("input1")
 const input2 = document.getElementById("input2")
 const input3 = document.getElementById("input3")
const saveBtn = document.getElementById("save")
const cancelBtn = document.getElementById("cancel")
const button = document.querySelector(".button")

 async function goduo(){
    const res = await fetch(API)
    const data = await res.json();
    content.innerHTML = data.map(item => 
        `<div class="card"><div class="card_img">
        <img src="${item.image}"> 
        <h4>${item.title}</h4>
        <p>${item.price}</p> 
        <button onclick="openModal('${item.id}')" id="btn_update">UPDATE</button> 
        <button onclick="like('${item.id}')" id="like_btn">🤍</button>
         <button onclick="deleteProduct('${item.id}')" id="btn_delete">DELETE</button></div></div>`
    )
 }
 goduo()

 async function openModal(id) {
    conteyner.style.display = "flex"
    try{
      const res = await fetch(`${API}/${id}`)
      const data = await res.json()

      input1.value = data.title
      input2.value = data.price
      input3.value = data.image

      console.log(data);

      saveBtn.onclick = function () {
   updateProduct(data.id)
}      
    }
    catch(error) {
      console.log(error);
      
    }
 }
 function closeModal(){
   conteyner.style.display ='none'
 }
 cancelBtn.onclick = closeModal

  async function updateProduct(id) {
   let payload = {
   title: input1.value,
   price: input2.value,
   image: input3.value,
   }
   try{
      const res = await fetch(`${API}/${id}`, {
         method: 'PUT',
         headers: {
            'Content-Type': 'application/json'
         },
      body: JSON.stringify(payload)
      })

      if (res.status == 200){
         goduo()
      }
      console.log(res);
   }
   catch(error) {
      console.log(error);
      
   }
 }

 async function deleteProduct(id) {
       let delet = confirm("Өчүрүүнү каалайспы?")

       if (!delet) {
         return;
       }
      
    try{
   const res = await fetch(`${API}/${id}`,{
      method: "DELETE"
   })
   console.log(res);
   goduo()
    }
    catch(error){
      console.log(error);
      
    }
 }
 like_btn = 0
   async function like(id) {
 button.innerHTML = <div>
   <button onclick="openModal('${item.id}')" id="btn_update">UPDATE</button> 
        <button onclick="like('${item.id}')" id="like_btn">🤍</button>
         <button onclick="deleteProduct('${item.id}')" id="btn_delete">DELETE</button>
 </div>
}

 