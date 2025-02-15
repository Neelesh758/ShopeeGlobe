(async () => {
    try {
        let response = await fetch('https://dummyjson.com/products');
        let data = await response.json();
        console.log(data);  // Full data object
    } catch (error) {
        console.error('Error:', error);
    }
})();
