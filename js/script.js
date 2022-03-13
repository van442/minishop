// import books from "./data.js";
// console.log(books);

let books = [
  {
    id: 1,
    name: "Luật tâm thức",
    price: 220000,
    provider: "Fahasha",
  },
  {
    id: 2,
    name: "Chiến binh cầu vồng",
    price: 140000,
    provider: "Fahasha",
  },
  {
    id: 3,
    name: "Nghệ thuật tập trung",
    price: 90000,
    provider: "Tuổi trẻ",
  },
  {
    id: 4,
    name: "Bye Béo",
    price: 305000,
    provider: "Kmin Books",
  },
  {
    id: 5,
    name: "Sát thủ bán hàng",
    price: 180000,
    provider: "Fahasha",
  },
  {
    id: 6,
    name: "Hoàng tử bé",
    price: 50000,
    provider: "Kmin Books",
  },
  {
    id: 7,
    name: "Tâm lý học tội phạm",
    price: 400000,
    provider: "Kmin Books",
  },
  {
    id: 8,
    name: "Hiểu về trái tim",
    price: 130000,
    provider: "Tuổi trẻ",
  },
];
//console.log(books.length);
  function renderbooks(books){
let list=document.getElementById("list");
    list.innerHTML=" ";
for(let i=0;i<books.length;i++){
let div=document.createElement("div");
div.className="item";
list.appendChild(div);
let img=document.createElement("img");
img.src=`./images/0${books[i].id}.jpg`;
div.appendChild(img);
let h2=document.createElement("h2");
h2.innerHTML=books[i].name;
div.appendChild(h2);
let h5=document.createElement("h5");
h5.innerHTML=books[i].provider;
div.appendChild(h5);
let p =document.createElement("p");
p.innerHTML=books[i].price;
div.appendChild(p);
  }
}
renderbooks(books);
function timkiemten(books,kewowrd){
  let result=[];
  let key=kewowrd.toUpperCase();
  for(let i=0;i<books.length;i++){
    let tensach=books[i].name.toUpperCase();
    if(tensach.indexOf(key)!=-1){
      result.push(books[i]);
    }
  }
return result;

}
let search=document.getElementById("search").oninput =function() {
   
   let min =document.getElementById("min-price").value;
  let max =document.getElementById("max-price").value;
  let timkiemgia1=timkiemgia(min,max);
  let result=timkiemten(timkiemgia1,this.value);
  renderbooks(result);
};
function timkiemgia(min,max){
let result=[];
for( let i=0;i<books.length;i++){
  if(books[i].price>=min && books[i].price<=max)
  result.push(books[i]);
}
return result;
}
let btn=document.getElementById("apply-price-filter").onclick =function(){
 let min =document.getElementById("min-price").value;
  let max =document.getElementById("max-price").value;
  let timkiemgia1=timkiemgia(min,max);
  let seach1=document.getElementById("search").value;
  let result=timkiemten(timkiemgia1,seach1);
  renderbooks(result);
};
let provider1=document.getElementById("provider-1").onchange=function() {
  selecallprove();
}
let provider2=document.getElementById("provider-2").onchange=function() {
  selecallprove();
}
let provider3=document.getElementById("provider-3").onchange=function() {
  selecallprove();
}

//   let resultfinal=[];
//   let checkbox1=document.getElementById("provider-1");
//   let searchbyprover1 = [];
//   if(checkbox1.checked===true){
//      searchbyprover1=timkiemtheoproverder("Fahasha");
//     for(let i=0;i<searchbyprover1.length;i++){
//       resultfinal.push( searchbyprover1[i]);
//     }
//   }
//   // them vao tuoi tre
//   let checkbox2=document.getElementById("provider-2");
//   let searchbyprover2 = [];
//   if(checkbox2.checked===true){
//      searchbyprover2=timkiemtheoproverder("Tuổi trẻ");
//     for(let i=0;i<searchbyprover2.length;i++){
//       resultfinal.push( searchbyprover2[i]);
//     }
//   }

//   let checkbox3=document.getElementById("provider-3");
//   let searchbyprover3 = [];
//   if(checkbox3.checked===true){
//      searchbyprover3=timkiemtheoproverder("Kmin Books");
//     for(let i=0;i<searchbyprover3.length;i++){
//       resultfinal.push( searchbyprover3[i]);
//     }
//   }


// renderbooks(resultfinal);

function selecallprove(){
  let resultfinal=[];
  let checkbox1=document.getElementById("provider-1");
  let searchbyprover1 = [];
  if(checkbox1.checked===true){
     searchbyprover1=timkiemtheoproverder("Fahasha");
    for(let i=0;i<searchbyprover1.length;i++){
      resultfinal.push( searchbyprover1[i]);
    }
  }
  // them vao tuoi tre
  let checkbox2=document.getElementById("provider-2");
  let searchbyprover2 = [];
  if(checkbox2.checked===true){
     searchbyprover2=timkiemtheoproverder("Tuổi trẻ");
    for(let i=0;i<searchbyprover2.length;i++){
      resultfinal.push( searchbyprover2[i]);
    }
  }

  let checkbox3=document.getElementById("provider-3");
  let searchbyprover3 = [];
  if(checkbox3.checked===true){
     searchbyprover3=timkiemtheoproverder("Kmin Books");
    for(let i=0;i<searchbyprover3.length;i++){
      resultfinal.push( searchbyprover3[i]);
    }
  }
renderbooks(resultfinal);
}

function timkiemtheoproverder(provider){
  let result=[];
  for(let i=0;i<books.length;i++){
    if(books[i].provider===provider)
    {
      result.push(books[i]);
    }
  }
  return result;
}

 