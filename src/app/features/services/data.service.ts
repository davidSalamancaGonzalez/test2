import { Injectable } from '@angular/core';
import { Hortaliza } from '../models/goods';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  get horta(): Hortaliza[] {
    return this.hortalizas;
  }

  deleteProduct(product: string) {
    this.hortalizas = this.hortalizas.filter((horta) => horta.name !== product);
  }

  getProduct(id: any): Hortaliza {
    const horta = this.hortalizas.find((horta) => horta.id == id);
    if(!horta) throw new Error('No existe el producto');
    return horta
  }

  constructor() {}

  hortalizas: Hortaliza[] = [

      {
        "id": 1,
        "name": "Espinacas",
        "type": "Verdura de hoja verde",
        "season": "Invierno-Primavera",
        "origin": "España",
        "farmerName": "Juan Pérez",
        "ripeningTime": "2 días",
        "pricePerKilo": "$2.50",
        "image": "https://biotrendies.com/wp-content/uploads/2015/07/espinaca.jpg"
      },
      {
        "id": 2,
        "name": "Zanahorias",
        "type": "Verdura de raíz",
        "season": "Todo el año",
        "origin": "Francia",
        "farmerName": "María García",
        "ripeningTime": "3 días",
        "pricePerKilo": "$1.80",
        "image": "https://tuecomercadonatural.com/wp-content/uploads/2019/07/Zanahoria-600x600.png"
      },
      {
        "id": 3,
        "name": "Brócoli",
        "type": "Verdura crucífera",
        "season": "Invierno-Primavera",
        "origin": "Italia",
        "farmerName": "Carlos Hernández",
        "ripeningTime": "4 días",
        "pricePerKilo": "$3.00",
        "image": "https://t1.uc.ltmcdn.com/es/posts/3/2/4/cuales_son_los_beneficios_del_brocoli_25423_600.jpg"
      },
      {
        "id": 4,
        "name": "Pimientos",
        "type": "Verdura de fruto",
        "season": "Verano",
        "origin": "México",
        "farmerName": "Rosa Rodríguez",
        "ripeningTime": "5 días",
        "pricePerKilo": "$2.20",
        "image": "https://hortamar.es/wp-content/uploads/pimiento-california-hortamar-1.jpg"
      },
      {
        "id": 5,
        "name": "Calabacín",
        "type": "Verdura de fruto",
        "season": "Verano-Otoño",
        "origin": "España",
        "farmerName": "Antonio Martínez",
        "ripeningTime": "2 días",
        "pricePerKilo": "$1.90",
        "image": "https://comedelahuerta.com/wp-content/uploads/2019/09/CALABACIN-ECOLOGICO-COMEDELAHUERTA-1.jpg"
      },
      {
        "id": 6,
        "name": "Tomates",
        "type": "Hortaliza de fruto",
        "season": "Verano",
        "origin": "España",
        "farmerName": "Juan Pérez",
        "ripeningTime": "3 días",
        "pricePerKilo": "$2.00",
        "image": "https://img.freepik.com/foto-gratis/tomate-rojo-fresco-aislado-blanco_1205-548.jpg?1"
      },
      {
        id: 7,
        name: 'Cebollas',
        type: 'Hortaliza de bulbo',
        season: 'Todo el año',
        origin: 'Holanda',
        image: 'https://mlcvkocrfpoo.i.optimole.com/w:1200/h:1200/q:mauto/rt:fill/g:ce/el:1/f:avif/https://www.ecooperativas.com/wp-content/uploads/2021/10/cebolla-roja-removebg-preview.png',
        farmerName: 'Fernando García',
        ripeningTime: '3 meses',
        pricePerKilo: "1.5"
      },
      {
        id: 8,
        name: 'Patatas',
        type: 'Hortaliza de raíz',
        season: 'Todo el año',
        origin: 'Irlanda',
        image: 'https://www.calfruitos.com/fotos/pr_3402_20171002120744.png',
        farmerName: 'María López',
        ripeningTime: '4 meses',
        pricePerKilo: "0.8"
      },
      {
        id: 9,
        name: 'Pepinos',
        type: 'Hortaliza de fruto',
        season: 'Verano',
        origin: 'España',
        image: 'https://verdecora.es/1217366-medium_default/pepino-ecologico.jpg',
        farmerName: 'Pedro Rodríguez',
        ripeningTime: '2 meses',
        pricePerKilo: "2.2"
      },
      {
        id: 10,
        name: 'Remolacha',
        type: 'Hortaliza de raíz',
        season: 'Invierno-Primavera',
        origin: 'Francia',
        image: 'https://cdn.shopify.com/s/files/1/0064/2714/8335/products/remolacha.png?v=1660912542',
        farmerName: 'Ana Martínez',
        ripeningTime: '5 meses',
        pricePerKilo: "1.3"
      }
  ];

}
