export const producers = [
  { id: 1, name: "SunRoof Co.", type: "Solar", location: "Rajasthan", capacity: 120, capacityUnit: "kW", price: 4.2, available: 85, rating: 4.8, verified: true, description: "Rooftop solar panels across 200+ homes in Jaipur suburbs.", joined: "2023-01-15" },
  { id: 2, name: "GreenWind Ltd.", type: "Wind", location: "Gujarat", capacity: 500, capacityUnit: "kW", price: 3.8, available: 340, rating: 4.6, verified: true, description: "Offshore wind farm in the Gulf of Kutch.", joined: "2022-08-10" },
  { id: 3, name: "BioEnergy Hub", type: "Biogas", location: "Punjab", capacity: 60, capacityUnit: "kW", price: 5.1, available: 45, rating: 4.3, verified: false, description: "Agricultural waste biogas plant serving local communities.", joined: "2023-05-20" },
  { id: 4, name: "TerraWatts", type: "Solar", location: "Maharashtra", capacity: 200, capacityUnit: "kW", price: 4.0, available: 150, rating: 4.9, verified: true, description: "Utility-scale solar farm near Pune.", joined: "2022-11-03" },
  { id: 5, name: "AirPower Inc.", type: "Wind", location: "Tamil Nadu", capacity: 800, capacityUnit: "kW", price: 3.5, available: 600, rating: 4.7, verified: true, description: "Onshore wind turbines along the Coromandel Coast.", joined: "2021-07-22" },
  { id: 6, name: "Organic Watts", type: "Biogas", location: "Haryana", capacity: 40, capacityUnit: "kW", price: 5.4, available: 30, rating: 4.1, verified: false, description: "Community biogas plant using municipal organic waste.", joined: "2023-09-01" },
  { id: 7, name: "HeliosTech", type: "Solar", location: "Karnataka", capacity: 350, capacityUnit: "kW", price: 3.9, available: 280, rating: 4.7, verified: true, description: "Ground-mounted solar arrays in Bangalore solar park.", joined: "2022-03-15" },
  { id: 8, name: "Cyclone Energy", type: "Wind", location: "Andhra Pradesh", capacity: 1200, capacityUnit: "kW", price: 3.2, available: 900, rating: 4.8, verified: true, description: "Large-scale wind energy from Eastern Ghats wind corridor.", joined: "2021-12-01" },
];

export const trades = [
  { id: "T001", producerId: 1, producerName: "SunRoof Co.", consumer: "DelhiGrid Pvt.", amount: 50, unit: "kWh", pricePerUnit: 4.2, totalValue: 210, timestamp: new Date(Date.now() - 2 * 60 * 1000).toISOString(), status: "completed", type: "Solar" },
  { id: "T002", producerId: 2, producerName: "GreenWind Ltd.", consumer: "MumbaiHome Society", amount: 120, unit: "kWh", pricePerUnit: 3.8, totalValue: 456, timestamp: new Date(Date.now() - 8 * 60 * 1000).toISOString(), status: "completed", type: "Wind" },
  { id: "T003", producerId: 4, producerName: "TerraWatts", consumer: "PuneFactory Ltd.", amount: 200, unit: "kWh", pricePerUnit: 4.0, totalValue: 800, timestamp: new Date(Date.now() - 15 * 60 * 1000).toISOString(), status: "pending", type: "Solar" },
  { id: "T004", producerId: 5, producerName: "AirPower Inc.", consumer: "ChennaiMall Ops", amount: 300, unit: "kWh", pricePerUnit: 3.5, totalValue: 1050, timestamp: new Date(Date.now() - 22 * 60 * 1000).toISOString(), status: "completed", type: "Wind" },
  { id: "T005", producerId: 3, producerName: "BioEnergy Hub", consumer: "AmritsarFarm Coop", amount: 40, unit: "kWh", pricePerUnit: 5.1, totalValue: 204, timestamp: new Date(Date.now() - 35 * 60 * 1000).toISOString(), status: "completed", type: "Biogas" },
  { id: "T006", producerId: 7, producerName: "HeliosTech", consumer: "BangaloreIT Park", amount: 500, unit: "kWh", pricePerUnit: 3.9, totalValue: 1950, timestamp: new Date(Date.now() - 50 * 60 * 1000).toISOString(), status: "completed", type: "Solar" },
];

export const communities = [
  { id: 1, name: "Jaipur Solar Network", type: "Neighborhood Grid", members: 342, region: "Rajasthan", energySaved: "12.4 MWh", co2Offset: "10.1 tons", active: true },
  { id: 2, name: "Punjab Bio Collective", type: "Rural Co-op", members: 128, region: "Punjab", energySaved: "5.2 MWh", co2Offset: "4.2 tons", active: true },
  { id: 3, name: "Gujarat Wind Alliance", type: "Industrial Cluster", members: 56, region: "Gujarat", energySaved: "89.3 MWh", co2Offset: "73.1 tons", active: true },
  { id: 4, name: "Chennai Green Initiative", type: "Neighborhood Grid", members: 215, region: "Tamil Nadu", energySaved: "22.1 MWh", co2Offset: "18.0 tons", active: false },
];

export const stats = {
  totalProducers: 1284,
  totalConsumers: 9472,
  energyTradedToday: 48300,
  co2SavedToday: 32100,
  activeTrades: 37,
  totalRevenue: 218540,
};
