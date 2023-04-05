export async function getLocalities () {
    const localities = await fetch(`${process.env.REACT_APP_API_URL}buzzolls/api/localities`)
    const jsonData = await localities.json()
    return jsonData.localities
}
