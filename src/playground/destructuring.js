// Destructuring Objects in ES6

const person = {
    name: 'Andrew',
    age: 26,
    location: {
        city: "Philadelphia",
        temperature: 86
    }
};

const { name, age } = person;

console.log(`${name} is ${age}.`)

const { city, temperature } = person.location;
if (city && temperature) {
    console.log(`It's ${temperature} in ${city}.`);
}

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { name: publisherName = 'Self-published' } = book.publisher;

console.log(`The publisher name is ${publisherName}`);


// Destructuring Arrays in ES6

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [street, city, state, zip] = address;

console.log(`You are in ${city}, ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [ itemName, ,medium ] = item;

console.log(`A medium ${itemName} costs ${medium}`);
