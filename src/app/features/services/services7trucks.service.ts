import { Injectable } from '@angular/core';
import { Trucks } from '../models/trucks';

@Injectable({
  providedIn: 'root'
})
export class Services7trucksService {

  constructor() { }

  getTrucks() : Trucks[] {
    return this.trucks
  }

  getProduct(id: any): Trucks {
    const truck = this.trucks.find((truck) => truck.id == id);
    if(!truck) throw new Error('No existe el producto');
    return truck
  }

  trucks : Trucks[] = [

    {
      "truck" : true,
      "id": 55,
      "image": "https://assets.volvo.com/is/image/VolvoInformationTechnologyAB/1860x1050-ontheroad-trucks-volvotrucks?qlt=82&wid=1024&ts=1614234690483&dpr=off&fit=constrain",
      "brand": "Volvo",
      "model": "FH16",
      "power_in_cv": 750,
      "max_weight_supported_in_kg": 45000,
      "year_of_manufacture": 2020,
      "year_of_registration": 2021,
      "location": "Madrid",
      "driver_owner": "Juan Perez"
    },
    {
      "truck" : true,
      "id":56,
      "image": "https://www.super-hobby.es/zdjecia/8/8/2/37711_ita3952-2.jpeg",
      "brand": "Scania",
      "model": "S730",
      "power_in_cv": 730,
      "max_weight_supported_in_kg": 40000,
      "year_of_manufacture": 2019,
      "year_of_registration": 2020,
      "location": "Barcelona",
      "driver_owner": "Pedro Sanchez"
    },
    {
      "truck" : true,
      "id": 57,
      "image": "https://www.camionactualidad.es/media/k2/items/cache/ec9e5d4418cddeb916f54861fa51abb5_L.jpg",
      "brand": "Mercedes-Benz",
      "model": "Actros",
      "power_in_cv": 650,
      "max_weight_supported_in_kg": 35000,
      "year_of_manufacture": 2018,
      "year_of_registration": 2019,
      "location": "Valencia",
      "driver_owner": "Maria Gomez"
    },
    {
      "truck" : true,
      "id": 58,
      "image": "https://comatrasa.es/wp-content/uploads/2022/02/man-tgx.png",
      "brand": "MAN",
      "model": "TGX",
      "power_in_cv": 680,
      "max_weight_supported_in_kg": 42000,
      "year_of_manufacture": 2022,
      "year_of_registration": 2022,
      "location": "Sevilla",
      "driver_owner": "Antonio Fernandez"
    }
  ]
}
