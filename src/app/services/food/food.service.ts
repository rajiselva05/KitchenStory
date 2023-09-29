import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/model/Food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  food!:Food
  getFoodById(id:number):Food{
    return this.getAll().find(food => food.id == id)!;
  }
  getAll():Food[]{
    return[
      {
        id:1,
        name:'Dosa',
        price:100,
        favourite: false,
        stars:4.0,
        offers:'Get 5% offer',
        imageUrl:'/assets/images/food 5.jpg',
        },
        {
          id:2,
          name:'Mutton Briyani',
          price:400,
          favourite: true,
          stars:5,
          offers:'Get 2% offer',
          imageUrl:'/assets/images/food1.jpg',
          },
            {
              id:3,
              name:'Chicken Soup',
              price:250,
              favourite: false,
              stars:3.2,
              offers:'Get 4.5% offer',
              imageUrl:'/assets/images/food3.jpg',
              },
              {
                id:4,
                name:'French Fries',
                price:150,
                favourite: false,
                stars:3.0,
                offers:'Get 6% offer',
                imageUrl:'/assets/images/food-4.jpg',
                },
                {
                  id:5,
                  name:'Ice-cream',
                  price:150,
                  favourite: true,
                  stars:4.5,
                  offers:'Get 7% offer',
                  imageUrl:'/assets/images/food6.jpg',
                  },
                  {
                    id:6,
                    name:'Watermelon Juice',
                    price:150,
                    favourite: false,
                    stars:4.2,
                    offers:'Get 10% offer',
                    imageUrl:'/assets/images/food7.jpg',
                    },
                    {
                      id:7,
                      name:' Cheesy Chicken Burger',
                      price:350,
                      favourite: true,
                      stars:3.9,
                      offers:'Get 15% offer',
                      imageUrl:'/assets/images/food8.jpg',
                      },
                      {
                        id:8,
                        name:'Veg Pizza',
                        price:250,
                        favourite: false,
                        stars:3.8,
                        offers:'Get 10% offer',
                        imageUrl:'/assets/images/food9.jpg',
                        },
                        {
                          id:9,
                          name:'Mutton Fry',
                          price:350,
                          favourite: true,
                          stars:4.1,
                          offers:'Get 9% offer',
                          imageUrl:'/assets/images/food-2.jpg',
                          },
            
          
    ]
  }
}
