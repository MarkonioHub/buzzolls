export async function getProducts () {
    const products = await fetch(`${process.env.REACT_APP_API_URL}buzzolls/api/products`)
    const jsonData = await products.json()
    return jsonData.products
}
