// Este bloque hace que funcione el carrito de compras

const cart = [];

function toggleCart() {
    const panel = document.getElementById("cart-panel");
    panel.style.display = panel.style.display === "block" ? "none" : "block";
}

document.querySelectorAll(".add-to-cart").forEach((btn) => {
    btn.addEventListener("click", () => {
        const name = btn.dataset.name;
        const price = parseFloat(btn.dataset.price);
        cart.push({ name, price });
        updateCart();
    });
});

function updateCart() {
    const list = document.getElementById("cart-items");
    list.innerHTML = "";
    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - RD$${item.price}`;
        list.appendChild(li);
    });
}

function cancelCheckout() {
    document.getElementById('checkout-form').style.display = 'none';
}

function submitOrder(event) {
    event.preventDefault();
    const form = event.target;
    const direccion = form.direccion.value;
    const correo = form.correo.value;

    alert(`✅ Pedido confirmado\n\n📦 Dirección: ${direccion}\n📧 Correo: ${correo}\n\nGracias por tu compra!`);

    cart.length = 0;
    updateCart();
    form.reset();
    cancelCheckout();
    return false;
}

function checkout() {
    if (cart.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }

    const selected = document.getElementById('selected-items');
    selected.innerHTML = '<ul>' + cart.map(item => `<li>${item.name} - RD$${item.price}</li>`).join('') + '</ul>';
    
    document.getElementById('checkout-form').style.display = 'block';
    document.getElementById('cart-panel').style.display = 'none';
}


// Este otro bloque permite que le buscador funcione

const searchInput = document.getElementById("productSearch");
const items = document.querySelectorAll(".products .items");

searchInput.addEventListener("input", () => {
    const filter = searchInput.value.toLowerCase();

    items.forEach((item) => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(filter) ? "block" : "none";
    });
});
