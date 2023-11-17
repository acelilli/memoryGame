let arrayAnimali = ['🐱', '🦉', '🐾', '🦁', '🦋', '🐛', '🐝', '🐬', '🦊', '🐨', '🐰', '🐯', '🐱', '🦉', '🐾', '🦁', '🦋', '🐛', '🐝', '🐬', '🦊', '🐨', '🐯', '🐰'];

function mescolaArray(array) {
    for (let i = 0; i< array.length; i ++) {
      const j = Math.floor(Math.random() * (array.length));
      [array[i], array[j]] = [array[j], array[i]]; // scambia l'array di i con l'array del numero casuale (j)
    }
  }
mescolaArray(arrayAnimali)

const creaCaselle = function () {
    const contenitore = document.getElementById('caselle');
    for (let i=0; i<24; i++) {
        let caselle = document.createElement('div');
        caselle.classList.add('casella');
        contenitore.appendChild(caselle);
    }
}
creaCaselle();


let sec = 0;
let min = 0;
const timer = setInterval(function () {
    const tempo = document.getElementById('timer')
    tempo.innerHTML = 'Tempo: '+ min + 'min - ' + sec + 'sec'
    sec += 1;
    if (sec == 60) {
        sec = 0;
        min ++
    }
}, 1000)

const popolaCaselle = function (arr) {
    let casella = document.querySelectorAll('.casella')
    casella.forEach((Element, i) => { 
        Element.innerHTML = '<div class="icona">' + arr[i] + '</div>';
        })
    }
 popolaCaselle(arrayAnimali)

 const cliccaCasella = function () {
    let casella = document.querySelectorAll('.casella div');
    casella.forEach(el => {
        el.addEventListener('click', function () {
            el.classList.add('scoperto');
            // el.setAttribute('style', 'opacity:1');
            setTimeout(trovaCoppie,1500)
    })
})
}
cliccaCasella()

const trovaCoppie = function () {
    const scoperti = document.querySelectorAll('.scoperto');
    if (scoperti.length == 2) {
        if (scoperti[0].innerHTML == scoperti[1].innerHTML) {
            scoperti[0].classList.add('giusti');
            scoperti[1].classList.add('giusti');

            scoperti.forEach(el => {
                el.classList.remove('scoperto')})
            //scoperti[0].classList.remove('scoperto');
            //scoperti[1].classList.remove('scoperto');
            
        } else {
           // scoperti[0].classList.remove('scoperto');
            // scoperti[1].classList.remove('scoperto');
            scoperti.forEach(el => {
                el.classList.remove('scoperto')})
        }
    }
    if (scoperti.length > 2) {
        scoperti.forEach(el => {
            el.classList.remove('scoperto')
        })
    }
    const caselleGiuste = document.querySelectorAll('.giusti')
    if (caselleGiuste.length == arrayAnimali.length) {
        clearInterval(timer);
    }
}

const ricomincia = function() {
    const pulsante = document.getElementById('ricomincia')
    pulsante.addEventListener ('click', function() {location.reload()})
}
ricomincia()