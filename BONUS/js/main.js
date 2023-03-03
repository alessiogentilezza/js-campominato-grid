const gridDom = document.getElementById('grid');
const playGrid = document.getElementById('button');
const casellaSelezione = document.getElementById('casellaSelezione');

function griglia(numbreSquare){

    gridDom.innerHTML = '';

    for (let i = 1; i <= numbreSquare; i++) {        
        let elementoGriglia = document.createElement('div');
        elementoGriglia.classList.add('square');
        elementoGriglia.append(i);
        gridDom.append(elementoGriglia);
        
        elementoGriglia.addEventListener('click',
        function () {
            this.classList.toggle('back-ground');
            console.log(this.innerHTML);
        });}
}

playGrid.addEventListener('click',

    function () {
        let displayShow = document.getElementsByClassName('square');
        let casellaSelezioneScelta = casellaSelezione.value;

        switch (casellaSelezioneScelta) {
        
        case 'Difficoltà-1':
            griglia(100);
                break;
        case 'Difficoltà-2':
            griglia(81);
                break;
        case 'Difficoltà-3':
            griglia(49);
                break;
        default:
                break;
        }
        
        for (let i = 0; i < displayShow.length; i++) {
            displayShow[i].classList.toggle('d-flex');
            displayShow[i].classList.remove('back-ground');
        }

    });