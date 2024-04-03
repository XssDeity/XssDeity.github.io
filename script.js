const lista_cursos= [];
lista_cursos.push({
    titulo: 'WiLL',
    texto: 'Feliz cumpleañso will',
    imagen: './img/will.png',
    enlace: 'https://youtu.be/vTL57Sie1Fo'

})

const tarjetas = document.createElement('div');
tarjetas.classList.add('row');
for(const curso of lista_cursos){
    const tarjeta=document.createElement('div');
    tarjeta.classList.add('card');
    const figure= document.createElement('div');

    const cuerpo= document.createElement('div');
    cuerpo.classList.add('card-body');
    const imagen = document.createElement('img');

    imagen.setAttribute('src',curso.imagen);
    imagen.classList.add('card-img-top');
    const titulo = document.createElement('h5');
    titulo.classList.add('card-title');
    titulo.innerText = curso.titulo;
    const texto=document.createElement('p');
    texto.classList.add('card-text');
    texto.innerText=curso.texto;
    const boton = document.createElement('a');
    boton.classList.add('btn');
    boton.classList.add('btn-primary');
    boton.setAttribute('href', curso.enlace);
    boton.innerText='+no-click';
    figure.appendChild(imagen);
    tarjeta.appendChild(figure);
    cuerpo.appendChild(titulo);
    cuerpo.appendChild(texto);
    cuerpo.appendChild(boton);
    tarjeta.appendChild(cuerpo);
    tarjetas.appendChild(tarjeta);

}
const contenedor = document.querySelector('.container');
contenedor.appendChild(tarjetas);