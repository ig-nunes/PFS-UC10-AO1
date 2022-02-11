/* --------------Desktop-------------- */

function pegarPesquisaDesktop() {
    let inputPesquisaDesktop = document.querySelector("#input-pesquisa-desktop").value;
    console.log(inputPesquisaDesktop);
}


function cadastrarEmailDesktop() {
    let cadastrarEmailDesktop = document.getElementById('cadastrar-email-desktop').value;
    console.log(cadastrarEmailDesktop);
}






/* --------------Tablet-------------- */


// Menu sanduíche com jquery:


// $( document ).ready(function(){
    
//     $('#menu-hamburguer-tablet').click(function(){
        
        
//         if ( $('#menu-nav-tablet').hasClass('header-nav-tablet-ativo') ) {
//             $('#menu-nav-tablet').removeClass('header-nav-tablet-ativo')
//         }else{
//             $('#menu-nav-tablet').addClass('header-nav-tablet-ativo')
//         }
        
//     })
    
// })






// Menu sanduíche de forma mais simplificada:

// $( document ).ready(function(){
    
//     $('#menu-hamburguer-tablet').click(function(){
        
//         $('#menu-nav-tablet').toggleClass('header-nav-tablet-ativo')              
        
//     })
    
// })






// Menu sanduíche sem jquery:




function mostrarNavTablet() {
    let navTablet = document.querySelector(".header-nav-tablet");

    if (getComputedStyle(navTablet).display == "none") {
        navTablet.style.display = "flex";
    }else{
        navTablet.style.display = "none";
    }
}






function cadastrarEmailTablet() {
    let cadastrarEmailTablet = document.getElementById('cadastrar-email-tablet').value;
    console.log(cadastrarEmailTablet);
}



/* --------------Smartphone-------------- */


// Menu sanduíche com JQuery:

// $( document ).ready(function(){
    
//     $('#menu-hamburguer-smartphone').click(function(){
        
        
//         if ( $('#menu-nav-smartphone').hasClass('header-nav-smartphone-ativo') ) {
//             $('#menu-nav-smartphone').removeClass('header-nav-smartphone-ativo')
//         }else{
//             $('#menu-nav-smartphone').addClass('header-nav-smartphone-ativo')
//         }
        
//     })
    
// })






// Menu sanduíche de forma mais simplificada:

// $( document ).ready(function(){
    
//     $('#menu-hamburguer-smartphone').click(function(){
        
//         $('#menu-nav-smartphone').toggleClass('header-nav-smartphone-ativo')              
        
//     })
    
// })






// Menu sanduíche sem jquery:



function mostrarNavSmartphone() {
    let navSmartphone = document.querySelector(".header-nav-smartphone");

    if (getComputedStyle(navSmartphone).display == "none") {
        navSmartphone.style.display = "flex";
    }else{
        navSmartphone.style.display = "none";
    }
}







function mostrarBarraPesquisaSmartphone() {
    let divBarraPesquisaSmartphone = document.querySelector('.form-pesquisa-smartphone');

    if (getComputedStyle(divBarraPesquisaSmartphone).display == "none") {
        divBarraPesquisaSmartphone.style.display = "flex";
    }else{
        divBarraPesquisaSmartphone.style.display = "none";
    }
}


function pegarPesquisaSmartphone() {
    let pegarPesquisaSmartphone = document.getElementById('input-pesquisa-smartphone').value;
    console.log(pegarPesquisaSmartphone);
}


function cadastrarEmailSmartphone() {
    let cadastrarEmailSmartphone = document.getElementById('cadastrar-email-smartphone').value;
    console.log(cadastrarEmailSmartphone);
}







function mostarInstitucionalSmartphone() {
    let linkInstitucional = document.getElementById("rodape-links-institucional-smartphone");
    let linkInformacoes = document.getElementById("rodape-links-informacoes-smartphone");

    if (getComputedStyle(linkInstitucional).display == "none") {
        linkInstitucional.style.display = "flex";

        if (getComputedStyle(linkInformacoes).display == "flex") {
            linkInformacoes.style.display = "none";
        }

    }else{
        linkInstitucional.style.display = "none";
    }

}




function mostarInformacoesSmartphone() {
    let linkInstitucional = document.getElementById("rodape-links-institucional-smartphone");
    let linkInformacoes = document.getElementById("rodape-links-informacoes-smartphone");

    if (getComputedStyle(linkInformacoes).display == "none") {
        linkInformacoes.style.display = "flex";

        if (getComputedStyle(linkInstitucional).display == "flex") {
            linkInstitucional.style.display = "none";
        }

    }else{
        linkInformacoes.style.display = "none";
    }

}


