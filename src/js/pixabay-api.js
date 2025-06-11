import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api";

export async function getImagesByQuery(query, page) {
    const response = await axios.get("/", {
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
    const { hits, totalHits } = response.data;
    return { hits, totalHits };
}
