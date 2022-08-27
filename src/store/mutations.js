export const SET_PRODUCTS = (state, products) => {
    state.products = products;
}

export const ADD_PRODUCT = (state, name, description, price, categorie_id) => {
    state.products.push({
        name: name,
        description: description,
        price: price,
        categorie_id: categorie_id,
    })
}