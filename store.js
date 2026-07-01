/* ============================================================
   KCMSBL Store — shared cart + rendering logic (demo)
   Cart persists in localStorage. Checkout is mocked.
   ============================================================ */

const CART_KEY = 'kcmsbl_cart';
const getCart = () => JSON.parse(localStorage.getItem(CART_KEY) || '[]');
const setCart = (c) => { localStorage.setItem(CART_KEY, JSON.stringify(c)); renderCart(); };

/* ---- Player session (login → correct team routing) ---- */
const PLAYER_KEY = 'kcmsbl_player';
const getPlayer = () => JSON.parse(localStorage.getItem(PLAYER_KEY) || 'null');
const setPlayer = (p) => localStorage.setItem(PLAYER_KEY, JSON.stringify(p));
const logout = () => { localStorage.removeItem(PLAYER_KEY); location.href = 'index.html'; };

function addToCart(item){
  const cart = getCart();
  cart.push(item);
  setCart(cart);
  openCart();
}
function removeFromCart(idx){
  const cart = getCart();
  cart.splice(idx,1);
  setCart(cart);
}
function cartTotal(){ return getCart().reduce((s,i)=>s+i.price,0); }

function renderCart(){
  const cart = getCart();
  const count = document.querySelector('.cart-btn .count');
  if(count) count.textContent = cart.length;
  const items = document.getElementById('cartItems');
  const totalEl = document.getElementById('cartTotal');
  if(!items) return;
  if(cart.length===0){
    items.innerHTML = '<div class="empty">Your cart is empty.</div>';
  } else {
    items.innerHTML = cart.map((i,idx)=>`
      <div class="line">
        <div class="ic">${i.img}</div>
        <div class="info">
          <b>${i.name}</b>
          <small>${i.team ? i.team+' · ' : ''}${i.size}${i.custom?` · ${i.custom}`:''}</small>
          <small>$${i.price.toFixed(2)}</small>
        </div>
        <button class="rm" onclick="removeFromCart(${idx})">Remove</button>
      </div>`).join('');
  }
  if(totalEl) totalEl.textContent = '$'+cartTotal().toFixed(2);
}

function openCart(){ document.getElementById('drawer').classList.add('open');
  document.getElementById('overlay').classList.add('open'); }
function closeCart(){ document.getElementById('drawer').classList.remove('open');
  document.getElementById('overlay').classList.remove('open'); }

function checkout(){
  if(getCart().length===0){ alert('Your cart is empty.'); return; }
  alert('✅ Demo checkout!\n\nIn the real store this would go to secure payment (Stripe/Shopify),\nthen print-on-demand fulfillment ships each item directly to the player.\n\nTotal: $'+cartTotal().toFixed(2));
  setCart([]);
  closeCart();
}

// Build the cart drawer + header markup shared by every page
function mountChrome(activeTeamName){
  const player = getPlayer();
  const account = player
    ? `<a href="team.html?t=${player.team}" title="Go to your team store">👤 ${player.name}</a>
       <a href="#" onclick="logout();return false;" style="color:#98a2b3">Log out</a>`
    : `<a href="login.html">Log in</a>`;
  const header = `
    <div class="topbar">🎉 Demo store for <b>store.kcmsbl.com</b> — <a href="index.html">league store</a> · prototype, not live</div>
    <header class="nav"><div class="nav-inner">
      <a class="brand" href="index.html"><span class="logo">⚾</span> KCMSBL Store</a>
      <div class="nav-links">
        <a href="index.html">League Gear</a>
        <a href="index.html#teams">Team Stores</a>
        <a href="index.html#champ">Championship</a>
        ${account}
      </div>
      <div class="nav-spacer"></div>
      <button class="cart-btn" onclick="openCart()">🛒 Cart <span class="count">0</span></button>
    </div></header>`;
  const drawer = `
    <div class="overlay" id="overlay" onclick="closeCart()"></div>
    <aside class="drawer" id="drawer">
      <h3>Your Cart</h3>
      <div class="items" id="cartItems"></div>
      <div class="foot">
        <div class="total"><span>Total</span><span id="cartTotal">$0.00</span></div>
        <button class="checkout" onclick="checkout()">Checkout →</button>
      </div>
    </aside>`;
  document.body.insertAdjacentHTML('afterbegin', header);
  document.body.insertAdjacentHTML('beforeend', drawer);
  renderCart();
}

// Render a product card (used by both league + team pages)
function productCard(p, ctx){
  const price = p.base + (ctx.markup||0);
  const sizeOpts = p.sizes.map(s=>`<option>${s}</option>`).join('');
  const badge = p.seasonal ? `<span class="tag">Seasonal</span>`
             : p.hardgood ? `<span class="tag hard">Ships separately</span>` : '';
  const customField = p.custom
    ? `<input type="text" placeholder="Name & number (e.g. RIVERA 24)" id="cust-${ctx.prefix}-${p.id}">` : '';
  return `
    <div class="card">
      <div class="thumb">${p.img}</div>
      <div class="body">
        ${badge}
        <div class="name">${p.name}</div>
        <div class="desc">${p.desc}</div>
        <div class="price">$${price.toFixed(2)}</div>
        <select id="size-${ctx.prefix}-${p.id}">${sizeOpts}</select>
        ${customField}
        <button class="add" onclick='addFromCard(${JSON.stringify(p).replace(/'/g,"&#39;")}, ${JSON.stringify(ctx).replace(/'/g,"&#39;")})'>Add to Cart</button>
      </div>
    </div>`;
}

function addFromCard(p, ctx){
  const size = document.getElementById(`size-${ctx.prefix}-${p.id}`).value;
  const custEl = document.getElementById(`cust-${ctx.prefix}-${p.id}`);
  addToCart({
    id: p.id, name: (ctx.teamName? ctx.teamName+' ':'')+p.name, img: p.img,
    size, price: p.base + (ctx.markup||0),
    team: ctx.teamName || 'KCMSBL',
    custom: custEl && custEl.value ? custEl.value : ''
  });
}
