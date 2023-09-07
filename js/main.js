import { textoIngles } from "../dicionario/eng.js";
import { textoPortugues } from "../dicionario/ptbr.js";

const botoesTraducao = [
    document.querySelector('.uk'),
    document.querySelector('.br'),
];

const botaoInicioPagina = document.querySelector('.botao_subir');

let arrayLinksPortfolio = [
    document.querySelector('.linkuxdesign'),
    document.querySelector('.linkdesigngrafico'),
];

const idiomaPagina = [];

const elementosPaginaPrincipal = [
    document.querySelector('.home'),
    document.querySelector('.portfolio'),
    document.querySelector('.sobre'),
    document.querySelector('.contato'),
    document.querySelector('.banneruxdesign'),
    document.querySelector('.bannerwebdesign'),
    document.querySelector('.bannerimpressos'),
    document.querySelector('.banneridentidadevisual'),
    document.querySelector('.conteudo_titulo_uxdesign'),
    document.querySelector('.conteudo_texto_uxdesign'),
    document.querySelector('.conteudo_titulo_webdesign'),
    document.querySelector('.conteudo_texto_webdesign'),
    document.querySelector('.conteudo_titulo_identidadevisual'),
    document.querySelector('.conteudo_texto_identidadevisual'),
    document.querySelector('.rodape_email'),
    document.querySelector('.rodape_linkedin'),
    document.querySelector('.rodape_github'),
    document.querySelector('.rodape_frase'),
    document.querySelector('.rodape_ano'),
];

const btnCardsPaginaPrincipal =  document.querySelectorAll('.conteudo_btn');

const elementosPortfolio = [
    document.querySelector('.home'),
    document.querySelector('.portfolio'),
    document.querySelector('.sobre'),
    document.querySelector('.contato'),
    document.querySelector('.banner__uxdesign'),
    document.querySelector('.portfolio_projetoux_titulo'),
    document.querySelector('.portfolio_desafio_strong'),
    document.querySelector('.portfolio_desafio_paragrafo'),
    document.querySelector('.portfolio_solucao_strong'),
    document.querySelector('.portfolio_solucao_paragrafo'),
    document.querySelector('.portfolio_entregaveis_paragrafo'),
    document.querySelector('.persona'),
    document.querySelector('.flow'),
    document.querySelector('.wireframes'),
    document.querySelector('.voz'),
    document.querySelector('.navegavel'),
    document.querySelector('.botao_mybuddy'),
    document.querySelector('.portfolio_agendamento_textoprincipal'),
    document.querySelector('.texto_agendamento_primeiro'),
    document.querySelector('.texto_agendamento_segundo'),
    document.querySelector('.texto_agendamento_terceiro'),
    document.querySelector('.texto_adocao_primeiro'),
    document.querySelector('.texto_adocao_segundo'),
    document.querySelector('.texto_adocao_terceiro'),
    document.querySelector('.texto_vivency_primeiro'),
    document.querySelector('.texto_vivency_segundo'),
    document.querySelector('.texto_vivency_terceiro'),
    document.querySelector('.titulo_layoutsite'),
    document.querySelector('.rodape_email'),
    document.querySelector('.rodape_linkedin'),
    document.querySelector('.rodape_github'),
    document.querySelector('.rodape_frase'),
    document.querySelector('.rodape_ano'),
];

const elementosDesignGrafico = [
    document.querySelector('.home'),
    document.querySelector('.portfolio'),
    document.querySelector('.sobre'),
    document.querySelector('.contato'),
    document.querySelector('.titulo_banner'),
    document.querySelector('.titulo_ferramentasusadas'),
    document.querySelector('.titulo_pecasredessociais'),
    document.querySelector('.titulo_infograficos'),
    document.querySelector('.titulo_manualmarca'),
    document.querySelector('.rodape_email'),
    document.querySelector('.rodape_linkedin'),
    document.querySelector('.rodape_github'),
    document.querySelector('.rodape_frase'),
    document.querySelector('.rodape_ano'),
];

const elementosSobreMim = [
    document.querySelector('.home'),
    document.querySelector('.portfolio'),
    document.querySelector('.sobre'),
    document.querySelector('.contato'),
    document.querySelector('.sobre_mim'),
    document.querySelector('.titulo_formacao'),
    document.querySelector('.formacao_conteudo_texto'),
    document.querySelector('.formacao_interesses_texto'),
    document.querySelector('.praia'),
    document.querySelector('.harry_potter'),
    document.querySelector('.leitura'),
    document.querySelector('.series'),
    document.querySelector('.viagem'),
    document.querySelector('.pets'),
    document.querySelector('.formacao_interesses_contato'),
    document.querySelector('.rodape_email'),
    document.querySelector('.rodape_linkedin'),
    document.querySelector('.rodape_github'),
    document.querySelector('.rodape_frase'),
    document.querySelector('.rodape_ano'),
];

