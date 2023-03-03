const gridDom = document.getElementById('grid');
const playGrid = document.getElementById('button');

for (let i = 1; i <= 100; i++) {
    let elementoGriglia = document.createElement('div');
    elementoGriglia.classList.add('square');
    elementoGriglia.append(i);

    gridDom.append(elementoGriglia);
}

playGrid.addEventListener('click',

    function () {
        let displayShow = document.getElementsByClassName('square');
        for (let i = 0; i < displayShow.length; i++) {
            displayShow[i].classList.toggle('d-none');
        }

    });