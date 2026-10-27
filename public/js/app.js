/* ============================================================
   EVEREST TEA — client app
   ============================================================ */

/* ---------- line-art library (custom SVG, no emoji) ---------- */
const ART = {
  Black: `<svg class="art" viewBox="0 0 120 120" fill="none" aria-hidden="true">
    <path d="M28 52h52v22a26 26 0 0 1-52 0V52Z" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
    <path d="M80 57h8a10 10 0 0 1 0 20h-8" stroke="currentColor" stroke-width="3"/>
    <path d="M22 100h64" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
    <path d="M42 42c0-6 6-6 6-14M56 42c0-6 6-6 6-14M70 42c0-6 6-6 6-14" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
  </svg>`,
  Green: `<svg class="art" viewBox="0 0 120 120" fill="none" aria-hidden="true">
    <path d="M60 16c-16 14-24 34-20 56 4 20 16 32 20 34 4-2 16-14 20-34 4-22-4-42-20-56Z" stroke="currentColor" stroke-width="3"/>
    <path d="M60 26v66" stroke="currentColor" stroke-width="2.5"/>
    <path d="M60 46c-8-3-15-8-19-15M60 46c8-3 15-8 19-15M60 68c-9-3-17-9-21-17M60 68c9-3 17-9 21-17M60 90c-8-3-15-8-19-15M60 90c8-3 15-8 19-15" stroke="currentColor" stroke-width="2"/>
  </svg>`,
  White: `<svg class="art" viewBox="0 0 120 120" fill="none" aria-hidden="true">
    <path d="M60 14v84" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
    <path d="M60 32c14-2 24-10 28-22-14 0-24 8-28 22ZM60 54c14-2 24-10 28-22-14 0-24 8-28 22ZM60 76c14-2 24-10 28-22-14 0-24 8-28 22Z" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
    <path d="M60 43c-12-2-21-9-25-20 12 0 21 7 25 20ZM60 65c-12-2-21-9-25-20 12 0 21 7 25 20Z" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
    <circle cx="60" cy="104" r="3" fill="currentColor"/>
  </svg>`,
  Oolong: `<svg class="art" viewBox="0 0 120 120" fill="none" aria-hidden="true">
    <path d="M34 74c0-20 12-40 26-52 14 12 26 32 26 52 0 16-12 28-26 28S34 90 34 74Z" stroke="currentColor" stroke-width="3"/>
    <path d="M60 34c-4 18-4 40 0 62M42 56c12 4 24 4 36 0M40 74c13 5 27 5 40 0" stroke="currentColor" stroke-width="2"/>
    <path d="M60 34c-8-6-14-14-16-24 10 2 16 10 16 24Z" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
  </svg>`,
  Spiced: `<svg class="art" viewBox="0 0 120 120" fill="none" aria-hidden="true">
    <circle cx="60" cy="60" r="10" stroke="currentColor" stroke-width="3"/>
    <path d="M60 34c4 6 4 14 0 20-4-6-4-14 0-20ZM60 86c4 6 4 14 0 20-4-6-4-14 0-20ZM34 60c6-4 14-4 20 0-6 4-14 4-20 0ZM86 60c6-4 14-4 20 0-6 4-14 4-20 0Z" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
    <path d="M42 42c6 2 11 7 13 13-6-2-11-7-13-13ZM78 42c-6 2-11 7-13 13 6-2 11-7 13-13ZM42 78c6-2 11-7 13-13-6 2-11 7-13 13ZM78 78c-6-2-11-7-13-13 6 2 11 7 13 13Z" stroke="currentColor" stroke-width="2"/>
  </svg>`,
  Dark: `<svg class="art" viewBox="0 0 120 120" fill="none" aria-hidden="true">
    <rect x="34" y="38" width="52" height="46" rx="6" stroke="currentColor" stroke-width="3"/>
    <path d="M34 52h52M34 66h52M52 38v46M68 38v46" stroke="currentColor" stroke-width="2"/>
    <path d="M44 30h32M60 22v8" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M26 92h68" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
  </svg>`,
  Herbal: `<svg class="art" viewBox="0 0 120 120" fill="none" aria-hidden="true">
    <circle cx="60" cy="54" r="8" stroke="currentColor" stroke-width="3"/>
    <path d="M60 30c6 6 8 14 4 22-8-2-12-10-4-22ZM60 30c-6 6-8 14-4 22 8-2 12-10 4-22ZM36 54c6-6 14-8 22-4-2 8-10 12-22 4ZM84 54c-6-6-14-8-22-4 2 8 10 12 22 4ZM44 74c2-8 8-14 16-14-2 8-6 14-16 14ZM76 74c-2-8-8-14-16-14 2 8 6 14 16 14Z" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
    <path d="M60 62v34" stroke="currentColor" stroke-width="2.5"/>
    <path d="M60 78c-8-2-14-7-17-14M60 88c8-2 14-7 17-14" stroke="currentColor" stroke-width="2"/>
  </svg>`,
  Flavored: `<svg class="art" viewBox="0 0 120 120" fill="none" aria-hidden="true">
    <path d="M60 22c14 16 24 30 24 44a24 24 0 0 1-48 0c0-14 10-28 24-44Z" stroke="currentColor" stroke-width="3"/>
    <path d="M48 68a12 12 0 0 0 12 12" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M24 100h72" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
    <path d="M84 34c6-2 11-1 15 4-6 2-11 1-15-4ZM88 48c6-1 10 1 13 6-6 1-10-1-13-6Z" stroke="currentColor" stroke-width="2"/>
  </svg>`,
};

