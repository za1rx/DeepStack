const itemList = document.querySelectorAll(".faq__item");

itemList.forEach((item) => {
  item.addEventListener("click", () => {
    let content = item.querySelector(".faq__item_content");

    if (!content.style.height) {
      content.style.height = content.scrollHeight + "px" ;
      item.classList.add('faq__item--active');
    } else {
      content.style.height = null;
      item.classList.remove('faq__item--active');
    }
  });
});