const elementosPaginaContato = [
    document.querySelector('.home'),
    document.querySelector('.portfolio'),
    document.querySelector('.sobre'),
    document.querySelector('.contato'),
    document.querySelector('.banner_titulo_contato'),
    document.querySelector('.rodape_email'),
    document.querySelector('.rodape_linkedin'),
    document.querySelector('.rodape_github'),
    document.querySelector('.rodape_frase'),
    document.querySelector('.rodape_ano'),
];

const menuPaginas = document.querySelector('.portfolio__paginas');

const menuPaginasLinksContainer = document.querySelectorAll('.paginas__lista-item');

const portfolio = document.querySelector('.lista-menu_portfolio');

const apresentaLinksPortfolio = () => {

    let estado = false;
    portfolio.onclick = () => {

        if(estado === false) {

            menuPaginas.style.display = 'block';
            estado = true;

        } else {

            menuPaginas.style.display = 'none';
            estado = false;

        }

    }

}

const subirInicioPagina = () => {

    botaoInicioPagina === null? '': botaoInicioPagina.addEventListener('click', () => {

 
        window.scrollTo({
            top: -6000,
            behavior: 'smooth',
        });

    });

}

const apresentaMenuPortfolioPaginas = () => {
    console.log(idiomaPagina)

    portfolio.addEventListener('mouseover', ()=> {

        menuPaginas.style.display = 'block';

        arrayLinksPortfolio.forEach((item, index) => {

            let chave = item.classList[1];
            let classe = item.classList[2];

            menuPaginasLinksContainer[index].textContent = idiomaPagina[0][chave][classe];

            console.log(menuPaginasLinksContainer[index])

        });

    });

    menuPaginas.addEventListener('mouseleave', ()=> {

        menuPaginas.style.display = 'none';

    });

}

const btnMobile = document.querySelectorAll('.botao_mobile');

const selecionaIdioma = () => {

    for(let i = 0; i < botoesTraducao.length; i++) {

        traducaoElementos(textoPortugues)
        idiomaPagina[0] = textoPortugues

        botoesTraducao[i].addEventListener('click', (e)=> {

             let idioma = e.target.classList[1];

            idioma === 'br'
                ? traducaoElementos(textoPortugues)
                : traducaoElementos(textoIngles);

            idioma === 'br'
                ? idiomaPagina[0] = textoPortugues
                : idiomaPagina[0] = textoIngles;

        });

    }

}

const traducaoElementos = (idioma) => {

    let arrayBtn = [];
    let arrayElementos = [];

    if(document.body.classList[0] === 'PaginaPrincipal') {

        arrayBtn = btnCardsPaginaPrincipal;
        arrayElementos = elementosPaginaPrincipal;

    } else if(document.body.classList[0] === 'PaginaPortfolio') {

        arrayBtn = btnMobile;
        arrayElementos = elementosPortfolio;

    } else if(document.body.classList[0] === 'PaginaDesignGrafico') {

        arrayElementos = elementosDesignGrafico;

    }else if(document.body.classList[0] === 'PaginaSobre') {

        arrayElementos = elementosSobreMim;

    } else {

        arrayElementos = elementosPaginaContato;

    }
    
    arrayElementos.forEach(item=> {

        let chave = item.classList[1];
        let classe = item.classList[2];

        item.textContent = idioma[chave][classe];

    });

    arrayBtn.forEach(item=> {

        let chave = item.classList[1];
        let classe = item.classList[2];

        item.textContent = idioma[chave][classe];

    });

} 

const containerLinksPaginasPortfolio = document.querySelector('.portfolio__paginas-lista');

const redirecionaPaginasPortfolio = () => {

        containerLinksPaginasPortfolio.onclick = (e) => {

            e.preventDefault();

            let novoLink = e.target.textContent;

            if(novoLink.includes('UX/UI Design')) {

                window.location.pathname = './portfolio_ux.html'

            } else {

                window.location.pathname = './design-grafico.html';

            }

        }

}

(()=> {
    selecionaIdioma();
    apresentaLinksPortfolio();
    subirInicioPagina();
    apresentaMenuPortfolioPaginas();
    traducaoElementos(textoPortugues);
    redirecionaPaginasPortfolio();
})();   