/* translucent glass tints per tea type */
const TYPE_TINT = {
  Black: "rgba(224, 123, 79, 0.16)",
  Green: "rgba(111, 211, 189, 0.15)",
  White: "rgba(237, 243, 249, 0.10)",
  Oolong: "rgba(236, 194, 126, 0.15)",
  Spiced: "rgba(224, 123, 79, 0.18)",
  Dark: "rgba(148, 178, 214, 0.13)",
  Herbal: "rgba(111, 211, 189, 0.13)",
  Flavored: "rgba(94, 136, 205, 0.18)",
};

/* ---------- state ---------- */
let cart = [];
try { cart = JSON.parse(localStorage.getItem("et_cart") || "[]") || []; } catch { cart = []; }
let allTeas = [];

const saveCart = () => localStorage.setItem("et_cart", JSON.stringify(cart));
const fmt = (n) => "৳" + n.toLocaleString("en-US");

/* ---------- product cards ---------- */
function cardHTML(t, i) {
  const idx = String((i || 0) + 1).padStart(2, "0");
  const hot = /Best Seller|Highest Peak|Award/.test(t.badge || "");
  return `
  <article class="product reveal">
    <div class="product-visual" style="--tint:${TYPE_TINT[t.type] || "rgba(148,178,214,0.12)"}">
      <span class="index">${idx} / 15</span>
      <span class="product-badge ${hot ? "hot" : ""}">${t.badge}</span>
      ${t.img
        ? `<img class="product-photo" src="/img/web/${t.img}" alt="${t.name} loose-leaf tea" loading="lazy" decoding="async" />`
        : (ART[t.type] || ART.Black)}
    </div>
    <div class="product-info">
      <div class="product-tags"><span>${t.type}</span><i></i><span>${t.origin}</span></div>
      <h3>${t.name}</h3>
      <p class="product-bn">${t.bn}</p>
      <p class="product-notes">${t.notes} · ${t.height} ft garden</p>
      <div class="product-foot">
        <span class="price">${t.oldPrice ? `<span class="old">${fmt(t.oldPrice)}</span>` : ""}${fmt(t.price)}<small>/100g</small></span>
        <button class="add-btn" data-add="${t.id}">Add +</button>
      </div>
    </div>
  </article>`;
}

function renderGrid(grid, teas) {
  grid.innerHTML = teas.map(cardHTML).join("");
  observeReveals();
}

/* ---------- shop filters ---------- */
function buildFilters() {
  const types = ["All", ...new Set(allTeas.map((t) => t.type))];
  const wrap = document.getElementById("filterChips");
  if (!wrap) return;
  wrap.innerHTML = types
    .map((t, i) => `<button class="chip ${i === 0 ? "active" : ""}" data-type="${t}">${t}</button>`)
    .join("");
  wrap.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-type]");
    if (!btn) return;
    wrap.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
    btn.classList.add("active");
    applyShopFilters();
  });
}

