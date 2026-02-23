"use client"

import { useState, useEffect } from "react"
import { PROPERTIES } from "@/lib/data"
import { TimeSlider } from "@/components/time-slider"
import { PropertyCard } from "@/components/property-card"
import { Search, ShieldCheck, Wallet, TrendingDown, Zap, Landmark, Play, Pause, RotateCcw, ArrowUpDown } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function Home() {
  const [year, setYear] = useState(0)
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All")
  const [saved, setSaved] = useState([])
  const [interestRate, setInterestRate] = useState(0.05)
  const [marketMood, setMarketMood] = useState(1.0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [sortBy, setSortBy] = useState("default")

  // --- Calculations ---
  const calculateFutureValue = (basePrice, roi, years) => {
    const adjustedRoi = roi * marketMood
    return basePrice * Math.pow(1 + adjustedRoi, years)
  }

  const calculateNetProfit = (futureValue, basePrice, years) => {
    const loanAmount = basePrice * 0.8
    const totalInterest = loanAmount * interestRate * years
    return futureValue - basePrice - totalInterest
  }

  useEffect(() => {
    let interval
    if (isPlaying) {
      interval = setInterval(() => {
        setYear((prev) => (prev < 20 ? prev + 1 : 0))
      }, 800)
    }
    return () => clearInterval(interval)
  }, [isPlaying])

  const filteredAndSortedProperties = PROPERTIES
    .filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase())
      const matchesCategory = category === "All" || p.type === category
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      if (sortBy === "roi") return b.roi - a.roi
      if (sortBy === "profit") {
        const profitA = calculateNetProfit(calculateFutureValue(a.price, a.roi, year), a.price, year)
        const profitB = calculateNetProfit(calculateFutureValue(b.price, b.roi, year), b.price, year)
        return profitB - profitA
      }
      return 0
    })

  const totalValue = filteredAndSortedProperties.reduce((sum, p) => {
    return sum + calculateFutureValue(p.price, p.roi, year)
  }, 0)

  const toggleSave = (prop) => {
    if (saved.find(p => p.id === prop.id)) {
      setSaved(saved.filter(p => p.id !== prop.id))
    } else if (saved.length < 3) {
      setSaved([...saved, prop])
    }
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-48 transition-colors duration-500">
      {/* Responsive Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur-md px-4 sm:px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 self-start sm:self-auto">
            <div className="bg-blue-600 p-2 rounded-xl">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-lg sm:text-xl font-black tracking-tighter text-slate-900 block leading-none">
                ASK <span className="text-blue-600 uppercase tracking-normal font-medium text-xs sm:text-sm ml-1">Investment</span>
              </span>
              <span className="text-[8px] sm:text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em]">Analysis • Strategy • Knowledge</span>
            </div>
          </div>
          
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
            <Input 
              placeholder="Search Global Assets..." 
              className="pl-10 bg-slate-100 border-none rounded-full h-10 text-sm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-10 space-y-6 sm:space-y-8">
        
        {/* Responsive Control Deck */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 bg-white p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2.5rem] border border-slate-200 shadow-xl relative overflow-hidden">
          <div className="space-y-6 relative z-10">
            <div>
              <div className="flex items-center gap-2 text-slate-400 font-bold text-[10px] uppercase tracking-[0.3em] mb-2">
                <Wallet className="w-3 h-3 text-blue-500" /> Portfolio Valuation
              </div>
              <h2 className={`text-4xl sm:text-5xl font-black tabular-nums transition-colors duration-300 ${
                 marketMood > 1 ? 'text-emerald-600' : marketMood < 1 ? 'text-rose-600' : 'text-slate-900'
              }`}>
                ${Math.floor(totalValue).toLocaleString()}
              </h2>
            </div>

            <div className="space-y-4 p-4 sm:p-5 bg-slate-50 rounded-2xl sm:rounded-3xl border border-slate-100">
              <div className="flex justify-between text-[10px] font-black uppercase text-slate-500 tracking-widest">
                <span className="flex items-center gap-1"><Landmark className="w-3 h-3"/> Debt Interest</span>
                <span className="text-blue-600">{(interestRate * 100).toFixed(1)}%</span>
              </div>
              <input type="range" min="0.02" max="0.12" step="0.005" value={interestRate} onChange={(e) => setInterestRate(parseFloat(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
            </div>

            <div className="flex gap-1 p-1 bg-slate-100 rounded-xl sm:rounded-2xl">
              <button onClick={() => setMarketMood(0.5)} className="flex-1 py-2 sm:py-3 rounded-lg sm:rounded-xl text-[9px] sm:text-[10px] font-black uppercase transition-all bg-transparent text-slate-500 active:bg-white active:shadow-md market-btn-recess">Bear</button>
              <button onClick={() => setMarketMood(1.0)} className={`flex-1 py-2 sm:py-3 rounded-lg sm:rounded-xl text-[9px] sm:text-[10px] font-black uppercase transition-all ${marketMood === 1.0 ? 'bg-white text-slate-900 shadow-md' : 'text-slate-500'}`}>Stable</button>
              <button onClick={() => setMarketMood(1.5)} className="flex-1 py-2 sm:py-3 rounded-lg sm:rounded-xl text-[9px] sm:text-[10px] font-black uppercase transition-all bg-transparent text-slate-500 active:bg-white active:shadow-md market-btn-bull">Bull</button>
            </div>
          </div>
          
          <div className="lg:col-span-2 flex flex-col justify-center space-y-6 sm:space-y-8 relative z-10">
            <div className="flex items-center gap-4 sm:gap-6 px-2">
              <button onClick={() => setIsPlaying(!isPlaying)} className={`p-4 sm:p-5 rounded-2xl transition-all active:scale-90 ${isPlaying ? 'bg-orange-500 text-white shadow-xl shadow-orange-200' : 'bg-blue-600 text-white shadow-xl shadow-blue-200'}`}>
                {isPlaying ? <Pause className="w-6 h-6 sm:w-7 sm:h-7 fill-current" /> : <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-current ml-1" />}
              </button>
              <button onClick={() => {setIsPlaying(false); setYear(0)}} className="p-4 sm:p-5 rounded-2xl bg-slate-100 text-slate-600 hover:bg-slate-200"><RotateCcw className="w-6 h-6 sm:w-7 sm:h-7" /></button>
              <div>
                <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1 leading-none">Forecast Horizon</p>
                <p className="text-lg sm:text-xl font-bold text-slate-900">{2026 + year} <span className="text-slate-300 font-medium ml-1">({year}y)</span></p>
              </div>
            </div>
            <TimeSlider value={year} onChange={setYear} />
          </div>
        </div>

        {/* Toolbar: Category & Sort (Stacks on Mobile) */}
        <div className="flex flex-col gap-4">
          <div className="flex overflow-x-auto pb-2 sm:pb-0 gap-2 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
            {["All", "Residential", "Commercial", "Penthouse", "Industrial"].map((cat) => (
              <button key={cat} onClick={() => setCategory(cat)} className={`whitespace-nowrap px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${category === cat ? "bg-slate-900 text-white shadow-lg" : "bg-white text-slate-400 border border-slate-200"}`}>{cat}</button>
            ))}
          </div>

          <div className="flex items-center justify-between bg-white px-4 py-3 rounded-xl border border-slate-200 shadow-sm sm:w-fit sm:ml-auto">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
              <ArrowUpDown className="w-3 h-3" /> Rank
            </span>
            <select 
              className="bg-transparent text-xs font-black text-slate-900 outline-none ml-4"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="default">Default</option>
              <option value="roi">Yield</option>
              <option value="profit">Net Profit</option>
            </select>
          </div>
        </div>

        {/* Property Grid (Mobile: 1 col, Tablet: 2 col) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredAndSortedProperties.map((prop) => (
            <PropertyCard 
              key={prop.id} 
              property={prop} 
              year={year} 
              onCompare={toggleSave} 
              isSaved={saved.some(s => s.id === prop.id)}
              marketMood={marketMood}
              interestRate={interestRate}
            />
          ))}
        </div>
      </main>

      {/* Comparison Drawer - Mobile Optimized Stacking */}
      {saved.length > 0 && (
        <div className="fixed bottom-4 sm:bottom-10 left-1/2 -translate-x-1/2 w-[92%] sm:w-[95%] max-w-6xl bg-slate-900/95 backdrop-blur-xl text-white p-5 sm:p-8 rounded-[2rem] sm:rounded-[3rem] shadow-2xl z-[100] border border-white/10">
          <div className="flex justify-between items-center mb-4 sm:mb-8">
            <h4 className="font-black uppercase tracking-tighter text-sm sm:text-2xl">Analysis <span className="text-blue-500 font-medium text-[10px] sm:text-sm ml-2">{2026+year}</span></h4>
            <button onClick={() => setSaved([])} className="bg-white/10 px-3 py-1.5 rounded-full text-[9px] font-black uppercase">Clear</button>
          </div>
          <div className="flex flex-col sm:grid sm:grid-cols-3 gap-3 sm:gap-8 max-h-[40vh] overflow-y-auto no-scrollbar">
            {saved.map(prop => {
              const fVal = calculateFutureValue(prop.price, prop.roi, year)
              const nProf = calculateNetProfit(fVal, prop.price, year)
              return (
                <div key={prop.id} className="bg-white/5 p-4 sm:p-6 rounded-2xl border border-white/5 flex sm:flex-col justify-between items-center sm:items-start gap-4">
                   <div className="min-w-0">
                     <div className="text-[8px] sm:text-[10px] font-black text-blue-500 uppercase tracking-widest">{prop.type}</div>
                     <div className="font-bold truncate text-xs sm:text-lg">{prop.name}</div>
                   </div>
                   <div className="text-right sm:text-left">
                     <p className="text-[8px] sm:text-[10px] text-slate-500 font-black uppercase">Profit</p>
                     <p className={`text-sm sm:text-2xl font-mono font-bold ${nProf >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                       ${Math.floor(nProf).toLocaleString()}
                     </p>
                   </div>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}