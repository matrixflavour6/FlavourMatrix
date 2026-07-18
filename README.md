# Flavour Matrix — Molecular Gastronomy Lab

An interactive archive, molecular lab dashboard, and dynamic synergy calculator for food and culinary science enthusiasts. Browse the five fundamental taste pillars, isolate chemical compounds, and simulate molecular matches.

## Features

- **Interactive Flavor Lab**: Explore Sweet, Sour, Salty, Bitter, and Umami. Drill down into specific catalog entries, molecular compound structures, and biochemical synthesis data.
- **Biochemical Synergy Matcher Sandbox**: Simulate covalent combinations between flavor agents to calculate compatibility scores, learn the chemical explanations, and view culinary application protocols.
- **Dynamic Catalog Search**: Instantly filter through 80+ pre-compiled ingredients or search by subcategory and chemical compound tags.
- **Research Log Archive**: Read and save curation logs and sensory guides directly to your custom profile.

## Technologies Used

- **React 18** & **Vite**
- **Tailwind CSS** for clean, responsive, high-contrast layouts
- **Lucide React** for icons
- **Framer Motion** for elegant visual micro-interactions and transitions
- **TypeScript** for absolute type safety

## Getting Started

### Prerequisites

- Node.js (version 18 or above recommended)
- npm or bun

### Installation

1. Clone the repository and navigate to the directory:
   ```bash
   git clone <repository-url>
   cd flavour-matrix
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Build the production package:
   ```bash
   npm run build
   ```

## GitHub Pages Deployment

The project is configured for seamless deployment to GitHub Pages.

### Automated Deployment (GitHub Actions)

A GitHub Action workflow is included in `.github/workflows/deploy.yml`. When you push to the `main` or `master` branch, it automatically builds and deploys your application to the `gh-pages` branch.

### Manual Deployment

You can manually deploy to GitHub Pages by running:
```bash
npm run deploy
```
