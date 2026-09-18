async function buscarconteudo(){    
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const json = await response.json();
        return json;

    }catch(erro){
        return false
    };
};

async function retornarconteudo(){
    const dados = await buscarconteudo();

    if(dados === false){
        return;
    };

    for(let n=0;(n < dados.length);n++){
        const div = document.createElement('div');
        div.innerHTML = `<fieldset><h1>${dados[n].title}</h1>
                                        ${dados[n].body}
                        </fieldset>`
        caixaconteudo.append(div);
    
    document.querySelector("h2").innerHTML ="";
};
};

async function enviartexto(){
    let titleDOM = document.querySelector("#title");
    let textoDOM = document.querySelector("#texto");

    if(titleDOM.value === "" || textoDOM.value === ""){
        alert("não é permitido envio de texto vazio.");
        return;
    };

    const obj = {method:"POST",
            headers:{
                "content-type":"application/json"},
            body:JSON.stringify({title:titleDOM.value,
                                body:textoDOM.value})
            };
    
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts",obj);
        const dados = await response.json();
        console.log(dados);

    } catch(erro) {console.log(erro);

    } finally {titleDOM.value = "";
                textoDOM.value ="";
    };
};

let caixaconteudo = document.querySelector(".conteudo");
let button = document.querySelector("button");

button.addEventListener("click", enviartexto);
retornarconteudo();
