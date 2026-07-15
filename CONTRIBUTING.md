# Guía de contribución — tML ES

Gracias por tu interés en contribuir. Esta guía cubre todo lo necesario para que tu aporte sea coherente con el estilo del proyecto y pase la revisión sin problemas.

> [!NOTE]
> ¿Primera vez usando GitHub o nunca hiciste un fork? Empieza por **[Cómo hacer fork y abrir tu primera Pull Request](HOW_TO_FORK.md)** — es una guía paso a paso con capturas. Vuelve a esta página para las reglas de traducción una vez que ya tengas tu fork listo.

---

## Requisitos previos

- Conocimiento básico de formato **HJSON** (similar a JSON, pero sin comillas obligatorias en valores simples y con soporte para strings multilínea).
- Un editor de texto que guarde en **UTF-8 sin BOM** — recomendamos [VS Code](https://code.visualstudio.com/). Evita el Bloc de notas de Windows.
- Acceso al archivo fuente en inglés (`en-US`) del mod que quieres trabajar; están incluidos en este repositorio bajo `Localization/<Mod>/en-US/`.
- Una cuenta de GitHub para abrir la Pull Request.

---

## Estructura de archivos

Los mods en este repositorio usan una de dos estructuras. Verifica cuál aplica antes de buscar el archivo que quieres editar.

**Estructura categorizada** — múltiples archivos por categoría (Calamity, Wrath of the Gods, Fargo's Souls):
```
Localization/
  Calamity/
    en-US/
      Mods.CalamityMod.Items.Weapons.Melee.hjson   ← referencia
      Mods.CalamityMod.Buffs.hjson
      ...
    es-ES/
      Mods.CalamityMod.Items.Weapons.Melee.hjson   ← tu traducción
      Mods.CalamityMod.Buffs.hjson
      ...
```

**Estructura plana** — un único archivo con todo el contenido del mod (Infernum Mode, Calamity Music, Fargo's Mutant Mod):
```
Localization/
  InfernumMode/
    en-US.hjson   ← referencia (archivo único)
    es-ES.hjson   ← tu traducción (archivo único)
```

En ambos casos, el archivo `en-US` es la fuente de referencia y el `es-ES` es donde va tu traducción.  
Si el archivo `es-ES` no existe, créalo con el mismo nombre que su par `en-US`.

> [!WARNING]
> Nunca edites los archivos `en-US`. Son la referencia oficial del mod original y se actualizan automáticamente cuando el mod origen lanza nuevas versiones. Cualquier cambio que hagas ahí se perderá.

---

## Scope de contribución

Antes de empezar, consulta en Discord qué archivos o mods están disponibles para contribuir. No todo el contenido está abierto al mismo tiempo.

> [!IMPORTANT]
> Trabajar en un archivo que no está disponible puede resultar en que tu aporte no sea integrado. Confirma con el equipo antes de empezar.

✅ = Traducción completa e implementada en el mod principal
🟡 = Traducción completa, pendiente de implementación
🔴 = Traducción en proceso por el equipo o un colaborador
⚪ = Traducción sin colaboradores y no considerada por el equipo, disponible para cualquier contribuidor

| Mod | Estado |
|-----|--------|
| Calamity Mod | ✅ | v2.2.1 
| Infernum Mode | ✅ | v2.0.1.34
| Wrath of the Gods | ✅ | v1.2.31
| Fargo's Mutant Mod | ✅ | v3.3.6.7
| Fargo's Souls Mod | ✅ | v1.7.3.9
| Fargo's Souls DLC | ✅ | v1.2.0.26
| Calamity Overhaul | ✅ | v0.9025
| Catalyst Mod | ✅ | v1.1.7
| Calamity: Wrath of the Machines | ✅ | v1.0.4
| Split | 🔴 | X
| The Stars Above | ✅ | 2.1.8.4
| AlchemistNPC Lite | ✅ | 1.9.9.3
| Calamity's Vanities | ✅ | 11.4.1
| Calamity: Hunt of the Old God | ✅ | 1.2.3
| Progression Journal | ✅ | 2.1.4
| Quality of Terraria | ⚪ | X


Trabajar en un archivo que no está disponible puede resultar en que tu aporte no sea integrado. Si tienes dudas sobre qué tomar, pregunta primero.

---

## Flujo de trabajo

1. Haz **fork** de este repositorio (botón _Fork_ arriba a la derecha en GitHub). Esto crea tu propia copia — no puedes romper nada en el repositorio principal hasta que el equipo apruebe tus cambios.
2. Toma el archivo `en-US` como fuente de referencia.
3. Crea o edita su equivalente en `es-ES` siguiendo las directrices de esta guía.
4. Mantén **exactamente las mismas claves** que el original; solo traduce los valores.
5. Abre una **Pull Request** hacia `main` con una descripción clara de qué mod y qué archivos incluye tu aporte.

> [!TIP]
> Si es tu primera vez usando GitHub, el flujo es: Fork → editar archivos en tu fork (desde el navegador o descargando el repositorio) → abrir Pull Request. No necesitas conocimientos avanzados de Git. Si tienes dudas, consulta en Discord y te orientamos.
>
> Guía paso a paso con capturas de pantalla: **[Cómo hacer fork y abrir tu primera Pull Request](HOW_TO_FORK.md)**.

> [!IMPORTANT]
> El CI valida la sintaxis HJSON de tu PR. Si hay errores de formato, el CI aparecerá en rojo y la PR no será revisada hasta que estén corregidos.

![Estado del check de CI en la Pull Request, en verde o rojo](docs/images/fork-pr/09-ci-status.png)

> Si es tu primera contribución a este repositorio, es normal que el CI quede en estado **"esperando aprobación"** (`Workflow awaiting approval`) hasta que alguien del equipo lo apruebe manualmente — es una protección estándar de GitHub para colaboradores nuevos, no un error de tu parte. A partir de tu segunda PR corre automático.

---

## Directrices de traducción

### 1. Referencia principal — Terraria Vanilla en español

Para cualquier término que existe en Terraria base, usa siempre la **traducción oficial de Terraria en español** como referencia: nombres de biomas, eventos, mecánicas del juego base, NPCs del juego base, modos de dificultad, etc.

> Correcto: «Luna de sangre», «Mundo corrupto», «Corazón carmesí», «Grebas de las sombras»  
> Incorrecto: inventar un término propio si ya existe uno en la localización oficial.

### 2. Mayúsculas

La norma no es la del español estándar genérico, sino la del **mod de origen**. Observa cómo capitaliza el mod en inglés y aplica la misma lógica en español:

| Mod | Convención en inglés | Convención en español |
|-----|---------------------|-----------------------|
| Calamity | Title case: `Absolute Zero`, `Abyss Blade` | Title case: `Cero Absoluto`, `Filo del Abismo` |
| Wrath of the Gods | Sentence case: `Curious hand`, `Black hole` | Sentence case: `Mano curiosa`, `Agujero negro` |
| Terraria Vanilla | Sentence case: `Blood moon monolith` | Sentence case: `Monolito de la luna sangrienta` |

En **title case**, los artículos y preposiciones cortas (`de`, `del`, `la`, `el`, `y`) van en minúscula cuando conectan palabras, igual que sus equivalentes en inglés (`of`, `the`, `and`):

> `Filo del Abismo` ✓ — `Filo Del Abismo` ✗

Las descripciones y tooltips siempre van en sentence case independientemente del mod.

### 3. Nombres propios — ¿traducir o no?

- **Nombres de personaje sin traducción establecida**: no se traducen.
- **Nombres descriptivos**: se traducen respetando la convención de mayúsculas del mod.
- **Nombres de cóctel, cultura o marca** (frecuentes en Calamity): se mantienen en inglés si no tienen equivalente establecido en español.
- **Ante cualquier duda**: consulta en Discord antes de inventar una traducción, para no generar inconsistencias.

La lista completa de nombres ya establecidos está en **[GLOSSARY.md](GLOSSARY.md#nombres-propios)**.

### 4. Vocabulario consistente

Usa siempre los mismos términos para las mismas mecánicas. La lista completa de términos establecidos está en **[GLOSSARY.md](GLOSSARY.md#mecánicas-y-términos-generales)**.

> Si encuentras un término recurrente que no está en el glosario, propón su entrada en Discord para unificarlo antes de usarlo.

### 5. Puntuación y formato

- Las descripciones cortas (tooltips de ítems) **no llevan punto final**.
- Las entradas de bestiario y lore **sí llevan punto final**.
- Usa **signos de apertura** en exclamaciones e interrogaciones: `¡Así!`, `¿Qué es esto?`
- Los puntos suspensivos van pegados a la palabra anterior: `así...` — no `así ...`
- Usa **comillas españolas** (`«»`) para citas dentro del texto de lore cuando el original usa comillas dobles inglesas (`""`).

### 6. Tono por tipo de texto

| Tipo | Tono | Notas |
|------|------|-------|
| Tooltips de ítem | Directo, conciso | Sin florituras; cada línea es una característica |
| Bestiario | Literario, fluido | Prioriza que suene natural en español sobre la literalidad |
| Diálogos de NPC | Conversacional | Refleja la personalidad del personaje del original |
| Mensajes de estado (`Status.*`) | Tercera persona, presente | `«[Nombre] ha despertado.»` |
| Mensajes de muerte | Segunda persona | Sigue el estilo de la Vanilla oficial |
| Configuración (`Configs.*`) | Técnico, neutro | Breve y preciso; sin ambigüedad |

### 7. Género gramatical

El inglés no marca género; el español sí. Cuando el ítem, criatura o habilidad no tiene género obvio:

- Elige el género que resulte más natural en español para ese tipo de objeto.
- No uses `@`, `/` ni `x` como comodín de género. Elige una forma y mantente en ella.
- Si el lore original especifica género implícitamente (pronombres, adjetivos, etc.), respétalo.

---

## Formato HJSON

```hjson
// Ítem con tooltip multilínea (estilo Calamity — title case)
AbyssBlade: {
    DisplayName: Filo del Abismo
    Tooltip:
        '''
        Lanza una espada abisal giratoria que atraviesa enemigos y libera energía acuática al golpear un bloque
        La espada se lanzará hacia los enemigos tras un rebote, infligiendo 2x de daño
        '''
}

// Ítem con tooltip simple
AmidiasTrident: {
    DisplayName: Tridente de Amidias
    Tooltip: Dispara remolinos teledirigidos
}

// Buff (estilo WotG — sentence case)
StarstrikinglySatiated: {
    DisplayName: Saciedad estelar
    Description: Aumenta de forma estelar todas las características y la regeneración de vida
}

// Entrada de bestiario (valor directo, con punto final)
Aelithrysuwl: A pesar de su parecido con los búhos solitarios, estas misteriosas criaturas son notablemente sociables y disfrutan cantando juntas entre los árboles.
```

Reglas básicas de HJSON:
- **No modifiques las claves** (`AbyssBlade`, `DisplayName`, etc.) — solo los valores.
- Si un valor tiene saltos de línea, usa el bloque `'''...'''`.
- Si una clave no tiene traducción viable, copia el valor original tal cual para que no quede vacía.

---

## Tags y placeholders — no se traducen

Los archivos de localización contienen marcadores especiales que el engine resuelve en tiempo de ejecución. Deben copiarse exactamente como aparecen en el original, sin modificarlos ni traducirlos.

> [!WARNING]
> Modificar o eliminar cualquiera de estos marcadores causa errores visibles en el juego — texto roto, valores faltantes o crashes al cargar. Si no estás seguro de qué es un marcador, cópialo sin tocarlo.

### Placeholders numéricos

```hjson
// Original
UsesMana: Uses {0} mana

// Correcto
UsesMana: Usa {0} de maná

// Incorrecto — no traduzcas el marcador
UsesMana: Usa [cantidad] de maná
```

`{0}`, `{1}`, `{2}`... son reemplazados por valores en tiempo de ejecución. El orden puede cambiar en español si la oración lo requiere — eso es válido siempre que se mantengan todos los marcadores.

> [!TIP]
> En español es común que el número vaya en otra posición que en inglés. `Uses {0} mana` → `Usa {0} de maná` está bien, pero también sería válido `Consume {0} unidades de maná` si la oración lo requiere. Lo que no puede faltar es el `{0}`.

### Referencias a otras claves

```hjson
// Se copia sin tocar
Tooltip:
    '''
    {$Common.YoyoStats}
    Dispara plumas cuando hay enemigos cerca
    '''
```

`{$Clave.Anidada}` apunta a otra entrada de localización. No se traduce ni se modifica.

### Tags de input

```hjson
// Original
Tooltip: Press <right> to fire an aegis ray

// Correcto — el tag se copia tal cual
Tooltip: Pulsa <right> para disparar un rayo égida
```

`<left>`, `<right>`, `<jump>`, etc. son resueltos por el engine como el botón configurado por el jugador. Cópialos sin cambios.

### Tags de buff e ítem

```hjson
// Correcto — los tags internos no se tocan
Tooltip: Extiende la [cbuff:CalamityMod/AstralInfectionDebuff] al golpear
Tooltip: Consume [i:CalamityMod/AstralOre] al disparar
```

`[cbuff:...]` y `[i:...]` son referencias a buffs e ítems del juego. Traduce solo el texto que los rodea.

### Tags de color

```hjson
// El tag de color se preserva; solo se traduce el texto dentro
Tooltip: "[c/FF0000:Texto en rojo que sí se traduce]"
```

---

## Cómo reportar un error en una traducción existente

Si encuentras un error en una traducción ya publicada — error tipográfico, término incorrecto, frase que no tiene sentido — no abras una PR directamente.

> [!CAUTION]
> Las correcciones aisladas pueden generar inconsistencias con el resto del archivo si no se coordinan con el equipo. Reporta primero en Discord; el equipo decide si corresponde una PR o lo corrige internamente.

1. Reporta el error en el canal correspondiente del Discord con:
   - El mod afectado
   - El nombre del ítem, buff o entrada
   - La traducción actual y lo que debería decir
2. El equipo evaluará el reporte y, si corresponde, realizará la corrección o te indicará cómo hacerlo.

Esto evita que correcciones aisladas generen inconsistencias con el resto del archivo.

---

## Proceso de revisión

Toda PR pasa por dos instancias:

1. **CI automático** — valida sintaxis HJSON. Una PR con CI en rojo no será revisada.
2. **Revisión del equipo** — se evalúa:
   - Coherencia con la localización oficial de Terraria en español
   - Mayúsculas según la convención del mod de origen
   - Puntuación y tono correctos
   - Tags y placeholders intactos
   - Claves completas (ninguna faltante respecto al `en-US`)

El equipo puede solicitar cambios antes de integrar. Responde los comentarios de revisión en la misma PR.

---

## Contacto

Ante cualquier duda, consulta en el canal correspondiente del **[Discord del proyecto](https://discord.gg/Z43xMxKdXZ)** antes de empezar a trabajar.
