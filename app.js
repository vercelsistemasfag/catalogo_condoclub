const partners = [
  {
    name: "WIQ Móveis Sob Medida",
    category: "Móveis Sob Medida",
    logo: "/partners/wiq-moveis-sob-medida.webp",
    description: "Projetos de móveis sob medida desenvolvidos para aproveitar cada ambiente com funcionalidade, qualidade e acabamento personalizado.",
    benefits: [
      "Visita técnica, projeto e medição no local sem custo.",
      "Até 10% de desconto no valor final e desconto progressivo para projetos de mais de 1 ambiente.",
      "Condição especial de pagamento para moradores CondoClub.",
      "Garantia estendida exclusiva para moradores CondoClub.",
      "Prioridade no agendamento da visita técnica e instalação."
    ],
    site: "http://www.wiqmoveis.com.br/",
    whatsapp: "https://wa.me/5551981423307?text=Ol%C3%A1%21%20Vi%20o%20benef%C3%ADcio%20da%20WIQ%20M%C3%B3veis%20Sob%20Medida%20no%20CondoClub."
  },
  {
    name: "Santis Climatização",
    category: "Ar Condicionado",
    logo: "partners/santis-climatizacao.webp",
    description: "Instalação, manutenção e higienização de ar-condicionado para manter seus ambientes climatizados com eficiência, segurança e conforto.",
    benefits: [
      "10% de desconto na mão de obra para instalação, manutenção e higienização de ar-condicionado.",
      "Visita técnica para orçamento e avaliação sem custo se houver a contratação do serviço.",
      "Profissional de extrema confiança, 5 estrelas no Google."
    ],
    site: "https://share.google/w0TmcSxv3LvX34yRS",
    whatsapp: "https://wa.me/5551986560687?text=Ol%C3%A1%21%20Vi%20o%20benef%C3%ADcio%20da%20Santis%20Climatiza%C3%A7%C3%A3o%20no%20CondoClub."
  },
  {
    name: "Casa em Dia",
    category: "Casa e limpeza",
    logo: "/partners/casa-em-dia.webp",
    description: "Diaristas selecionadas para cuidar da sua casa ou apartamento com atenção aos detalhes.",
    benefits: [
      "Diárias com valores até 20% abaixo dos praticados na região.",
      "Pacotes personalizados para limpeza apenas de cozinhas, banheiros e outras áreas.",
      "Parcelamento em até 3x sem juros no cartão de crédito.",
      "Emissão de nota fiscal de serviço.",
      "Profissionais de extrema confiança."
    ],
    site: "https://casaemdialimpeza.vercel.app",
    whatsapp: "https://wa.me/5551992842933?text=Ol%C3%A1%21%20Vi%20o%20benef%C3%ADcio%20da%20Casa%20em%20Dia%20no%20CondoClub."
  },
  {
    name: "Prontolar",
    category: "Reparos",
    logo: "/partners/prontolar.webp",
    description: "Reparos e instalações para apartamentos, do pequeno ajuste à manutenção completa.",
    benefits: [
      "Serviços com valores até 20% abaixo dos praticados na região.",
      "Deslocamento para visita e orçamento gratuitos.",
      "Parcelamento em até 3x sem juros no cartão de crédito.",
      "Emissão de nota fiscal de serviço.",
      "Profissionais especialistas no que fazem: serviço rápido, limpo e com acabamento adequado."
    ],
    site: "https://faztudoprontolar.vercel.app",
    whatsapp: "https://wa.me/5551992842933?text=Ol%C3%A1%21%20Vi%20o%20benef%C3%ADcio%20da%20Prontolar%20no%20CondoClub."
  },
  {
    name: "Vercel Tecnologia",
    category: "Tecnologia",
    logo: "/partners/vercel-tecnologia.webp",
    description: "Sites, catálogos digitais e soluções simples para pequenos negócios e profissionais.",
    benefits: [
      "Transformamos sua ideia em uma ferramenta simples e funcional.",
      "Aumente sua visibilidade com publicidade online e tráfego pago direcionado ao público certo.",
      "Transforme cliques em oportunidades de venda com campanhas planejadas para gerar contatos e novos clientes.",
      "Crie um sistema de organização e controle para sua empresa, adequado às suas necessidades, sem comandos complexos e excesso de informações.",
      "Criamos Plataformas Simple Lean — o método de trabalho da Vercel para entregar soluções simples, eficientes e economicamente sustentáveis."
    ],
    site: "https://vercelsistemas.vercel.app",
    whatsapp: "https://wa.me/5551992842933?text=Ol%C3%A1%21%20Vi%20o%20benef%C3%ADcio%20da%20Vercel%20Tecnologia%20no%20CondoClub."
  }
];

