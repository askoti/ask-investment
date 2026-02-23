"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Maximize, TrendingUp, Flame, Banknote } from "lucide-react"

export function PropertyCard({ 
  property, 
  year, 
  onCompare, 
  isSaved, 
  marketMood = 1, 
  interestRate = 0.05 
}) {
  
  // 1. Calculate Future Gross Value
  const projectedPrice = property.price * Math.pow(1 + (property.roi * marketMood), year)  
  
  // 2. Calculate Mortgage Impact (Assuming 80% loan on original price)
  const loanAmount = property.price * 0.8;
  const totalInterestPaid = loanAmount * interestRate * year;
  const netProfit = projectedPrice - property.price - totalInterestPaid;

  const isHighGrowth = property.roi > 0.06;

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  })

  return (
    <Card className={`overflow-hidden transition-all duration-300 flex flex-col h-full border-2 ${
      isHighGrowth 
        ? "border-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.1)]" 
        : "border-slate-200 hover:shadow-xl"
    }`}>
      
      {/* High Yield Badge */}
      {isHighGrowth && (
        <div className="bg-amber-400 text-slate-900 text-[10px] font-black uppercase text-center py-1.5 flex items-center justify-center gap-1">
          <Flame className="w-3 h-3" /> High Yield Asset
        </div>
      )}

      {/* Property Image */}
      <div className="aspect-video relative overflow-hidden bg-slate-100">
        <img 
          src={property.image} 
          alt={property.name}
          className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
        />
        <Badge className="absolute top-2 right-2 bg-blue-600 border-none">
          {property.type}
        </Badge>
      </div>

      {/* Pricing Header */}
      <CardHeader className="p-4 pb-0">
        <CardTitle className="text-md font-bold truncate text-slate-700">{property.name}</CardTitle>
        <div className={`text-2xl font-black mt-1 transition-colors duration-300 ${
          marketMood > 1 ? 'text-green-600' : marketMood < 1 ? 'text-red-600' : (isHighGrowth ? 'text-amber-600' : 'text-slate-900')
        }`}>
          {formatter.format(projectedPrice)}
        </div>
      </CardHeader>

      <CardContent className="p-4 pt-4 flex-grow flex flex-col justify-between space-y-4">
        {/* Core Stats */}
        <div className="grid grid-cols-2 gap-2 text-xs font-medium text-slate-500">
          <div className="flex items-center gap-1">
            <Maximize className="w-3 h-3" />
            {property.sqft.toLocaleString()} sqft
          </div>
          <div className={`flex items-center gap-1 font-bold ${isHighGrowth ? 'text-amber-600' : 'text-green-600'}`}>
            <TrendingUp className="w-3 h-3" />
            +{(property.roi * marketMood * 100).toFixed(1)}% / yr
          </div>
        </div>

        {/* --- THE "HOW" (Profit Analysis Box) --- */}
        <div className={`p-3 rounded-xl border border-dashed transition-colors ${
          netProfit > 0 ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
        }`}>
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-black uppercase tracking-tight text-slate-400 flex items-center gap-1">
              <Banknote className="w-3 h-3" /> Est. Net Profit
            </span>
          </div>
          <div className={`text-lg font-mono font-bold ${netProfit > 0 ? 'text-green-700' : 'text-red-600'}`}>
            {netProfit > 0 ? "+" : ""}{formatter.format(netProfit)}
          </div>
          <p className="text-[9px] text-slate-400 italic leading-none mt-1">
            *After 80% LTV interest payments
          </p>
        </div>

        {/* Action Button */}
        <button 
          onClick={() => onCompare(property)}
          className={`w-full py-2.5 rounded-xl text-[11px] font-black uppercase tracking-wider transition-all active:scale-95 ${
            isSaved 
              ? "bg-red-50 text-red-600 border border-red-100 shadow-inner" 
              : "bg-slate-900 text-white shadow-md hover:bg-slate-800"
          }`}
        >
          {isSaved ? "Remove from Compare" : "Compare Asset"}
        </button>
      </CardContent>
    </Card>
  )
}