export async function getRestaurants (localityId) {
    const restaurants = await fetch(`${process.env.REACT_APP_API_URL}buzzolls/api/restaurants?localityId=${localityId}`)
    const jsonData = await restaurants.json()
    return jsonData.restaurants
}
