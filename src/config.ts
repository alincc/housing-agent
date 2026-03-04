export const SEARCH_CONFIG = {
  maxPrice: 110000,
  minSqm: 45,
  maxSqm: 80,
  minRooms: 2, 
  maxRooms: 2, 
  minBathrooms: 1,
  maxBathrooms: 1,
  requireClosedKitchen: true,
  areas: [
    // Crangasi and surroundings
    "Crangasi",
    "Calea Crangasi",
    "Bulevardul Constructorilor",
    "Strada Ceahlau",
    "Parcul Crangasi",
    "Giulesti",
    "Calea Giulesti",
    // Bucurestii Noi
    "Bucurestii Noi",
    "Bulevardul Bucurestii Noi",
    "Bazilescu",
    "Pajura",
    "Strada Jiului",
    "Calea Grivitei",
    "Chitila",
    // Aviatiei
    "Aviatiei",
    "Bulevardul Aerogarii",
    "Bulevardul Ficusului",
    "Strada Smaranda Braescu",
    "Strada Bucuresti-Ploiesti",
    "Baneasa",
    "Herastrau",
    "Pipera",
    "Sector 1"
  ],
  priorityYear: 1980
};

export const EMAIL_CONFIG = {
  minListings: 4,
  maxListings: 15
};

export const SCRAPER_URLS = {
  olx: "https://www.olx.ro/imobiliare/apartamente-garsoniere-de-vanzare/bucuresti/",
  imobiliare: "https://www.imobiliare.ro/vanzare-apartamente/bucuresti",
  storia: "https://www.storia.ro/ro/rezultate/apartamente/bucovina/bucuresti/bucuresti?limit=72&market=ALL&areaMin=80&priceMax=340000&by=DEFAULT&direction=DESC&viewType=listing",
  trimbitasu: "https://www.trimbitasu.ro/imobiliare/bucuresti/apartamente-vanzare"
};
  