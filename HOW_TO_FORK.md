# Cómo hacer fork y abrir tu primera Pull Request

Esta guía es para quien nunca usó GitHub o nunca hizo un fork. Si ya manejas Git con soltura, puedes saltar directo a la sección [Flujo de trabajo](CONTRIBUTING.md#flujo-de-trabajo) de `CONTRIBUTING.md`.

No hace falta instalar nada para seguir esta guía — todo se puede hacer desde el navegador.

---

## 1. ¿Qué es un fork?

Un **fork** es tu propia copia del repositorio, asociada a tu cuenta de GitHub. Puedes editar lo que quieras ahí sin afectar el repositorio original — nada se rompe ni se publica hasta que el equipo de tML ES revise y apruebe tu cambio a través de una **Pull Request**.

Flujo completo: **Fork → editar en tu copia → Pull Request → revisión del equipo → integración.**

---

## 2. Crear tu fork

1. Ve al repositorio: [github.com/aemisigna/tML-ES](https://github.com/aemisigna/tML-ES)
2. Si no tienes cuenta de GitHub, crea una gratis en [github.com/signup](https://github.com/signup).
3. Haz clic en el botón **Fork** (arriba a la derecha).

   ![Botón Fork en la esquina superior derecha del repositorio](docs/images/fork-pr/01-fork-button.png)

4. GitHub muestra una pantalla de confirmación. Deja las opciones por defecto y haz clic en **Create fork**.

   ![Pantalla de confirmación al crear el fork](docs/images/fork-pr/02-create-fork.png)

5. Listo — ahora tienes tu propia copia en `github.com/TU-USUARIO/tML-ES`.

---

## 3. Encontrar el archivo que vas a traducir

1. En tu fork, navega hasta `Localization/<Mod>/es-ES/` y busca el archivo correspondiente al `en-US` en el que vas a trabajar (revisa la [estructura de archivos](CONTRIBUTING.md#estructura-de-archivos) en `CONTRIBUTING.md` si no estás seguro de cuál es).
2. Si el archivo `es-ES` ya existe, ábrelo. Si no existe, lo crearás en el paso siguiente.

---

## 4. Editar el archivo (desde el navegador)

Para cambios puntuales no hace falta clonar nada — GitHub tiene un editor integrado.

1. Abre el archivo y haz clic en el ícono de **lápiz** (Edit this file).

   ![Ícono de lápiz para editar el archivo directamente en GitHub](docs/images/fork-pr/03-edit-pencil.png)

2. Haz tus cambios siguiendo las [directrices de traducción](CONTRIBUTING.md#directrices-de-traducción) y el [formato HJSON](CONTRIBUTING.md#formato-hjson) de `CONTRIBUTING.md`.

   > [!WARNING]
   > Edita solo los valores, nunca las claves. No modifiques los `{0}`, `<right>`, `[i:...]` ni otros marcadores — revisa la sección [Tags y placeholders](CONTRIBUTING.md#tags-y-placeholders--no-se-traducen).

3. Si el archivo `es-ES` no existe todavía, créalo desde la carpeta correspondiente con el botón **Add file → Create new file**, usando el mismo nombre que el `en-US`.

   ![Botón Add file para crear un archivo nuevo](docs/images/fork-pr/04-add-file.png)

> [!TIP]
> Si vas a traducir varios archivos grandes o prefieres trabajar con VS Code en tu computadora, clona tu fork en lugar de usar el editor web: `git clone https://github.com/TU-USUARIO/tML-ES.git`. El resto del flujo (commit, push, PR) es el mismo, solo cambia que se realiza desde la terminal en vez del navegador.

---

## 5. Guardar el cambio (commit)

1. Baja hasta el final de la página del editor.
2. Escribe un mensaje breve que describa el cambio, por ejemplo: `Traducción: Mods.CalamityMod.Items.Weapons.Melee`.
3. Selecciona **Commit directly to the `main` branch** (es tu propio fork, no el original — no hay riesgo).

   ![Cuadro de mensaje de commit y botón Commit changes](docs/images/fork-pr/05-commit-changes.png)

4. Haz clic en **Commit changes**.

---

## 6. Abrir la Pull Request

1. Después del commit, GitHub mostrará un banner: **"This branch is 1 commit ahead of aemisigna:main"** con un botón **Contribute → Open pull request**. Haz clic ahí.

   ![Banner de GitHub ofreciendo abrir una Pull Request](docs/images/fork-pr/06-contribute-banner.png)

   > Si no aparece el banner, ve a la pestaña **Pull requests** de tu fork y haz clic en **New pull request**.

2. Verifica que la comparación sea: base repository `aemisigna/tML-ES`, base `main` ← head repository `TU-USUARIO/tML-ES`, compare `main`.

   ![Pantalla de comparación de branches antes de crear la PR](docs/images/fork-pr/07-compare-branches.png)

3. Completa:
   - **Título**: mod y archivo afectado, por ejemplo `Traducción: Calamity - Items.Weapons.Melee`.
   - **Descripción**: qué archivos modificaste y cualquier duda o decisión de traducción que quieras señalar al equipo.

   ![Formulario de título y descripción de la Pull Request](docs/images/fork-pr/08-pr-form.png)

4. Haz clic en **Create pull request**.

---

## 7. Qué sucede después de abrir la PR

1. El **CI** se ejecuta automáticamente y valida la sintaxis HJSON. Si falla, aparecerá una cruz roja — revisa el registro del check para ver qué línea tiene el error.

   ![Estado del check de CI en la Pull Request, en verde o rojo](docs/images/fork-pr/09-ci-status.png)

2. Con el CI en verde, el equipo de tML ES revisa el contenido siguiendo el [proceso de revisión](CONTRIBUTING.md#proceso-de-revisión).
3. Si te piden cambios, los comentarios aparecerán directamente en la PR. Para responder:
   - Vuelve a tu fork, edita el mismo archivo de nuevo (paso 4) y haz commit.
   - Ese nuevo commit se agrega automáticamente a la misma Pull Request — no es necesario abrir una nueva.
4. Cuando todo esté aprobado, el equipo integra (`merge`) tu PR al repositorio principal.

---

## 8. Mantener tu fork actualizado (para tu próxima contribución)

Con el tiempo, el repositorio original avanza con cambios de otros contribuidores. Antes de empezar una traducción nueva, actualiza tu fork para evitar conflictos:

1. En tu fork, ve a la pestaña principal del código.
2. Si tu fork está atrasado, verás: **"This branch is X commits behind aemisigna:main"** con un botón **Sync fork**.

   ![Botón Sync fork para actualizar tu copia con el repositorio original](docs/images/fork-pr/10-sync-fork.png)

3. Haz clic en **Sync fork → Update branch**.

---

## Resumen rápido

```
1. Fork (una sola vez)
2. Editar archivo es-ES en tu fork
3. Commit
4. Open pull request hacia aemisigna/tML-ES (main)
5. Esperar CI + revisión del equipo
6. Si piden cambios → nuevo commit en el mismo archivo
7. Antes de tu próxima contribución → Sync fork
```

¿Dudas en cualquier paso? Pregunta en el **[Discord del proyecto](https://discord.gg/Z43xMxKdXZ)**.
