# 🌍 Charta Mundi
**A High-Performance, Web-Based Grand Strategy Engine.**

Inspired by the depth of *Age of History III*, **Charta Mundi** (Map of the World) is an ambitious project to bring grand-scale geopolitical simulation to the browser. Built with TypeScript and PixiJS for maximum efficiency.

---

## 🛠 Tech Stack
* **Renderer:** [PixiJS v8](https://pixijs.com/) (WebGL/WebGPU)
* **Language:** TypeScript
* **UI Layer:** React / Tailwind CSS
* **Data:** GeoJSON & Custom Bitmap Province Parsing
* **State Management:** Zustand

---

## 🚀 Key Features (Planned)
- [ ] **Fast Map Rendering:** Smooth zooming and panning across 10,000+ individual provinces.
- [ ] **Dynamic Borders:** Real-time border updates based on occupation and peace treaties.
- [ ] **Web-Worker AI:** Non-blocking AI calculations to ensure the UI remains responsive during "Turn Processing."
- [ ] **Moddability:** Easy-to-edit JSON files for scenarios, civilizations, and events.

---

## 🏗 Project Structure
* `/src/core`: The main game loop and engine logic.
* `/src/map`: Province rendering, pathfinding, and map-mask logic.
* `/src/ui`: The HTML/React overlay for menus and statistics.
* `/public/data`: Civilization definitions and map coordinates.

---

## 🗺 Getting Started
1. **Clone the repo:** `git clone https://github.com/your-username/charta-mundi.git`
2. **Install dependencies:** `npm install`
3. **Run Dev Server:** `npm run dev`

---

> *"The world is a book, and those who do not travel (or conquer) read only one page."*
