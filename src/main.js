import { createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton } from "./js/render-functions";
import { getImagesByQuery, getHitsCount } from "./js/pixabay-api";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


let form = document.querySelector(".form");
form.addEventListener("submit", submitForm);
let line = "";
let page = 1;
let totalPage = 1

let button = document.querySelector(".load-button");

async function submitForm(event) {
    event.preventDefault();
    let formData = new FormData(form);
    let value = formData.get('search-text').trim();

    if (value == "") {
        iziToast.error({
            title: 'Error',
            message: 'request can`t be empty'
        });
        return;
    }
    if (line == value) {
        return;
    }
    line = value;
    page = 1;
    totalPage = await getHitsCount(line);

    clearGallery();
    showLoader();
    hideLoadMoreButton();

    addElements();
}

button.addEventListener("click", addElements);

function addElements() {
    hideLoadMoreButton();
    showLoader();
    getImagesByQuery(line, page)
        .then(response => {
            if (response.length == 0) {
                iziToast.error({
                    title: 'Error',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                });
            } else {
                page++;

                createGallery(response);
                if (page < totalPage) {
                    showLoadMoreButton();
                } else {
                    iziToast.show({
                        title: 'END',
                        message: "We're sorry, but you've reached the end of search results.",
                    });
                }

            }
        })
        .catch(error =>
            iziToast.error({
                title: 'Error',
                message: `${error}`,
            })
        )
        .finally(() => {
            hideLoader();
            window.scrollBy(0, (document.querySelector(".gallery li:first-child").getBoundingClientRect().height) * 2);
        });


}


