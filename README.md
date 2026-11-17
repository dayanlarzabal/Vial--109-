# Vial 109

App moderna para preparar el **teórico de la licencia de conducción en Cuba** (Ley 109 · Código de Seguridad Vial).

## Contenido

- **70+ señales** de tránsito con pictogramas SVG (peligro, prioridad, prohibición, obligación, información y marcas)
- **50+ preguntas** (muchas de las que más caen en el examen)
- **10 escenas ilustradas** (cebra, niños, lluvia, emergencia, terraplén, paso a nivel…)
- **Animaciones** al responder, al mostrar señales y en el resultado
- **Sonido** (acierto, error, aprobado, reprobado, tick del temporizador)
- Lecciones por tema, simulacros y progreso en el dispositivo

**App ID:** `cu.vial109.app` · **Nombre:** Vial 109

---

## Subir a GitHub

```bash
cd vial-109-android
npm install
git init
git add .
git commit -m "Vial 109 — app completa con señales, audio y animaciones"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/vial-109.git
git push -u origin main
```

## APK con GitHub Actions

1. Repo → **Actions** → **Build APK** → **Run workflow**
2. Artefacto **vial-109-debug-apk** → `app-debug.apk`

## APK en el PC

```bash
npm install
npm run build
npx cap add android    # primera vez
npm run cap:sync
npm run cap:open       # Android Studio → Build APK
```

## Modos de práctica

| Modo | Descripción |
|------|-------------|
| Las que caen | 20 preguntas frecuentes |
| Simulacro | 30 preguntas, 40 min |
| Señales | Identificar 15 señales |
| Situaciones | Escenas de la vía |
| Rápida | 10 preguntas |
| Fallos | Solo lo que fallaste |

## Notas

- Material de estudio. El examen oficial lo aplica el MININT.
- Zona de niños: **40 km/h urbana / 60 rural** (no 20).
