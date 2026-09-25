let cart = JSON.parse(localStorage.getItem("eeveePikaCart")) || [];

const cardsList = document.getElementById("cards-list");
const setsList = document.getElementById("sets-list");
const cartModal = document.getElementById("cart-modal");
const orderModal = document.getElementById("order-modal");
const successModal = document.getElementById("success-modal");
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");
const orderForm = document.getElementById("order-form");

function formatPrice(price) {
    return price.toLocaleString("ru-RU") + " ₽";
}

function getProduct(productId) {
    return products.find((product) => product.id === productId);
}

function saveCart() {
    localStorage.setItem("eeveePikaCart", JSON.stringify(cart));
}

function getCartQuantity(productId) {
    const item = cart.find((cartItem) => cartItem.id === productId);

    if (item) {
        return item.quantity;
    }

    return 0;
}

function renderProducts() {
    cardsList.innerHTML = "";
    setsList.innerHTML = "";

    visibleProducts.forEach((product) => {
        const card = document.createElement("article");
        card.className = "product-card";

        const quantityInCart = getCartQuantity(product.id);

        card.innerHTML = `
            <div class="product-image-wrapper">
                <img class="product-image" src="${product.image}" alt="${product.name}" onerror="this.style.display='none'; this.parentElement.classList.add('image-missing');">
            </div>
            <div class="product-info">
                <p class="product-set">${product.set}</p>
                <h3>${product.name}</h3>
                <p class="product-price">${formatPrice(product.price)}</p>
                <p class="product-stock">На складе: ${product.stock}</p>
                <button
                    class="main-button add-button"
                    type="button"
                    data-id="${product.id}"
                    ${quantityInCart >= product.stock ? "disabled" : ""}
                >
                    ${quantityInCart >= product.stock ? "В корзине максимум" : "Добавить в корзину"}
                </button>
            </div>
        `;

        if (product.type === "card") {
            cardsList.appendChild(card);
        } else {
            setsList.appendChild(card);
        }
    });
}

function renderCart() {
    cartItems.innerHTML = "";

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <p>Корзина пустая :(</p>
                <button class="secondary-button" type="button" id="continue-shopping">
                    Вернуться к покупкам
                </button>
            </div>
        `;

        const continueButton = document.getElementById("continue-shopping");

        continueButton.addEventListener("click", () => {
            closeModal(cartModal);
        });
    }

    let total = 0;
    let count = 0;

    cart.forEach((item) => {
        const product = getProduct(item.id);

        if (!product) {
            return;
        }

        total += product.price * item.quantity;
        count += item.quantity;

        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";

        cartItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}" onerror="this.style.display='none';">
            <div class="cart-item-info">
                <h3>${product.name}</h3>
                <p>${formatPrice(product.price)}</p>

                <div class="quantity-controls">
                    <button type="button" class="quantity-button minus-button" data-id="${product.id}">−</button>
                    <span>${item.quantity}</span>
                    <button
                        type="button"
                        class="quantity-button plus-button"
                        data-id="${product.id}"
                        ${item.quantity >= product.stock ? "disabled" : ""}
                    >+</button>
                </div>

                <button type="button" class="remove-button" data-id="${product.id}">
                    Я передумал
                </button>
            </div>
        `;

        cartItems.appendChild(cartItem);
    });

    cartCount.textContent = count;
    cartTotal.textContent = formatPrice(total);
}

function addToCart(productId) {
    const product = getProduct(productId);

    if (!product) {
        return;
    }

    const existingItem = cart.find((item) => item.id === productId);

    if (existingItem) {
        if (existingItem.quantity < product.stock) {
            existingItem.quantity += 1;
        }
    } else {
        cart.push({
            id: productId,
            quantity: 1
        });
    }

    saveCart();
    renderProducts();
    renderCart();
}

function changeQuantity(productId, change) {
    const item = cart.find((cartItem) => cartItem.id === productId);
    const product = getProduct(productId);

    if (!item || !product) {
        return;
    }

    item.quantity += change;

    if (item.quantity <= 0) {
        cart = cart.filter((cartItem) => cartItem.id !== productId);
    }

    if (item.quantity > product.stock) {
        item.quantity = product.stock;
    }

    saveCart();
    renderProducts();
    renderCart();
}

function removeFromCart(productId) {
    cart = cart.filter((item) => item.id !== productId);

    saveCart();
    renderProducts();
    renderCart();
}

function openModal(modal) {
    modal.classList.remove("hidden");
}

function closeModal(modal) {
    modal.classList.add("hidden");
}

document.addEventListener("click", (event) => {
    if (event.target.classList.contains("add-button")) {
        addToCart(Number(event.target.dataset.id));
    }

    if (event.target.classList.contains("minus-button")) {
        changeQuantity(Number(event.target.dataset.id), -1);
    }

    if (event.target.classList.contains("plus-button")) {
        changeQuantity(Number(event.target.dataset.id), 1);
    }

    if (event.target.classList.contains("remove-button")) {
        removeFromCart(Number(event.target.dataset.id));
    }
});

document.getElementById("open-cart").addEventListener("click", () => {
    renderCart();
    openModal(cartModal);
});

document.getElementById("close-cart").addEventListener("click", () => {
    closeModal(cartModal);
});

document.getElementById("checkout-button").addEventListener("click", () => {
    if (cart.length === 0) {
        alert("Сначала добавьте товар в корзину!");
        return;
    }

    closeModal(cartModal);
    openModal(orderModal);
});

document.getElementById("close-order").addEventListener("click", () => {
    closeModal(orderModal);
});

document.getElementById("close-success").addEventListener("click", () => {
    closeModal(successModal);
});

orderForm.addEventListener("submit", (event) => {
    event.preventDefault();

    cart = [];
    saveCart();

    orderForm.reset();

    closeModal(orderModal);
    renderProducts();
    renderCart();
    openModal(successModal);
});

[cartModal, orderModal, successModal].forEach((modal) => {
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeModal(modal);
        }
    });
});

renderProducts();
renderCart();
