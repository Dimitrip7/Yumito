import images from './images';


const categories = [
    {
      name: 'Pizza',
      items: [
        {
          id: 1,
          image: images.MargheritaPizza,
          name: 'Margherita Pizza',
          price: '$9.99',
        },
        {
          id: 2,
          image: images.PepperoniPizza,
          name: 'Pepperoni Pizza',
          price: '$10.99',
        },
        {
          id: 3,
          image: images.SupremePizza,
          name: 'Supreme Pizza Deluxe',
          price: '$12.99',
        },
        {
          id: 4,
          image: images.HawaiianPizza,
          name: 'Hawaiian Pizza',
          price: '$11.99',
        },
        {
          id: 5,
          image: images.VegetarianPizza,
          name: 'Vegetarian Pizza',
          price: '$11.99',
        },
        {
          id: 6,
          image: images.BBQChickenPizza,
          name: 'BBQ Chicken Pizza',
          price: '$12.99',
        },
        {
          id: 7,
          image: images.MushroomPizza,
          name: 'Mushroom Pizza',
          price: '$10.99',
        },
        {
          id: 8,
          image: images.MeatPizza,
          name: 'Meat Lover\'s Pizza',
          price: '$13.99',
        },
        {
          id: 9,
          image: images.VegetableDeluxePizza,
          name: 'Vegetable Deluxe Pizza',
          price: '$12.99',
        },
        {
          id: 10,
          image: images.ChickenPizza,
          name: 'Chicken Alfredo Pizza',
          price: '$13.99',
        },
        
       
      ],
    },
    {
      name: 'Pasta',
      items: [
        {
          id: 1,
          image: images.Spaghettibolognese,
          name: 'Spaghetti Bolognese',
          price: '$11.99',
        },
        {
          id: 2,
          image: images.FettuccineAlfredo,
          name: 'Fettuccine Alfredo',
          price: '$12.99',
        },
        {
          id: 3,
          image: images.PenneArabiata,
          name: 'Penne Arrabiata',
          price: '$10.99',
        },
        {
          id: 4,
          image: images.Lasagna,
          name: 'Lasagna Premium',
          price: '$13.99',
        },
        {
          id: 5,
          image: images.Carbonara,
          name: 'Carbonara Premium',
          price: '$11.99',
        },
        {
          id: 6,
          image: images.PestoLinguine,
          name: 'Pesto Linguine Alfredo',
          price: '$12.99',
        },
        {
          id: 7,
          image: images.MacAndCheese,
          name: 'Mac and Cheese',
          price: '$10.99',
        },
        {
          id: 8,
          image: images.Ravioli,
          name: 'Ravioli Premium',
          price: '$13.99',
        },
        {
          id: 9,
          image: images.GarlicShrimpLinguine,
          name: 'Garlic Shrimp Linguine',
          price: '$13.99',
        },
        {
          id: 10,
          image: images.ChickenPestoPasta,
          name: 'Chicken Pesto Pasta',
          price: '$12.99',
        },
     
      ],
    },
    {
      name: 'Burgers',
      items: [
        {
          id: 1,
          image: images.CheeseBurger,
          name: 'Classic Cheeseburger',
          price: '$8.99',
        },
        {
          id: 2,
          image: images.BaconBurger,
          name: 'BBQ Bacon Burger',
          price: '$9.99',
        },
        {
          id: 3,
          image: images.MushRoomBurger,
          name: 'Mushroom Burger',
          price: '$10.99',
        },
        {
          id: 4,
          image: images.JalepanoBurger,
          name: 'Spicy Jalapeno Burger',
          price: '$9.99',
        },
        {
          id: 5,
          image: images.TurkeyBurger,
          name: 'Turkey Burger Supreme',
          price: '$9.99',
        },
        {
          id: 6,
          image: images.VeganBurger,
          name: 'Veggie Burger Classic',
          price: '$8.99',
        },
        {
          id: 7,
          image: images.BaconAvocado,
          name: 'Bacon Avocado Burger',
          price: '$10.99',
        },
        {
          id: 8,
          image: images.DoubleCheese,
          name: 'Double Cheeseburger',
          price: '$11.99',
        },
        {
          id: 9,
          image: images.AvocadoSwiss,
          name: 'Avocado Swiss Burger',
          price: '$10.99',
        },
        {
          id: 10,
          image: images.MushTuffle,
          name: 'Truffle Burger',
          price: '$11.99',
        },
       
      ],
    },
    {
      name: 'Pancakes',
      items: [
        {
          id: 1,
          image: images.blueberrypancakes,
          name: 'Blueberry Pancakes',
          price: '$7.99',
        },
        {
          id: 2,
          image: images.chocolatechip,
          name: 'Chocolate Pancakes',
          price: '$7.99',
        },
        {
          id: 3,
          image: images.bananapancakes,
          name: 'Banana Pancakes',
          price: '$7.99',
        },
        {
          id: 4,
          image: images.strawberrypancakes,
          name: 'Strawberry Pancakes',
          price: '$7.99',
        },
        {
          id: 5,
          image: images.cinamonpancakes,
          name: 'Cinnamon Pancakes',
          price: '$7.99',
        },
        {
          id: 6,
          image: images.nutellapancakes,
          name: 'Nutella Pancakes',
          price: '$8.99',
        },
        {
          id: 7,
          image: images.peanutbutterpancakes,
          name: 'Peanut Butter Pancakes',
          price: '$8.99',
        },
        {
          id: 8,
          image: images.applecaramelpancakes,
          name: 'Caramel Pancakes',
          price: '$9.99',
        },
        {
          id: 9,
          image: images.redvelvetpancake,
          name: 'Red Velvet Pancakes',
          price: '$9.99',
        },
        {
          id: 10,
          image: images.peanutbutterbanana,
          name: 'Banana Pancakes',
          price: '$9.99',
        },
      ],
    },
  ];

  export default categories;