const categories = ["Todos", ...new Set(partners.map((partner) => partner.category))];
let selectedCategory = "Todos";

const escapeHtml = (value) => value.replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character]);

function partnerCard(partner) {
  const benefits = partner.benefits.map((benefit) => `<li><i aria-hidden="true">✓</i><em>${escapeHtml(benefit)}</em></li>`).join("");
  return `<article class="partner-bar">
    <div class="logo-box"><img src="${partner.logo}" alt="Logotipo ${escapeHtml(partner.name)}" /></div>
    <div class="partner-content"><span class="category-tag">${escapeHtml(partner.category)}</span><h3>${escapeHtml(partner.name)}</h3><p>${escapeHtml(partner.description)}</p></div>
    <div class="benefit-box"><span>Benefício CondoClub oferecido ao morador</span><ul class="benefit-list">${benefits}</ul></div>
    <div class="partner-actions">
      <a class="site-button" href="${partner.site}" target="_blank" rel="noreferrer">Visitar site <span aria-hidden="true">↗</span></a>
      <a class="whatsapp-button" href="${partner.whatsapp}" target="_blank" rel="noreferrer" aria-label="Falar com ${escapeHtml(partner.name)} no WhatsApp"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.5 14.4c-.3-.2-1.8-.9-2-.9-.3-.1-.5-.2-.7.1-.2.3-.8 1-.9 1.2-.2.2-.4.2-.7.1-2.6-1.3-4.3-2.3-5.5-5.2-.1-.3.1-.5.2-.6.2-.2.3-.4.5-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.2-.7-1.7-.9-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4 0-.1-.3-.2-.6-.4m-5.4 7.4a9.9 9.9 0 0 1-5.1-1.4l-.4-.2-3.7 1 1-3.7-.2-.4A9.9 9.9 0 1 1 12.1 22m0-22A11.9 11.9 0 0 0 .2 11.9c0 2.1.5 4.2 1.6 6L.1 24l6.3-1.7a11.9 11.9 0 1 0 5.7-22.3" /></svg> WhatsApp</a>
    </div>
  </article>`;
}

function renderFilters() {
  document.querySelector("#filters").innerHTML = categories.map((category) => `<button type="button" data-category="${escapeHtml(category)}" class="${selectedCategory === category ? "active" : ""}">${escapeHtml(category)}</button>`).join("");
}

function renderPartners() {
  const query = document.querySelector("#search").value.trim().toLocaleLowerCase("pt-BR");
  const filtered = partners.filter((partner) => {
    const matchesCategory = selectedCategory === "Todos" || partner.category === selectedCategory;
    const searchable = `${partner.name} ${partner.category} ${partner.description} ${partner.benefits.join(" ")}`.toLocaleLowerCase("pt-BR");
    return matchesCategory && searchable.includes(query);
  });
  document.querySelector("#partner-list").innerHTML = filtered.length ? filtered.map(partnerCard).join("") : '<div class="empty-state"><strong>Nenhum benefício encontrado.</strong><span>Tente outro termo ou selecione “Todos”.</span></div>';
}

document.querySelector("#filters").addEventListener("click", (event) => {
  const button = event.target.closest("button[data-category]");
  if (!button) return;
  selectedCategory = button.dataset.category;
  renderFilters();
  renderPartners();
});
document.querySelector("#search").addEventListener("input", renderPartners);

const displayMode = window.matchMedia("(display-mode: standalone)");
const isStandalone = () => displayMode.matches || window.navigator.standalone === true;

if (!isStandalone()) {
  const button = document.createElement("button");
  button.className = "install-app";
  button.innerHTML = '<span aria-hidden="true">↓</span> <span class="install-label">Instalar catálogo</span>';

  const setLabel = (label) => {
    button.querySelector(".install-label").textContent = label;
  };

  const waitForNativePrompt = () => new Promise((resolve) => {
    if (window.__condoClubInstallPrompt) return resolve(window.__condoClubInstallPrompt);
    const timeout = window.setTimeout(() => {
      window.removeEventListener("condoclub-install-ready", ready);
      resolve(null);
    }, 5000);
    function ready() {
      window.clearTimeout(timeout);
      window.removeEventListener("condoclub-install-ready", ready);
      resolve(window.__condoClubInstallPrompt || null);
    }
    window.addEventListener("condoclub-install-ready", ready);
  });

  button.addEventListener("click", async () => {
    setLabel("Preparando instalação…");
    const installPrompt = window.__condoClubInstallPrompt || await waitForNativePrompt();
    if (!installPrompt) {
      setLabel("Instalar catálogo");
      return;
    }
    await installPrompt.prompt();
    const choice = await installPrompt.userChoice;
    window.__condoClubInstallPrompt = null;
    setLabel(choice.outcome === "accepted" ? "Aplicativo instalado" : "Instalar catálogo");
  });

  displayMode.addEventListener("change", () => {
    if (isStandalone()) button.remove();
  });
  document.body.append(button);
}

