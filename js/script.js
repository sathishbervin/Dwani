
const products=[
{name:'Stone Bangle Set',price:249,img:'IMG-20260709-WA0070.jpg'},
{name:'Pink Glass Bangles',price:199,img:'IMG-20260709-WA0071.jpg'},
{name:'Designer Bangles',price:299,img:'IMG-20260709-WA0072.jpg'}
];
const cart={};
const grid=document.getElementById('products');
products.forEach((p,i)=>{
grid.innerHTML+=`<div class="card">
<img src="${p.img}">
<div><h3>${p.name}</h3><p>₹${p.price}</p>
<button onclick="add(${i})">Add to Cart</button></div></div>`;
});
function add(i){cart[i]=(cart[i]||0)+1;render();}
function render(){
let html='',sub=0,c=0;
Object.keys(cart).forEach(k=>{
let q=cart[k],p=products[k];
sub+=q*p.price;c+=q;
html+=`${p.name} x ${q} - ₹${q*p.price}
<button onclick="cart[${k}]++;render()">+</button>
<button onclick="if(--cart[${k}]<=0)delete cart[${k}];render()">-</button>
<button onclick="delete cart[${k}];render()">🗑</button><hr>`;
});
document.getElementById('cartItems').innerHTML=html||'No items.';
document.getElementById('subtotal').textContent=sub;
document.getElementById('total').textContent=sub+50;
document.getElementById('count').textContent=c;
}
document.getElementById('search').oninput=e=>{
const t=e.target.value.toLowerCase();
[...grid.children].forEach((card,i)=>card.style.display=products[i].name.toLowerCase().includes(t)?'block':'none');
}
function placeOrder(){alert('Version 4 demo. Connect Razorpay later for real payments.');}

