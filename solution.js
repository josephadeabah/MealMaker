const menu = {
    _courses: {
      appetizers: [],
      mains: [], 
      desserts: [],
      get appetizersGetter(){
        const appZers = this.appetizers
                ? this.appetizers
                : 'Your menu does not have appetizers'
        return appZers;
      },
      get mainsGetter(){
        const menuMains = this.mains
                      ? this.mains
                      : 'Your menu does not have mains'
        return menuMains;
      },
      get dessertsGetter(){
        const deS = this.desserts 
                    ? this.desserts
                    : 'Your menu does not have desserts'
        return deS;
      },
      set appetizersSetter(newAppetizers){
        Array.isArray(newAppetizers)
        ? this.appetizers = newAppetizers
        : console.log('ERROR: Your new appetizers type must be an array')
      }, 
      set mainsSetter(newMains){
        Array.isArray(newMains)
        ? this.mains = newMains
        : console.log('ERROR: Your new mains type must be an array')
      }, 
      set dessertsSe(newDesserts){
        Array.isArray(newDesserts)
        ? this.desserts = newDesserts
        : console.log('ERROR: Your new desserts type must be an array')
      }
    },
    get courses(){
      return {
        appetizers: this._courses.appetizersGetter,
        mains: this._courses.mainsGetter,
        desserts: this._courses.dessertsGetter
      }
    },
    addDishToCourse(courseName, dishName, dishPrice){
        let dish = {
            name: dishName,
            price: dishPrice
        }
        this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName){
        let dishes = this._courses[courseName];
        return dishes[Math.floor(Math.random() * dishes.length)];
    }, 

    generateRandomMeal(){
        let appetizer = this.getRandomDishFromCourse('appetizers');
        let main = this.getRandomDishFromCourse('mains');
        let dessert = this.getRandomDishFromCourse('desserts');

        return `Your meal has appetizer: ${appetizer.name}, main: ${main.name}, dessert: ${dessert.name} and price of the meal is ${appetizer.price + main.price + dessert.price}`; 
    }
  };

  menu.addDishToCourse('appetizers', 'wine', 50);
  menu.addDishToCourse('appetizers', 'cake', 100);
  menu.addDishToCourse('appetizers', 'yorghurt', 10);
  menu.addDishToCourse('appetizers', 'fanmilk', 10);
  menu.addDishToCourse('appetizers', 'don simon', 10);
  menu.addDishToCourse('mains', 'jollof', 50);
  menu.addDishToCourse('mains', 'fried rice', 70);
  menu.addDishToCourse('mains', 'yellow rice', 70);
  menu.addDishToCourse('mains', 'banku and tilapia', 90);
  menu.addDishToCourse('mains', 'yam and palava sauce', 10);
  menu.addDishToCourse('desserts', 'biscuits', 15);
  menu.addDishToCourse('desserts', 'potato chips', 5);
  menu.addDishToCourse('desserts', 'yam chips', 10);
  menu.addDishToCourse('desserts', 'plantain chips', 10);
  menu.addDishToCourse('desserts', 'meat pie', 20);
  menu.addDishToCourse('desserts', 'spring rolls', 10);

  let meal = menu.generateRandomMeal();
  console.log(meal);

