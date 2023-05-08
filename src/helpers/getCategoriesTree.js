export function getCategoriesTree (categories) {
    const data = JSON.parse(JSON.stringify(categories))
    const result = []
    data.map((category) => {
        if (category.parentId) {
            const parentCategory = data.find(item => item._id === category.parentId)
            parentCategory.children ? parentCategory.children.push(category) : parentCategory.children = [category]
        } else {
            result.push(category)
        }
    })
    return result
}
