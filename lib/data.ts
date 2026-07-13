export interface Car {
  id: number;
  brand: string;
  model: string;
  year: number;
  price: number;
  km: number;
  fuel: 'Nafta' | 'Diesel' | 'Híbrido' | 'Eléctrico';
  transmission: 'Manual' | 'Automática';
  images: string[];
}

export const cars: Car[] = [
  {
    id: 1,
    brand: "BMW",
    model: "M3 Touring (G81)",
    year: 2023,
    price: 95000,
    km: 8000,
    fuel: "Nafta",
    transmission: "Automática",
    images: [
      "/cars/m3.jpg"
    ]
  },
  {
    id: 2,
    brand: "Toyota",
    model: "GR Supra",
    year: 2023,
    price: 78000,
    km: 5000,
    fuel: "Nafta",
    transmission: "Automática",
    images: [
      "/cars/supra.jpg"
    ]
  },
  {
    id: 3,
    brand: "BMW",
    model: "1 Series M",
    year: 2011,
    price: 65000,
    km: 45000,
    fuel: "Nafta",
    transmission: "Manual",
    images: [
      "/cars/1m.jpg"
    ]
  }
];