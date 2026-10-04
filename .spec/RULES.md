# RULES — Sistema SPEC Fusion 2.3 · capa 3: CREAR un SPEC

> **La metodología completa vive en `~/.claude/CLAUDE.md` §3 SISTEMA DE SPECs.**
> Este archivo solo tiene lo específico de **CREAR** un SPEC: qué contexto cargar antes de
> escribir una sola línea, el método de trabajo y los ejemplos. Todo lo demás —triángulo,
> ciclo diario, Delta Log, cross-refs, migas, archivado— está arriba y **no se repite aquí**.
> Al final tienes la tabla de dónde está cada cosa.

**Versión:** Fusion 2.3 · **Creado:** 19-20 nov 2025 (Rodolfo + Sonnet 3.5 + Sonnet 4.5) · **Podado:** jul 2026

---

## 🧱 Las 3 capas de reglas (no son lo mismo)

| Capa | Dónde | Qué cubre |
|---|---|---|
| **1. Generales** | `~/.claude/CLAUDE.md` | Cómo trabajamos en TODOS los proyectos + la metodología SPEC completa (§3) + migas (§4) |
| **2. Proyecto** | `CLAUDE.md` / `AGENTS.md` del repo | Arquitectura, stack, tablas y cicatrices de ESE producto |
| **3. Este archivo** | `.spec/RULES.md` — **uno por workspace**, no uno por SPEC | Solo el acto de **crear** un SPEC: contexto previo, método, ejemplos |

Ninguna reemplaza a otra. En conflicto: para *cómo trabajamos* manda la capa 1; para *cómo es el
producto* manda la 2.

## 📖 Índice

- **PASO 0** — Tools Nexus obligatorias antes de tocar el SPEC
- **PARTE 1** — El creador: método, checklist, principios
- **PARTE 2** — Tips por tipo de sistema
- **PARTE 3** — Ejemplo práctico completo del triángulo
- **Qué NO está aquí** — y dónde está exactamente

---

# 🛠️ PASO 0 — TOOLS NEXUS OBLIGATORIAS ANTES DE TOCAR EL SPEC

> **Esta sección es la PRIMERA que se ejecuta.** Sin contexto, un SPEC nuevo es ficción.
> Nexus existe precisamente para darte ese contexto. Si lo subutilizas, traicionas su propósito.

## 🚨 Regla innegociable

**NO tocar `spec.md`, `tasks.md` ni `work_prepend.md` sin haber invocado AL MENOS estas 4 tools primero:**

1. `nexus_workspace_current()` → confirma workspace activo
2. `nexus_code_structure()` → mapa mental del proyecto (qué hay)
3. `nexus_code_hot_files({ days: 7 })` → qué se está tocando esta semana
4. `nexus_memory_search({ query: "<tema-del-spec>" })` → ¿alguien ya resolvió algo parecido?

**Sin esas 4 invocaciones no puedes redactar requirements responsablemente. Los inventarás de la nada.**

## 📋 Tools por categoría — cuándo cada una

### 🔍 Discovery (siempre, antes de redactar problema/solución)

| Tool | Cuándo invocar | Qué te da |
|---|---|---|
| `nexus_workspace_current` | **SIEMPRE primero**. Si workspace ≠ proyecto que el SPEC toca → `nexus_workspace_switch` ya | Workspace activo + path + memorias en RAM |
| `nexus_code_structure` | **SIEMPRE** al crear/retomar SPEC | Árbol + heatmap 🔥 + keyFiles + mostImported |
| `nexus_code_hot_files({ days: 7 })` | **SIEMPRE** | Qué está vivo, dónde está el momentum |
| `nexus_code_search({ query: "<feature>" })` | **ANTES de proponer archivos nuevos** | Si ya existe algo similar (evita duplicar) |
| `nexus_memory_search({ query: "<tema>" })` | **SIEMPRE** | Soluciones previas, errores ya resueltos, patrones |

### 🌐 APIs (si el SPEC toca endpoints HTTP)

