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
        div.innerHTML = `<fieldset><strong>${dados[n].id}.<br>
                        TÍTULO:</strong> ${dados[n].title}<br><br>
                        <strong>CONTEÚDO:</strong> ${dados[n].body}
                        </fieldset>`
        caixaconteudo.append(div);
};
};

async function enviartexto(){
    let title = document.querySelector("#title").value;
    let texto = document.querySelector("#texto").value;

    const obj = {method:"POST",
                headers:{
                    "content-type":"application/json"},
                body:JSON.stringify({title:title,
                                    body:texto})
                }
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts",obj);
        const dados = await response.json();
        console.log(dados);

    }catch(erro){console.log(erro)

    }finally{console.log("requisição encerrada")};
};

let caixaconteudo = document.querySelector(".conteudo");
let button = document.querySelector("button");

button.addEventListener("click", enviartexto);
retornarconteudo();
