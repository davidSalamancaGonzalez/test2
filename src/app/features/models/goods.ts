
export interface Goods{
  verduras:   Hortaliza[];
  hortalizas: Hortaliza[];
}

export interface Hortaliza {
  id: number;
  name:    string;
  type:      string;
  season: string;
  origin:    string;
  farmerName: string;
  ripeningTime: string;
  pricePerKilo: string;
  image?: string;
}
