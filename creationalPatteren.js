
// // //first implement withourt singleton pattern
// class counter{
//     constructor(){
//         this.count = 0;
//     }
//     increment(){
//         this.count++;
//     }
//     getCount(){
//         return this.count;
//     }
// }


// const counter1 = new counter();
// console.log(counter1.getCount()); 
// counter1.increment();
// console.log(counter1.getCount()); 


// const counter2 = new counter();
// console.log(counter2.getCount()); 
// counter2.increment();
// console.log(counter2.getCount());

// //singleton pattern 

// class SingletonCounter {
//     constructor() {
//         if (!SingletonCounter.instance) {
//             this.count = 0;
//             SingletonCounter.instance = this;
//         }
//         return SingletonCounter.instance;
//     }

//     increment() {
//         this.count++;
//     }

//     getCount() {
//         return this.count;
//     }
// }

// const singletonCounter1 = new SingletonCounter();
// console.log(singletonCounter1.getCount()); 
// singletonCounter1.increment();
// console.log(singletonCounter1.getCount()); 

// const singletonCounter2 = new SingletonCounter();
// console.log(singletonCounter2.getCount());  
// singletonCounter2.increment();
// console.log(singletonCounter1.getCount()); 

//  -------------------------------------------------------------------------------------------------------------------


//2-without prototype pattern

// class Document {
//     constructor(header, footer, pages, text) {
//         this.header = header;
//         this.footer = footer;
//         this.pages = pages;
//         this.text = text;
//     }
//     print(){
//         console.log(`Header: ${this.header}`);
//         console.log(`Footer: ${this.footer}`);
//         console.log(`Pages: ${this.pages}`);
//         console.log(`Text: ${this.text}`);
//     }
// }

// const doc1 = new Document("Header 1", "Footer 1", 10, "This is the text of the document.");
// const doc2 = new Document("Header 2", "Footer 2", 15, "This is the text of another document.");
// const doc3=new Document("Header 3", "Footer 3", 20, "This is the text of a third document.");

// doc1.print();
// doc2.print();
// doc3.print();   

// // with prototype pattern
// class DocumentPrototype {
//     constructor(header, footer, pages, text) {
//         this.header = header;
//         this.footer = footer;
//         this.pages = pages;
//         this.text = text;
//     }

//     clone() {
//         return new DocumentPrototype(this.header, this.footer, this.pages, this.text);
//     }

//     print() {
//         console.log(`Header: ${this.header}`);
//         console.log(`Footer: ${this.footer}`);
//         console.log(`Pages: ${this.pages}`);
//         console.log(`Text: ${this.text}`);
//     }
// }

// const docPrototype = new DocumentPrototype("Header 1", "Footer 1", 10, "This is the text of the document.");

// const doc4 = docPrototype.clone();  doc4.text = "This is the text of another document."; doc4.header = "Header 2"; doc4.footer = "Footer 2"; doc4.pages = 15;
// const doc5 = docPrototype.clone();  doc5.text = "This is the text of a third document."; doc5.header = "Header 3"; doc5.footer = "Footer 3"; doc5.pages = 20;

// doc4.print();
// doc5.print();







//--------------------------------------------------------------------------------------------------------------------

// 3- Create a PizzaBuilder , The definition of pizza is hidden from the customers . using builder pattern


class Pizza {
  constructor() {
    this.size      = "Medium";  
    this.crust     = "Thin";   
    this.sauce     = "Tomato";  
    this.toppings  = [];
  }

  describe() {
    console.log(
      ` Pizza: ${this.size} | ${this.crust} crust | ${this.sauce} sauce | Toppings: ${this.toppings.join(", ") || "none"}`
    );
  }
}


class PizzaBuilder {
  constructor() {
    this.pizza = new Pizza(); 
  }

  
  setSize(size)   { this.pizza.size  = size;  return this; }
  setCrust(crust) { this.pizza.crust = crust; return this; }
  setSauce(sauce) { this.pizza.sauce = sauce; return this; }
  addTopping(top) { this.pizza.toppings.push(top); return this; }

  build() {
    return this.pizza; 
  }
}

const pizza1 = new PizzaBuilder()
  .setSize("Large")
  .setCrust("Thin")
  .setSauce("Tomato")
  .addTopping("Cheese")
  .addTopping("Mushrooms")
  .build();


const pizza2 = new PizzaBuilder()
  .setSize("Small")
  .setSauce("BBQ")
  .build();


pizza1.describe();
pizza2.describe();

