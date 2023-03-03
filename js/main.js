const gridDom = document.getElementById('grid');

for (let i = 0; i < 100; i++) {
    const currentElement = document.createElement('div');
    currentElement.classList.add('square');

    gridDom.append(currentElement);

}