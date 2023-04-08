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


  trucks : Trucks[] = [

    {
      "image": "https://example.com/truck1.jpg",
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
      "image": "https://example.com/truck2.jpg",
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
      "image": "https://example.com/truck3.jpg",
      "brand": "Mercedes-Benz",
      "model": "Actros",
      "power_in_cv": 650,
      "max_weight_supported_in_kg": 35000,
      "year_of_manufacture": 2018,
      "year_of_registration": 2019,
      "location": "Valencia",
      "driver_owner": "Maria Gomez"
    },
  ]
}
