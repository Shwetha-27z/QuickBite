fetch("data.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("menu-container");

    data.menu.forEach(item => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${item.image}" alt="${item.name}" />
        <h3>${item.name}</h3>
        <p>₹${item.price}</p>
        <p>${item.category}</p>
      `;

      container.appendChild(card);
    });
  });


  document.addEventListener("DOMContentLoaded", () => {
  const orderForm = document.querySelector("#order form");
  const messageBox = document.getElementById("order-message");

  orderForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent page reload

    messageBox.innerHTML = "✅ Your order has been placed successfully!";
    messageBox.style.color = "green";
    messageBox.style.marginTop = "15px";
    messageBox.style.fontWeight = "bold";

    orderForm.reset(); // Clear the form inputs
  });
});

