# 🔥 FENIXGX — la casa, no el producto

> **Este archivo se carga solo al abrir la carpeta.** Por eso está aquí y no en un `NOTES.md`:
> lo que no se carga solo, no existe. Si necesitas documentar algo de este proyecto, va **AQUÍ**.

**FENIXGX LIMITED** · SC891752 · Escocia, Reino Unido · sociedad **ACTIVA** desde el 3 de junio de 2026.
Es la **matriz** de IAMenu, Taski y Nexus.

**Estado del proyecto: dominio comprado (03-08-2026). Cero código. Contenido decidido.**

---

# 📖 GUÍA DE LECTURA

Un Claude sin guía se lee 700 líneas sin saber qué priorizar. Esto es lo que hay que leer y cuándo.

| Cuándo | Qué leer |
|---|---|
| **SIEMPRE, antes de tocar nada** | **Nivel 0** (meta-reglas) · **Nivel 1** (reglas supremas) · **Nivel 2** (identidad de la sociedad y del fundador) |
| Vas a **escribir copy** de la web | Nivel 2 completo + **Nivel 3** (los tres productos y cómo se cuenta cada uno) + Nivel 5 |
| Vas a tocar **schema / JSON-LD / metadata** | **Nivel 4** entero. Es el motivo real de que esta web exista |
| Vas a **montar o desplegar** | **Nivel 6** (stack, dominio, deploy) |
| Vas a crear un **archivo de código** | **Nivel 7** (migas de pan, convenciones) |
| Solo quieres saber **qué falta** | El bloque final: **Estado y siguiente paso** |

**Lo que NO está aquí y hay que leer aparte:** cómo trabajamos (`~/.claude/CLAUDE.md`, es el que manda),
lo específico de IAMenu (`/home/fenix/proyectos/iamenu/CLAUDE.md`, 4.269 líneas), lo de Taski
(`/home/fenix/proyectos/taski/CLAUDE.md`, 3.192) y lo de Nexus (`/home/fenix/proyectos/nexus/CLAUDE.md`, 1.481).

---

# 🚪 LO PRIMERO, ANTES DE TOCAR NADA

1. **`nexus_workspace_current`** — comprueba que estás en `FENIXGX` y **NO** en `IAMENU`. Si escribes
   memorias de aquí estando en el workspace de IAMenu, se pierden entre 211 SPECs ajenos.
   *(Si el workspace aún no existe → `nexus_workspace_init`. Está en el checklist final.)*
2. **Lee este archivo entero.** Son 10 minutos y te ahorra rehacer decisiones ya tomadas y —peor—
   inventar datos de una sociedad real.
3. **No clones el `CLAUDE.md` de IAMenu.** Aquello son 4.269 líneas para un producto con 112 tablas
   y 211 SPECs. Esto es una web estática. Aquí se documenta **la empresa y su entidad**, no un SaaS.

---

# NIVEL 0 · 📐 META-REGLAS — cómo se mantiene este archivo

**Existen porque cada Claude nuevo que actualiza un CLAUDE.md sin orden lo destroza.** Son las mismas
del global, aplicadas aquí.

1. **NUNCA una sección "ACTUALIZACIÓN vX" al final** → la información nueva va **EN** la sección que le toca.
2. **NUNCA duplicar** → antes de escribir, busca si ya existe. Si existe, **actualiza eso**.
3. **NUNCA archivos extra de documentación** (`README-new.md`, `NOTES.md`, `briefing.md`, `analisis.md`)
   → todo va aquí. Si necesitas 300 líneas para algo, se escriben aquí.
4. **La guía de lectura se actualiza SIEMPRE** que cambia la estructura.
5. **Cada sistema, UNA sección.** No dos secciones del schema en sitios distintos.
6. **Si algo cambió** (un dato, una decisión, una versión): se **reescribe la línea**, no se añade una
   nota debajo.
7. **Bugs y agujeros: solo los que SIGUEN existiendo.** Arreglado → se borra de aquí. 🚨 Pero se borra
   el **estado** del bug, **nunca la lección**.
8. **Changelogs prohibidos.** Esto es documentación viva, no historial. Para historia están git y los SPECs.
9. **Aquí no se ahorra en líneas — se prohíbe REPETIR.** La longitud no es el problema; el texto
   contradictorio y duplicado sí. Ese fue el que mató al CLAUDE.md global (llegó a 1.213 líneas con
   dos "REGLA #0" distintas y un aviso de que Rodolfo usaba Windows cuando usa Linux).
10. **Presupuesto de alarmas: máximo ~8 🚨** usadas como "esto es crítico". Cuando todo grita, nada
    grita. *(No cuentan las que son parte de un formato, como el campo `🚨 CUIDADO` de las migas.)*

---

# NIVEL 1 · ⛔ REGLAS SUPREMAS (NUNCA ROMPER)

## 1. Esta web NO existe para captar tráfico

Léelo dos veces, porque es la decisión que gobierna todo lo demás:

> ## **Esta web existe para que te CREAN, no para que te encuentren.**

Sus **tres lectores reales**, por orden de valor:

1. **Un restaurante que está a punto de pagar 69 €/mes** y busca *"quién está detrás de IAMenu"*.
   Hoy no encuentra una empresa. **Eso cuesta ventas** — y son ventas que ya estaban decididas.
2. **Google** — es la **T de E-E-A-T** (*Trust*), el pilar que más pesa de los cuatro. Una sociedad
   verificable en un registro público estatal es la prueba de confianza más fuerte que existe.
3. **ChatGPT y Perplexity** — cuando deciden a quién citar, miran quién hay detrás del producto.

📌 **Por qué importa AHORA:** el cuello de botella de IAMenu **no es su web** (está a la par o mejor
que su competidor nº1 en on-page y schema — verificado con 3 agentes en SPEC-142), es la **autoridad
y las fuentes externas**. Probado en vivo en jun-2026: Perplexity cita a IAMenu **#1 en español y 0
en inglés**, porque en inglés cita a quien está en directorios y comparativas. La palanca real es
off-site (SPEC-152), y **una matriz verificable es parte de esa palanca**.

## 2. 🚨 PROHIBIDO INVENTAR. Nada. Ni redondeando.

**Esta es la regla madre y no tiene excepción.** El MODO MEGALODÓN del CLAUDE.md global permite
maquillaje agresivo en marketing de producto — **aquí no aplica**, y por una razón puramente
estratégica, no moral:

> **El único activo que esta web produce es la credibilidad. Una sola invención la destruye entera**
> — y de paso contamina a IAMenu, que es lo que factura.

Prohibido: clientes inventados · cifras infladas · premios · "equipo de 20 personas" · testimonios ·
"líderes del sector" · logos de empresas que no son clientes · métricas sin fuente.

📉 **Precedente real:** IAMenu arrastró testimonios inventados y una biografía de chef falsa durante
meses; hubo que barrer **~2.150 correcciones de veracidad** en 4 idiomas (SPEC-142 R11 + sesión
03-jul). Riesgo legal real bajo la **Directiva Ómnibus de la UE** y la **FTC**. No lo repitas aquí,
que es justo la web donde más caro sale.

