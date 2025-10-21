(function () {
  const supportedLangs = ['en', 'ar', 'tr', 'de', 'es', 'it', 'fr'];
  const dictionary = {
    title: {
      en: 'Happy Birthday, Monty! 🎂',
      ar: 'عيد ميلاد سعيد يا مونتي! 🎂',
      tr: 'Doğum günün kutlu olsun, Monty! 🎂',
      de: 'Alles Gute zum Geburtstag, Monty! 🎂',
      es: '¡Feliz cumpleaños, Monty! 🎂',
      it: 'Buon compleanno, Monty! 🎂',
      fr: 'Joyeux anniversaire, Monty ! 🎂'
    },
    subtitle: {
      en: 'Click the button to start the birthday magic.',
      ar: 'اضغط الزر لبدء أجواء العيد.',
      tr: 'Sihri başlatmak için düğmeye tıkla.',
      de: 'Klicke auf den Button, um die Geburtstagsmagie zu starten.',
      es: 'Haz clic para comenzar la magia del cumpleaños.',
      it: 'Fai clic per iniziare la magia del compleanno.',
      fr: 'Clique pour lancer la magie d\'anniversaire.'
    },
    start: {
      en: 'Start Birthday',
      ar: 'ابدأ عيد الميلاد',
      tr: 'Doğum Gününü Başlat',
      de: 'Geburtstag starten',
      es: 'Empezar cumpleaños',
      it: 'Avvia compleanno',
      fr: 'Démarrer l\'anniversaire'
    },
    viewWishesBtn: {
      en: 'View Wishes',
      ar: 'عرض الأماني',
      tr: 'Dilekleri Gör',
      de: 'Wünsche ansehen',
      es: 'Ver deseos',
      it: 'Vedi desideri',
      fr: 'Voir les vœux'
    },
    wishBtn: {
      en: 'wish a wish',
      ar: 'تمني أمنية',
      tr: 'Dilek tut',
      de: 'Wünsch dir was',
      es: 'pide un deseo',
      it: 'esprimi un desiderio',
      fr: 'fais un vœu'
    },
    serverLabel: {
      en: 'server 193',
      ar: 'server 193',
      tr: 'server 193',
      de: 'server 193',
      es: 'server 193',
      it: 'server 193',
      fr: 'server 193'
    },
    footerText: {
      en: 'Designed by Fady (٩٩٩)',
      ar: 'تم التصميم بواسطة فادي (٩٩٩)',
      tr: 'Tasarım: Fady (٩٩٩)',
      de: 'Design von Fady (٩٩٩)',
      es: 'Diseñado por Fady (٩٩٩)',
      it: 'Design di Fady (٩٩٩)',
      fr: 'Design par Fady (٩٩٩)'
    },
    modalTitle: {
      en: 'Make a Wish',
      ar: 'اكتب أمنيتك',
      tr: 'Dileğini Yaz',
      de: 'Wunsch erstellen',
      es: 'Pide tu deseo',
      it: 'Esprimi un desiderio',
      fr: 'Fais un vœu'
    },
    wisherLabel: {
      en: 'Wisher',
      ar: 'المتمني',
      tr: 'Dileyen',
      de: 'Wünschender',
      es: 'Quien desea',
      it: 'Chi',
      fr: 'Souhaitant'
    },
    wishLabel: {
      en: 'Wish',
      ar: 'الأمنية',
      tr: 'Dilek',
      de: 'Wunsch',
      es: 'Deseo',
      it: 'Desiderio',
      fr: 'Souhait'
    },
    submit: {
      en: 'Submit',
      ar: 'إرسال',
      tr: 'Gönder',
      de: 'Senden',
      es: 'Enviar',
      it: 'Invia',
      fr: 'Envoyer'
    },
    wisherPlaceholder: {
      en: 'Your name',
      ar: 'اكتب اسمك',
      tr: 'Adınız',
      de: 'Dein Name',
      es: 'Tu nombre',
      it: 'Il tuo nome',
      fr: 'Ton nom'
    },
    wishPlaceholder: {
      en: 'Share your wish for Monty',
      ar: 'شارك أمنيتك لمونتي',
      tr: 'Monty için dileğini paylaş',
      de: 'Teile deinen Wunsch für Monty',
      es: 'Comparte tu deseo para Monty',
      it: 'Condividi il tuo augurio per Monty',
      fr: 'Partage ton vœu pour Monty'
    },
    wishesTitle: {
      en: 'All Wishes',
      ar: 'كل الأماني',
      tr: 'Tüm Dilekler',
      de: 'Alle Wünsche',
      es: 'Todos los deseos',
      it: 'Tutti i desideri',
      fr: 'Tous les vœux'
    },
    backHome: {
      en: 'Back',
      ar: 'رجوع',
      tr: 'Geri',
      de: 'Zurück',
      es: 'Atrás',
      it: 'Indietro',
      fr: 'Retour'
    },
    thNo: {
      en: '#', ar: '#', tr: '#', de: '#', es: '#', it: '#', fr: '#'
    },
    thWisher: {
      en: 'Wisher',
      ar: 'المتمني',
      tr: 'Dileyen',
      de: 'Wünschender',
      es: 'Quien desea',
      it: 'Chi',
      fr: 'Souhaitant'
    },
    thWish: {
      en: 'Wish',
      ar: 'الأمنية',
      tr: 'Dilek',
      de: 'Wunsch',
      es: 'Deseo',
      it: 'Desiderio',
      fr: 'Souhait'
    },
    thLang: {
      en: 'Lang',
      ar: 'اللغة',
      tr: 'Dil',
      de: 'Sprache',
      es: 'Idioma',
      it: 'Lingua',
      fr: 'Langue'
    },
    thDate: {
      en: 'Date',
      ar: 'التاريخ',
      tr: 'Tarih',
      de: 'Datum',
      es: 'Fecha',
      it: 'Data',
      fr: 'Date'
    },
    noWishesMessage: {
      en: 'No wishes yet. Be the first to celebrate Monty!',
      ar: 'لا توجد أماني بعد. كن أول من يحتفل بمونتي!',
      tr: 'Henüz dilek yok. Monty\'yi ilk sen kutla!',
      de: 'Noch keine Wünsche. Feiere Monty als Erste*r!',
      es: 'Aún no hay deseos. ¡Sé la primera persona en celebrar a Monty!',
      it: 'Nessun desiderio per ora. Festeggia Monty per primo!',
      fr: 'Pas encore de vœux. Sois la première personne à fêter Monty !'
    },
    wishSaved: {
      en: '✨ Wish saved!',
      ar: '✨ تم حفظ الأمنية!',
      tr: '✨ Dilek kaydedildi!',
      de: '✨ Wunsch gespeichert!',
      es: '✨ ¡Deseo guardado!',
      it: '✨ Desiderio salvato!',
      fr: '✨ Vœu enregistré !'
    },
    wishError: {
      en: 'Error saving wish.',
      ar: 'حدث خطأ أثناء حفظ الأمنية.',
      tr: 'Dilek kaydedilirken hata oluştu.',
      de: 'Fehler beim Speichern des Wunsches.',
      es: 'Error al guardar el deseo.',
      it: 'Errore nel salvataggio del desiderio.',
      fr: 'Erreur lors de l\'enregistrement du vœu.'
    },
    headTitleHome: {
      en: 'Monty Birthday',
      ar: 'عيد ميلاد مونتي',
      tr: 'Monty Doğum Günü',
      de: 'Monty Geburtstag',
      es: 'Cumpleaños de Monty',
      it: 'Compleanno di Monty',
      fr: 'Anniversaire de Monty'
    },
    headTitleWishes: {
      en: 'Wishes – Monty',
      ar: 'الأماني – مونتي',
      tr: 'Dilekler – Monty',
      de: 'Wünsche – Monty',
      es: 'Deseos – Monty',
      it: 'Desideri – Monty',
      fr: 'Vœux – Monty'
    }
  };

  const textBindings = {
    title: 'title',
    subtitle: 'subtitle',
    startText: 'start',
    viewWishesBtn: 'viewWishesBtn',
    wishBtn: 'wishBtn',
    serverLabel: 'serverLabel',
    footerText: 'footerText',
    wishTitle: 'modalTitle',
    wisherLabel: 'wisherLabel',
    wishLabel: 'wishLabel',
    submitWish: 'submit',
    wishesTitle: 'wishesTitle',
    backHome: 'backHome',
    thNo: 'thNo',
    thWisher: 'thWisher',
    thWish: 'thWish',
    thLang: 'thLang',
    thDate: 'thDate',
    noWishesMessage: 'noWishesMessage'
  };

  const placeholderBindings = {
    wisher: 'wisherPlaceholder',
    wish: 'wishPlaceholder'
  };

  let currentLang = 'en';

  function t(key, lang = currentLang) {
    const entry = dictionary[key];
    if (!entry) return '';
    return entry[lang] || entry.en || Object.values(entry)[0] || '';
  }

  function setDocumentDirection(lang) {
    const rtl = lang === 'ar';
    document.documentElement.setAttribute('dir', rtl ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);
  }

  function applyLanguage(lang) {
    if (!supportedLangs.includes(lang)) {
      lang = 'en';
    }
    currentLang = lang;
    setDocumentDirection(lang);

    Object.entries(textBindings).forEach(([id, key]) => {
      const el = document.getElementById(id);
      if (el && dictionary[key]) {
        el.textContent = t(key, lang);
      }
    });

    Object.entries(placeholderBindings).forEach(([id, key]) => {
      const el = document.getElementById(id);
      if (el && dictionary[key]) {
        el.setAttribute('placeholder', t(key, lang));
      }
    });

    const page = document.body ? document.body.getAttribute('data-page') : '';
    if (page === 'home') {
      document.title = t('headTitleHome', lang);
    } else if (page === 'wishes') {
      document.title = t('headTitleWishes', lang);
    }

    document.dispatchEvent(new CustomEvent('monty:langchange', { detail: { lang } }));
  }

  function initLanguageSelector() {
    const select = document.getElementById('langSelect');
    const stored = localStorage.getItem('monty.lang');
    const initial = supportedLangs.includes(stored || '') ? stored : 'en';
    applyLanguage(initial);
    if (select) {
      select.value = initial;
      select.addEventListener('change', () => {
        const lang = select.value;
        localStorage.setItem('monty.lang', lang);
        applyLanguage(lang);
      });
    }
  }

  function escapeHtml(value) {
    return (value || '').toString().replace(/[&<>"']/g, (char) => {
      return ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
      })[char];
    });
  }

  function initConfetti() {
    const canvas = document.getElementById('confettiCanvas');
    if (!canvas) {
      return { start: () => {} };
    }
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return { start: () => {} };
    }

    const colors = ['#f94144', '#f3722c', '#f9c74f', '#90be6d', '#577590', '#ff5d8f'];
    let pieces = [];
    let running = false;
    let frame = null;

    function resize() {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    }

    function createPieces() {
      const count = 180;
      pieces = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        size: 6 + Math.random() * 6,
        fallSpeed: 2 + Math.random() * 3,
        drift: -1 + Math.random() * 2,
        rotation: Math.random() * Math.PI,
        rotationSpeed: -0.1 + Math.random() * 0.2,
        color: colors[Math.floor(Math.random() * colors.length)]
      }));
    }

    function draw() {
      if (!running) {
        return;
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pieces.forEach((piece) => {
        piece.x += piece.drift;
        piece.y += piece.fallSpeed;
        piece.rotation += piece.rotationSpeed;

        if (piece.y > canvas.height + 20) {
          piece.y = -20;
          piece.x = Math.random() * canvas.width;
        }

        ctx.save();
        ctx.translate(piece.x, piece.y);
        ctx.rotate(piece.rotation);
        ctx.fillStyle = piece.color;
        ctx.fillRect(-piece.size / 2, -piece.size / 2, piece.size, piece.size);
        ctx.restore();
      });
      frame = requestAnimationFrame(draw);
    }

    function start() {
      if (running) {
        return;
      }
      running = true;
      canvas.classList.remove('d-none');
      resize();
      createPieces();
      if (frame) {
        cancelAnimationFrame(frame);
      }
      frame = requestAnimationFrame(draw);
    }

    window.addEventListener('resize', () => {
      resize();
      if (running) {
        createPieces();
      }
    });

    return { start };
  }

  function initHomePage() {
    const startBtn = document.getElementById('startBtn');
    const cake = document.getElementById('cake');
    const wishBtn = document.getElementById('wishBtn');
    const modalEl = document.getElementById('wishModal');
    const form = document.getElementById('wishForm');

    if (!startBtn && !wishBtn && !form) {
      return;
    }

    const confetti = initConfetti();

    if (startBtn) {
      startBtn.addEventListener('click', () => {
        confetti.start();
        if (cake) {
          cake.classList.add('animate');
        }
      });
    }

    let wishModal = null;
    if (modalEl && typeof bootstrap !== 'undefined') {
      wishModal = new bootstrap.Modal(modalEl);
    }

    if (wishBtn && wishModal) {
      wishBtn.addEventListener('click', () => wishModal.show());
    }

    if (form) {
      form.addEventListener('submit', async (event) => {
        event.preventDefault();
        event.stopPropagation();
        form.classList.add('was-validated');

        if (!form.checkValidity()) {
          return;
        }

        const wisherInput = document.getElementById('wisher');
        const wishInput = document.getElementById('wish');
        const submitBtn = document.getElementById('submitWish');

        const payload = {
          wisher: wisherInput.value.trim(),
          wish: wishInput.value.trim(),
          lang: currentLang
        };

        if (!payload.wisher || !payload.wish) {
          return;
        }

        submitBtn.disabled = true;
        try {
          const res = await fetch('/api/wishes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          });
          if (!res.ok) {
            throw new Error('Request failed');
          }
          await res.json().catch(() => ({}));
          form.reset();
          form.classList.remove('was-validated');
          if (wishModal) {
            wishModal.hide();
          }
          alert(t('wishSaved'));
        } catch (error) {
          console.error(error);
          alert(t('wishError'));
        } finally {
          submitBtn.disabled = false;
        }
      });
    }
  }

  function initWishesPage() {
    const tbody = document.getElementById('wishesBody');
    if (!tbody) {
      return;
    }

    const noWishesEl = document.getElementById('noWishesMessage');
    let wishesData = [];

    function render() {
      if (noWishesEl) {
        noWishesEl.textContent = t('noWishesMessage');
      }

      tbody.innerHTML = '';
      if (!wishesData.length) {
        if (noWishesEl) {
          noWishesEl.classList.remove('d-none');
        }
        return;
      }

      if (noWishesEl) {
        noWishesEl.classList.add('d-none');
      }

      const locale = currentLang === 'en' ? 'en-US' : currentLang;
      wishesData.forEach((item, index) => {
        const lang = (item.lang || '').toUpperCase();
        const createdAt = item.createdAt ? new Date(item.createdAt).toLocaleString(locale) : '';
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${index + 1}</td>
          <td>${escapeHtml(item.wisher || '')}</td>
          <td>${escapeHtml(item.wish || '')}</td>
          <td>${escapeHtml(lang)}</td>
          <td>${escapeHtml(createdAt)}</td>
        `;
        tbody.appendChild(tr);
      });
    }

    async function load() {
      try {
        const res = await fetch('/api/wishes');
        if (!res.ok) {
          throw new Error('Failed to load wishes');
        }
        const data = await res.json();
        wishesData = Array.isArray(data.wishes) ? data.wishes : [];
      } catch (error) {
        console.error(error);
        wishesData = [];
      }
      render();
    }

    load();
    document.addEventListener('monty:langchange', render);
  }

  document.addEventListener('DOMContentLoaded', () => {
    initLanguageSelector();
    initHomePage();
    initWishesPage();
  });

  window.MontyApp = {
    t,
    getCurrentLang: () => currentLang
  };
})();
