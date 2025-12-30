import { news } from './data.js';

const newsItems = document.getElementById('newsItems')

const newsModal = document.getElementById("newsModal")
const closeModal = document.getElementById("closeModal")

const modalImage = document.getElementById("modalImage")
const modalTitle = document.getElementById("modalTitle")
const modalText = document.getElementById("modalText")

news.forEach(item => {
  const newItem = document.createElement("div")
  newItem.classList.add("newItem")
  newItem.innerHTML = `
    <img src="${item.image}" alt="new">
    <h4>${item.title}</h4> 
  `
  newItem.addEventListener("click", () => {
    modalImage.src = item.image
    modalTitle.textContent = item.title
    modalText.textContent = item.text

    newsModal.classList.add("active")
    document.body.style.overflow = "hidden"
  })

  newsItems.appendChild(newItem)
})

closeModal.addEventListener("click", closeModalHandler)

newsModal.addEventListener("click", (e) => {
  if (e.target === newsModal) closeModalHandler()
})

function closeModalHandler() {
  newsModal.classList.remove("active")
  document.body.style.overflow = ""
}