✅ **Lo que SÍ se puede afirmar, porque es verificable** (el catálogo completo está en el Nivel 2):
los datos registrales de Companies House · el historial profesional del fundador · que IAMenu tiene
clientes de pago reales · que la integración de Deliveroo está aprobada · las capacidades técnicas
que existen y se pueden enseñar.

## 3. 🚨 Los datos registrales son SAGRADOS y LITERALES

Se copian **carácter a carácter** del Nivel 2. No se "mejoran", no se traducen, no se abrevian, no se
reformatean.

- `FENIXGX LIMITED` es el **nombre legal** (así, en mayúsculas, como consta en el registro).
- `FenixGX` es la **marca comercial**.
- `SC891752` — el prefijo `SC` significa **Escocia**. No es un detalle cosmético: dice ante qué
  registro está inscrita la sociedad. **Nunca escribas "Inglaterra" ni "London".**
- La dirección va **completa y con su código postal**. Una dirección a medias es peor que ninguna:
  el lector que la comprueba y no la encuentra concluye lo contrario de lo que buscabas.

## 4. 🚨 La entidad se declara en LOS DOS SENTIDOS o no sirve de nada

`fenixgx.com` declara a IAMenu y Taski como `subOrganization`. **Y `iamenu.ai` tiene que declarar a
FenixGx como `parentOrganization`.** Los dos, o no hay entidad.

Es exactamente el mismo fallo que el **hreflang unilateral** que costó **0 clics en 90 días** a las
5 páginas de reseñas de IAMenu (SPEC-204): estaban indexadas, en el sitemap, con el slug correcto —
y **Google ignora por completo una relación no correspondida**. Detalle exacto en el Nivel 4.

## 5. 🚨 PROHIBIDO copiar copy de IAMenu o de Taski

Serían **dos dominios del mismo dueño con el mismo texto** = contenido duplicado, y el que pierde es
el que factura. Aquí se habla de **la EMPRESA**: quién la forma, de dónde viene, qué construye y por
qué se puede confiar. De cada producto: **una descripción propia y corta + un enlace**. La ficha
completa vive en su propia web.

## 6. 🚨 Nada sube a GitHub sin que Rodolfo lo pida

Ni commit, ni push, ni crear el repo, ni conectar Vercel. El *"súbelo"* vale para **esa** tanda, no
para la sesión. Al cerrar, se dice en claro **qué queda sin commitear** y **qué falta por probar**.

## 7. Verificar es MIRAR, no leer

Canonical, hreflang, schema y sitemap se verifican en el HTML con `curl`. **Que la página se vea
bien, no** — eso solo se ve abriéndola. Al entregar, se etiqueta qué está verificado y qué no:

```
✅ verificado: el JSON-LD sale en el HTML crudo (curl) · captura en claro y oscuro · móvil 390px
⚠️ sin probar: cómo lo lee Rich Results Test · el enlace desde IAMenu (aún sin desplegar)
```

**El peor bug es el falso verde.** Si algo no lo has probado, se dice.

## 8. 🚨 La antigüedad que vende es la del FUNDADOR, no la de la sociedad

La sociedad se constituyó el **3 de junio de 2026**. Eso es un **hecho verificable** y va en el
schema y en la ficha legal — pero **jamás como titular ni en el pie de página**.

Un `© 2026 FenixGx` a secas se lee como *"acaban de nacer"*. Lo que construye confianza son los
**20+ años del fundador** trabajando con hostelería, IT y diseño. El orden correcto en toda la web es
siempre: **primero la trayectoria, después la sociedad como su formalización.**

---

# NIVEL 2 · 🏛️ IDENTIDAD

## 2.1 La sociedad — datos registrales (fuente de verdad)

Copiar de aquí, literal. Cualquier dato de la empresa que aparezca en la web, el schema, el footer o
un email sale de esta tabla y de ningún otro sitio.

| Campo | Valor |
|---|---|
| **Nombre legal** | `FENIXGX LIMITED` |
| **Marca comercial** | `FenixGX` |
| **Número de empresa** | `SC891752` |
| **Estado** | Activa |
| **Tipo** | *Private Limited Company* — sociedad limitada privada |
| **Jurisdicción** | **Escocia**, Reino Unido |
| **Fecha de constitución** | 3 de junio de 2026 |
| **Domicilio social** | 25 St. Conans Road, Lochawe, Dalmally, Scotland, **PA33 1AL**, United Kingdom |
| **Actividad oficial (SIC)** | `62012` — *Business and domestic software development* |
| **Registro público** | Companies House (Reino Unido) |

🧠 **El SIC 62012 no es burocracia: es una prueba.** Dice que la actividad **declarada ante el Estado**
es exactamente desarrollo de software. Coincide con lo que la web dice que hace la empresa, y esa
coincidencia es comprobable por cualquiera. Merece salir en la ficha legal.

📍 **Sobre la dirección escocesa:** es el domicilio social de la sociedad; la **operación es remota
desde Santa Cruz de Tenerife (Canarias, España)**. Las dos cosas son verdad y **las dos se dicen** —
esconder una de ellas es justo lo que hace sospechoso a un domicilio en las Highlands. Redactado como
lo que es (*"sociedad británica, equipo remoto en Canarias"*) suma; omitido, resta.

## 2.2 El fundador — Rodolfo Giannotti

**Es la persona real y verificable detrás de la sociedad.** Sin persona identificable, una web
corporativa es un logo con texto, y Google lo sabe: la **E de *Experience*** de E-E-A-T se demuestra
con una trayectoria, no con adjetivos.

| | |
|---|---|
| **Nombre** | Rodolfo Giannotti |
| **Rol** | Fundador · *Applied AI Engineer · AI-Native Full Stack Software Engineer* |
| **Ubicación** | Santa Cruz de Tenerife, Canarias, España *(trabajo remoto)* |
| **LinkedIn** | `linkedin.com/in/rodolfo-giannotti` |
| **Idiomas** | Español (nativo) · Inglés · Alemán |
| **Especialidad declarada** | Sistemas y agentes de IA, RAG, MCP, automatización, LLM, arquitectura SaaS |

### La trayectoria — **26 años en tecnología, desde 1999**

Fuente: `Curriculum/src/data/experience.ts` (su portafolio, revisado el 03-08-2026). **Estas fechas son
las buenas** — más completas que las del CLAUDE.md global, que solo contaba desde 2012.

| Periodo | Qué |
|---|---|
| **1999 – 2004** (4 años) | **Administrador de Sistemas y Redes** — centro de operaciones de apuestas/juego (capital estadounidense), Isla de Margarita, Venezuela. Windows Server, redes, conectividad. **Donde empieza todo.** |
| **2004 – 2011** (7 años) | **Administrador de Sistemas TI — Embajada de Venezuela en Berlín.** Infraestructura, redes, servidores, correo, cuentas y soporte diario en un **entorno gubernamental donde la discreción importaba**. |
| **2012 – 2026** (**15 años**) | **Fundador y Director General de ROKA CREATIVA SL** (Tenerife). Artes gráficas, impresión, rotulación, diseño y desarrollo web. 🔑 **Dirigió un equipo de producción** y sirvió a **cientos de negocios locales, con base fuerte en restaurantes y hostelería.** |
| **2025 – hoy** | **IAMenu** (+ Taski + Nexus) — plataforma construida de extremo a extremo: modelo de datos, arquitectura, frontend, backend, APIs, facturación, seguridad, observabilidad y despliegue. |

