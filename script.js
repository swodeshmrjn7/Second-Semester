const products = [
  { name: "Classic Black", price: 49.99, image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=600&q=60" },
  { name: "Aviator Gold", price: 79.99, image: "https://images.unsplash.com/photo-1520975919910-6c8a7b0f8f1d?auto=format&fit=crop&w=600&q=60" },
  { name: "Sport Wrap", price: 59.50, image: "https://images.unsplash.com/photo-1526178613302-1f80e86c7c76?auto=format&fit=crop&w=600&q=60" },
  { name: "Tortoise Shell", price: 65.00, image: "https://images.unsplash.com/photo-1555529771-9d6b7e3a0f5f?auto=format&fit=crop&w=600&q=60" },
  { name: "Mirror Sport", price: 69.99, image: "https://images.unsplash.com/photo-1519872711925-c44f88a6bfb9?auto=format&fit=crop&w=600&q=60" },
  { name: "Urban Edge", price: 89.99, image: "https://images.unsplash.com/photo-1583241804364-10f95c7b2f6b?auto=format&fit=crop&w=600&q=60" },
  { name: "Polar Vision", price: 75.99, image: "https://images.unsplash.com/photo-1608222351219-04d8b273e6f3?auto=format&fit=crop&w=600&q=60" },
  { name: "Retro Round", price: 55.99, image: "https://images.unsplash.com/photo-1530041686258-7b32b5c49e4f?auto=format&fit=crop&w=600&q=60" }
];

let cartCount = 0;
const shopProducts = document.getElementById("shopProducts");

if (shopProducts) {
  products.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card bg-white p-4 rounded shadow-md";
    card.innerHTML = `
      <img src="${p.image}" class="w-full h-48 object-cover rounded">
      <h3 class="text-lg font-semibold mt-2">${p.name}</h3>
      <p class="text-gray-600">$${p.price.toFixed(2)}</p>
      <button class="addToCart mt-3 bg-blue-700 text-white px-4 py-2 rounded">Add to Cart</button>
    `;
    shopProducts.appendChild(card);
  });
}

document.addEventListener("click", e => {
  if (e.target.classList.contains("addToCart")) {
    cartCount++;
    const cartCountEl = document.getElementById("cartCount");
    if (cartCountEl) cartCountEl.textContent = cartCount;
    alert("Item added to cart!");
  }
});