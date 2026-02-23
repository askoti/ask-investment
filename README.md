# ASK Investment | Real Estate Intelligence Dashboard

**ASK (Analysis, Strategy, & Knowledge)** is a high-performance, interactive financial simulation tool designed for modern real estate investors. It transforms static property data into a dynamic 20-year growth forecast.

## 🚀 Core Features
* **Investment Time Machine:** An automated playback engine that simulates 20 years of compound growth in real-time.
* **Macro-Economic Toggles:** Instantly switch between **Bear, Stable, and Bull** market conditions to see how volatility affects portfolio value.
* **Net Profit Logic:** Built-in mortgage and interest rate calculators that factor in 80% LTV (Loan to Value) debt costs to show true "take-home" liquidity.
* **Strategic Comparison Engine:** A dark-mode drawer for side-by-side analysis of high-yield assets.
* **Responsive UI:** Mobile-optimized experience with horizontal category scrolling and touch-friendly simulation controls.

## 🛠️ Tech Stack
* **Framework:** Next.js 16 (App Router)
* **Styling:** Tailwind CSS (Mobile-first responsive design)
* **Icons:** Lucide React
* **UI Components:** Shadcn/UI (Card, Badge, Input)
* **State Management:** React Hooks (`useState`, `useEffect`)

## 💡 How it works
The app uses the compound interest formula:
$$V = P(1 + r \cdot m)^t$$
Where:
* $V$ is the Future Value
* $P$ is the Purchase Price
* $r$ is the ROI
* $m$ is the Market Mood Multiplier
* $t$ is the Time in years