"use client"

import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Calendar } from "lucide-react"

export function TimeSlider({ value, onChange }) {
  return (
    <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-5">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-blue-600" />
          <Label className="text-sm font-bold uppercase tracking-wider text-slate-500">
            Investment Horizon
          </Label>
        </div>
        <span className="text-2xl font-black text-blue-600">
          {value} <span className="text-sm font-medium text-slate-400">Years Out</span>
        </span>
      </div>
      
      {/* The Actual Slider */}
      <Slider 
        defaultValue={[0]} 
        max={20} // Let them look up to 20 years ahead
        step={1} 
        onValueChange={(val) => onChange(val[0])}
        className="py-4"
      />

      <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase">
        <span>Current (2026)</span>
        <span>Future (2046)</span>
      </div>
    </div>
  )
}