🔥 **Dato que no estaba en ningún CLAUDE.md hasta hoy: la carrera arranca en 1999.** No son "15 años
de imprenta + 6 de software": son **26 años en tecnología**, de los cuales 11 en administración de
sistemas antes de montar la empresa. **Ese es el número que se cuenta**, y es incontestable.

🔑 **Y dos matices que multiplican el peso** (también de su portafolio):
- **No trabajaba solo: dirigió un equipo de producción durante 14 años.** Mata de raíz la objeción
  *"esto es un proyecto de una persona"*.
- **Cientos de negocios locales servidos**, con base fuerte en hostelería.

### 💎 El ángulo que hay que contar

> **IAMenu no lo construyó un programador que leyó sobre restaurantes. Lo construyó alguien que les
> facturó durante 15 años.**

Esa frase —dicha con sus datos, sin adornos— es el activo de confianza más fuerte que tiene esta
empresa, y es exactamente lo que Google llama *Experience*: **conocimiento de primera mano**.
Explica el producto entero: *"las herramientas existentes son caca"* no es una opinión de foro, es el
diagnóstico de quien pasó 15 años imprimiendo y diseñando las cartas de esos mismos restaurantes.

💡 **Y él ya lo tenía escrito, en su propio portafolio** (`experience.ts`, sobre Roka Creativa).
Es la mejor línea de todo el material disponible y se puede traducir casi literal:

> *"Learned how non-technical businesses make decisions — the same customers IAMenu serves today."*
> — *Aprendí cómo toman decisiones los negocios no técnicos. Son los mismos clientes a los que hoy
> sirve IAMenu.*

📏 **La cifra de Roka son 15 años, y se usa esa en TODOS los sitios** (confirmado por Rodolfo,
03-08-2026). Las fechas que muestra LinkedIn (`may 2012 – may 2026` = 14 años 1 mes) están sin
cuadrar del todo — **es un desajuste del perfil, no del dato**, y se revisa allí cuando haya tiempo.
Aquí y en la web: **15 años**. Un número que baila entre soportes es lo primero que mira quien duda
de ti; el número bueno es 15.

✅ **Enlazar el LinkedIn es seguro.** El perfil muestra un badge *"En busca de empleo"*, pero
**LinkedIn solo lo enseña a reclutadores** — un visitante normal no lo ve. *(Yo lo vi porque la
captura venía de una sesión con Rodolfo logueado; lo di por público y me equivoqué.)* Así que el
`sameAs` al perfil va sin reparos: es la señal de confianza más barata que tenemos.

⚠️ **Su LinkedIn está desactualizado a propósito** (falta de tiempo, no de datos): dice *"unas 90
funciones en 22 módulos"* de Gaston cuando el censo real es **138 en 33**, y le faltan cosas más.
**No copies cifras de LinkedIn a esta web** — las buenas están en el Nivel 3 y se verifican con el
script, nunca se copian de otro soporte.

## 2.3 Qué NO es esta web

- ❌ **No es una landing de captación.** No lleva formulario de leads, ni pricing, ni CTA de registro.
- ❌ **No es una agencia.** No se ofrecen servicios, ni desarrollo a medida, ni consultoría.
- ❌ **No es un portafolio personal.** El portafolio de Rodolfo vive aparte (`Curriculum`); aquí habla
  la **sociedad**, y el fundador aparece como su cara verificable, no como freelance disponible.
- ❌ **No es un blog.** Sin cadencia, sin posts, sin newsletter. IAMenu ya tiene blog y novedades.

## 2.4 🕸️ El ecosistema de presencia digital (y en qué dirección enlazar)

Todas estas piezas ya existen, hablan de la misma persona y la misma empresa, y **ninguna declara
relación con las demás**. Es el mismo problema del `parentOrganization`: entidades sueltas que Google
no puede unir.

| Pieza | Qué es | Público |
|---|---|---|
| `fenixgx.com` | **Esta web** — la matriz | Clientes que van a pagar · Google · IAs |
| `iamenu.ai` | Producto que factura | Restaurantes y hoteles |
| `taski.life` | Producto vivo | Autónomos, gente que se organiza |
| `github.com/fenixgx` | **Perfil de GitHub** (repo `fenixgx/fenixgx`) | Técnico · señal de autoridad |
| `linkedin.com/in/rodolfo-giannotti` | Perfil profesional | Profesional · reclutadores |
| `rodolfo-giannotti.vercel.app` | **Portafolio personal** (repo `fenixgx/curriculum`) | 🎯 **RECLUTADORES** |

### 🚨 El portafolio personal y esta web tienen públicos OPUESTOS

**No se copia ni una línea de copy del portafolio a `fenixgx.com`.** No es una cuestión de estilo: su
copy está escrito para convencer a un reclutador, y **al cliente que paga le dice justo lo contrario
de lo que necesita oír.** Dos ejemplos literales de `Curriculum/src/data/answers.ts`:

> *"IAMenu is live and being tested by real users. It is still early-stage, **so I do not present it
> as a mature business or proven revenue engine**."*

> *"**If you build your own products, why look for a job?** — Because building alone has limits…
> right now I want to build inside a serious team."*

Ambas son **honestas, correctas y una fortaleza** delante de un reclutador: te hacen creíble. Delante
de un restaurante que está a punto de pagar 69 €/mes son **la venta muerta** — lee *"esto no es un
negocio de verdad y el que lo hizo se quiere ir"* y cierra la pestaña.

### 🔀 Por eso el enlace tiene una dirección correcta y una incorrecta

- ✅ **Portafolio → FenixGx: SUMA.** *"He fundado una sociedad británica con productos en producción
  y clientes de pago"* es lo mejor que puede llevar un CV.
- ❌ **FenixGx → portafolio: RESTA.** Manda a tu comprador a un CV de búsqueda de empleo.
- ✅ **Desde `fenixgx.com` se enlaza al LinkedIn y al GitHub** — profesional y obra, sin el marco de
  "disponible para contratar".

### 💰 Material del portafolio que SÍ es oro (adaptándolo, no copiándolo)

Estas ya están validadas por Rodolfo y sirven para la sección *"cómo construimos"*:

- *"I use AI as leverage, not as a replacement for engineering responsibility. My workflow is built
  around **SPECs, context, verification and backups**."* ← **la mejor definición de por qué existe Nexus.**
- *"If something works in production, **I do not touch it for ego**. Small, surgical improvements over
  risky rewrites."*
- *"My strongest proof is the ability to **ship complete systems end to end**: database, APIs, UI,
  auth, payments, AI workflows, automation, deployment."*

### ⚠️ Dos datos del portafolio a VERIFICAR antes de publicarlos

1. **"Real users across 10 countries"** (`projects.ts`) — muy potente **si sigue siendo cierto**.
   Se comprueba en la BD de IAMenu (`business.country_code`) antes de escribirlo. Regla Suprema 2.
