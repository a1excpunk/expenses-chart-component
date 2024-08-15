fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    // Find the maximum amount and index for it
    const maxAmount = Math.max(...data.map((d) => d.amount));
    const maxIndex = data.findIndex((d) => d.amount === maxAmount);
    // Update the height of each list item dynamically
    const listItems = document.querySelectorAll("li");
    listItems.forEach((li, index) => {
      const amount = data[index].amount;
      const height = (amount / maxAmount) * 100;

      li.style.setProperty("--dynamic-height", `${height}%`);
      li.style.setProperty("--amount", `"$${amount}"`);

      if (index === maxIndex) {
        li.classList.add("max-amount");
      }
    });
    // Calculate the total amount
    const totalAmount = data.reduce(
      (total, current) => total + current.amount,
      0
    );

    // Insert the total amount into the HTML
    document.getElementById(
      "totalAmount"
    ).textContent = `$${totalAmount.toFixed(2)}`;
  });
