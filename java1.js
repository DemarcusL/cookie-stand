// alert("Loaded with Java Baby!");

//this generic random function will be cutom to what the requirements want
function getRandomNumOfCustomerGivenRange(minimumCustomers, maximumCustomers) {
    return (Math.floor(Math.random() * (maximumCustomers - minimumCustomers + 1)) + minimumCustomers); //we need to start at 0 for the minimum
}

const openHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let seattleStore = // define object literal
{   //define props
    minimumCustomers: 23,
    maximumCustomers: 65,
    adverageCookieSale: 6.3,
    customersPerHour: [],// this needs to be array to be listed as many results
    cookiesSoldPerHour: [],
    totalDailyCookies: 0,
    //deteremine hours open 6am - 8pm, how many customers to expect

    //this is a method cause it is in a object box
    getRandomNumOfCustomerGivenRange: function () {

        for (let index = 0; index < openHours.length; index++) {
            this.customersPerHour.push(getRandomNumOfCustomerGivenRange(this.minimumCustomers, this.maximumCustomers));

        }
        console.log(`The min value is ${this.minimumCustomers} the max value is ${this.maximumCustomers}`);

    },

    //We are writting the functions now. We havent CALLED THE FUNCTION them yet by not writting a paran
    getCookiesSoldPerHour: function() {
        totalDailyCookies = 0;
        this.getCustomerPerHour();
        for (let index = 0; index < this.customersPerHour.length; index++) {
            let dailyCookies = Math.floor(this.customersPerHour[index] * this.avgCookieSale);

            this.cookiesSoldPerHour.push(dailyCookies);

            this.totalDailyCookies+=dailyCookies;
         }
    },

    render() {
        this.getCookiesSoldPerHour();
        const unorderedList = document.getElementById('seattle');
        for (let i = 0; i < biznessHours.length; i++) 
        {
            const listItem = document.createElement('li');
            // 6am: 16 cookies
            listItem.textContent = biznessHours[i] + ': ' + this.cookiesSoldPerHour[i] + ' cookies';
            unorderedList.appendChild(listItem);
        }
        const listItem = document.createElement('li');
        listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
        unorderedList.appendChild(listItem);
    }


}

let tokyoStore = // define object literal
{   //define props
    minimumCustomers: 3,
    maximumCustomers: 24,
    adverageCookieSale: 1.2,
    customersPerHour: [],
    cookiesSoldPerHour: [],
    customersPerHour() {
        return Math.floor(Math.random() * (this.maximumCustomers - this.minimumCustomers) + this.minimumCustomers);
    },
    //this is a method cause it is in a object box
    getRandomNumOfCustomerGivenRange: function () {

        for (let index = 0; index < openHours.length; index++) {
            this.customersPerHour.push(getRandomNumOfCustomerGivenRange(this.minimumCustomers, this.maximumCustomers));

        }
        console.log(`The min value is ${this.minimumCustomers} the max value is ${this.maximumCustomers}`);

    },

    //We are writting the functions now. We havent CALLED THE FUNCTION them yet by not writting a paran
    getCookiesSoldPerHour: function() {
        totalDailyCookies = 0;
        this.getCustomerPerHour();
        for (let index = 0; index < this.customersPerHour.length; index++) {
            let dailyCookies = Math.floor(this.customersPerHour[index] * this.avgCookieSale);

            this.cookiesSoldPerHour.push(dailyCookies);

            this.totalDailyCookies+=dailyCookies;
         }
    },

    render() {
        this.getCookiesSoldPerHour();
        const unorderedList = document.getElementById('tokyo');
        for (let i = 0; i < biznessHours.length; i++) 
        {
            const listItem = document.createElement('li');
            // 6am: 16 cookies
            listItem.textContent = biznessHours[i] + ': ' + this.cookiesSoldPerHour[i] + ' cookies';
            unorderedList.appendChild(listItem);
        }
        const listItem = document.createElement('li');
        listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
        unorderedList.appendChild(listItem);
    }
}

