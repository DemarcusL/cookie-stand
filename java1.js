// alert("Loaded with Java Baby!");

//DOM is object on a page. We are creating and minipulating them

//this generic random function will be cutom to what the requirements want
function getRandomNumOfCustomerGivenRange(minimumCustomers, maximumCustomers) { //well we need two things for this function
    return (Math.floor(Math.random() * (maximumCustomers - minimumCustomers + 1)) + minimumCustomers); // Using this math for random numbers
}

//The hours of operation
const openHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let seattleStore = // define object literal
{   //define props
    minimumCustomers: 23,//data provided
    maximumCustomers: 65,//data provided
    adverageCookieSale: 6.3,//data provided
    customersPerHour: [],// this needs to be array to be listed as many results
    cookiesSoldPerHour: [],// this needs to be an array
    totalDailyCookies: 0,
    //deteremine hours open 6am - 8pm, how many customers to expect

    //this is a method cause it is in a object box
    getCustomerPerHour: function () {// we need a function for this

        for (let index = 0; index < openHours.length; index++) {
            this.customersPerHour.push(getRandomNumOfCustomerGivenRange(this.minimumCustomers, this.maximumCustomers));

        }
        console.log(`The min value is ${this.minimumCustomers} the max value is ${this.maximumCustomers}`);

    },

    //We are writting the functions now. We havent CALLED THE FUNCTION them yet by not writting a paran
    //still a method
    getCookiesSoldPerHour: function() {
        totalDailyCookies = 0;// set to 0 to start off
        this.getCustomerPerHour();
        for (let index = 0; index < this.customersPerHour.length; index++) {
            let dailyCookies = Math.floor(this.customersPerHour[index] * this.adverageCookieSale);

            this.cookiesSoldPerHour.push(dailyCookies);

            this.totalDailyCookies+=dailyCookies;
        }
    },

    //Used to get the data generated to print to the sales html from Kev's walkthrough
    render() {
        this.getCookiesSoldPerHour();
        const unorderedList = document.getElementById('seattle');// this is id'd in the html
        for (let i = 0; i < openHours.length; i++) //this will keep iterating until the hours are met
        {
            const listItem = document.createElement('li'); //make listed items
            listItem.textContent = openHours[i] + ': ' + this.cookiesSoldPerHour[i] + ' cookies'; 
            unorderedList.appendChild(listItem);
        }
        const listItem = document.createElement('li');
        listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
        unorderedList.appendChild(listItem);
    }

}

let tokyoStore = // define object literal
{   //define props
    minimumCustomers: 23,//data provided
    maximumCustomers: 65,//data provided
    adverageCookieSale: 6.3,//data provided
    customersPerHour: [],// this needs to be array to be listed as many results
    cookiesSoldPerHour: [],// this needs to be an array
    totalDailyCookies: 0,
    //deteremine hours open 6am - 8pm, how many customers to expect

    //this is a method cause it is in a object box
    getCustomerPerHour: function () {// we need a function for this

        for (let index = 0; index < openHours.length; index++) {
            this.customersPerHour.push(getRandomNumOfCustomerGivenRange(this.minimumCustomers, this.maximumCustomers));

        }
        console.log(`The min value is ${this.minimumCustomers} the max value is ${this.maximumCustomers}`);

    },

    //We are writting the functions now. We havent CALLED THE FUNCTION them yet by not writting a paran
    //still a method
    getCookiesSoldPerHour: function() {
        totalDailyCookies = 0;// set to 0 to start off
        this.getCustomerPerHour();
        for (let index = 0; index < this.customersPerHour.length; index++) {
            let dailyCookies = Math.floor(this.customersPerHour[index] * this.adverageCookieSale);

            this.cookiesSoldPerHour.push(dailyCookies);

            this.totalDailyCookies+=dailyCookies;
        }
    },

    //Used to get the data generated to print to the sales html from Kev's walkthrough
    render() {
        this.getCookiesSoldPerHour();
        const unorderedList = document.getElementById('tokyo');// this is id'd in the html
        for (let i = 0; i < openHours.length; i++) //this will keep iterating until the hours are met
        {
            const listItem = document.createElement('li'); //make listed items
            listItem.textContent = openHours[i] + ': ' + this.cookiesSoldPerHour[i] + ' cookies'; 
            unorderedList.appendChild(listItem);
        }
        const listItem = document.createElement('li');
        listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
        unorderedList.appendChild(listItem);
    }

}

let dubaiStore = // define object literal
{   //define props
    minimumCustomers: 23,//data provided
    maximumCustomers: 65,//data provided
    adverageCookieSale: 6.3,//data provided
    customersPerHour: [],// this needs to be array to be listed as many results
    cookiesSoldPerHour: [],// this needs to be an array
    totalDailyCookies: 0,
    //deteremine hours open 6am - 8pm, how many customers to expect

    //this is a method cause it is in a object box
    getCustomerPerHour: function () {// we need a function for this

        for (let index = 0; index < openHours.length; index++) {
            this.customersPerHour.push(getRandomNumOfCustomerGivenRange(this.minimumCustomers, this.maximumCustomers));

        }
        console.log(`The min value is ${this.minimumCustomers} the max value is ${this.maximumCustomers}`);

    },

    //We are writting the functions now. We havent CALLED THE FUNCTION them yet by not writting a paran
    //still a method
    getCookiesSoldPerHour: function() {
        totalDailyCookies = 0;// set to 0 to start off
        this.getCustomerPerHour();
        for (let index = 0; index < this.customersPerHour.length; index++) {
            let dailyCookies = Math.floor(this.customersPerHour[index] * this.adverageCookieSale);

            this.cookiesSoldPerHour.push(dailyCookies);

            this.totalDailyCookies+=dailyCookies;
        }
    },

    //Used to get the data generated to print to the sales html from Kev's walkthrough
    render() {
        this.getCookiesSoldPerHour();
        const unorderedList = document.getElementById('dubai');// this is id'd in the html
        for (let i = 0; i < openHours.length; i++) //this will keep iterating until the hours are met
        {
            const listItem = document.createElement('li'); //make listed items
            listItem.textContent = openHours[i] + ': ' + this.cookiesSoldPerHour[i] + ' cookies'; 
            unorderedList.appendChild(listItem);
        }
        const listItem = document.createElement('li');
        listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
        unorderedList.appendChild(listItem);
    }

}

