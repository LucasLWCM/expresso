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
  const testBar = document.getElementById('vslTestBar');
  const toggleBtn = document.getElementById('btnToggleVsl');

  // Inicializa o estado do delay
  if ((VSL_DELAY_SECONDS > 0 || forceHide) && !forceShow) {
    body.classList.add('vsl-delay-active');
    
    // Timer para revelar automaticamente
    if (VSL_DELAY_SECONDS > 0) {
      setTimeout(() => {
        body.classList.remove('vsl-delay-active');
        if (toggleBtn) toggleBtn.textContent = 'Ocultar Pitch';
      }, VSL_DELAY_SECONDS * 1000);
    }
  }

  // Botão flutuante para você testar a visualização da VSL em 1 clique
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      body.classList.toggle('vsl-delay-active');
      const isHidden = body.classList.contains('vsl-delay-active');
      toggleBtn.textContent = isHidden ? 'Exibir Tudo' : 'Ocultar Pitch';
    });
  }

  /* ============================================================
     2. OVERLAY DENTRO DO VÍDEO (Continuar Assistindo)
     ============================================================ */
  const btnContinue = document.getElementById('btnContinueWatch');
  const videoOverlay = document.getElementById('videoOverlayUrgent');

  if (btnContinue && videoOverlay) {
    btnContinue.addEventListener('click', (e) => {
      e.stopPropagation();
      videoOverlay.style.opacity = '0';
      videoOverlay.style.pointerEvents = 'none';
      setTimeout(() => {
        videoOverlay.style.display = 'none';
      }, 300);
    });
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
     4. ROLAGEM SUAVE PARA O CHECKOUT
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
