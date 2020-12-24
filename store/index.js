export const state = () => ({
  products: [
    {
      id: 1,
      name: "Air Max",
      price: 129.99,
      image: "shoe3.png"
    },
    {
      id: 2,
      name: "Air Max",
      price: 129.99,
      image: "shoe3.png"
    },
    {
      id: 3,
      name: "Air Max",
      price: 129.99,
      image: "shoe3.png"
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
