# 🌤️ Weather Widget

A beautiful, transparent, frameless desktop weather widget for Windows built with React, Vite, and Electron. It uses the official National Weather Service (NWS) API for hourly forecasts and the Iowa Environmental Mesonet (IEM) NEXRAD feed for a live radar map.

## 📥 Installation

There are two ways to use this widget: running it directly from the source code, or building a standalone executable.

### Method 1: Running from Source (Recommended for Developers)

If you have [Node.js](https://nodejs.org/) installed, you can run the widget directly from the source code.

1. **Clone or Download** this repository to your local machine.
2. Open a terminal and navigate to the `weather-widget` directory:
   ```bash
   cd path/to/antigrav-playground/weather-widget
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the widget:
   ```bash
   npm start
   ```

> [!TIP]
> **Pro Tip for Windows:** 
> You can create a shortcut to `launch.vbs` and place it on your Desktop. Double-clicking the shortcut will run the widget seamlessly in the background without opening a terminal window! If you want it to launch on startup, press `Win + R`, type `shell:startup`, and drag the shortcut into that folder.

### Method 2: Building a Standalone Executable

If you want to package the widget into a portable Windows executable (`.exe`) that doesn't require Node.js to run:

1. Follow steps 1-3 above to install dependencies.
2. Run the packaging script:
   ```bash
   npm run package
   ```
3. Once the build finishes, you will find your compiled executable in the `dist-electron/win-unpacked` folder (or just `dist-electron` depending on configuration).
4. You can drag the `.exe` file to your desktop or pin it to your taskbar!

## ⚙️ Configuration

By default, the widget is hardcoded to display weather for Oregon, IL (61061).

To change the location, simply open `src/App.jsx` in a text editor and modify the `lat` and `lon` coordinates to your desired location:
```javascript
  const lat = 42.0148; // Replace with your latitude
  const lon = -89.3323; // Replace with your longitude
```
Save the file, and the widget will instantly update if running in dev mode (`npm start`), or you can rebuild the executable.