| Tool | Cuándo | Qué te da |
|---|---|---|
| `nexus_api({ action: "stats" })` | El SPEC menciona "endpoint", "API", "route" | Conteo total + distribución de métodos |
| `nexus_api({ action: "search", query: "..." })` | Antes de proponer un endpoint nuevo | Si ya existe — evita conflicto de path/método |
| `nexus_api({ action: "get", endpoint_path: "/api/..." })` | Inspeccionar uno concreto | Schema del body, middleware, db_usage, ai_usage |

### 🔗 Relaciones (si el SPEC modifica archivos críticos)

| Tool | Cuándo | Qué te da |
|---|---|---|
| `nexus_code_related({ filePath: "..." })` | **ANTES de tocar archivos críticos** | Quién lo importa + afinidad = blast radius real |
| `nexus_code_zombies({ limit: 20 })` | Al iniciar una fase nueva | Basura acumulada del proyecto |
| `nexus_pc_status()` | Si el SPEC toca infra compartida de BD | Qué otros PCs están activos ahora mismo |

### 🧠 Contexto profundo (si el SPEC es complejo)

| Tool | Cuándo | Qué te da |
|---|---|---|
| `nexus_super_search({ query: "..." })` | El tema cruza dominios (auth + pagos + email) | ~50 resultados multi-modal con scoring |
| `nexus_ast({ filePath: "..." })` | Antes de proponer refactor de archivo grande | Funciones/clases/imports por línea |

### 🩺 Diagnóstico (si algo no cuadra)

| Tool | Cuándo | Qué te da |
|---|---|---|
| `nexus_dev_logs({ action: "last_error" })` | Reportan bug en runtime | Qué se rompió de verdad |
| `nexus_validate({ action: "changed" })` | Antes de commitear código nuevo | ESLint + syntax + tsc real |

## 🎯 Pipeline de un SPEC nuevo desde cero

```javascript
// 1. Contexto base — las 4 obligatorias, TODAS
nexus_workspace_current()
nexus_workspace_switch({ workspace: "NEXUS" })   // solo si el SPEC toca otro proyecto
nexus_code_structure()
nexus_code_hot_files({ days: 7 })
nexus_memory_search({ query: "tema del SPEC" })

// 2. Descubrimiento específico
nexus_code_search({ query: "feature similar" })   // ¿ya existe?
nexus_api({ action: "search", query: "..." })     // si toca endpoints
nexus_super_search({ query: "..." })              // si cruza dominios

// 3. Clarify Gate — barrer la ambigüedad (ver global §3)
//    → volcar Q→A + Razón en spec.md ## Clarifications

// 4. AHORA SÍ: redactar spec.md → tasks.md → work_prepend.md
```

## ⚠️ Anti-patrones al crear

- ❌ **Crear el SPEC sin tocar Nexus** → adivinanzas en vez de hechos
- ❌ **Asumir que un archivo no existe** sin `nexus_code_search` → duplicar trabajo
- ❌ **Redactar requirements sin `nexus_memory_search`** → reinventar la rueda
- ❌ **Proponer un endpoint sin `nexus_api`** → conflicto de path/método
- ❌ **Tocar un archivo crítico sin `nexus_code_related`** → blast radius desconocido

## 💡 Por qué existen estas tools

Nexus se construyó **para Claude**, no para el usuario. Cada tool resuelve un dolor real de IA sin contexto:

- ¿No sé qué hay en el proyecto? → `nexus_code_structure`
- ¿No sé qué está activo? → `nexus_code_hot_files`
- ¿No sé si ya hicimos esto? → `nexus_memory_search`
- ¿No sé qué rompo si lo toco? → `nexus_code_related`

**Trabajar sin ellas es trabajar con una venda. Quítatela.**

---

# PARTE 1: EL CREADOR DE SPECs

*Para el Claude/Dex que CREA el SPEC inicial.*

## 🚪 Antes de nada: ¿este SPEC debería existir?

Con más de 200 SPECs, la pregunta correcta ya no es *"¿creo un SPEC?"* sino
**"¿de qué SPEC existente es hijo esto?"**. Buscar en `.spec/_index_specs.md` lo que se parezca,
proponer en texto *"esto lo veo como SPEC-XXX Rn (expandir), no como SPEC nuevo"* y **esperar
respuesta**. Expandir gana casi siempre: el contexto ya está ahí y el arco narrativo se mantiene.
→ Detalle completo en global §1 **P3**.

## 🔥 Método Rodolfo (flujo natural)

