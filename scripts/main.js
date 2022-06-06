let read = (id)=>{
    return document.getElementById(id).value
}

let creat = (id)=>{
   return document.createElement(id);
}

let get = (id)=>{
return document.getElementById(id);
}


get("submit").addEventListener("click",myfun);
function data(n,e,a,w){
    this.name = n;
    this.email = e;
    this.address = a;
    this.wallet = w;
}

function myfun(e){
    // e.preventDefault();


    let name = read("name");
    let email =  read("email");
    let address = read("address");
    let wallet = read("amount");

    let s1 = new data(name,email,address,wallet);

    var data1 = JSON.parse(localStorage.getItem("user")) || [];
    data1.push(s1);
    console.log(data1)
    localStorage.setItem("user",JSON.stringify(data1));

}
