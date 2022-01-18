
var main = document.querySelectorAll('.main-section')
var shopitems = document.querySelectorAll('.shop-items')
var shopitem = document.querySelectorAll('.shop-item')
var plus = document.querySelectorAll('#plus')
var moins = document.querySelectorAll('#moins')
var rem = document.querySelectorAll('.remove')
var prix = document.getElementsByClassName('shop-item-price')

var totale = document.getElementById('totale')





//increment and decrement 
for (let i = 0 ; i < plus.length ; i++){
  plus[i].addEventListener('click', () =>{
    plus[i].nextElementSibling.innerHTML++ ;
    
  })
}
for (let i = 0 ; i < moins.length ; i++){
  moins[i].addEventListener('click', () =>{
    moins[i].previousElementSibling.innerHTML--
  })
}


// remove button
for (let i = 0 ; i < rem.length ; i++){
  rem[i].addEventListener('click', ()=>{
    shopitem[i].style.display = "none";
  })
}
// another remove method
// for (let i = 0 ; i < rem.length ; i++){
//  rem[i].addEventListener('click', () =>{
//   shopitem[i].remove()
//   })
// }

// like heart

var lik = document.getElementsByTagName('i');
for (let i = 0 ; i < lik.length ; i++){
lik[i].addEventListener('click', ()=>{
  lik[i].classList.toggle("fa-thumbs-down");
})
}