NO empieces escribiendo. **INVESTIGA PRIMERO:**

**1. Investigación profunda (30-60 min)**
- Gasta tokens sin miedo. Ahorrar tokens aquí sale carísimo después
- Contexto COMPLETO del proyecto: lee el código existente, entiende la arquitectura actual
- Aquí es donde se usan las tools del PASO 0

**2. Brainstorming (15-30 min)**
- Conecta TODOS los puntos
- Entiende el problema REAL, no el síntoma que te contaron
- Valida la solución hablando, antes de escribirla
- 🚨 **Lo que se decide hablando se pierde al compactar** → externalízalo a
  `spec.md ## Clarifications` como Q→A + Razón (Clarify Gate, global §3)

**3. ENTONCES crea el SPEC (30 min)**
- Con contexto completo, los specs salen espectaculares
- Requirements claros y accionables
- Plan realista y ejecutable

> *"Mejor gastar 100k tokens investigando que 10k arreglando specs mal hechos."*

## ✅ Checklist mental ANTES de crear

- ¿Entiendo el problema REAL?
- ¿Tengo contexto completo del proyecto (PASO 0 hecho)?
- ¿Puedo explicarlo en 1 frase simple?
- ¿Esto es un SPEC nuevo o la expansión de uno existente?
- ¿Será mantenible cuando cambien los requirements?
- ¿Estoy resolviendo un dolor real o añadiendo complejidad?
- ¿Queda algún `[NEEDS CLARIFICATION]` sin resolver? → **no se implementa hasta aclararlo**

## 🎨 Principios del creador

- **Problemas reales > metodología académica**
- **Mantenibilidad > separación perfecta**
- **Los requirements que el problema necesite** — ni fusionar para bajar el conteo ni inflar para llegar a una cifra
- **Terminología estándar** — NO inventar conceptos nuevos
- **Tú creas, llenas y terminas** — Rodolfo da la idea y aprueba
- **Cross-references obligatorias** — nunca actualizar 1 archivo sin los otros 2

## 📊 Métricas de éxito del creador

- Rodolfo entiende el spec en la primera lectura
- Los requirements resuelven problemas reales y demostrables
- El plan de implementación es accionable tal cual está escrito
- El spec es fácil de mantener y actualizar
- El tiempo de idea → código funcionando es el mínimo posible

---

# PARTE 2: TIPS POR TIPO DE SISTEMA

Patrones que casi siempre faltan según qué estés construyendo:

**Parsers / serialización** → SIEMPRE un requirement de round-trip: `parse(serialize(data)) === data`. Marcar `[B]`.
- Ejemplo: JSON parser → serializer → debe recuperar exactamente el original

**APIs REST/GraphQL** → SIEMPRE considerar idempotencia (POST ×2 = mismo efecto que ×1). `[MVP]` si es pública.
- Ejemplo: "CUANDO llega un POST duplicado ENTONCES el efecto es el mismo que con uno solo"

**UIs / frontend** → SIEMPRE mobile-first + accesibilidad. Responsividad `[MVP]`, a11y `[B]`.
- Añadir umbral medible de performance: "render < 200ms"

**Operaciones de BD** → SIEMPRE transacciones atómicas + cascade delete. Marcar `[B]`.
- Ejemplo: "CUANDO se borra un user ENTONCES se borran posts, comments y sessions"

---

# PARTE 3: EJEMPLO PRÁCTICO COMPLETO (el triángulo en acción)

**Escenario:** completar el Requirement #1 — Spec Unificado.

**1️⃣ En `spec.md`:**
```markdown
### R1: Creación de Especificación Unificada [MVP]

**Problema:** archivos separados requirements.md y design.md = infierno de mantenimiento.
**Solución:** un solo spec.md con requirements y detalles de implementación.

🔗 **Tasks**: tasks.md Fase 1, Tarea 1
📊 **Status**: work_prepend.md → "Implementation Progress"
🚨 **Blocker**: ninguno
```

**2️⃣ En `tasks.md`:**
```markdown
- [x] **[MVP]** T1. Generador de Spec Unificado ⏱️ 60min ✅ COMPLETADO
  - Crear lib/specs/unifiedSpecGenerator.ts
  - Implementar integración problema + solución
  - 🔗 **Requirement**: spec.md R1
  - 📊 **Status**: work_prepend.md → "Implementation Progress"
  - 🚨 **Blocker**: ninguno
```

