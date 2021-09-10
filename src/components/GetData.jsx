import { useEffect, useState } from "react"

const GetData = async (loaded, setLoaded, page) => {

    console.log('page: ', page)

    let url = `https://swapi.dev/api/people/?page=${page}`

    console.log('url: ', url)

    fetch(url)
    .then (async response => {
        const data = await response.json()
        localStorage.setItem('people', JSON.stringify(data));
        
        setLoaded(loaded + 1)
    })
    .catch (error => {
        console.log(error);
    })
}

export default GetData;