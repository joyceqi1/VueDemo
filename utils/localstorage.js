class local {
    getItem(item) {
        return localStorage.getItem(item);
    }
    setItem(item, value) {
        console.log('local!')
        localStorage.setItem(item, value)
    }
}
export default local