**3️⃣ En `work_prepend.md` (LIFO — ARRIBA del todo):**
```markdown
### 14:30 - ✅ TAREA 1 COMPLETADA

**Archivos creados:**
- `/home/fenix/proyectos/nexus/src/lib/specs/unifiedSpecGenerator.ts` (250 líneas)

**Task Reference**: tasks.md Fase 1, Tarea 1
**Requirement**: spec.md R1
**Achievement**: sistema de spec unificado funcionando
**Lo que NO funcionó**: intenté X primero → falló porque Y (que no se repita)
**Next**: Tarea 2 — Matriz de Prioridades
**Status**: ⏳ pendiente de que Rodolfo lo pruebe
```

Triángulo completo: spec → tasks → work_prepend, los tres sincronizados en el mismo momento.

> ⚠️ Fíjate en el último campo: **la tarea se marca `[x]` pero el SPEC no se declara terminado
> hasta que Rodolfo lo prueba** (global §1 P6/P7). "Hecho" ≠ "verdad verificada".

---

# 📌 QUÉ NO ESTÁ AQUÍ — Y DÓNDE ESTÁ

Este archivo **ya no repite** lo que vive en las capas 1 y 2. Se quitó porque tener la misma
regla en dos sitios garantiza que una de las dos acabe mintiendo. Mapa completo:

| Lo que buscas | Dónde está ahora |
|---|---|
| Estructura de 3 archivos + prohibición de crear más | global §3 *El triángulo* |
| El triángulo y sus reglas de sincronización | global §3 *El triángulo* |
| Ciclo de actualización diario (empiezo / termino / blocker) | global §3 *El ciclo de actualización* |
| LIFO en work_prepend + símbolos `[ ]` `[🔄]` `[x]` `[🚨]` `[⏸️]` | global §3 *El triángulo* |
| Matriz de prioridades `[MVP]` `[B]` `[P]` `[OPT]` | global §3 *El triángulo* |
| **Clarify Gate** (Fase 0, taxonomía, máx 5 preguntas, gate de markers) | global §3 *Clarify Gate* |
| Cross-refs entre SPECs (`extends` / `depends_on` / `replaces` / `related`) | global §3 *Cross-refs entre SPECs* |
| **Delta Log** (ADDED / MODIFIED / REMOVED) | global §3 *Delta Log* |
| Puertas de aprobación del SPEC | global §3 *Puertas de aprobación* |
| Señales de alerta (spec >300 líneas, requirements que mezclan sistemas…) | global §3 *Señales de alerta* |
| Gestión del contexto según lo que queda de sesión | global §3 *Gestión del contexto* |
| Calidad mínima + checklist de "antes de declarar terminado" | global §3 *Calidad mínima* / *Antes de declarar terminado* |
| Archivar un SPEC completado | global §3 *Antes de declarar un SPEC terminado* |
| **Migas de pan** (formato vigente **MIGAS v2, sello 2026-07-26**) | global §4 — 🚨 el formato que había aquí era **v1 y estaba obsoleto** |
| Recuperación post-compactación / qué leer primero | global §1 *Puertas de emergencia* |
| Qué hacer al toparte con un error y cómo documentarlo | global §3 *El ciclo de actualización* + §5 |
| Cuándo lanzar agentes auxiliares | global §1 **P5** — se pide a Rodolfo ANTES, **nunca** por iniciativa propia |
| Cómo escribo código (verificación, prohibiciones transversales) | global §5 |
| Cicatrices y gotchas del producto concreto | `CLAUDE.md` / `AGENTS.md` del repo (capa 2) |

---

**Filosofía:** *"Poderoso pero no abrumador + nunca desincronizado."*
Nació de una sesión de Rodolfo + Sonnet 3.5 + Sonnet 4.5 (19-20 nov 2025), del momento en que
Rodolfo preguntó *"¿y si los obligamos a sincronizarse?"* → así nació el triángulo obligatorio.

Úsalo bien. Mejóralo cuando haga falta. Pero nunca pierdas su espíritu pragmático. 🤘
