// Fetch Products from the API Using Fetch and Promises
const apiURL = "https://www.course-api.com/javascript-store-products";
fetch(apiURL)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    displayProducts(data);
  })
  .catch((error) => {
    displayError("Failed to load products. Please try again later.");
    console.error("Fetch error:", error);
  });

  // Task 3
  export const productList = [
    { id: 1, name: 'Laptop', price: 1200 },
    { id: 2, name: 'Headphones', price: 150 }
];

export function getProductById(id) {
    return productList.find(product => product.id === id);
}

// Task 4
async function getCustomerOrders(customerId) {
    try {
        const response = await fetch(`https://api.example.com/orders/${customerId}`);
        const orders = await response.json();
        console.log('Orders:', orders);
    } catch (error) {
        console.error('Error fetching orders:', error);  // Inspect this in the debugger
    }
}

getCustomerOrders(101);