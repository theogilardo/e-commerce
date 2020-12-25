export const state = () => ({
  products: [
    {
      id: 1,
      name: "Air Max",
      price: 129.99,
      image: "shoe3.png",
      sizes: [39, 40, 41, 42, 43, 44, 45]
    },
    {
      id: 2,
      name: "Air Max",
      price: 129.99,
      image: "shoe3.png",
      sizes: [39, 40, 41, 42, 43, 44, 45]
    },
    {
      id: 3,
      name: "Air Max",
      price: 129.99,
      image: "shoe3.png",
      sizes: [39, 40, 41, 42, 43, 44, 45]
    }
  ],
  productSelected: null
});

export const getters = {
  products(state) {
    return state.products;
  },
  productSelected(state) {
    return state.productSelected;
  }
};

export const mutations = {
  findProduct(state, productID) {
    state.productSelected = state.products.find(
      product => product.id === productID
    );
  }
};
