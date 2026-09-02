document.addEventListener('DOMContentLoaded', () => {
  /* ============================================================
     1. GERENCIAMENTO DE DELAY DA VSL (.esconder)
     Configure o segundo exato em que seu pitch começa na VSL.
     Exemplo: se o pitch é aos 21 minutos e 30 segundos, coloque:
     const VSL_DELAY_SECONDS = 1290;
     ============================================================ */
  const VSL_DELAY_SECONDS = 0; // Deixe 0 para exibir tudo ou coloque o tempo em segundos
  const urlParams = new URLSearchParams(window.location.search);
  const forceShow = urlParams.get('preview') === 'all';
  const forceHide = urlParams.get('vsl') === 'delay';

  const body = document.body;
  // Ocultar elementos se houver delay ou parâmetro de vsl
  if ((VSL_DELAY_SECONDS > 0 || forceHide) && !forceShow) {
    body.classList.add('vsl-delay-active');
    
    // Timer para revelar automaticamente
    if (VSL_DELAY_SECONDS > 0) {
      setTimeout(() => {
        body.classList.remove('vsl-delay-active');
      }, VSL_DELAY_SECONDS * 1000);
    }
  }



  /* ============================================================
     3. FAQ ACCORDION INTERATIVO
     ============================================================ */
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach((question) => {
    question.addEventListener('click', () => {
      const item = question.parentElement;
      const isActive = item.classList.contains('active');

      // Fecha todos os outros itens para manter elegância no mobile
      document.querySelectorAll('.faq-item').forEach((el) => {
        el.classList.remove('active');
      });

      // Se não estava ativo, abre
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  /* ============================================================
     4. DEPOIMENTO EM VÍDEO (YouTube Shorts)
     ============================================================ */
  const caseVideoPlayer = document.getElementById('caseVideoPlayer');
  if (caseVideoPlayer) {
    caseVideoPlayer.addEventListener('click', function () {
      const videoId = this.getAttribute('data-video-id') || 'RR1dGZ9IXrI';
      this.innerHTML = `
        <iframe 
          src="https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&playsinline=1&modestbranding=1" 
          title="Depoimento da Aluna Terapeuta" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen>
        </iframe>
      `;
      this.style.cursor = 'default';
    });
  }

  /* ============================================================
     5. ROLAGEM SUAVE PARA O CHECKOUT
     ============================================================ */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
});