let parisStore = // define object literal
{   //define props
    minimumCustomers: 23,//data provided
    maximumCustomers: 65,//data provided
    adverageCookieSale: 6.3,//data provided
    customersPerHour: [],// this needs to be array to be listed as many results
    cookiesSoldPerHour: [],// this needs to be an array
    totalDailyCookies: 0,
    //deteremine hours open 6am - 8pm, how many customers to expect

    //this is a method cause it is in a object box
    getCustomerPerHour: function () {// we need a function for this

        for (let index = 0; index < openHours.length; index++) {
            this.customersPerHour.push(getRandomNumOfCustomerGivenRange(this.minimumCustomers, this.maximumCustomers));

        }
        console.log(`The min value is ${this.minimumCustomers} the max value is ${this.maximumCustomers}`);

    },

    //We are writting the functions now. We havent CALLED THE FUNCTION them yet by not writting a paran
    //still a method
    getCookiesSoldPerHour: function() {
        totalDailyCookies = 0;// set to 0 to start off
        this.getCustomerPerHour();
        for (let index = 0; index < this.customersPerHour.length; index++) {
            let dailyCookies = Math.floor(this.customersPerHour[index] * this.adverageCookieSale);

            this.cookiesSoldPerHour.push(dailyCookies);

            this.totalDailyCookies+=dailyCookies;
        }
    },

    //Used to get the data generated to print to the sales html from Kev's walkthrough
    render() {
        this.getCookiesSoldPerHour();
        const unorderedList = document.getElementById('paris');// this is id'd in the html
        for (let i = 0; i < openHours.length; i++) //this will keep iterating until the hours are met
        {
            const listItem = document.createElement('li'); //make listed items
            listItem.textContent = openHours[i] + ': ' + this.cookiesSoldPerHour[i] + ' cookies'; 
            unorderedList.appendChild(listItem);
        }
        const listItem = document.createElement('li');
        listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
        unorderedList.appendChild(listItem);
    }

}

let limaStore = // define object literal
{   //define props
    minimumCustomers: 23,//data provided
    maximumCustomers: 65,//data provided
    adverageCookieSale: 6.3,//data provided
    customersPerHour: [],// this needs to be array to be listed as many results
    cookiesSoldPerHour: [],// this needs to be an array
    totalDailyCookies: 0,
    //deteremine hours open 6am - 8pm, how many customers to expect

    //this is a method cause it is in a object box
    getCustomerPerHour: function () {// we need a function for this

        for (let index = 0; index < openHours.length; index++) {
            this.customersPerHour.push(getRandomNumOfCustomerGivenRange(this.minimumCustomers, this.maximumCustomers));

        }
        console.log(`The min value is ${this.minimumCustomers} the max value is ${this.maximumCustomers}`);

    },

    //We are writting the functions now. We havent CALLED THE FUNCTION them yet by not writting a paran
    //still a method
    getCookiesSoldPerHour: function() {
        totalDailyCookies = 0;// set to 0 to start off
        this.getCustomerPerHour();
        for (let index = 0; index < this.customersPerHour.length; index++) {
            let dailyCookies = Math.floor(this.customersPerHour[index] * this.adverageCookieSale);

            this.cookiesSoldPerHour.push(dailyCookies);

            this.totalDailyCookies+=dailyCookies;
        }
    },

    //Used to get the data generated to print to the sales html from Kev's walkthrough
    render() {
        this.getCookiesSoldPerHour();
        const unorderedList = document.getElementById('lima');// this is id'd in the html
        for (let i = 0; i < openHours.length; i++) //this will keep iterating until the hours are met
        {
            const listItem = document.createElement('li'); //make listed items
            listItem.textContent = openHours[i] + ': ' + this.cookiesSoldPerHour[i] + ' cookies'; 
            unorderedList.appendChild(listItem);
        }
        const listItem = document.createElement('li');
        listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
        unorderedList.appendChild(listItem);
    }

}

function tableFunction(){
    let table = document.getElementById("myTable");
    let row = table.insertRow();
    let cell1 = row.insertCell();
    let cell2 = row.insertCell();
    let cell3 = row.insertCell();
    let cell4 = row.insertCell();
    let cell5 = row.insertCell();
    let cell6 = row.insertCell();
    let cell7 = row.insertCell();
    let cell8 = row.insertCell();
    let cell9 = row.insertCell();
    let cell10 = row.insertCell();
    let cell11= row.insertCell();
    let cell12= row.insertCell();
    let cell13= row.insertCell();
    let cell14= row.insertCell();
    cell2.innerHTML = "#";
    cell3.innerHTML = "#";
    cell4.innerHTML = "#";
    cell5.innerHTML = "#";
} 



// let btnGet = document.querySelector('button');
// let myTable = document.querySelector('#table');

// btnGet.
//we failed to call the functions before. must do this, calling it out the object
seattleStore.render();
tokyoStore.render();
dubaiStore.render();
parisStore.render();
limaStore.render();
tableFunction();