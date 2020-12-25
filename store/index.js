export const state = () => ({
  products: [
    {
      id: 1,
      name: "Air Zoom",
      price: 159.99,
      image: "shoe3.png",
      style: {
        background: "#9AC4DE",
        color: "#9AC4DE"
      },
      sizes: [40, 41, 42, 43, 44, 45]
    },
    {
      id: 2,
      name: "Air Force",
      price: 119.99,
      image: "shoe3.png",
      style: {
        background: "#DC7A30",
        color: "#DC7A30"
      },
      sizes: [39, 40, 41, 42, 43, 44, 45]
    },
    {
      id: 3,
      name: "Predator",
      price: 99.99,
      image: "shoe3.png",
      style: {
        background: "#49C7E3",
        color: "#49C7E3"
      },
      sizes: [39, 40, 41, 42, 43, 44]
    }
  ],
  productSelected: null,
  productSizeSelected: null,
  productCart: []
});

export const getters = {
  products(state) {
    return state.products;
  },
  productCart(state) {
    return state.productCart;
  },
  productSelected(state) {
    return state.productSelected;
  },
  productSizeSelected(state) {
    return state.productSizeSelected;
  }
};

export const mutations = {
  findProduct(state, productID) {
    state.productSelected = state.products.find(
      product => product.id === productID
    );
  },
  selectProductSize(state, size) {
    state.productSizeSelected = size;
  },
  addToCard(state) {
    const newCart = state.productSelected;
    newCart.size = state.productSizeSelected;
    state.productCart.push(newCart);
  }
};
