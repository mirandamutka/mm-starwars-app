const GetData = async (loaded, setLoaded, page, results, setResults) => {

    let url = `https://swapi.dev/api/people/?page=${page}`

    fetch(url)
    .then (async response => {
        const data = await response.json()
        setResults(data);
        setLoaded(loaded + 1);
    })
    .catch (error => {
        console.log(error);
    })
}

export default GetData;