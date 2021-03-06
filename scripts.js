const modalOverlay = document.querySelector('.modal-overlay');
const modal = document.querySelector('.modal');

const cards = document.querySelectorAll('.card');


for(let card of cards){
    card.addEventListener("click", function(){
        const postId = card.getAttribute("id")
        modalOverlay.classList.add('active')
        //modalOverlay.querySelector(".image_container_modal img").src = `/assets/${postId}.png`
        modalOverlay.querySelector(".image_container_modal img").src = card.querySelector(".card_image-container img").src
        modalOverlay.querySelector(".title_modal p").textContent = card.querySelector(".card_content p").textContent
        modalOverlay.querySelector(".info_modal p").textContent = card.querySelector(".card_info p").textContent
    })
}

document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active");
    modalOverlay.querySelector(".image_container_modal img").src = ""
        modalOverlay.querySelector(".title_modal p").textContent = ""
        modalOverlay.querySelector(".info_modal p").textContent = ""

})