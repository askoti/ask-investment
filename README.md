# ASK Investment – Advanced Portfolio Analytics Dashboard

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-15+-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue?logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4+-38B2AC?logo=tailwind-css)](https://tailwindcss.com)
[![Netlify](https://img.shields.io/badge/Deployed%20on-Netlify-00C7B7?logo=netlify)](https://ask-investment.netlify.app)

[Live Demo](https://ask-investment.netlify.app) • [GitHub](https://github.com/askoti/ask-investment) • [Portfolio](https://kastriotaliu.com)

</div>

---

## Project Overview

**ASK Investment** is a comprehensive portfolio analysis and asset comparison dashboard built with Next.js and TypeScript. It provides sophisticated financial visualization tools, real-time asset valuation, and comparative analysis for investment decision-making.

This project demonstrates expertise in building complex financial dashboards, data visualization, filtering systems, and financial metrics calculation.

---

## Key Features

### Portfolio Valuation Dashboard
- Real-time portfolio valuation display
- Historical performance tracking
- Multi-year forecast projections
- Debt interest rate visualization
- Investment horizon timeline (0-20+ years)
- Market sentiment indicators (Bear, Stable, Bull)

### Advanced Asset Comparison
- Multi-asset side-by-side comparison
- Asset-specific metrics display
- Property valuation by category
- High-yield asset highlighting
- Estimated net profit calculations
- Return on investment (ROI) metrics

### Asset Categorization
- Residential properties
- Commercial properties
- Penthouses
- Industrial assets
- Studio/creative spaces
- Multiple asset type filtering

### Financial Metrics
- Portfolio valuation tracking
- Debt interest rates (3-5% range)
- Investment horizons (0-20 years)
- Estimated net profit displays
- Price per square foot analysis
- Annual growth rate indicators
- Yield-based ranking system

### Search & Filtering
- Global asset search functionality
- Category-based filtering
- Yield-based sorting
- Default and custom ranking
- Real-time filter updates
- Asset comparison interface

### Asset Gallery
- High-quality property imagery
- Asset metadata display
- Quick comparison selection
- Asset valuation cards
- Location and size information
- Performance indicators

### Analysis Overlay
- Year-specific analysis view (e.g., 2039)
- Comparative profit analysis
- Multi-asset profit comparison
- Clear/reset functionality
- Dark-themed analysis interface

---

## Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Next.js 15+** | React framework with App Router |
| **TypeScript** | Type-safe financial calculations |
| **Tailwind CSS** | Production-grade dashboard styling |
| **Data Visualization** | Charts, graphs, and metrics |
| **Responsive Design** | Desktop and tablet optimization |
| **Netlify** | Deployment and hosting |

---

## Project Structure

```
ask-investment/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main dashboard
│   └── components/
│       ├── Dashboard.tsx         # Portfolio summary
│       ├── AssetCard.tsx         # Individual asset display
│       ├── ComparisonView.tsx    # Side-by-side comparison
│       ├── FilterPanel.tsx       # Category & yield filters
│       ├── SearchBar.tsx         # Global search
│       ├── MetricsDisplay.tsx    # KPI cards
│       ├── AnalysisOverlay.tsx   # Detailed analysis view
│       └── Charts.tsx            # Data visualization
├── data/
│   ├── assets.ts           # Asset database
│   ├── metrics.ts          # Financial metrics
│   └── portfolios.ts       # Portfolio data
├── hooks/
│   ├── useAssetFilter.ts   # Filtering logic
│   ├── useComparison.ts    # Comparison state
│   └── useMetrics.ts       # Calculation hooks
├── utils/
│   ├── calculations.ts     # Financial math
│   ├── formatting.ts       # Number formatting
│   └── analytics.ts        # Analysis logic
├── styles/                 # Global styles
└── public/                 # Images, data
```

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/askoti/ask-investment.git
cd ask-investment

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to access the dashboard.

### Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start

# Deploy to Netlify
netlify deploy --prod
```

---

## Core Functionalities

### Portfolio Analysis

Users can:
- View total portfolio valuation in real-time
- Track debt interest rates (3-5%)
- Adjust investment horizons (0-20+ years)
- Monitor market sentiment (Bear/Stable/Bull)
- See forecast projections
- Analyze 13-year investment timelines

### Asset Comparison

Users can:
- Compare up to 3+ properties simultaneously
- View side-by-side metrics
- Analyze profit differences
- Compare square footage
- Evaluate growth rates
- Assess yields and returns

### Smart Filtering

Users can:
- Filter by asset category (5+ types)
- Search globally by asset name
- Sort by yield percentage
- Rank by default or custom metrics
- Toggle high-yield assets
- Apply multiple filters simultaneously

### Advanced Analysis

Users can:
- View year-specific analysis (2026-2039+)
- Compare projected profits
- Analyze category performance
- Export comparison data
- Generate investment reports
- Track asset performance over time

---

## Design Highlights

- **Professional Dashboard**: Clean, organized layout
- **Color-Coded Assets**: Yellow highlight for high-yield
- **Blue Accents**: Trust and finance-focused
- **Dark Analysis View**: Focus and contrast
- **Responsive Cards**: Work on all screen sizes
- **Clear Typography**: Financial data readability
- **Interactive Elements**: Smooth filters and controls

---

## Technical Features

✅ **Complex Data Structures**: Multi-layered asset data  
✅ **Financial Calculations**: ROI, profit, yield math  
✅ **Advanced Filtering**: Multiple filter criteria  
✅ **State Management**: Comparison and analysis state  
✅ **Search Functionality**: Global asset discovery  
✅ **Responsive UI**: Dashboard optimized for all devices  
✅ **Type Safety**: Full TypeScript implementation  
✅ **Performance**: Optimized rendering and calculations  
✅ **Scalability**: Works with hundreds of assets  
✅ **Data Visualization**: Charts and metric displays  

---

## Use Cases

Perfect for:
- Investment portfolio management
- Real estate investment analysis
- Financial advisory dashboards
- Wealth management platforms
- Asset comparison tools
- Portfolio visualization
- Investment research tools

---

## Key Metrics Displayed

- Portfolio Valuation: $42M+
- Debt Interest: 3-5% range
- Investment Horizons: 0-20+ years
- Estimated Net Profit: Per-asset calculations
- Annual Growth Rate: % per year
- Yield Ranking: Best to worst performers
- Square Footage: Property metrics
- Forecast Projections: Multi-year outlook

---

## Future Enhancements

- Real-time market data integration
- Advanced charting (candles, moving averages)
- Automated rebalancing suggestions
- Risk assessment algorithms
- Tax optimization calculations
- Monte Carlo simulations
- PDF report generation
- API integration for live pricing
- Machine learning asset recommendations
- Multi-user portfolio management

---

## Performance Metrics

- Dashboard Load Time: <1 second
- Filter Response: Real-time
- Search Speed: Instant
- Comparison Rendering: Smooth 60 FPS
- Large datasets: 500+ assets supported
- Mobile optimization: Fully responsive

---

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## License

This project is licensed under the MIT License – see the LICENSE file for details.

---

## Connect With Me

- GitHub: [@askoti](https://github.com/askoti)
- Portfolio: [kastriotaliu.com](https://kastriotaliu.com)
- Email: [kastriootaliiu@gmail.com](mailto:kastriootaliiu@gmail.com)
- LinkedIn: [linkedin.com/in/kastriootaliiu/](https://www.linkedin.com/in/kastriootaliiu/)

---

## Acknowledgments

- Next.js team for excellent framework
- Tailwind CSS for dashboard styling
- Netlify for deployment
- Financial data visualization community

---

<div align="center">

Advanced Portfolio Analytics & Investment Intelligence

Made with by [@askoti](https://github.com/askoti)

</div>
