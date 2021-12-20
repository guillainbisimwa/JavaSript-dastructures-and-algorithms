class AvailablBooks {
    constructor(title, author, isbn, numCopies){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.numCopies = numCopies;
    }

    getAvailability(){
        if(this.numCopies === 0) return "out of stock";
        else if(this.numCopies < 10) return "low stock";
        else return "In stock";
    }

    sell(numSold){
        this.numCopies -= numSold;
    }

    restock(numCopies = 5){
        this.numCopies += numCopies;
    }
    
}

const books = new AvailablBooks("Guy of", "Paul", "ISS19", 10 );

console.log(books.getAvailability());
books.sell(1)
console.log(books.getAvailability());
books.sell(9);
console.log(books.getAvailability());
books.restock();
console.log(books.getAvailability());

