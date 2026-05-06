/**
 * LA PRATA - SCRIPTS DE INTERATIVIDADE
 * Versão 2.0
 */

// 1. BANNER SLIDER (TROCA A CADA 15 SEGUNDOS)
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
    // Remove classe ativa do atual
    slides[currentSlide].classList.remove('active');
    
    // Incrementa índice
    currentSlide = (currentSlide + 1) % slides.length;
    
    // Adiciona classe ativa ao próximo
    slides[currentSlide].classList.add('active');
}

// Inicia o intervalo de 15 segundos
setInterval(nextSlide, 15000);

// 2. EFEITO DE REVELAR AO ROLAR (AÇÕES DE ENTRADA)
const observerOptions = {
    threshold: 0.15 // Inicia quando 15% do elemento aparece
};

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('ativo');
        }
    });
}, observerOptions);

// Aplica o observador em todos os elementos com a classe .revelar
document.querySelectorAll('.revelar').forEach(element => {
    revealObserver.observe(element);
});

// 3. EFEITO NA NAVBAR AO ROLAR
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.padding = '10px 0';
        header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.05)';
    } else {
        header.style.padding = '15px 0';
        header.style.boxShadow = 'none';
    }
});

// 4. LOGICA DA BARRA DE BUSCA (FOCO)
const searchInput = document.querySelector('.search-input');
const searchForm = document.querySelector('.search-form');

searchInput.addEventListener('focus', () => {
    searchForm.style.borderColor = '#a65d74';
});

searchInput.addEventListener('blur', () => {
    searchForm.style.borderColor = 'rgba(166, 93, 116, 0.5)';
});

// 5. MENSAGEM DE SUCESSO AO CLICAR EM "COMPRAR" (OPCIONAL)
document.querySelectorAll('.btn-quick-buy').forEach(btn => {
    btn.addEventListener('click', (e) => {
        console.log("Iniciando contato via WhatsApp para produto específico...");
    });
});