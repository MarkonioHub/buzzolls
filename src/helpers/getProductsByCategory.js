export function getProductsByCategory (currentCategory, products) {
    if (currentCategory) {
        if (currentCategory.children) {
            let result = []
            for (let i = 0; i < currentCategory.children.length; i++) {
                result = result.concat(products.filter(product => currentCategory.children[i].productsId.includes(product._id)))
            }
            return result
        } else {
            return products.filter(product => currentCategory.productsId.includes(product._id))
        }
    } else {
        return products
    }
}