function applyShopFilters() {
  const grid = document.getElementById("shopGrid");
  if (!grid) return;
  const active = document.querySelector("#filterChips .chip.active")?.dataset.type || "All";
  const q = (document.getElementById("searchBox")?.value || "").toLowerCase().trim();
  const list = allTeas.filter((t) => {
    const okType = active === "All" || t.type === active;
    const okQ =
      !q ||
      t.name.toLowerCase().includes(q) ||
      t.bn.includes(q) ||
      t.origin.toLowerCase().includes(q) ||
      t.notes.toLowerCase().includes(q);
    return okType && okQ;
  });
  grid.innerHTML = list.length
    ? list.map(cardHTML).join("")
    : `<div class="empty-cart" style="grid-column:1/-1"><span class="big">কুয়াশা নেমেছে</span>No tea matched that search.<br/><span style="font-family:var(--font-bn)">অন্য কোনো স্বাদ খুঁজে দেখুন।</span></div>`;
  const count = document.getElementById("resultCount");
  if (count) count.textContent = list.length + " of 15 blends";
  observeReveals();
}

/* ---------- cart ---------- */
function addToCart(id) {
  const t = allTeas.find((x) => x.id === id);
  if (!t) return;
  const line = cart.find((l) => l.id === id);
  if (line) line.qty++;
  else cart.push({ id, qty: 1 });
  saveCart();
  syncCartUI();
  showToast(t.bn + " — কার্টে যোগ হয়েছে");
}

function setQty(id, d) {
  const line = cart.find((l) => l.id === id);
  if (!line) return;
  line.qty += d;
  if (line.qty <= 0) cart.splice(cart.indexOf(line), 1);
  saveCart();
  syncCartUI();
}

function removeLine(id) {
  const i = cart.findIndex((l) => l.id === id);
  if (i > -1) cart.splice(i, 1);
  saveCart();
  syncCartUI();
}

function cartTotal() {
  return cart.reduce((s, l) => {
    const t = allTeas.find((x) => x.id === l.id);
    return s + (t ? t.price * l.qty : 0);
  }, 0);
}

function syncCartUI() {
  const count = cart.reduce((s, l) => s + l.qty, 0);
  const el = document.getElementById("cartCount");
  if (el) el.textContent = count;
  renderDrawer();
  renderCheckout();
}

function lineHTML(id, qty) {
  const t = allTeas.find((x) => x.id === id);
  if (!t) return "";
  return `
  <div class="ci">
    <div class="ci-art" style="--tint:${TYPE_TINT[t.type] || "rgba(148,178,214,0.12)"}">${t.img ? `<img src="/img/web/${t.img}" alt="${t.name}" loading="lazy" />` : (ART[t.type] || ART.Black)}</div>
    <div class="ci-info">
      <b>${t.name}</b>
      <small>${fmt(t.price)} /100g</small>
    </div>
    <span class="ci-price">${fmt(t.price * qty)}</span>
    <div class="ci-qty">
      <div class="ctrl">
        <button data-qty="-1" data-id="${id}" aria-label="Less">−</button>
        <span>${qty}</span>
        <button data-qty="1" data-id="${id}" aria-label="More">+</button>
      </div>
      <button class="ci-x" data-x="${id}">Remove</button>
    </div>
  </div>`;
}

function renderDrawer() {
  const box = document.getElementById("drawerItems");
  if (!box) return;
  if (!cart.length) {
    box.innerHTML = `<div class="empty-cart"><span class="big">কার্ট হালকা</span>Like mountain air.<br/><span style="font-family:var(--font-bn)">এখনো কিছু বাছা হয়নি।</span></div>`;
  } else {
    box.innerHTML = cart.map((l) => lineHTML(l.id, l.qty)).join("");
  }
  const total = document.getElementById("drawerTotal");
  if (total) total.textContent = fmt(cartTotal());
}

