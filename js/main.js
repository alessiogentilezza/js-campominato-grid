const gridDom = document.getElementById('grid');
const playGrid = document.getElementById('button');

for (let i = 1; i <= 100; i++) {
    let elementoGriglia = document.createElement('div');
    elementoGriglia.classList.add('square');
    elementoGriglia.append(i);

    gridDom.append(elementoGriglia);
}


// let displayShow = document.getElementsByClassName('square');

playGrid.addEventListener('click',
    function () {
        let displayShow = document.getElementsByClassName('square');

        displayShow.classList.toggle('d-none');
    });