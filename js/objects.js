//Objects

//1st option
    var person = {
        firstName: 'Brian',
        lastName: 'Sy',
        age: 24,
        children: ['child1','child2'],
        address: {
            street: '21 2nd St',
            city: 'Cebu City',
            state: 'Cebu'
        },
        fullName: function(){
            return this.firstName +" "+this.lastName;
        }
    }

    console.log(person.fullName()); //displays fullname of person in console.

//2nd option
    var apple = new Object();
    apple.color = 'red';
    apple.shape = 'round';

    apple.describe = function(){
        return 'An apple is the color '+this.color+' and is the shape '+this.shape;
    }

//Constructor Pattern
    function Fruit(name,color,shape){
        this.name = name;
        this.color = color;
        this.shape = shape;

        this.describe = function(){
            return 'A ' +this.name+ ' is the color '+this.color+ ' and is the shape '+this.shape;
        }
    }

    var apple = new Fruit('apple', 'red', 'round');
    var melon = new Fruit('melon', 'green', 'round');

    console.log(melon.shape); //display round

    console.log(melon.describe());



//Arrays of Object
    var users = [
        {
            name: 'John Doe',
            age: 30
        },
        {
            name: 'Kobe Bryant',
            age: 21
        },
        {
            name: 'Michael Jordan',
            age: 45
        }
    ];
    console.log(users[0].name); //Display John Doe
    console.log(users[1].name); //Display Kobe Bryant
    console.log(users[2].name); //Display Michael Jordan
