let read = (id)=>{
    return document.getElementById(id).value
}

let creat = (id)=>{
   return document.createElement(id);
}

let get = (id)=>{
return document.getElementById(id);
}

last()

function last(){
    var lastdata = JSON.parse(localStorage.getItem("purchase"));


    append(lastdata);
    var myWallet=JSON.parse(localStorage.getItem('user'));
    for(var i = 0;i<myWallet.length;i++){
        let bal = "";
        bal = bal+(myWallet[i].wallet)
       get("wallet_balance").innerText=bal;
    }
// var ba

}



function append(data){
    var box = get("purchased_vouchers");
data.forEach(function (el){
 let div1 = creat("div");
//  div1.setAttribute("class","voucher")

 let img1 = creat("img");
 img1.src= el.image;
 let name = creat("h3");
 name.innerText = el.name;
 let price = creat("h4");
 price.innerText = el.price;
 let btn = creat("button");
 btn.innerText ="Buy";

 div1.append(img1,img1,name,price,btn);
 box.append(div1);

})
}