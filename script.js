// ===== BOTÃO VOLTAR AO TOPO =====
const btnTopo = document.getElementById('btnTopo');

if (btnTopo) {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            btnTopo.classList.add('visivel');
        } else {
            btnTopo.classList.remove('visivel');
        }
    });
}

// ===== ANIMAÇÕES DE SCROLL =====
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visivel');
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
    observer.observe(el);
});