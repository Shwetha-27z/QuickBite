/**
 * @jest-environment jsdom
 */

describe("✅ Functional Test - Order Submission Flow", () => {
  beforeEach(() => {
    // Simulate the form HTML
    document.body.innerHTML = `
      <section id="order">
        <form id="order-form">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Item" />
          <input type="number" placeholder="Quantity" />
          <input type="text" placeholder="Address" />
          <button type="submit">Submit</button>
        </form>
        <div id="confirmation" style="display:none;"></div>
      </section>
    `;

    // Simulate the JS logic for submit
    const form = document.getElementById("order-form");
    const inputs = form.querySelectorAll("input");
    const confirmation = document.getElementById("confirmation");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = inputs[0].value;
      const item = inputs[1].value;
      const qty = parseInt(inputs[2].value);
      const address = inputs[3].value;

      if (name && item && qty > 0 && address) {
        confirmation.textContent = `Thank you ${name}, your ${item} (x${qty}) is on its way to ${address}!`;
        confirmation.style.display = "block";
      }
    });
  });

  test("✅ Should display confirmation on valid form submit", () => {
    const form = document.getElementById("order-form");
    const inputs = form.querySelectorAll("input");
    const confirmation = document.getElementById("confirmation");

    // Fill form
    inputs[0].value = "Shwe";
    inputs[1].value = "Burger";
    inputs[2].value = "2";
    inputs[3].value = "Chennai";

    // Submit the form
    form.dispatchEvent(new Event("submit"));

    // Check result
    expect(confirmation.style.display).toBe("block");
    expect(confirmation.textContent).toMatch(/Thank you Shwe/);
  });

  test("❌ Should NOT show confirmation if form is invalid", () => {
    const form = document.getElementById("order-form");
    const inputs = form.querySelectorAll("input");
    const confirmation = document.getElementById("confirmation");

    // Fill incomplete form
    inputs[0].value = "";
    inputs[1].value = "Pizza";
    inputs[2].value = "1";
    inputs[3].value = "Chennai";

    form.dispatchEvent(new Event("submit"));

    expect(confirmation.style.display).toBe("none");
    expect(confirmation.textContent).toBe("");
  });
});
