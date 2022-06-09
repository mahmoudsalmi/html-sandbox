console.clear();
console.log('Welcome !');


const scrollContainer = document.querySelector(".scroll-container");

for (let i = 1; i <= 20; i++) {
  let el = document.createElement('div');
  el.classList.add('scroll-item');
  el.innerText = `Item ${i}`;
  scrollContainer.appendChild(el);
}

scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft = (evt.deltaY ?? 0) + scrollContainer.scrollLeft;
});

