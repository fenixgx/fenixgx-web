export type Locale = "es" | "en";

type Product = {
  code: string;
  label: string;
  name: string;
  description: string;
  data: string[];
  href?: string;
  featured?: boolean;
  internal?: boolean;
};

export type SiteContent = {
  locale: Locale;
  languageLabel: string;
  nav: { company: string; products: string; engineering: string; contact: string };
  hero: { eyebrow: string; title: string; accent: string; lead: string; products: string; engineering: string };
  identity: { module: string; active: string; company: string; location: string; products: string; system: string; infrastructure: string; caption: string };
  automation: { label: string; title: string; description: string; data: string[] };
  carousel: { previous: string; next: string; select: string };
  company: { index: string; title: string; intro: string; statement: string; statementAccent: string; note: string; noteMeta: string; principles: Array<{ title: string; body: string }> };
  products: { index: string; title: string; intro: string; items: Product[] };
  engineering: { index: string; title: string; intro: string; heading: string; body: string; label: string; steps: Array<{ title: string; body: string }>; metrics: Array<{ label: string; value: string }> };
  contact: { index: string; title: string; intro: string; heading: string; body: string; email: string; linkedin: string; github: string };
  footer: string;
};

const es: SiteContent = {
  locale: "es",
  languageLabel: "EN",
  nav: { company: "Empresa", products: "Productos", engineering: "Ingeniería", contact: "Contacto" },
  hero: {
    eyebrow: "FENIXGX LIMITED · SOFTWARE PROPIO",
    title: "Una empresa real detrás de",
    accent: "productos reales.",
    lead: "FenixGx es la sociedad británica detrás de IAMenu y Taski. Construimos productos propios, los usamos a diario y mantenemos la infraestructura de ingeniería que los sostiene.",
    products: "Ver los productos",
    engineering: "Cómo construimos",
  },
  identity: {
    module: "Identity module / FGX-01",
    active: "Active",
    company: "FENIXGX LIMITED",
    location: "Product engineering company / Scotland · Canary Islands",
    products: "Products",
    system: "System",
    infrastructure: "Infrastructure",
    caption: "Marca comercial · FENIXGX LIMITED · Scotland / Canarias",
  },
  automation: {
    label: "04 · Línea en desarrollo",
    title: "Automatizaciones",
    description: "Convierte procesos desordenados en sistemas medibles. Diagnóstico, implementación y seguimiento para automatizar únicamente lo que tiene sentido.",
    data: ["Diagnóstico", "Implementación", "Seguimiento"],
  },
  carousel: { previous: "Producto anterior", next: "Producto siguiente", select: "Seleccionar módulo" },
  company: {
    index: "01 / Empresa",
    title: "No hacemos software desde la teoría.",
    intro: "FenixGx existe para convertir problemas concretos en productos que se pueden usar, cobrar y mantener. Sin servicios a medida, sin catálogo de humo: productos vivos y una infraestructura propia para construirlos mejor.",
    statement: "Una matriz pequeña.",
    statementAccent: "Dos productos vivos. Una capa de ingeniería propia.",
    note: "Empresa de software con operación remota desde Canarias y productos propios en producción.",
    noteMeta: "Los productos son la prueba. La ingeniería es la base.",
    principles: [
      { title: "Producto propio", body: "Construimos y operamos software que resuelve problemas que conocemos de cerca." },
      { title: "Ingeniería con memoria", body: "Las decisiones, el contexto y el código forman un sistema continuo, no sesiones aisladas." },
      { title: "Datos comprobables", body: "La empresa se presenta con datos registrales y capacidades que pueden verificarse." },
    ],
  },
  products: {
    index: "02 / Productos",
    title: "La matriz se entiende mirando lo que ya está construido.",
    intro: "IAMenu y Taski son productos vivos, con una dirección y un propósito propios. Nexus no se vende: es la infraestructura interna que permite que ambos existan.",
    items: [
      { code: "/ A", label: "01 · En producción · Clientes de pago", name: "IAMenu", description: "Plataforma de operación digital para restaurantes y hoteles: carta, reservas, pedidos, cocina y reputación en un mismo lugar, con IA integrada donde aporta.", data: ["53 idiomas", "14 alérgenos UE", "138 herramientas"], href: "https://iamenu.ai", featured: true },
      { code: "/ B", label: "02 · Producto vivo", name: "Taski", description: "Un manager personal con IA que te busca a ti: organiza, recuerda y avisa desde Telegram o WhatsApp.", data: ["80+ herramientas", "Telegram", "WhatsApp"], href: "https://taski.life" },
      { code: "/ C", label: "03 · Infraestructura interna", name: "Nexus", description: "Memoria persistente, contexto de código y SPECs para que la ingeniería asistida por IA no pierda el hilo.", data: ["211 SPECs", "2.200 archivos", "25 herramientas"], internal: true },
    ],
  },
  engineering: {
    index: "03 / Ingeniería",
    title: "La ventaja no es “usar IA”. Es no perder el contexto.",
    intro: "Nexus es la respuesta de FenixGx a un problema práctico: cómo sostener productos de software complejos cuando cada decisión importa y cada sesión tiene que continuar a la anterior.",
    heading: "La IA es palanca. La responsabilidad sigue siendo de ingeniería.",
    body: "Nexus conecta memoria persistente, inteligencia del código y documentación viva. No es un producto paralelo ni una promesa: es la capa que se usa para construir IAMenu y Taski.",
    label: "NEXUS / INTERNAL ENGINEERING INFRASTRUCTURE",
    steps: [
      { title: "Memoria persistente", body: "Las decisiones y soluciones importantes no desaparecen al cerrar una sesión." },
      { title: "Contexto del código", body: "El sistema conoce la estructura, los archivos relacionados y el impacto antes de tocar algo." },
      { title: "Decisiones trazables", body: "Los SPECs mantienen el porqué junto al trabajo, no como una nota que nadie vuelve a leer." },
    ],
    metrics: [
      { label: "Memoria", value: "~1.800 entradas" },
      { label: "Code intelligence", value: "~2.200 archivos" },
      { label: "Especificaciones", value: "211 SPECs IAMenu" },
    ],
  },
  contact: {
    index: "04 / Contacto",
    title: "Si necesitas hablar con FenixGx, aquí estamos.",
    intro: "Sin formulario y sin embudo. Un canal directo para partners, producto y conversaciones que necesiten una persona al otro lado.",
    heading: "Hablemos con nombre y apellido.",
    body: "El buzón actual es provisional, pero recibe de verdad. Si escribes, hay una persona al otro lado.",
    email: "hello@iamenu.ai",
    linkedin: "LinkedIn · Rodolfo Giannotti",
    github: "GitHub · fenixgx",
  },
  footer: "Software propio · IAMenu · Taski · Nexus",
};

