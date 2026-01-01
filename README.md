# Vite on NW.js Template

This is a template for building desktop applications using [NW.js](https://nwjs.io/) and [Vite](https://vitejs.dev/). It provides a basic setup to get you started with developing your application with a fast development server and an efficient build process.

This template is inspired by [nw-vue3-boilerplate](httpss://github.com/nwutils/nw-vue3-boilerplate), but it is framework-agnostic and uses only Vite for the web part.

## Features

*   **Fast Development:** Leverages Vite's fast Hot Module Replacement (HMR) for a smooth development experience.
*   **Cross-Platform:** Build your application for Linux and Windows (can be extended to macOS).
*   **Framework Agnostic:** Use your favorite UI library or vanilla JavaScript.
*   **Easy to build:** Simple commands for development and production builds.

## Getting Started

### Prerequisites

*   [Node.js](https://nodejs.org/) (which includes npm)

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/rusminto/Vite-on-NWjs.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd Vite-on-NWjs
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```

### Development

To run the application in development mode, execute the following command. This will start the Vite development server and launch the NW.js application.

```bash
npm start
```

### Building for Production

To build the application for production, run:

```bash
npm run build
```

This will create a distributable application in the `dist` directory for the platforms specified in `package.json`.

## Further Information

For more details on configuring the NW.js build, refer to the [nw-builder documentation](https://github.com/nwutils/nw-builder).