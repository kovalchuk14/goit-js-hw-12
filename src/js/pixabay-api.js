import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api";

export async function getImagesByQuery(query, page) {
    let response = await axios.get("/", {
        params: {
            key: "50763024-dac579c8a6c32124d9f634148",
            q: query,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
            per_page: 15,
            page: page
        }
    });
    return response.data.hits;
}

export async function getHitsCount(line) {
    let response = await axios.get("/", {
        params: {
            key: "50763024-dac579c8a6c32124d9f634148",
            q: line,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
        }
    });
    return response.data.totalHits;
}