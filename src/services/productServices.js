const getProducts = () => {
    return [
        {
          id: "1",
          name: "computer",
          price: 50000,
          quantity: 20,
        },
        {
          id: "2",
          name: "keyboard",
          price: 20000,
          quantity: 10,
        },
      ];
}

export const productServices = {
    getProducts,
}