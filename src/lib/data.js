// lib/data.js

// This creates 50 unique property objects for your dashboard
export const PROPERTIES = Array.from({ length: 50 }).map((_, i) => {
  const types = ["Residential", "Commercial", "Penthouse", "Studio", "Industrial"];
  const selectedType = types[i % types.length];
  
  // Randomizing stats to make the "Play" part interesting
  const basePrice = Math.floor(Math.random() * (1500000 - 250000) + 250000);
  const annualGrowth = (Math.random() * (0.08 - 0.02) + 0.02); // 2% to 8% ROI
  
  return {
    id: i + 1,
    name: `${selectedType} Asset #${100 + i}`,
    type: selectedType,
    price: basePrice,
    roi: annualGrowth,
    sqft: Math.floor(Math.random() * (4500 - 600) + 600),
    beds: Math.floor(Math.random() * 5) + 1,
    image: `https://picsum.photos/seed/${i + 123}/400/300`, // Unique image for each card
    location: i % 2 === 0 ? "Downtown" : "Suburbs",
    featured: i < 5 // First 5 properties marked as featured
  };
});