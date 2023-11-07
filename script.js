let element = 0;
let n = document.getElementById('button');

function counter(event) {
  element = element + 1;
  document.getElementById('clickscount').textContent = element;
}

n.addEventListener('click', counter);