const en: SiteContent = {
  ...es,
  locale: "en",
  languageLabel: "ES",
  nav: { company: "Company", products: "Products", engineering: "Engineering", contact: "Contact" },
  hero: { eyebrow: "FENIXGX LIMITED · PROPRIETARY SOFTWARE", title: "A real company behind", accent: "real products.", lead: "FenixGx is the British company behind IAMenu and Taski. We build our own products, use them every day and maintain the engineering infrastructure that supports them.", products: "See the products", engineering: "How we build" },
  identity: { ...es.identity, location: "Product engineering company / Scotland · Canary Islands", caption: "Commercial brand · FENIXGX LIMITED · Scotland / Canary Islands" },
  automation: { label: "04 · Line in development", title: "Automation", description: "Turn messy processes into measurable systems. We map how work actually happens, identify what is worth automating and keep human review where it matters.", data: ["Diagnosis", "Implementation", "Follow-up"] },
  carousel: { previous: "Previous product", next: "Next product", select: "Select module" },
  company: { ...es.company, index: "01 / Company", title: "We do not build software from theory.", intro: "FenixGx turns concrete problems into products that can be used, sold and maintained. No custom-services catalogue, no empty promises: living products and the engineering infrastructure to build them better.", statement: "A small parent company.", statementAccent: "Two living products. One engineering layer.", note: "A software company operating remotely from the Canary Islands with proprietary products in production.", noteMeta: "The products are the proof. Engineering is the foundation.", principles: [{ title: "Own the product", body: "We build and operate software for problems we know up close." }, { title: "Engineering with memory", body: "Decisions, context and code form a continuous system, not isolated sessions." }, { title: "Verifiable facts", body: "The company presents registrable facts and capabilities that can be checked." }] },
  products: { ...es.products, index: "02 / Products", title: "The parent company makes sense when you look at what is already built.", intro: "IAMenu and Taski are living products with their own direction and purpose. Nexus is not for sale: it is the internal infrastructure that makes both possible.", items: [{ ...es.products.items[0], label: "01 · In production · Paying customers", description: "Digital operations for restaurants and hotels: menus, reservations, orders, kitchen and reputation in one place, with AI where it helps." }, { ...es.products.items[1], label: "02 · Living product", description: "An AI personal manager that comes to you: it organises, remembers and reminds you through Telegram or WhatsApp." }, { ...es.products.items[2], label: "03 · Internal infrastructure", description: "Persistent memory, code context and SPECs so AI-assisted engineering does not lose the thread." }] },
  engineering: { ...es.engineering, index: "03 / Engineering", title: "The advantage is not “using AI”. It is keeping the context.", intro: "Nexus is FenixGx's practical answer to a hard problem: how to sustain complex software products when every decision matters and every session must continue the previous one.", heading: "AI is leverage. Engineering responsibility remains human.", body: "Nexus connects persistent memory, code intelligence and living documentation. It is not a parallel product or a promise: it is the layer used to build IAMenu and Taski.", steps: [{ title: "Persistent memory", body: "Important decisions and solutions do not disappear when a session closes." }, { title: "Code context", body: "The system knows the structure, related files and impact before anything is changed." }, { title: "Traceable decisions", body: "SPECs keep the why next to the work, instead of leaving it in a note nobody reads again." }] },
  contact: { ...es.contact, index: "04 / Contact", title: "If you need to speak with FenixGx, we are here.", intro: "No form and no funnel. A direct channel for partners, product and conversations that need a person on the other side.", heading: "Let's talk with names attached.", body: "The current inbox is provisional, but it is real. If you write, a person will read it.", linkedin: "LinkedIn · Rodolfo Giannotti", github: "GitHub · fenixgx" },
  footer: "Proprietary software · IAMenu · Taski · Nexus",
};

export const CONTENT: Record<Locale, SiteContent> = { es, en };

export function isLocale(value: string): value is Locale {
  return value === "es" || value === "en";
}
