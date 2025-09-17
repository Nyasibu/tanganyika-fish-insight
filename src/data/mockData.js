// Mock data for Lake Tanganyika fish farms in Kigoma region

export const farms = [
  {
    id: '1',
    name: 'Kigoma Bay Fish Farm',
    farmer: {
      name: 'John Mwanga',
      phone: '+255784123456',
      email: 'john.mwanga@email.com'
    },
    location: {
      name: 'Kigoma Bay',
      coordinates: [29.6281, -4.8781]
    },
    species: ['Tilapia', 'Mgebuka'],
    cages: 8,
    totalProduction: 15000,
    status: 'active'
  },
  {
    id: '2',
    name: 'Ujiji Aquaculture Center',
    farmer: {
      name: 'Maria Kamara',
      phone: '+255754987321',
      email: 'maria.kamara@gmail.com'
    },
    location: {
      name: 'Ujiji',
      coordinates: [29.6739, -4.9200]
    },
    species: ['Tilapia', 'Catfish'],
    cages: 12,
    totalProduction: 22000,
    status: 'active'
  },
  {
    id: '3',
    name: 'Bangwe Fish Enterprise',
    farmer: {
      name: 'Hassan Mbwana',
      phone: '+255763456789'
    },
    location: {
      name: 'Bangwe',
      coordinates: [29.5892, -4.8234]
    },
    species: ['Sardine', 'Catfish'],
    cages: 6,
    totalProduction: 12500,
    status: 'active'
  },
  {
    id: '4',
    name: 'Kibirizi Coastal Farm',
    farmer: {
      name: 'Grace Mfalila',
      phone: '+255712345678',
      email: 'grace.mfalila@yahoo.com'
    },
    location: {
      name: 'Kibirizi',
      coordinates: [29.7123, -4.7892]
    },
    species: ['Tilapia'],
    cages: 4,
    totalProduction: 8000,
    status: 'active'
  },
  {
    id: '5',
    name: 'Mwandiga Fish Project',
    farmer: {
      name: 'Patrick Msigwa',
      phone: '+255723456789'
    },
    location: {
      name: 'Mwandiga',
      coordinates: [29.5567, -4.9445]
    },
    species: ['Catfish', 'Tilapia'],
    cages: 10,
    totalProduction: 18000,
    status: 'active'
  },
  {
    id: '6',
    name: 'Katonga Bay Fisheries',
    farmer: {
      name: 'Sarah Mpanda',
      phone: '+255787654321',
      email: 'sarah.mpanda@email.com'
    },
    location: {
      name: 'Katonga Bay',
      coordinates: [29.6445, -4.8567]
    },
    species: ['Mgebuka', 'Tilapia', 'Catfish'],
    cages: 15,
    totalProduction: 28000,
    status: 'active'
  }
];

// Production data by location
export const productionByLocation = [
  { location: 'Kigoma Bay', production: 15000, farms: 1 },
  { location: 'Ujiji', production: 22000, farms: 1 },
  { location: 'Bangwe', production: 12500, farms: 1 },
  { location: 'Kibirizi', production: 8000, farms: 1 },
  { location: 'Mwandiga', production: 18000, farms: 1 },
  { location: 'Katonga Bay', production: 28000, farms: 1 }
];

// Production data by species
export const productionBySpecies = [
  { species: 'Tilapia', production: 45000, farms: 5 },
  { species: 'Mgebuka', production: 23000, farms: 2 },
  { species: 'Sardine', production: 10500, farms: 1 },
  { species: 'Catfish', production: 24500, farms: 4 }
];

// Monthly production trend
export const monthlyProduction = [
  { month: 'Jan', production: 8500 },
  { month: 'Feb', production: 9200 },
  { month: 'Mar', production: 9800 },
  { month: 'Apr', production: 10200 },
  { month: 'May', production: 9500 },
  { month: 'Jun', production: 10800 },
  { month: 'Jul', production: 11200 },
  { month: 'Aug', production: 10900 },
  { month: 'Sep', production: 11500 },
  { month: 'Oct', production: 10300 },
  { month: 'Nov', production: 9800 },
  { month: 'Dec', production: 11800 }
];

export const dashboardStats = {
  totalFarms: farms.length,
  totalProduction: farms.reduce((sum, farm) => sum + farm.totalProduction, 0),
  totalCages: farms.reduce((sum, farm) => sum + farm.cages, 0),
  activeSpecies: [...new Set(farms.flatMap(farm => farm.species))].length
};