let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById("menu-mobile");
let overlay = document.getElementById("overlay-menu");

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
});

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
});

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
});

// seta para rolar para o topo
const botaoSetaRolarTopo = document.getElementById("seta-para-topo");

window.onscroll = function() {
    const alturaTotal = document.documentElement.scrollHeight;
    const posicaoScroll = window.innerHeight + window.scrollY;

    if (alturaTotal - posicaoScroll <= 100) {
        botaoSetaRolarTopo.classList.add("show");  // exibe a seta
    } else {
        botaoSetaRolarTopo.classList.remove("show");  // esconde a seta
    }
};

// função para rolar a página até o topo quando a seta for clicada
botaoSetaRolarTopo.onclick = function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
