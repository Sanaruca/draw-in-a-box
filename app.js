let n = 16, nClick = 0;
const body = document.querySelector('body');
const button = document.createElement('button');
button.textContent = 'Reset';


body.appendChild(button);


button.addEventListener('click', function () {
    n = prompt(
        'Crea un nuevo cuadro de dibujo con el numero de cuadros que quieras.\n'
        + '¿Cual es la cantidad de cuadros que quieres para tu cuadro de dibujo?'
    );
    if (n == null || n == '') n = 16;
    console.log(n);
    body.removeChild(document.getElementsByClassName('Allcontent')[0]);
    draw();
    checkColor();
});


function draw() {

    const allContent = document.createElement('div');
    allContent.classList.add('Allcontent');

    //style
    allContent.style.justifyContent = 'center';
    allContent.style.display = 'flex';
    allContent.style.padding = '20px';
    allContent.style.backgroundColor = randomRgbColor();


    //add to document
    body.appendChild(allContent);

    //event
    allContent.addEventListener('click', function () {
        allContent.style.backgroundColor = randomRgbColor();
        ++nClick;
        checkColor();
    });


    for (let i = 1; i <= Math.floor(n); i++) {
        const divContent = document.createElement('div');
        divContent.setAttribute('id', `d${i}`);
        divContent.style.backgroundColor = 'white';
        allContent.appendChild(divContent);


        for (var index = 1; index <= Math.floor(n); index++) {
            const div = document.createElement('div');
            div.setAttribute('class', `d${index}`);
            div.style.backgroundColor = 'white';
            div.style.height = `${480 / n}px`;
            div.style.width = `${480 / n}px`;
            divContent.appendChild(div);

            //event
            div.addEventListener('mouseover', function (e) {
                console.log(e);
                let a = 0.255;
                div.style.backgroundColor = `rgb(255, 166, 0)`;
            });
        }
    }
}


function randomRgbColor() {
    var numRandom = () => {
        var num = Math.floor(Math.random() * 255)
        return num;
    }
    return `rgb(${numRandom()}, ${numRandom()}, ${numRandom()})`;
}

function checkColor() {

    let contentColor = document.getElementsByClassName('Allcontent')[0].style.backgroundColor;
    const menssage = 'La probabilidad de que tu espacio de trabajo tenga color negro, blanco o una tonalidad de gris es de 1 en 768\n';

    switch (contentColor) {
        case 'rgb(0, 0, 0)':
            alert('¡Felizidades!\n' + menssage + `Nuemero de clicks realizados: ${nClick}`)
            break;
            
            case 'rgb(255, 255, 255)':
            alert('¡Felizidades!\n' + menssage `Nuemero de clicks realizados: ${nClick}`)
            break;
            
        default:
            break;
    }
}

function appInfo() {
    alert('Bienvenido');
    alert(
        `Tu cuadro es de ${n}x${n}.\n`
        + 'Esto es lo que puedes hacer por el momento:\n'
        + '- Al posicionar tu puntero encima del cuadro de dibujo empezaras a dibujar.\n'
        + '- Podras notar que al recargar la pagina tu espacio de trabajo cambia a un color random, '
        + 'puedes hacer click en el espacio de trabajo para cambiar su color sin peder tu dubujo.\n'
        + '- Con el boton Reset puedes crear un nuevo cuadro de dibujo con el numero de cuadros que quieras '
        + '(Por cuestiones de rendimiento te recomindo que el numero que introduscas sea menor a 500).'
    );
}

draw();
checkColor();
