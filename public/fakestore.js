document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM content loaded");

  const categoryDropdown = document.getElementById("categoryDropdown");
  const postContainer = document.getElementById("post-container");

  //Function to fetch data by category
  function fetchData(category) {
    //clear existing content in the postContainer
    postContainer.innerHTML = '';
    axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .then((response) => {
        console.log(response.data);
        const products = Array.isArray(response.data) ? response.data: [];

     
        products.forEach((product) => {
          const card = document.createElement("div");
          card.className = "card";
          card.style = "width: 18rem";

          const cardImg = document.createElement("img");
          cardImg.className = "card-img-top";
          cardImg.src = product.image;
          cardImg.alt = product.title;

          const cardBody = document.createElement("div");
          cardBody.className = "card-body";

          const cardTitle = document.createElement("h5");
          cardTitle.className = "card-title";
          cardTitle.textContent = product.title;

          const cardPrice = document.createElement("p");
          cardPrice.className = "card-text";
          cardPrice.textContent = `$${product.price.toFixed(2)}`;

          const cardDescription = document.createElement("p");
          cardDescription.className = "card-text";
          cardDescription.textContent = product.description;

          cardBody.appendChild(cardTitle);
          cardBody.appendChild(cardPrice);
          cardBody.appendChild(cardDescription);
          card.appendChild(cardImg);
          card.appendChild(cardBody);

          postContainer.appendChild(card);
        });
      });
  }

  //Event listener for the select element
  categoryDropdown.addEventListener('change', function () {
    const selectedCategory = categoryDropdown.value;
    console.log("Selected Category:", selectedCategory);
    fetchData(selectedCategory);
  });
  
  fetchData(categoryDropdown.value);
});
