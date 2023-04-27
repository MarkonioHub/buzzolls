export async function getSlides () {
    const slides = await fetch(`${process.env.REACT_APP_API_URL}buzzolls/api/slider`)
    const jsonData = await slides.json()
    return jsonData.slides
}
