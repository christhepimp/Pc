# Pc – 3D Virtual Computer Room

Browser-based 3D virtual computer environment built with Three.js + TypeScript.

Inspired by classic cartoon computer rooms, but fully original design.

## Features (Foundation)
- Clean modular architecture
- First-person movement (WASD + mouse look with Pointer Lock)
- Realistic lighting + soft shadows
- Smooth camera system
- Room geometry ready for expansion

## How to run locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).
Click the screen to lock the mouse pointer.

## Project Structure

```
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── src/
    ├── main.ts          # Entry point & render loop
    ├── scene.ts         # Scene setup + lighting
    ├── room.ts          # 3D room geometry
    └── controls.ts      # First-person controls
```

## Next milestone suggestion
Add collision detection + interactive objects (clickable monitor, etc.).