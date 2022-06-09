document.addEventListener("DOMContentLoaded", function() {
  const linesEl = document.getElementById('lines');
  for (let i = 2; i < 100; i++) {
    const tdEl = document.createElement('td');
    tdEl.appendChild(document.createTextNode(`Line ${i}`));

    const trEl = document.createElement('tr');
    trEl.appendChild(tdEl);

    linesEl.appendChild(trEl);
  }
});

let elementId = 3;

function addContent() {
  const el = document.createElement('p');
  el.classList.add('content')
  el.appendChild(document.createTextNode(`Element ${++elementId}`));

  const DC = document.getElementById('DC');
  DC.appendChild(el);
}