let dubaiStore = // define object literal
{   //define props
    minimumCustomers: 11,
    maximumCustomers: 38,
    adverageCookieSale: 3.7,
    customersPerHour: [],
    cookiesSoldPerHour: [],
    customersPerHour() {
        return Math.floor(Math.random() * (this.maximumCustomers - this.minimumCustomers) + this.minimumCustomers);
    },
    //this is a method cause it is in a object box
    getRandomNumOfCustomerGivenRange: function () {

        for (let index = 0; index < openHours.length; index++) {
            this.customersPerHour.push(getRandomNumOfCustomerGivenRange(this.minimumCustomers, this.maximumCustomers));

        }
        console.log(`The min value is ${this.minimumCustomers} the max value is ${this.maximumCustomers}`);

    },

    //We are writting the functions now. We havent CALLED THE FUNCTION them yet by not writting a paran
    getCookiesSoldPerHour: function() {
        totalDailyCookies = 0;
        this.getCustomerPerHour();
        for (let index = 0; index < this.customersPerHour.length; index++) {
            let dailyCookies = Math.floor(this.customersPerHour[index] * this.avgCookieSale);

            this.cookiesSoldPerHour.push(dailyCookies);

            this.totalDailyCookies+=dailyCookies;
         }
    },

    render() {
        this.getCookiesSoldPerHour();
        const unorderedList = document.getElementById('dubai');
        for (let i = 0; i < biznessHours.length; i++) 
        {
            const listItem = document.createElement('li');
            // 6am: 16 cookies
            listItem.textContent = biznessHours[i] + ': ' + this.cookiesSoldPerHour[i] + ' cookies';
            unorderedList.appendChild(listItem);
        }
        const listItem = document.createElement('li');
        listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
        unorderedList.appendChild(listItem);
    }
}

let parisStore = // define object literal
{   //define props
    minimumCustomers: 20,
    maximumCustomers: 38,
    adverageCookieSale: 2.3,
    customersPerHour: [],
    cookiesSoldPerHour: [],
    customersPerHour: [],
    cookiesSoldPerHour: [],
    customersPerHour() {
        return Math.floor(Math.random() * (this.maximumCustomers - this.minimumCustomers) + this.minimumCustomers);
    },
    //this is a method cause it is in a object box
    getRandomNumOfCustomerGivenRange: function () {

        for (let index = 0; index < openHours.length; index++) {
            this.customersPerHour.push(getRandomNumOfCustomerGivenRange(this.minimumCustomers, this.maximumCustomers));

        }
        console.log(`The min value is ${this.minimumCustomers} the max value is ${this.maximumCustomers}`);

    },

    //We are writting the functions now. We havent CALLED THE FUNCTION them yet by not writting a paran
    getCookiesSoldPerHour: function() {
        totalDailyCookies = 0;
        this.getCustomerPerHour();
        for (let index = 0; index < this.customersPerHour.length; index++) {
            let dailyCookies = Math.floor(this.customersPerHour[index] * this.avgCookieSale);

            this.cookiesSoldPerHour.push(dailyCookies);

            this.totalDailyCookies+=dailyCookies;
         }
    },

    render() {
        this.getCookiesSoldPerHour();
        const unorderedList = document.getElementById('paris');
        for (let i = 0; i < biznessHours.length; i++) 
        {
            const listItem = document.createElement('li');
            // 6am: 16 cookies
            listItem.textContent = biznessHours[i] + ': ' + this.cookiesSoldPerHour[i] + ' cookies';
            unorderedList.appendChild(listItem);
        }
        const listItem = document.createElement('li');
        listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
        unorderedList.appendChild(listItem);
    }
}

let limaStore = // define object literal
{   //define props
    minimumCustomers: 2,
    maximumCustomers: 16,
    adverageCookieSale: 4.6,
    customersPerHour: [],
    cookiesSoldPerHour: [],
    customersPerHour() {
        return Math.floor(Math.random() * (this.maximumCustomers - this.minimumCustomers) + this.minimumCustomers);
    },
    //this is a method cause it is in a object box
    getRandomNumOfCustomerGivenRange: function () {

        for (let index = 0; index < openHours.length; index++) {
            this.customersPerHour.push(getRandomNumOfCustomerGivenRange(this.minimumCustomers, this.maximumCustomers));

        }
        console.log(`The min value is ${this.minimumCustomers} the max value is ${this.maximumCustomers}`);

    },

    //We are writting the functions now. We havent CALLED THE FUNCTION them yet by not writting a paran
    getCookiesSoldPerHour: function() {
        totalDailyCookies = 0;
        this.getCustomerPerHour();
        for (let index = 0; index < this.customersPerHour.length; index++) {
            let dailyCookies = Math.floor(this.customersPerHour[index] * this.avgCookieSale);

            this.cookiesSoldPerHour.push(dailyCookies);

            this.totalDailyCookies+=dailyCookies;
         }
    },

    render() {
        this.getCookiesSoldPerHour();
        const unorderedList = document.getElementById('lima');
        for (let i = 0; i < biznessHours.length; i++) 
        {
            const listItem = document.createElement('li');
            // 6am: 16 cookies
            listItem.textContent = biznessHours[i] + ': ' + this.cookiesSoldPerHour[i] + ' cookies';
            unorderedList.appendChild(listItem);
        }
        const listItem = document.createElement('li');
        listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
        unorderedList.appendChild(listItem);
    }
}
