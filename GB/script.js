async function buscarconteudo(){    
    try{
        const promise = await fetch("https://jsonplaceholder.typicode.com/posts");
        const json = await promise.json();
        return json;

    }catch(erro){
        return false
    };
};

async function retornarconteudo(){
    const dados = await buscarconteudo();

    for(let n=0;(n < dados.length);n++){
        const div = document.createElement('div');
        div.innerHTML = `<fieldset><strong>${dados[n].id}.</br>
                        TÍTULO:</strong> ${dados[n].title}</br></br>
                        <strong>CONTEÚDO:</strong> ${dados[n].body}
                        </fieldset>`
        caixaconteudo.append(div);
};
};

async function enviartexto(){
    try{
        const promise = await fetch("https://jsonplaceholder.typicode.com/posts",OBJETO);
    }
    
}

let caixaconteudo = document.querySelector(".conteudo");
let button = document.querySelector("button");


button.addEventListener("click", enviartexto);
retornarconteudo();