# Flumex - Crypto Exchange Data Interface

A modern, technologically advanced interface for displaying cryptocurrency exchange data. Flumex provides real-time and historical data from multiple exchanges (Binance, Bybit, OKX) for both spot and linear futures markets.

## Features

- View trading symbols from multiple exchanges
- Switch between spot and linear futures markets
- Filter symbols by name or properties
- Responsive design for desktop and mobile
- Modern UI with dynamic flow elements
- Collapsible sidebar for asset navigation
- Interactive cards with hover effects

## Design System

Flumex is designed to convey a sense of technological advancement, dynamism, and reliability.

### Brand Identity

- **Positioning**: A technologically advanced, dynamic, and reliable service for cryptocurrency data
- **Key Associations**: Data flow, technology, reliability, clarity

### Color Palette

- **Primary Colors**:
  - Electric Blue (#3366FF) - Main brand color, represents technology and speed
  - Deep Blue/Purple (#1B1F3B, #2E2963) - Provides depth and stability

- **Accent Colors**:
  - Bright Lime Green (#4AE371) - Used for highlights and interactive elements
  - Turquoise (#17E8C0) - Secondary accent for visual variety

- **Neutral Colors**:
  - Light Gray (#F7F8FA) - For backgrounds in light mode
  - Dark Gray (#2F2F2F) - For text in light mode

### Typography

- **Headings**: Montserrat (Bold, Black) - Clear, modern, slightly geometric
- **Body Text**: Inter - Highly readable, modern sans-serif

### UI Elements

- **Background**: Gradient flow with subtle wave patterns
- **Cards**: Semi-transparent with backdrop blur for depth
- **Animations**: Subtle micro-animations for interactive elements
- **Icons**: Minimalist, with accent colors for emphasis

## Technologies Used

- React
- TypeScript
- Vite
- TailwindCSS
- shadcn/ui (based on Radix UI)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

- `public/` - Static assets
  - `flumex-logo.svg` - Brand logo
  - `flow-pattern.svg` - Background pattern
- `src/components/` - React components
  - `ui/` - shadcn/ui components
  - `ExchangeSymbolsList.tsx` - Component for displaying exchange symbols
- `src/services/` - Services for data fetching and manipulation
  - `exchangeService.ts` - Service for fetching exchange data
- `src/types.ts` - TypeScript type definitions
- `src/App.tsx` - Main application component
- `src/main.tsx` - Application entry point
- `src/index.css` - Global styles and CSS variables

## Future Improvements

- Add more exchanges
- Implement real-time data updates
- Add more market types (inverse futures, options)
- Add detailed symbol information view
- Implement light/dark mode toggle
- Add user preferences storage
- Create additional data visualization components
# flumex-frontend
