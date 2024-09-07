
// let resultados="";
// function mostrar() {
//     resultados="";
//     section=document.querySelector("#resultados-pesquisa")
  
//     for(let dado of perfumes){
//     //Cria um novo elemento HTML para cada resultado
//     resultados += 
//     `<div class="item-resultado">
//      <h2>
//         <a href="#" target="_blank">${dado.titulo}</a> 
//     </h2>
//     <img src="${dado.imagem}" alt="">    
//     <p>${dado.notasOlfativas}</p>
//     <p>${dado.marca}</p>
//     <p class="descricao-meta">${dado.descricao}</p>
//     <p>${dado.perfilOlfativo}</p>
//     <p>${dado.ocasiao}</p>
//     <a href="${dado.link}" target="_blank">Mais Informações</a>
//     </div>` 
//     }

// section.innerHTML=resultados


// }
// mostrar();





// // Quando clicar
// function pesquisar(){
// //Vai pegar o ID resultados-pesquisa
//     let section=document.getElementById("resultados-pesquisa")
// console.log(section)


// //Criação da variavel resultados para armazenar


// let campoPesquisa= document.querySelector("#pesquisar").value.toLowerCase

// console.log(campoPesquisa)

// //intera sobre cada dado da lista de dados
// for(let dado of perfumes){

    


//     if(dado.titulo.toLowerCase().includes(campoPesquisa)){
//         //Cria um novo elemento HTML para cada resultado
//        resultados += 
//        `<div class="item-resultado">
//      <h2>
//         <a href="#" target="_blank">${dado.titulo}</a> 
//     </h2>
   
//     <img src="${dado.imagem}" alt="">
//     <p>${dado.notasOlfativas}</p>
//     <p>${dado.marca}</p>
//     <p class="descricao-meta">${dado.descricao}</p>    
//     <p>${dado.perfilOlfativo}</p>
//     <p>${dado.ocasiao}</p>
//     <a href="${dado.link}" target="_blank">Mais Informações</a>
//     </div>` 

            
//     }


// }

// //Atribui os resultados gerados a seção do HTML
// section.innerHTML=resultados || "<h1>Nada foi encontrado.</h1>"



// }



let resultados = "";

// Função para mostrar todos os perfumes
function mostrar() {
    resultados = ""; // Limpa os resultados anteriores
    const section = document.querySelector("#resultados-pesquisa");

    for (let dado of perfumes) {
        // Cria um novo elemento HTML para cada resultado
        resultados += 
        `<div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${dado.titulo}</a> 
            </h2>
        </div>`;
    }

    section.innerHTML = resultados; // Exibe todos os resultados na seção
}

// Chama a função para mostrar todos os perfumes ao carregar a página
mostrar();

// Função para pesquisar perfumes
function pesquisar() {
    // Vai pegar o ID resultados-pesquisa
    let section = document.getElementById("resultados-pesquisa");
    console.log(section);

    // Criação da variável resultados para armazenar
    resultados = ""; // Limpa os resultados anteriores
    let campoPesquisa = document.querySelector("#pesquisar").value.toLowerCase(); // Obtém o valor do campo de pesquisa

    console.log(campoPesquisa);

    // Intera sobre cada dado da lista de dados
    for (let dado of perfumes) {
        // Verifica se o título inclui o que foi digitado
        if (dado.titulo.toLowerCase().includes(campoPesquisa) || dado.ocasiao.toLocaleLowerCase().includes(campoPesquisa) || dado.marca.toLocaleLowerCase().includes(campoPesquisa) || dado.notasOlfativas.toLocaleLowerCase().includes(campoPesquisa)) {
            // Cria um novo elemento HTML para cada resultado
            resultados += 
            `<div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a> 
                </h2>
                <img src="${dado.imagem}" alt="">
                <p>${dado.notasOlfativas}</p>
                <p>${dado.marca}</p>
                <p class="descricao-meta">${dado.descricao}</p>    
                <p>${dado.perfilOlfativo}</p>
                <p>${dado.ocasiao}</p>
                <a href="${dado.link}" target="_blank">Mais Informações</a>
            </div>`;
        }
    }if(campoPesquisa==""){
        section.innerHTML="<h1>Digite Algo</h1>"
        return
    }

    // Atribui os resultados gerados à seção do HTML
    section.innerHTML = resultados || "<h1>Nenhum resultado encontrado.</h1>"; // Exibe mensagem se não houver resultados
}

// Adiciona um evento de clique ao botão de pesquisa
document.getElementById("btn-pesquisar").addEventListener("click", pesquisar);