let read = (id)=>{
    return document.getElementById(id).value
}

let creat = (id)=>{
   return document.createElement(id);
}

let get = (id)=>{
return document.getElementById(id);
}

// console.log(user.wallet)






let myWallet = JSON.parse(localStorage.getItem('user'))


async function api(){
    try{
        // let myWallet = JSON.parse(localStorage.getItem('user'))
        let res = await fetch(`https://masai-vouchers-api.herokuapp.com/api/vouchers`);
        let data = await res.json();
        console.log(data[0].vouchers);
        const data11 = data[0].vouchers
        append(data11)
        
        for(var i = 0;i<myWallet.length;i++){
            let bal = "";
            bal = bal+(myWallet[i].wallet)
           get("wallet_balance").innerText=bal;
        }
// var bal = myWallet.wallet;
// console.log("myWallet.+(wallet)")


}
catch(err){
console.log(err);
}

}

api()



let append = (data)=>{
var box = get("voucher_list");
data.forEach(function (el){
 let div1 = creat("div");
 div1.setAttribute("class","voucher")

 let img1 = creat("img");
 img1.src= el.image;
 let name = creat("h3");
 name.innerText = el.name;
 let price = creat("h4");
 price.innerText = el.price;
 let btn = creat("button");
 btn.innerText ="Buy";
 btn.setAttribute("class","buy_voucher");
 btn.addEventListener("click",function(){
     addvoucher(el);
  
 })


div1.append(img1,img1,name,price,btn);
box.append(div1);



})




}


function addvoucher(el){
    var bal = myWallet.wallet
    if(bal<el.price){
        alert("Sorry! insufficient Balance")
    }
    else{
        alert("Hurray! purchase Sucessfully")
        bal = bal-el.price;
        myWallet.wallet=bal;
        get("wallet_balance").innerText=bal;
        localStorage.setItem("user",JSON.stringify(myWallet))

        var purchase = JSON.parse(localStorage.getItem("purchase"))||[];
       purchase.push(el)
       localStorage.setItem("purchase",JSON.stringify(purchase))
    }
}