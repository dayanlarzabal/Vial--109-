# Vial 109 Premium

App completa para el **teórico de la licencia en Cuba** (Ley 109 · Código de Seguridad Vial).

## Incluye

- **70+ señales** SVG con las que más salen marcadas
- **78+ preguntas** orientadas al examen real (velocidad, prioridad, alcohol, trampas)
- **10 escenas** de situaciones de vía
- UI **dark premium 2026**, animaciones y sonido
- Simulacro, “las que caen”, señales, situaciones, fallos, por tema
- Workflow GitHub Actions con **Java 21** para generar el APK

## APK (GitHub Actions)

1. Sube este proyecto a un repo
2. Actions → **Build APK** → Run workflow
3. Artifacts → `vial-109-debug-apk` → `app-debug.apk`

## Local

```bash
npm install
npm run build
npx cap add android
npm run cap:sync
npm run cap:open
```

Material de estudio. El examen oficial lo aplica el MININT.
