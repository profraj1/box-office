const BASE_API_URL = "https://api.tvmaze.com/";

export async function getApi(searchString) {
    const response = await fetch(`${BASE_API_URL}${searchString}`).then(res => res.json())

    return response;
}