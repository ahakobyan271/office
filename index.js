window.onload=()=>{







$.getJSON('data.json', function (data) {
    var dataarray=[]

for (var key in data)
    dataarray.push(data[key])
    dataarray=dataarray.reverse()

    const show = (dataarray) => {   //display ready to wear model model

        document.getElementById("gallery").innerHTML = `
         ${dataarray.map(function (search) {
    
            return `  <div class="content-wrapper"  >

            <label for="">${search.id}</label>



            <div class="img-wrapper" style="display:flex;  flex-direction: column; " >
             <img  class="image" src="${search.img}" class="img"   >
             <img  class="image" src="${search.img2}" class="img"   >

             </div>


             <div class="text-wrapper">
             <label for="">bnutagir</label>
             <p class="text" >${search.des}<p>
             </div>


             <div class="text-wrapper">
             <label for="">qanak</label>

             <p class="text" >${search.quantity}<p>
             </div>


             <div class="text-wrapper">
             <label for="">amsativ</label>

             <p class="text" >${search.date}<p>
             </div>


             <div class="text-wrapper">
             <label for="">status</label>

             <p class="text" >${search.status}<p>
             </div>


             <div class="text-wrapper">
             <label for="">arjeq</label>

             <p class="text" >${search.price}<p>
             </div>




             
    
         </div>
         
         
         `
        }).join("")
    
            }`
    
    }
    show(dataarray)

  })




}