function renderCheckout() {
  const box = document.getElementById("coItems");
  if (!box) return;
  if (!cart.length) {
    box.innerHTML = `<p style="color:var(--muted);font-size:.92rem;padding:10px 0">Your cart is empty — <a href="/shop.html" style="color:var(--clay-2)">browse the collection</a>.</p>`;
  } else {
    box.innerHTML = cart
      .map((l) => {
        const t = allTeas.find((x) => x.id === l.id);
        return `<div class="co-line"><span>${t.name} × ${l.qty}</span><span>${fmt(t.price * l.qty)}</span></div>`;
      })
      .join("");
  }
  const sub = document.getElementById("coSub");
  if (sub) sub.textContent = fmt(cartTotal());
  const ship = document.getElementById("coShip");
  if (ship) ship.textContent = fmt(cart.length ? 60 : 0);
  const g = document.getElementById("coGrand");
  if (g) g.textContent = fmt(cartTotal() + (cart.length ? 60 : 0));
}

/* ---------- global events ---------- */
document.addEventListener("click", (e) => {
  const add = e.target.closest("[data-add]");
  if (add) return addToCart(add.dataset.add);

  const qty = e.target.closest("[data-qty]");
  if (qty) return setQty(qty.dataset.id, +qty.dataset.qty);

  const x = e.target.closest("[data-x]");
  if (x) return removeLine(x.dataset.x);

  if (e.target.closest("#burger")) {
    return document.getElementById("navLinks").classList.toggle("open");
  }
  if (e.target.closest(".drawer-mask")) return setCartOpen(false);
  if (e.target.closest("#openCart")) return setCartOpen(true);
  if (e.target.closest("#closeCart")) return setCartOpen(false);
});

function setCartOpen(open) {
  document.body.classList.toggle("cart-open", open);
  document.getElementById("navLinks")?.classList.remove("open");
}

/* ---------- toast ---------- */
let toastTimer;
function showToast(msg) {
  let t = document.querySelector(".toast");
  if (!t) {
    t = document.createElement("div");
    t.className = "toast";
    document.body.appendChild(t);
  }
  t.textContent = msg;
  requestAnimationFrame(() => t.classList.add("show"));
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2600);
}

/* ---------- checkout ---------- */
async function submitOrder(e) {
  e.preventDefault();
  if (!cart.length) return showToast("কার্ট খালি — cart is empty");
  const f = e.target;
  const fields = f.elements;
  const payload = {
    name: fields["name"].value,
    phone: fields["phone"].value,
    address: fields["address"].value,
    items: cart.map((l) => ({ id: l.id, qty: l.qty })),
  };
  const res = await fetch("/api/orders", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  if (data.success) {
    cart = [];
    saveCart();
    syncCartUI();
    const wrap = document.getElementById("coWrap");
    const success = document.getElementById("successBox");
    if (wrap && success) {
      wrap.style.display = "none";
      success.style.display = "";
      document.getElementById("orderId").textContent = data.orderId;
      f.reset();
      success.scrollIntoView({ behavior: "smooth" });
    }
  }
}

/* ---------- chrome ---------- */
function initChrome() {
  const nav = document.querySelector(".nav");
  const onScroll = () => nav?.classList.toggle("scrolled", scrollY > 30);
  onScroll();
  addEventListener("scroll", onScroll, { passive: true });

  const here = location.pathname === "/" ? "index.html" : location.pathname.replace(/^\/+/, "");
  document.querySelectorAll(".nav-links a").forEach((a) => {
    const href = (a.getAttribute("href") || "").replace(/^\/+/, "");
    if (href === here || (href === "index.html" && here === "index.html")) a.classList.add("active");
  });

  document.getElementById("searchBox")?.addEventListener("input", applyShopFilters);
  document.getElementById("orderForm")?.addEventListener("submit", submitOrder);
}

/* ---------- reveal on scroll ---------- */
function observeReveals() {
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      }),
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );
  document.querySelectorAll(".reveal:not(.in)").forEach((el) => io.observe(el));
}

/* ---------- boot ---------- */
async function loadTeas() {
  try {
    const res = await fetch("/api/teas");
    allTeas = await res.json();
  } catch {
    allTeas = [];
  }
  const grid = document.getElementById("featuredGrid");
  if (grid) renderGrid(grid, [...allTeas].sort((a, b) => b.rating - a.rating).slice(0, 6));
  if (document.getElementById("shopGrid")) {
    buildFilters();
    applyShopFilters();
  }
  syncCartUI();
}

loadTeas();
initChrome();
observeReveals();
