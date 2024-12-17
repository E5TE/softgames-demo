# Softgames PixiJS Demo

Welcome to the Softgames PixiJS Demo! This project showcases various PixiJS capabilities through a series of tasks aimed at demonstrating skills in game development, particularly with 2D rendering for web applications.

## Project Overview

This demo was created to exhibit proficiency in using PixiJS for:
* **Sprite Management**: Handling multiple sprites efficiently.
* **Particle Effects**: Creating visually appealing particle effects.
* **Text Manipulation**: Extending text functionality with image integration.

## Tasks Included

### 1. Sprites Stack
* Task involves creating 144 card-like sprites stacked on each other where every second, one card moves to another stack.

### 2. Mixed Texts
* Demonstrates the extension of PIXI Text properties to include drawing images directly into text fields using canvas context for performance.

### 3. Fire Particles
* A particle effect demo that creates a fire effect using a limited number of sprites, with controls for adjusting the number of sprites for performance testing.

## Features

* **Responsive Design**: The demo adjusts to screen size and orientation changes for both desktop and mobile views.
* **Performance Optimization**: Built with considerations for performance on various devices, from low-end mobiles to high-end desktops.
* **PixiJS Utilization**: Leverages PixiJS for fast rendering, especially with WebGL for better graphics performance.

## Setup

### Requirements
* Node.js
* npm

### Installation

```bash
git clone https://github.com/E5TE/softgames-demo/
cd softgames-demo
npm install
```

### Running the Demo

To run the demo locally:

```bash
npm start
```

This command should start a local server where you can access the demo in your browser at `localhost:3000` (or another specified port).

## Project Structure

* **index.html**: Entry point for the web application.
* **src/**: Contains all the source files including:
    * **JS/TS files**: For game logic, sprite management, particle effects, etc.
    * **Assets**: Images, fonts, or any other media used in the demo.
* **dist/**: Compiled and bundled files for deployment.

## Known Issues

* Performance might degrade on very low-end devices due to the number of sprites in the "Sprites Stack" task.

## Contributing

Contributions are welcome! If you want to add more features or enhance the existing ones:

1. Fork this repository.
2. Make your changes.
3. Submit a pull request.

Please ensure your contributions align with the project's aim of demonstrating PixiJS capabilities in game development.

## License

This project is licensed under MIT License. For details, see the LICENSE file.

