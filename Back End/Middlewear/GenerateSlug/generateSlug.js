
const generateSlug = (name) => {

    if (typeof name !== 'string') {
        throw new Error('categoryName must be a string');
    }
    if (name.length < 3) {
        throw new Error('categoryName must be at least 3 characters long');
    }
    if (name.length > 50) {
        throw new Error('categoryName must be at most 50 characters long');
    }
   

    return name
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '');
}

module.exports = generateSlug;