// ====== EDIT THESE TWO VALUES FOR YOUR STORE ======
const STORE_NAME = 'CrackerKart';
const ORDER_EMAIL = 'abishekv178@gmail.com';
// ==================================================

const hike = 1.20;
const packingRate = 0.05;
const minimumOrder = 3000;

const raw = [
['Single Sound Crackers','2¾" KURUVI - PKT',40],['Single Sound Crackers','3.5" DUCK - PKT',70],['Single Sound Crackers','4" LAKSHMI - 1 PKT',100],['Single Sound Crackers','4" DELUXE LAKSHMI/PANDA - BOX',175],['Single Sound Crackers','4" GOLD LAKSHMI - 1 PKT',200],['Single Sound Crackers','2 SOUND CRACKERS - BOX',200],
['Paper Bomb Crackers','MAGIZH BOUNCER COLOUR PAPER BOMB - 1 PC',200],['Paper Bomb Crackers','1/4 KG PAPER BOMB - Pc',250],['Paper Bomb Crackers','1/2 KG PAPER BOMB - PC',500],['Paper Bomb Crackers','1 KG PAPER BOMB - PC',1000],['Paper Bomb Crackers','PAPER BOMB - 10 PCS - BOX',1800],
['Bijili Crackers','RED BIJILI - 50 pcs - BAG',100],['Bijili Crackers','RED BIJILI - 100 PCS - BAG',200],
['Special Festival Crackers','DIGITAL WATTS - 3 PKTS - BOX',750],['Special Festival Crackers','1K SPECIAL FESTIVAL CRACKERS - BOX',1200],['Special Festival Crackers','2K SPECIAL FESTIVAL CRACKERS - BOX',2500],['Special Festival Crackers','5K SPECIAL FESTIVAL CRACKERS - BOX',6500],['Special Festival Crackers','10K SPECIAL FESTIVAL CRACKERS - BOX',13000],
['Flower Pots','FLOWER POTS SPECIAL - BOX',500],['Flower Pots','FLOWER POTS ASHOKA - BOX',700],['Flower Pots','FLOWER POTS COLOR KOTI - BOX',1200],['Flower Pots','FLOWER POTS COLOR KOTI DELUXE - BOX',1800],['Flower Pots','COLOR MEGA - BOX',1500],['Flower Pots','DELUXE MEGA - BOX',2300],['Flower Pots','FLOWER POTS SUPER DELUXE - 2 PCS - BOX',650],
['Ground Chakkar','GROUND CHAKKAR BIG 10 PCS - BOX',200],['Ground Chakkar','GROUND CHAKKAR SPECIAL - BOX',360],['Ground Chakkar','GROUND CHAKKAR DELUXE - BOX',700],['Ground Chakkar','SPINNER SPECIAL - BOX',700],['Ground Chakkar','SPINNER DELUXE - BOX',900],['Ground Chakkar','4X4 WHEEL - BOX',1000],['Ground Chakkar','WIRE CHAKKAR - BOX',1000],['Ground Chakkar','SPINNER SUPER DELUXE - BOX',1200],
['Flash Bomb Crackers','KING OF KING - BOX',550],['Flash Bomb Crackers','CLASSIC BOMB - BOX',700],['Flash Bomb Crackers','BISON BOMB - BOX',1500],['Flash Bomb Crackers','MAGIZH NITRO NEST - BOX',1000],['Flash Bomb Crackers','NEUTRON BOMB - BOX',1800],
['Sparklers','12 CM ELECTRIC SPARKLERS - BOX',140],['Sparklers','12 CM COLOUR SPARKLERS - BOX',160],['Sparklers','15 CM ELECTRIC SPARKLERS - BOX',220],['Sparklers','15 CM COLOUR SPARKLERS - BOX',250],['Sparklers','15 CM GREEN SPARKLERS - BOX',265],['Sparklers','15 CM RED SPARKLERS - BOX',275],['Sparklers','30 CM ELECTRIC SPARKLERS - BOX',220],['Sparklers','30 CM COLOUR SPARKLERS - BOX',250],['Sparklers','30 CM GREEN SPARKLERS - BOX',265],['Sparklers','30 CM RED SPARKLERS - BOX',275],['Sparklers','50 CM ELECTRIC SPARKLERS (Tube) - BOX',900],['Sparklers','50 CM COLOUR SPARKLERS (Tube) - BOX',1000],
['Premium Sparklers','15 CM MINGLE MIX - BOX',650],['Premium Sparklers','30 CM MINGLE MIX - BOX',650],['Premium Sparklers','50 CM MINGLE MIX - BOX',1500],['Premium Sparklers','ROTATING SPARKLERS - BOX',1000],
['Twinkling Star','1½" TWINKLING STAR - BOX',140],['Twinkling Star','4" TWINKLING STAR - BOX',400],['Twinkling Star','JIL JIL - BOX',1100],
['Aerial Fancy Assorted','7 SHOT - BOX',600],['Aerial Fancy Assorted','DREAMS / PENTA - 5 PCS - BOX',850],['Aerial Fancy Assorted','RED MINES - BOX',750],['Aerial Fancy Assorted','GREEN MINES - BOX',750],['Aerial Fancy Assorted','SILVER MINES - BOX',750],
['Multi Shots','12 SHOT RIDER - BOX',700],['Multi Shots','MAGIZH KNIGHT 25 RIDER - BOX',1300],['Multi Shots','30 SHOTS - MULTI COLOUR - BOX',2250],['Multi Shots','15 SHOTS MULTI COLOR - BOX',1500],['Multi Shots','60 SHOTS - MULTI COLOUR - BOX',4500],['Multi Shots','120 SHOTS - MULTI COLOUR - BOX',9000],['Multi Shots','240 SHOTS - MULTI COLOUR - BOX',18000],['Multi Shots','500 SHOTS - MULTI COLOUR - BOX',32500],['Multi Shots','10x10 CELEBRATION SHOT - BOX',19000],['Multi Shots','BIG SETOUT - BOX',15000],['Multi Shots','GUN SHOTS HAND - BOX',7000],
['Rocket Crackers','ROCKET BOMB - BOX',325],['Rocket Crackers','WHISTLING ROCKET - BOX',900],
['Aerial Fancy Crackers','SKY DIVE FULL CRACKLING 3 PCS - BOX',1000],['Aerial Fancy Crackers','CHOTTA FANCY - BOX',225],['Aerial Fancy Crackers','2" FANCY - BOX',450],['Aerial Fancy Crackers','MAGIZH MULTI STEP FANCY - BOX',800],['Aerial Fancy Crackers','MAGIZH RED LABEL - 3 PCS FANCY - BOX',1200],['Aerial Fancy Crackers','MAGIZH GREEN LABEL - 3 PCS FANCY - BOX',1200],['Aerial Fancy Crackers','MAGIZH GOLD LABEL - 3 PCS FANCY - BOX',1200],['Aerial Fancy Crackers','MAGIZH BLUE LABEL - 3 PCS FANCY - BOX',1200],['Aerial Fancy Crackers','4" MAGIZH SPECIAL PIPE - BOX',1750],['Aerial Fancy Crackers','4" FANCY DOUBLE BALL - BOX',2250],['Aerial Fancy Crackers','4" MAGIZH NIAGARA FANCY - PC',2100],['Aerial Fancy Crackers','4" PINK PIPE - BOX',2450],['Aerial Fancy Crackers','4" LEMON PIPE - BOX',2450],['Aerial Fancy Crackers','4" FULL CRACKLING - BOX',2450],['Aerial Fancy Crackers','4" PURPLE PIPE - BOX',2450],['Aerial Fancy Crackers','6" WOLF / BLACK TERROR - BOX',3750],['Aerial Fancy Crackers','MAGIZH JUNGLE SPECIAL EDITION - 2 PCS - BOX',4750],
['Fountain Crackers','MAGIZH MEGA PEACOCK - 3 FACE - BOX',900],['Fountain Crackers','MAGIZH BADA PEACOCK - BOX',1950],['Fountain Crackers','MAGIZH SNOW FALL - 2 PCS - BOX',900],['Fountain Crackers','MAGIZH TINGS - 2 PCS - BOX',900],['Fountain Crackers','MAGIZH 1000 K SIZZLING - 2 PCS - BOX',900],['Fountain Crackers','MAGIZH POPCORN - 2 PCS - BOX',900],['Fountain Crackers','MAGIZH TRI COLOR FOUNTAIN - BOX',1200],['Fountain Crackers','KING/COCKTAIL CRACKLING - BOX',1000],['Fountain Crackers','MAGIZH 6" WATERFALL FOUNTAIN - BOX',800],['Fountain Crackers','MAGIZH 6" SIZZLING FOUNTAIN - BOX',750],['Fountain Crackers','MAGIZH FANTASY FOUNTAINS - 5 PCS - BOX',950],['Fountain Crackers','MAGIZH RED RASPBERRY - 5 PCS - BOX',950],['Fountain Crackers','MAGIZH GREEN GARDEN - 5 PCS - BOX',950],['Fountain Crackers','MAGIZH BLUE ICE - 5 PCS - BOX',950],['Fountain Crackers','MAGIZH JIGARTHANDA TIN FOUNTAIN - PC',500],['Fountain Crackers','MAGIZH VANILA TIN FOUNTAIN - BOX',500],['Fountain Crackers','MAGIZH FALOODA TIN FOUNTAIN - BOX',500],['Fountain Crackers','SUN/ STAR/ MOON/ POPS LIGHT - BOX',450],
['Fantasy Items','MAGIZH BAT AND BALL - BOX',1000],['Fantasy Items','MAGIZH SWORD - BOX',650],['Fantasy Items','MAGIZH HEIST - BOX',1000],['Fantasy Items','SMOKY STICK - BOX',300],['Fantasy Items','MAGIZH GUN SQUAD - BOX',1000],['Fantasy Items','MAGIZH DOUBLE SNAKE - BOX',1000],['Fantasy Items','MAGIZH FLASH CANDLE - 5 PCS - BOX',500],['Fantasy Items','MAGIZH LOLLIPOP - BOX',1000],['Fantasy Items','MAGIZH SMILEY CANDLE - 2 PCS - BOX',750],['Fantasy Items','PHOTO FLASH - BOX',400],['Fantasy Items','MAGIZH FISH - BOX',700],['Fantasy Items','MAGIZH KATHAM - BOX',1000],['Fantasy Items','MAGIZH FANTASY ELEPHANT - BOX',1000],['Fantasy Items','MAGIZH SIREN - 3 PCS - BOX',950],['Fantasy Items','BAMBARAM (10 PCS) - BOX',500],['Fantasy Items','EMU FIRE EGG - BOX',1200],['Fantasy Items','BUTTERFLY - BOX',450],['Fantasy Items','HELICOPTER - BOX',500],['Fantasy Items','DRONE - BOX',900],['Fantasy Items','MAGIZH FANTASY LION - BOX',1000],['Fantasy Items','MAGIZH SMOKY - BOX',900],['Fantasy Items','SHINCHAN CRACKLING - BOX',700],['Fantasy Items','MAGIZH KULFI - BOX',1000],['Fantasy Items','MAGIZH WATERMELON/KIWI - BOX',1000],['Fantasy Items','CYLINDER BOMB - BOX',700],
['Matchbox Crackers','HERO CLASSIC 3 IN 1 - BOX',350],['Matchbox Crackers','MAJESTY MISHMASH MATCHES - 5 IN 1 - BOX',900],['Matchbox Crackers','MAJESTY FANTASY MEGA LAPTOP 10 IN 1 - BOX',1900],
['Gift Boxes','21 ITEMS GIFT BOX - GIFT BOX',1900],['Gift Boxes','31 ITEMS GIFTBOX - GIFT BOX',3250],['Gift Boxes','41 ITEMS GIFT BOX - GIFT BOX',4500],['Gift Boxes','51 ITEM GIFT BOX - GIFT BOX',6500],['Gift Boxes','60 ITEM GIFT BOX - GIFT BOX',9000]
].map((x,i)=>({id:i+1,category:x[0],name:x[1],base:x[2],price:Math.round(x[2]*hike*100)/100}));

