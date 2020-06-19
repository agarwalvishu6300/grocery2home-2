


export const getCategories = () => {
    return fetch(`http://localhost:8000/api/categories`, {
        method: "GET"
      })
        .then(response => {
          return response.json();
        })  
        .catch(err => console.log(err));
};


export const getProducts = () => {
    return fetch(`http://localhost:8000/api/products` , {
        method : "GET"
    })
    .then(response => {
        return response.json();
    })
    .catch(err=>console.log(err));
}