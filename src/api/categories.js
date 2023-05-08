export async function getCategories () {
    const categories = await fetch(`${process.env.REACT_APP_API_URL}buzzolls/api/categories`)
    const jsonData = await categories.json()
    return jsonData.categories
}