2. **Las cifras de su portafolio están desactualizadas**, igual que las de LinkedIn: dice *"~90
   funciones / 22 módulos"* y *"29 idiomas"*, cuando son **138 tools en 33 módulos** y **53 idiomas**.
   Las buenas están en el Nivel 3.
3. 🚫 **MYAIBS no entra en esta web.** En el portafolio sale como *"PAUSED"* y en el CLAUDE.md global
   como **cerrado**. Una matriz que enseña un producto parado resta credibilidad, no la suma.

---

# NIVEL 3 · 🧩 LOS TRES PRODUCTOS

> **Por qué esto está aquí:** quien escriba el copy de la web tiene que saber **qué está describiendo**.
> Sin este nivel, se acaba escribiendo *"soluciones innovadoras de IA"*, que es exactamente el
> contenido vacío que el Nivel 1 prohíbe. Aquí está lo real, con las cifras verificables y —más
> importante— **lo que NO se puede decir de cada uno**.

## 3.1 🍽️ IAMenu — el que factura

**`iamenu.ai`** · Plataforma SaaS multi-tenant nativa en IA para **restaurantes y hoteles**.

**Qué es en una frase:** el restaurante crea, traduce y publica su carta digital, y desde el mismo
sitio opera reservas, pedidos en mesa, cocina, reputación y marketing.

**Lo que de verdad lo diferencia** (esto es lo citable):

| | Qué es | Dato verificable |
|---|---|---|
| **Gaston** | Asistente conversacional que **opera casi toda la app hablando** — no un chatbot que responde preguntas, sino un agente que ejecuta | **138 herramientas en 33 módulos**, con selección dinámica por mensaje. Censo verificable ejecutando `scripts/gaston/check-gaston-tools.ts` |
| **53 idiomas** | La carta se traduce automáticamente al catálogo completo | Tabla `language` + `client_ui_string` (121 textos × 53 idiomas) + alérgenos traducidos |
| **14 alérgenos UE** | Detección asistida por IA, obligatoria por el **Reglamento (UE) 1169/2011** | Los 14 de la UE son **superset** de UK, EE. UU., Canadá y Australia → sirve mundialmente |
| **Camarero IA** | Asistente **público** en la carta que responde al comensal con el conocimiento real del menú | Anillo único `menuKnowledge` — el mismo que usa Gaston |
| **Operación completa** | Reservas, pedidos por QR, modo mesero, kanban de cocina, reseñas, CRM, multi-moneda (128), dominio propio | Todo en producción |
| **Deliveroo** | **Integración aprobada de Deliveroo Partner Platform**, certificación sandbox completa | Menu API 17/17 · Orders API completa · Update Order Status 5/5 · *Eligible to go live* |

**Modelo de negocio:** tres planes de pago (19 € / 39 € / 69 € al mes), **sin plan gratis**, prueba
de 14 días con acceso completo y sin tarjeta. Cobro con Stripe.

**Tracción real:** **hay clientes de pago.** El primero, el 24 de junio de 2026 — plan Premium, un
restaurante en México, tras completar los 14 días de prueba y **antes** de cualquier campaña de
marketing. Es la factura nº 1 de la sociedad.

**Stack:** Next.js 16 · React 19 · TypeScript · Tailwind 4 · Prisma 7 · PostgreSQL (Supabase) ·
OpenAI · Stripe · Sentry · Vercel.

