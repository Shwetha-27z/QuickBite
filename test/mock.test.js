/**
 * @jest-environment jsdom
 */

describe("🍟 Menu Rendering - Mock Test", () => {
  // Mock menu data (fake data.json)
  const mockMenu = [
    {
      name: "Test Burger",
      price: 99,
      category: "Fast Food",
      
      image: "images/test-burger.jpg"
    },
    {
      name: "Test Pasta",
      price: 149,
      category: "Italian",
      image: "images/test-pasta.jpg"
    }
  ];

  // Simulate DOM and menu render logic
  beforeEach(() => {
    document.body.innerHTML = `
      <section id="menu">
        <div class="menu-container"></div>
      </section>
    `;

    const container = document.querySelector(".menu-container");

    mockMenu.forEach(item => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>₹${item.price}</p>
      `;
      container.appendChild(card);
    });
  });

  test("✅ Menu items should render correctly", () => {
    const cards = document.querySelectorAll(".card");
    expect(cards.length).toBe(2); // we mocked 2 items

    expect(cards[0].querySelector("h3").textContent).toBe("Test Burger");
    expect(cards[1].querySelector("p").textContent).toBe("₹149");
  });
});