if ("serviceWorker" in navigator) window.addEventListener("load", () => navigator.serviceWorker.register("/sw.js").catch(() => undefined));
renderFilters();
renderPartners();

const firebaseConfig = {
  apiKey: "AIzaSyD3kY_MVar47nKCFqyp6rQCTtgcu42jyKI",
  authDomain: "condoclub-74f38.firebaseapp.com",
  projectId: "condoclub-74f38",
  storageBucket: "condoclub-74f38.firebasestorage.app",
  messagingSenderId: "913332788233",
  appId: "1:913332788233:web:1c49a979a9c381db12ecd8",
  measurementId: "G-6WCH0RBSG1"
};
const FIREBASE_VAPID_KEY = "BDf-ALF2JABKKCJ80Jh3bYk4o8fWODczUc8mZKdYCUW6hvOHF_-5tDIuB6g2gdRvxk2VMY3IHroeDuNT12PCzkY";

async function setupNotifications() {
  if (!("Notification" in window) || !("serviceWorker" in navigator) || !("PushManager" in window)) return;

  const button = document.createElement("button");
  button.type = "button";
  button.className = "notification-app";
  button.innerHTML = '<span aria-hidden="true">●</span> <span class="notification-label">Ativar notificações</span>';
  document.body.append(button);

  const setNotificationLabel = (label) => {
    button.querySelector(".notification-label").textContent = label;
  };

  if (Notification.permission === "denied") {
    setNotificationLabel("Notificações bloqueadas");
    button.disabled = true;
  }

  let messagingApi;
  const getMessagingApi = async () => {
    if (messagingApi) return messagingApi;
    const [{ initializeApp }, messagingModule] = await Promise.all([
      import("https://www.gstatic.com/firebasejs/12.17.0/firebase-app.js"),
      import("https://www.gstatic.com/firebasejs/12.17.0/firebase-messaging.js")
    ]);
    const supported = await messagingModule.isSupported();
    if (!supported) throw new Error("Firebase Messaging não é suportado neste navegador.");
    const app = initializeApp(firebaseConfig);
    const messaging = messagingModule.getMessaging(app);
    messagingApi = { messaging, ...messagingModule };
    return messagingApi;
  };

  const registerFcm = async () => {
    const registration = await navigator.serviceWorker.ready;
    const { messaging, getToken, onMessage } = await getMessagingApi();

    const token = await getToken(messaging, {
      vapidKey: FIREBASE_VAPID_KEY,
      serviceWorkerRegistration: registration
    });

    if (!token) throw new Error("O Firebase não retornou um token de registro FCM.");
    localStorage.setItem("condoclub-fcm-token", token);

    if (!window.__condoClubFcmForegroundHandler) {
      window.__condoClubFcmForegroundHandler = true;
      onMessage(messaging, (payload) => {
        const notification = payload.notification || {};
        const title = notification.title || payload.data?.title || "CondoClub";
        registration.showNotification(title, {
          body: notification.body || payload.data?.body || "Você recebeu uma nova notificação do CondoClub.",
          icon: notification.icon || "/icons/notification-icon.png",
          badge: "/icons/notification-badge.png",
          image: notification.image,
          data: { url: payload.fcmOptions?.link || payload.data?.url || "/" }
        }).catch(() => undefined);
      });
    }

    return token;
  };

  const activateNotifications = async () => {
    if (Notification.permission === "denied") return;
    button.disabled = true;
    setNotificationLabel("Ativando…");
    try {
      const permission = Notification.permission === "granted" ? "granted" : await Notification.requestPermission();
      if (permission === "granted") {
        await registerFcm();
        setNotificationLabel("Notificações ativadas");
        button.hidden = true;
      } else if (permission === "denied") {
        setNotificationLabel("Notificações bloqueadas");
      } else {
        setNotificationLabel("Ativar notificações");
        button.disabled = false;
      }
    } catch (error) {
      console.error("Falha ao ativar notificações do CondoClub:", error);
      setNotificationLabel("Ativar notificações");
      button.disabled = false;
    }
  };

  button.addEventListener("click", activateNotifications);

  if (Notification.permission === "granted") {
    setNotificationLabel("Ativando…");
    button.disabled = true;
    registerFcm()
      .then(() => {
        setNotificationLabel("Notificações ativadas");
        button.hidden = true;
      })
      .catch((error) => {
        console.error("Falha ao restaurar notificações do CondoClub:", error);
        setNotificationLabel("Ativar notificações");
        button.disabled = false;
      });
  }
}

setupNotifications();