let cart={};
try {
  const savedCart=JSON.parse(localStorage.getItem('crackerCart')||'{}');
  if(savedCart && typeof savedCart==='object' && !Array.isArray(savedCart)) cart=savedCart;
} catch(error) {
  console.warn('Saved cart could not be read; starting with an empty cart.',error);
}
const money=n=>'₹'+n.toLocaleString('en-IN',{maximumFractionDigits:2});
const categories=['All',...new Set(raw.map(x=>x.category))]; let active='All';
const catalogue=document.getElementById('catalogue');
const chips=document.getElementById('chips');
function renderChips(){chips.innerHTML=categories.map(c=>`<button class="chip ${c===active?'active':''}" data-cat="${escapeHtml(c)}">${escapeHtml(c)}</button>`).join('');chips.querySelectorAll('.chip').forEach(b=>b.onclick=()=>{active=b.dataset.cat;render()})}
function escapeHtml(s){return s.replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]))}
function render(){renderChips();const q=document.getElementById('search').value.trim().toLowerCase();let groups={};raw.filter(p=>(active==='All'||p.category===active)&&(!q||p.name.toLowerCase().includes(q))).forEach(p=>{(groups[p.category]??=[]).push(p)});if(!Object.keys(groups).length){catalogue.innerHTML='<div class="empty">No products found.</div>';return}catalogue.innerHTML=Object.entries(groups).map(([cat,items])=>`<section class="category"><h2>${escapeHtml(cat)}</h2><div class="grid">${items.map(card).join('')}</div></section>`).join('');catalogue.querySelectorAll('[data-add]').forEach(b=>b.onclick=()=>add(+b.dataset.add));catalogue.querySelectorAll('[data-qty]').forEach(i=>i.onchange=()=>{let n=Math.max(0,parseInt(i.value)||0);setQty(+i.dataset.qty,n)});catalogue.querySelectorAll('[data-minus]').forEach(b=>b.onclick=()=>setQty(+b.dataset.minus,(cart[b.dataset.minus]||0)-1));catalogue.querySelectorAll('[data-plus]').forEach(b=>b.onclick=()=>setQty(+b.dataset.plus,(cart[b.dataset.plus]||0)+1))}
function card(p){const q=cart[p.id]||0;return `<article class="product"><div class="product-top"><h3>${escapeHtml(p.name)}</h3><span class="tag">+20%</span></div><div class="old">Source price ${money(p.base)}</div><div class="price">${money(p.price)}</div><div class="controls"><div class="qty"><button data-minus="${p.id}">−</button><input data-qty="${p.id}" type="number" min="0" value="${q}"><button data-plus="${p.id}">+</button></div><button class="add" data-add="${p.id}">${q?'Update':'Add'}</button></div></article>`}
function add(id){setQty(id,(cart[id]||0)+1)}
function setQty(id,n){if(n<=0)delete cart[id];else cart[id]=n;save();render();renderCart()}
function save(){try{localStorage.setItem('crackerCart',JSON.stringify(cart))}catch(error){console.warn('Cart could not be saved in this browser.',error)}document.getElementById('cartCount').textContent=Object.values(cart).reduce((a,b)=>a+b,0)}
function totals(){let sub=Object.entries(cart).reduce((s,[id,q])=>s+raw.find(p=>p.id==id).price*q,0);let pack=sub*packingRate;return {sub,pack,total:sub+pack}}
function renderCart(){const items=Object.entries(cart).map(([id,q])=>({p:raw.find(p=>p.id==id),q}));document.getElementById('cartItems').innerHTML=items.length?items.map(({p,q})=>`<div class="cart-row"><div><strong>${escapeHtml(p.name)}</strong><br><small>${money(p.price)} × ${q}</small></div><b>${money(p.price*q)}</b><div class="row-controls"><div class="qty"><button data-cminus="${p.id}">−</button><input data-cinput="${p.id}" value="${q}" type="number" min="0"><button data-cplus="${p.id}">+</button></div><button class="remove" data-remove="${p.id}">Remove</button></div></div>`).join(''):'<div class="empty">Your cart is empty.</div>';const t=totals();document.getElementById('subtotal').textContent=money(t.sub);document.getElementById('packing').textContent=money(t.pack);document.getElementById('total').textContent=money(t.total);document.getElementById('minimumMsg').textContent=t.sub?`Minimum order: ${money(minimumOrder)} · ${t.sub<minimumOrder?money(minimumOrder-t.sub)+' more needed':''}`:`Minimum order: ${money(minimumOrder)}`;document.querySelectorAll('[data-cminus]').forEach(b=>b.onclick=()=>setQty(+b.dataset.cminus,(cart[b.dataset.cminus]||0)-1));document.querySelectorAll('[data-cplus]').forEach(b=>b.onclick=()=>setQty(+b.dataset.cplus,(cart[b.dataset.cplus]||0)+1));document.querySelectorAll('[data-cinput]').forEach(i=>i.onchange=()=>setQty(+i.dataset.cinput,Math.max(0,parseInt(i.value)||0)));document.querySelectorAll('[data-remove]').forEach(b=>b.onclick=()=>setQty(+b.dataset.remove,0))}
function orderText(){const t=totals();let lines=Object.entries(cart).map(([id,q])=>{const p=raw.find(x=>x.id==id);return `• ${p.name} × ${q} = ${money(p.price*q)}`});return `${STORE_NAME} — Order Enquiry\n\n${lines.join('\n')}\n\nSubtotal: ${money(t.sub)}\nPacking (5%): ${money(t.pack)}\nTotal: ${money(t.total)}\n\nName: ${document.getElementById('customerName').value||'-'}\nMobile: ${document.getElementById('customerPhone').value||'-'}\nCity: ${document.getElementById('customerCity').value||'-'}\nAddress: ${document.getElementById('customerAddress').value||'-'}`}
const drawer=document.getElementById('drawer'),backdrop=document.getElementById('backdrop'),modal=document.getElementById('modal');function openCart(){drawer.classList.add('open');backdrop.classList.add('open')}function closeCart(){drawer.classList.remove('open');backdrop.classList.remove('open')}
document.getElementById('cartBtn').onclick=openCart;document.getElementById('closeCart').onclick=closeCart;backdrop.onclick=closeCart;document.getElementById('search').oninput=render;document.getElementById('clearBtn').onclick=()=>{cart={};save();render();renderCart()};document.getElementById('checkoutBtn').onclick=()=>{if(!totals().sub){alert('Please add products first.');return}if(totals().sub<minimumOrder){alert(`Minimum order is ${money(minimumOrder)}.`);return}modal.classList.add('show')};document.getElementById('modalClose').onclick=()=>modal.classList.remove('show');document.getElementById('emailBtn').onclick=async()=>{
  if(!ORDER_EMAIL){alert('Order email is not configured.');return}
  if(!totals().sub){alert('Please add products first.');return}
  if(totals().sub<minimumOrder){alert(`Minimum order is ${money(minimumOrder)}.`);return}

  const btn=document.getElementById('emailBtn');
  const original=btn.textContent;
  btn.disabled=true;
  btn.textContent='Sending…';

  const formData=new FormData();
  formData.append('to',ORDER_EMAIL);
  formData.append('subject',STORE_NAME+' — New Order Enquiry');
  formData.append('body',orderText());
  formData.append('customerName',document.getElementById('customerName').value.trim());
  formData.append('customerPhone',document.getElementById('customerPhone').value.trim());
  formData.append('customerCity',document.getElementById('customerCity').value.trim());
  formData.append('customerAddress',document.getElementById('customerAddress').value.trim());
  formData.append('orderTotal',String(totals().total));

  try{
    const response=await fetch('https://vihaancrackersbackend-50022550740.development.catalystappsail.in/api/email/send',{method:'POST',body:formData});
    if(!response.ok) throw new Error('HTTP '+response.status);
    alert('Order submitted successfully. We will contact you shortly.');
    modal.classList.remove('show');
  }catch(error){
    console.error('Order email failed:',error);
    alert('We could not submit the order right now. Please try again.');
  }finally{
    btn.disabled=false;
    btn.textContent=original;
  }
};
save();render();renderCart();
