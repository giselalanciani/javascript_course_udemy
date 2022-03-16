const productsList = {
    products: [
    {
        title: "A Pillow",
        imageUrl:"https://m.media-amazon.com/images/I/51XHo25ShzS._AC_SX679_.jpg",
        price: 19.99,
        description: "A soft pillow!"
    },
    {
        title: "A Carpet",
        imageUrl: "https://m.media-amazon.com/images/I/A1+KBZhcyLS._AC_SX679_.jpg",
        price: 89.99,
        description: "A carpet wich you might like - or not."
    }
  ],
  render () {
      const renderHook = document.getElementById("app");
      const prodList = document.createElement("ul");
      prodList.className = "product-list";
      for (const prod of this.products){
          const prodEl = document.createElement("li");
          prodEl.className = "product-item";
          prodList.append(prodEl);
          prodEl.innerHTML = `
          <div>
           <img src="${prod.imageUrl}" alt="${prod.title}" >
           <div class="product-item__content">
           <h2>${prod.title}</h2>
           <h3>\$${prod.price}</h3>
           <p>${prod.description}</p>
           <button>Add to Cart</button>
           </div>
          </div>
          `;
          
      }
      renderHook.append(prodList);
  }
};
productsList.render();