### Cómo se cuenta IAMenu en esta web
✅ Descripción propia y corta (3-5 líneas) + qué lo hace distinto + **enlace a `iamenu.ai`**.
✅ Se puede decir *"con clientes de pago"* y *"en producción"* — es verdad.
✅ Se puede citar la aprobación de Deliveroo: está por escrito y su Order Form permite nombrarlos.
🚫 **NO copiar** su copy, sus features-page ni su pricing (Regla Suprema 5).
🚫 **NO mencionar Uber Eats.** La integración existe pero **está pendiente de su aprobación** (case
#55082751) y hay una regla explícita de Rodolfo: no se nombra hasta que ellos lo autoricen.
🚫 **NO usar el logo de Deliveroo** ni un mockup con su marca sin aprobación explícita suya (el
nombre sí está autorizado, el logo no).

## 3.2 ✅ Taski — el segundo producto, y **sí se habla de él**

**`taski.life`** *(canónico; `taski.live` es secundario y redirige)* · **AI Personal Manager &
Productivity**.

**Qué es en una frase:** un manager personal con IA que **te busca a ti** — le escribes por Telegram
o WhatsApp *"tengo dentista el martes a las 10"* y él lo organiza, lo recuerda y te avisa.

**Sus tres principios** (esto es la tesis del producto, y es buen copy tal cual):
1. El usuario **nunca debería** tener que añadir una tarea manualmente.
2. Taski es **proactivo** — te busca, te recuerda, te organiza.
3. Si abres la app, ves todo organizado. Pero **no necesitas** abrirla.

**Lo que tiene, de verdad:** más de **80 herramientas de IA** · bots de **Telegram y WhatsApp** ·
**servidor MCP** propio (se maneja desde Claude Code o Cursor) · calendarios y correo de **varias
cuentas de Google unificados** · Kanban profesional con arrastrar y soltar, agrupaciones y atajos ·
notas con editor enriquecido · proyectos, subproyectos, clientes, equipo y permisos granulares ·
memoria persistente del usuario.

**Modelo:** un solo plan, **4,99 €/mes** (49,99 € al año), 14 días de prueba, sin plan gratis.

**Estado real — importante para el copy (decisión de Rodolfo, 03-08-2026):** la web pública existe y
está bien acabada, y **el registro está abierto: cualquiera puede entrar hoy**. Lo que le falta es SEO
y difusión, así que casi nadie llega por su cuenta. Además se usa **a diario, con equipo y proyectos
reales**, que es la mejor prueba que puede tener un producto.

### Cómo se cuenta Taski en esta web
✅ **Se presenta como producto vivo, con enlace a `taski.life`.** No es un "próximamente".
✅ Se puede decir que **se usa a diario en trabajo real** — es cierto y vale más que una cifra.
✅ Se puede decir el precio: es público en su web.
🚫 **NO inventar número de usuarios.** No lo digas si no lo tienes; *"pocos y reales"* no se escribe,
simplemente no se menciona la cifra.
🚫 NO prometer app nativa (hoy es web + PWA + los bots).

## 3.3 🧠 Nexus — la ventaja injusta

**Sin dominio público. No es un producto: es infraestructura propia.**

> **Palabras de Rodolfo (03-08-2026): *"Nexus es importantísimo. Si no fuera por Nexus no habríamos
> podido llegar hasta aquí."*** — y por eso **sí sale en la web**, pero contado como lo que es.

**Qué es:** un servidor **MCP** (*Model Context Protocol*) propio que le da a la IA con la que trabaja
Rodolfo **memoria persistente y contexto real del código** entre sesiones.

**Qué hace, en concreto:**
- **Memoria vectorial** en PostgreSQL + pgvector — ~1.800 memorias con embeddings, búsqueda en RAM
  en menos de 10 ms.
- **Code Intelligence** — indexa proyectos enteros (~2.200 archivos de IAMenu) con vigilancia de
  cambios en tiempo real y análisis AST.
- **API Intelligence** — mapea los ~575 endpoints de IAMenu para no duplicar ni chocar.
- **Sistema de SPECs** — la documentación técnica viva de cada trabajo. **211 SPECs en IAMenu, 30 en
  Taski.** Es lo que hace que un producto de este tamaño no se pierda a sí mismo.
- **Multi-PC** — sincronización segura entre ordenadores con borrado suave, sin destruir nada.
- Corre en **Linux y Windows**, con ~25 herramientas activas.

### 💎 Por qué Nexus es EL argumento de la web (y no un detalle técnico)

La pregunta que se hace un cliente serio —y también un inversor, y también un reclutador— es:

> *"¿Cómo mantiene una sola persona una plataforma de este tamaño sin que se caiga?"*

**Nexus es la respuesta, y es una respuesta demostrable.** No es *"usamos IA"* (lo dice todo el
mundo): es **infraestructura de ingeniería construida a propósito** para que el contexto no se pierda,
las decisiones queden documentadas y los errores no se repitan. Eso es exactamente lo que separa un
proyecto de fin de semana de un producto que cobra.

### Cómo se cuenta Nexus en esta web
✅ Como **capacidad interna de ingeniería**: *"desarrollamos nuestra propia infraestructura de IA para
construir mejor"*. Es el argumento de fondo de toda la sección "cómo trabajamos".
✅ Se pueden dar las cifras reales (211 SPECs, ~2.200 archivos indexados, memoria persistente): son
verificables y son impresionantes **precisamente por ser específicas**.
🚫 **NO se ofrece.** No se vende, no se licencia, no hay lista de espera, no hay "contáctanos para
acceso". No tiene precio ni disponibilidad, y prometer cualquiera de las dos cosas sería inventar.
🚫 NO decir "el primer sistema de memoria para IA del mundo" ni nada parecido. Es falso y comprobable
en 10 segundos.

## 3.4 La relación entre los tres — la narrativa

No son tres productos sueltos. Contados en este orden, se explican solos:

```
      NEXUS  ──────────►  cómo se construye
   (infraestructura)        │
                            ├──►  IAMENU   (el negocio: hostelería, clientes de pago)
                            └──►  TASKI    (productividad personal, agentes + bots)
```

**El hilo:** 20 años resolviendo problemas reales de negocios reales → una capa de ingeniería propia
para que una sola persona pueda sostener producto de verdad → dos productos en producción, uno de
ellos cobrando. **Ese es el mensaje entero de la web.** Todo lo demás sobra.

---

# NIVEL 4 · 🧱 ARQUITECTURA DE ENTIDAD — el motivo real de esta web

> El resto es texto y una hoja de estilos. **Esto es lo único que hay que hacer perfecto.**

## 4.1 El JSON-LD de `fenixgx.com`

```jsonc
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://fenixgx.com/#organization",
  "name": "FenixGX",
  "legalName": "FENIXGX LIMITED",          // ← el REGISTRADO, no el comercial
  "url": "https://fenixgx.com",
  "logo": "https://fenixgx.com/<logo>.png",
  "foundingDate": "2026-06-03",
  "identifier": {                           // ← la prueba: número de registro público
    "@type": "PropertyValue",
    "name": "Companies House Company Number",
    "value": "SC891752"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "25 St. Conans Road, Lochawe",
    "addressLocality": "Dalmally",
    "addressRegion": "Scotland",
    "postalCode": "PA33 1AL",
    "addressCountry": "GB"
  },
  "founder": {
    "@type": "Person",
    "@id": "https://fenixgx.com/#founder",
    "name": "Rodolfo Giannotti",
    "jobTitle": "Founder",
    "sameAs": ["https://www.linkedin.com/in/rodolfo-giannotti/"]
  },
  "subOrganization": [
    { "@type": "Organization", "@id": "https://www.iamenu.ai/#organization", "name": "IAMenu" },
    { "@type": "Organization", "@id": "https://taski.life/#organization",    "name": "Taski"  }
  ]
}
```

**Detalles que no son opcionales:**
- **`identifier` con el número de Companies House.** Es lo que convierte "confía en nosotros" en un
  dato comprobable. Sin él, el schema es decorativo.
- **`@id` con URL absoluta y fragmento `#organization`** en las tres organizaciones. Es lo que permite
  a Google unir los nodos entre dominios. Un `@id` distinto en cada sitio = tres empresas sin relación.
- **`founder.sameAs` con el LinkedIn** — es lo que ata la sociedad a una persona real *(ver el aviso
  del badge en el Nivel 2.2)*.
- **`foundingDate` sí va en el schema** (es un dato), pero **no en el titular de la web** (Regla 8).

## 4.2 🚨 La otra mitad — en IAMenu (sin esto, lo de arriba no vale nada)

**Ubicación exacta, ya verificada el 03-08-2026:**
`/home/fenix/proyectos/iamenu/src/components/landing/StructuredData.tsx` **línea 118**.

**Los dos cambios, que van JUNTOS:**

```jsonc
// ❌ HOY (línea 118) — es factualmente FALSO
"legalName": "IAMenu",

// ✅ DEBE SER
"legalName": "FENIXGX LIMITED",
"parentOrganization": { "@id": "https://fenixgx.com/#organization" },
```

**El `legalName: "IAMenu"` no es un detalle: es la web contradiciéndose a sí misma.** Su propia
política de privacidad (`src/app/privacy/page.tsx:225`) dice, en público y desde hace meses:

> *"La facturación y el cobro de las suscripciones los gestiona **FenixGx Limited**, sociedad
> constituida en el Reino Unido, a través de Stripe."*

Dos afirmaciones incompatibles en el mismo dominio, y una de ellas dentro del schema que leen Google
y los modelos. Eso es exactamente lo contrario de lo que construye *Trust*.

**Mientras estás ahí, dos mejoras baratas del mismo bloque** (`founder`, líneas ~130+):
- `"name": "Rodolfo"` → **`"Rodolfo Giannotti"`**. Un nombre de pila no identifica a nadie.
- Añadir `"sameAs": ["https://www.linkedin.com/in/rodolfo-giannotti/"]` y `"@id"` apuntando al
  `#founder` de fenixgx.com → **una sola persona en los tres dominios**, no tres personas distintas.

⚠️ **Ojo con el coste:** tocar IAMenu dispara un build facturado y regenera ~1.711 páginas estáticas
(~7 min). **Se agrupa con otros cambios pendientes, no se sube solo por esto** (SPEC-160).

## 4.3 Taski, el tercer vértice

Mismo patrón en `taski.life`: `parentOrganization` → `https://fenixgx.com/#organization`. Su schema
`Organization` ya existe (`src/lib/seo/structured-data.ts`, SPEC-022) y hoy no declara matriz.
**Prioridad menor que IAMenu** — Taski no tiene tráfico que perder — pero cerrarlo completa el triángulo.

## 4.4 Cómo se verifica (obligatorio antes de decir que está)

```bash
# 1. ¿El JSON-LD sale en el HTML CRUDO? (si solo aparece tras hidratar, Google puede no verlo)
curl -s https://fenixgx.com | grep -o 'application/ld+json' | wc -l

# 2. Volcar el bloque entero y leerlo con los ojos
curl -s https://fenixgx.com | python3 -c "import sys,re;print(re.findall(r'<script type=\"application/ld\+json\">(.*?)</script>',sys.stdin.read(),re.S))"

# 3. Los tres @id tienen que coincidir EXACTAMENTE entre dominios
curl -s https://www.iamenu.ai | grep -o '"@id": *"[^"]*organization"'
```

Y después: **Rich Results Test** de Google sobre las tres URLs. 👁️ **No declares esto hecho sin haber
visto los tres schemas resueltos.** Un `@id` con o sin `www`, con o sin barra final, son **dos
entidades distintas** para Google.

---

# NIVEL 5 · 📄 LA WEB — estructura y contenido

## 5.1 Mapa de secciones (propuesto — falta el OK de Rodolfo)

| Sección | Qué contiene | Por qué existe |
|---|---|---|
| **Inicio** | Qué es FenixGx en 2 frases · los 3 productos como tarjetas · la trayectoria en una línea | Es la que se lee. Todo lo demás es profundidad |
| **Quiénes somos** | La historia real: 20 años (IT en Berlín → 14 años de Roka Creativa con hostelería → software) · por qué nació IAMenu | **Es la página que construye la confianza.** La más importante de todas |
| **Productos** | Las tres fichas del Nivel 3, con sus enlaces | Que se vea que hay obra, no una idea |
| **Cómo construimos** | Nexus, los SPECs, la ingeniería propia | Responde *"¿cómo sostiene esto una persona?"* — el argumento diferencial |
| **Contacto** | Email + LinkedIn. **Sin formulario** | Un formulario sin nadie detrás es peor que un email |
| **Información legal** | Los datos registrales completos + aviso legal + privacidad | **Es la prueba.** Y es lo que va enlazado desde el footer de todo |

⚖️ **La ficha legal no es un trámite: es el activo.** Es exactamente lo que va a mirar el restaurante
que duda y el modelo que decide si citarte. Que se vea, no escondida en letra de 10 px.

## 5.2 Idiomas

**Español primero. Inglés después, cuando el español esté terminado.** Decisión de Rodolfo (03-08-2026).

- Se monta **entero en español**, se revisa, se publica. **Luego** se hace el inglés.
- 🚫 **No arrancar los dos a la vez.** Es exactamente el error que dejó a IT y PT de IAMenu con la
  home rota durante semanas (SPEC-188/189): copiar una estructura a medio cocer a otro idioma
  multiplica el fallo en vez de arreglarlo.
- Cuando llegue el inglés: **hreflang recíproco desde el día uno** (Regla Suprema 4 — es la misma
  lección).
- 🚫 Nada de 6 idiomas. Esto no capta tráfico.

## 5.3 Tono

Sobrio, directo, sin épica. **Cero adjetivos de agencia**: nada de *innovador*, *disruptivo*,
*soluciones a medida*, *transformación digital*, *pasión por la tecnología*.

La regla práctica: **si una frase la podría firmar cualquier otra empresa, sobra.** *"Desarrollo de
software"* lo dice todo el mundo. *"14 años imprimiendo las cartas de los restaurantes que hoy usan
nuestro software"* no lo puede decir nadie más.

Y una prueba rápida antes de publicar cualquier párrafo: **¿esto se puede comprobar?** Si no, fuera.

---

# NIVEL 6 · ⚙️ STACK E INFRAESTRUCTURA

## 6.1 Stack (decidido)

**Next.js mínimo, estático.** Rodolfo ya lo domina y necesitas metadata + JSON-LD bien puestos.

- ✅ Next.js (App Router) + TypeScript + Tailwind.
- ✅ **Estático**. Cero base de datos. Cero autenticación. Cero sesiones.
- ✅ Sin analítica de terceros al arrancar → **te ahorras el banner de cookies entero**, que en una
  web de confianza es fricción pura.
- 🚨 **NO clonar el setup de IAMenu.** Nada de Prisma, Supabase, Stripe, i18n de 6 idiomas, Sentry,
  Mantine, React Compiler ni `cacheComponents`. Aquí no hay usuarios, ni BD, ni pagos, ni estado.
  Cada dependencia que metas es una que alguien tendrá que mantener para una web que casi no cambia.

Si acabase siendo HTML plano bien hecho, **también vale**. El valor está en el contenido y el schema.

## 6.2 Deploy

- **Vercel, proyecto APARTE de IAMenu.** No negociable: IAMenu son 7 GB, ~1.977 archivos y cada push
  recompila ~1.711 páginas SEO (~7 min de build facturado). Si esto viviera dentro, **cambiar una
  coma de FenixGx dispararía un deploy de IAMenu** — choca de frente con SPEC-160.
- **Repo nuevo en la organización `fenixgx`** de GitHub (donde ya viven `iamenu` y `taski`).
- Rama `main`. Aquí no hace falta el flujo `dev`→`main` de IAMenu: no hay nada que se pueda romper
  en producción para un cliente que paga.
- 🛑 **Ni el repo ni el proyecto de Vercel se crean sin que Rodolfo lo pida** (Regla Suprema 6).
  *(Autorizado el 03-08-2026 para esta configuración inicial.)*

### 🪤 TRAMPA: `fenixgx/fenixgx` NO es un repo libre — es el PERFIL de GitHub

Un repositorio con **el mismo nombre que la cuenta** es especial: GitHub renderiza su `README.md`
en la portada de `github.com/fenixgx`. Ese repo **existe, es público** y contiene la presentación de
Rodolfo (*"AI Full-Stack Developer · Technical Founder · SaaS Builder"*).

🚨 **Usarlo para la web le borra la portada del perfil.** El repositorio de esta web tiene que
llamarse **otra cosa** (`fenixgx-web`). Verificado el 03-08-2026 antes de crear nada.

## 6.2b Estado real de la infraestructura (verificado 03-08-2026, con la API)

Escrito aquí para que nadie lo vuelva a descubrir a mano — y sobre todo para que nadie pise nada.

| Qué | Estado |
|---|---|
| **GitHub CLI** | `gh` autenticado como la cuenta **`fenixgx`** (protocolo SSH). No hace falta token en el `.env` |
| **Repos existentes** en la org | `iamenu` · `taski` · `nexus` · `myaibs` · `subvenia` · `artgoma` · `migusto` · `evana` · `backups` (privados) · `fenixgx` **(perfil, público — NO TOCAR)** · `curriculum` · `sentinel-anomaly-detection` · `product-case-studies` (públicos) |
| 🎯 **Repo de ESTA web** | **`fenixgx/fenixgx-web` — PÚBLICO** (creado 03-08-2026). Rama `main`. Público a propósito: no hay un solo secreto dentro y el código a la vista es otra señal de que la empresa existe |
| **Equipo de Vercel** | `fenix's projects` — slug `fenixgx-projects` — `team_u0tTao01lH3llfjPiibnfjSJ` |
| **Proyectos en Vercel** | `iamenu` · `taski` · `myaibs` · `artgoma` · `roka-maintenance` · `rodolfo-giannotti` · 🎯 **`fenixgx`** → `prj_Rdg2Qkzr46qW4hJZmBIyILrgkdGa` (creado 03-08-2026, enlazado a `fenixgx-web`, framework `nextjs`) |
| **Portafolio personal** | repo `fenixgx/curriculum` → proyecto Vercel `rodolfo-giannotti` → `rodolfo-giannotti.vercel.app`. **Es OTRA web, con otro público** (ver 2.4) |
| **Dominio `fenixgx.com`** | ✅ **Ya está en la cuenta de Vercel y verificado.** No hay que comprarlo ni transferirlo: solo asignarlo a un proyecto cuando exista |
| Otros dominios en la cuenta | `iamenu.ai` · `taski.life` · `taski.live` · `taski.digital` · `roka.es` |

⚠️ **El MCP de Vercel y el `.env` NO ven lo mismo.** `list_projects` del MCP devuelve **vacío**
mientras el `VERCEL_TOKEN` del `.env` lista los 6 proyectos reales → están autenticados con
credenciales distintas. **Para operar Vercel en este proyecto, usa la API REST con el token del
`.env`**, no el MCP, o creerás que la cuenta está vacía.

🧠 **Cuándo conectar el dominio (decisión):** el proyecto se crea ya, pero `fenixgx.com` se apunta
**solo cuando haya contenido real**. Si lo conectas hoy, lo primero que indexa Google de esta marca
es un "Hello World" — y la primera impresión de una web cuyo único activo es la credibilidad no se
recupera con un redeploy. Mientras tanto vive en `fenixgx.vercel.app`.

## 6.3 Dominio y email

**Dominio: `fenixgx.com`** (comprado el 03-08-2026).

**Email — estado actual: el buzón de FenixGx no existe todavía.** Decisión de Rodolfo: *se pone el de
IAMenu para ver cómo queda y se cambia cuando esté creado.*

- 📮 **Provisional: `hello@iamenu.ai`** — el único buzón que existe y **recibe de verdad**.
  ⚠️ **Nunca uses `noreply@iamenu.ai`**: ese buzón **no existe** y todo lo que llega ahí **rebota**
  (probado el 26-07-2026). Cicatriz cara de IAMenu: 5 emails salían sin `replyTo`, incluido el de
  *"tu pago ha fallado"* — el cliente respondía y su mensaje se perdía.
- 🎯 **Definitivo, cuando se cree — mi recomendación: `hello@fenixgx.com`.** Los tres candidatos:
  - `rg@` → demasiado personal para una **matriz**; refuerza justo la duda que la web viene a matar
    (*"¿esto es una empresa o un señor?"*) y no escala si algún día hay alguien más.
  - `info@` → está muerto. Nadie contesta un `info@`, todo el mundo lo sabe, y los filtros de spam
    lo puntúan peor.
  - **`hello@`** → es el estándar del sector, **es el que ya usa IAMenu** (coherencia de marca entre
    matriz y producto) y funciona igual si mañana lo lee otra persona. ✅
- Cuando exista el buzón: **cambiar en un solo sitio** (una constante `CONTACT`, nunca el string
  repetido por las plantillas) y actualizar el `contactPoint` del schema.

## 6.4 Decisiones cerradas — no las reabras

| Decisión | Por qué |
|---|---|
| **Dominio `fenixgx.com`** | Es una **EMPRESA**, no un producto. `.dev`/`.app` dicen "proyecto técnico"; `.io` cuesta 3× sin aportar. **`.ai` se descartó a propósito**: lo lleva `iamenu.ai` y la matriz no debe competir en identidad con lo que vende |
| **Un solo dominio, sin defensivos** | ~10 $/año cada uno para proteger una marca que aún no tiene tráfico. Se compran cuando FenixGx signifique algo; hoy ese dinero rinde más en la campaña de IAMenu |
| **Proyecto y carpeta aparte de IAMenu** | Coste de build (ver 6.2) |
| **Español primero, inglés después** | Ver 5.2 |
| **Taski se presenta como producto vivo** | Su web existe, está acabada y el registro está abierto (Rodolfo, 03-08-2026) |
| **Nexus se cuenta, pero no se ofrece** | Es la prueba de ingeniería, no un producto (ver 3.3) |

---

# NIVEL 7 · 🧭 CÓMO SE TRABAJA AQUÍ

Todo lo de fondo está en `~/.claude/CLAUDE.md` — **léelo, es el que manda.** Aquí solo lo que más se
incumple y lo específico de este proyecto.

- 🛑 **Nada a GitHub sin que lo pida.** Ni commit, ni push, ni crear el repo.
- 🛑 **Nunca lances subagentes por tu cuenta.** Se habla antes. Le costó una suscripción entera.
- 👁️ **Verificar es MIRAR** (Regla Suprema 7).
- 📖 **Lee el archivo COMPLETO antes de modificarlo.** Leer 100 líneas y parchear sale más caro:
  acabas entrando cinco veces al mismo sitio arreglando lo que habrías visto a la primera.
- 🗣️ Se habla en **español**, de tú, sin corporate. Si algo es mala idea, se dice y se argumenta.
- 🧾 **SPECs:** este proyecto es pequeño, pero si algo crece (rediseño, el inglés entero, mover el
  schema), se crea SPEC con `nexus_spec_create` — **nunca numerar a mano**. Y antes: **se pregunta**
  si no es mejor expandir uno existente (P3 del global).

## 7.1 Migas de pan — OBLIGATORIO en archivos de lógica

> ## 🔖 `MIGAS v2` — sello 2026-07-26
> **Duplicada a propósito**: vive en el `CLAUDE.md` global **Y** en el de cada proyecto (decisión de
> Rodolfo — es la única forma de asegurar que se usa aunque solo se lea uno).
> **Por eso ambas llevan sello.** Si ves `MIGAS v2` en una y otra cosa en la otra, una está podrida:
> usa la de sello más alto y avisa. **Cambiar el formato = subir el sello en TODAS, en el mismo commit.**

### Las dos reglas que no se rompen

1. **ANTES de modificar un archivo, LEE su miga.** Ahí está lo que te va a morder y cuesta 20 segundos.
2. **DESPUÉS de modificarlo de forma significativa, ACTUALIZA su miga** en el mismo commit.
   **Una miga que miente es peor que no tener ninguna.**

### Formato completo (componentes, helpers, config del schema)

```typescript
/**
 * 🧭 [Nombre] — src/ruta/archivo.tsx
 *
 * 🚨 CUIDADO: [qué se ROMPE si lo tocas. Si no hay peligro real, NO inventes uno]
 * 🧠 DECISIÓN: [esto parece raro y es A PROPÓSITO. Por qué, y quién lo decidió]
 * ⛓️ TOCA TAMBIÉN: [archivos a cambiar EN EL MISMO COMMIT. Omitir si no hay]
 *
 * 🎯 PORQUÉ EXISTE: [qué se rompía / qué NO sabíamos antes de que esto existiera]
 * 🔄 FLUJO: [A] → ESTE → [B]   ← OPCIONAL: solo si el archivo ES una cadena de pasos
 *
 * 📋 SPECs (más reciente arriba):
 *   ✦ SPEC-XXX (YYYY-MM-DD) — R# / T#.# — IMPACT. Qué cambió.
 *   📜 Antes: SPEC-AAA · SPEC-BBB (ver .spec/)
 */
```

### Versión compacta (archivos <50 líneas)

```typescript
/**
 * 🧭 [Nombre] — src/ruta/archivo.ts
 * 🚨 CUIDADO: [o se omite la línea entera si de verdad no hay peligro]
 * 🎯 PORQUÉ: [qué se rompía antes]
 * 📋 SPEC-XXX (fecha) — R# — CREATED
 */
```

### Qué va en cada campo (y qué NO)

| Campo | Va aquí | NO va aquí |
|---|---|---|
| 🚨 **CUIDADO** | *"si tocas esto, se ROMPE X"* | Advertencias genéricas |
| 🧠 **DECISIÓN** | *"esto parece mal y es a propósito"* | Cosas obvias que nadie tocaría |
| ⛓️ **TOCA TAMBIÉN** | Archivos a cambiar **en el mismo commit** | "Relacionados por si te interesa" |
| 🎯 **PORQUÉ EXISTE** | Qué se rompía ANTES | Qué hace el archivo (eso se lee en el código) |
| 📋 **SPECs** | Todo lo que sea SPEC | Commits sueltos, typos, renames |

🧪 **Test del 🧠 DECISIÓN** — solo entra si la respuesta es SÍ:
> *"¿Alguien con buena intención lo cambiaría creyendo que lo mejora?"*

**Etiquetas IMPACT:** `CREATED` · `MAJOR` · `MINOR` · `BUGFIX` · `PERF` (con el número).

**Reglas de mantenimiento clave:** máximo **5 entradas con descripción** (las viejas se comprimen a
`📜 Antes: SPEC-X · SPEC-Y`, **nunca** "ver git log": ahí no se puede buscar por SPEC) · solo cambios
significativos · si el 🚨 puede pudrirse, lleva fecha (`🚨 CUIDADO (verificado 2026-08): …`) · si no
puedes contestar *"qué se rompía antes"*, **borra el 🎯** · **máximo 7 campos, no inventar campos nuevos**.

### 🎯 Aquí, el campo que más va a valer es `🚨 CUIDADO` en el archivo del schema

Ejemplo de la miga que hay que escribir el día que se cree:

```typescript
/**
 * 🧭 Organization JSON-LD — src/lib/schema/organization.ts
 *
 * 🚨 CUIDADO: los datos registrales son LITERALES de Companies House (SC891752). NO se
 *    "mejoran", no se traducen, no se abrevian. Un dato que no cuadra con el registro
 *    público destruye justo lo que esta web construye.
 * 🧠 DECISIÓN: el `@id` lleva URL absoluta + `#organization` a propósito. Con o sin www,
 *    con o sin barra final, son entidades DISTINTAS para Google.
 * ⛓️ TOCA TAMBIÉN: iamenu → src/components/landing/StructuredData.tsx (parentOrganization
 *    apunta aquí; si cambia el @id, esa referencia queda huérfana y no hay error visible).
 *
 * 🎯 PORQUÉ EXISTE: iamenu.ai declaraba `legalName: "IAMenu"` mientras su propia política
 *    de privacidad decía FenixGx Limited. La web se contradecía a sí misma en el schema.
 */
```

---

# 📌 ESTADO Y SIGUIENTE PASO

## Hecho
- [x] Dominio `fenixgx.com` comprado (03-08-2026)
- [x] Carpeta creada
- [x] **Datos registrales confirmados** (SC891752, Escocia, 03-06-2026) — Nivel 2.1
- [x] **Contenido decidido**: los 3 productos entran, Taski como producto vivo, Nexus como ingeniería
- [x] **Idiomas decididos**: español primero, inglés después
- [x] Este `CLAUDE.md`

- [x] **Workspace `FENIXGX` registrado en Nexus** (03-08-2026 — `nexusRAM` ✅ `codeIntelligence` ✅ `specWatcher` ✅)
- [x] **`.env` creado** con `VERCEL_TOKEN` + `VERCEL_TEAM_ID` heredados de IAMenu · `.env.example` · `.gitignore`
- [x] **Repo git local inicializado** (rama `main`, commit `f9756c2`) — el `.env` verificado como ignorado
- [x] Infraestructura auditada con la API real (ver 6.2b)

- [x] **Repo `fenixgx/fenixgx-web` creado y PÚBLICO**, con push hecho (solo 3 archivos: sin secretos)
- [x] **Proyecto `fenixgx` creado en Vercel** y enlazado al repo — sin deploys fallidos
- [x] **Ficha actualizada en `~/.claude/CLAUDE.md`** (tabla de proyectos)
- [x] **Portafolio personal leído** → trayectoria real desde 1999 + el aviso de públicos opuestos (2.4)

## Pendiente
- [ ] 🎨 **Brainstorming de la web con Rodolfo** (él manda ejemplos de referencia) ← *el siguiente paso real*
- [ ] Verificar el dato *"usuarios en 10 países"* contra la BD de IAMenu antes de usarlo (ver 2.4)
- [ ] Escribir el copy en **español** (la página *Quiénes somos* primero: es la que carga el peso)
- [ ] Montar la web
- [ ] Apuntar `fenixgx.com` al proyecto — **solo cuando haya contenido real** (ver 6.2b)
- [ ] 🔗 **Cerrar el círculo en IAMenu** — `StructuredData.tsx:118`: `legalName` + `parentOrganization`
      + nombre completo del founder + `sameAs`. **Agrupado con otros cambios**, no en un deploy propio
- [ ] Cerrar el vértice de Taski (`parentOrganization`)
- [ ] Crear `hello@fenixgx.com` y sustituir el provisional
- [ ] Versión en inglés — **solo cuando el español esté terminado y revisado**

## Decisiones abiertas (de Rodolfo, no mías)
- Si la web enseña o no la dirección escocesa completa *(mi recomendación: sí, con el contexto de
  "operación remota desde Canarias" — ver Nivel 2.1)*.
- Actualizar el LinkedIn con las cifras reales **cuando haya tiempo** — no bloquea nada de aquí.

> ⏳ **Prioridad honesta:** esto es **una tarde, no una semana**. IAMenu está a las puertas de su
> campaña y es lo que factura. Si esta web empieza a crecer (blog, más idiomas, páginas SEO), se está
> comiendo tiempo del lanzamiento — y su retorno llega a meses vista, no en dos semanas.
> **El 80% del valor son dos cosas: la página "Quiénes somos" y el JSON-LD bidireccional.**

---

**Proyecto:** FenixGx — web corporativa de FENIXGX LIMITED
**Carpeta:** `/home/fenix/proyectos/fenixgx`
**Dominio:** `fenixgx.com`
**Última actualización:** 03-08-2026 — creación del archivo con los datos registrales reales, el
perfil verificable del fundador, las fichas de los tres productos y la arquitectura de entidad
