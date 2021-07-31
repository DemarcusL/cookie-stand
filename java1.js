// alert("Loaded with Java Baby!");

//DOM is object on a page. We are creating and minipulating them

//this generic random function will be cutom to what the requirements want
function getRandomNumOfCustomerGivenRange(minimumCustomers, maximumCustomers) { //well we need two things for this function
    return (Math.floor(Math.random() * (maximumCustomers - minimumCustomers + 1)) + minimumCustomers); // Using this math for random numbers
}

//The hours of operation
const openHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

const TableEl = document.getElementById("myTable");
var totalOfTotals = 0;

function CookieStand(locationName, minCustomerPerHour, maxCustomerPerHour, avgCookiePerSale) {
    //these this attr keep everything in this function and object
    //these are the attributes that we've already man being prepped to be set
    this.locationName = locationName;
    this.minCustomerPerHour = minCustomerPerHour;
    this.maxCustomerPerHour = maxCustomerPerHour;
    this.avgCookiePerSale = avgCookiePerSale;
    this.customersEachHour = [];
    this.cookieEachHour = [];
    this.totalDailyCookies = 0;
}



//====================Now lets make a prototype===================//

//one formula instead of multiple in diff objects
CookieStand.prototype.getCookiesSoldPerHour = function () {
    for (let index = 0; index < openHours.length; index++) {
        this.customersEachHour.push(getRandomNumOfCustomerGivenRange(this.minCustomerPerHour, this.maxCustomerPerHour));

    }
}

//we build this prototype in order to run
CookieStand.prototype.calcCookiesEachHour = function () {
    this.getCookiesSoldPerHour();
    for (let i = 0; i < openHours.length; i++) {
        //we are doing a basic equation w/ multiplication to give us back the lowest integer
        const oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiePerSale);
        // console.log(`Adding cookie hr ${oneHour}`);
        this.cookieEachHour.push(oneHour);
        //we use this push back into the array
        this.totalDailyCookies += oneHour;
    }
};

//now lets build a render func
CookieStand.prototype.render = function () {
    this.calcCookiesEachHour();
    const rowEl = document.createElement("tr");
    let rowData = document.createElement("td");
    rowData.textContent = this.locationName;
    rowEl.appendChild(rowData);
    // console.log(this.cookieEachHour)
    for (let i = 0; i < openHours.length; i++) {
        // console.log(rowData)
        rowData = document.createElement("td");
        rowData.textContent = this.cookieEachHour[i];//we set a document write and datacell, which will set in the array
        rowEl.appendChild(rowData);
    }   //we append, we use this to add the row onto the 
    rowData = document.createElement("td");
    rowData.textContent = this.totalDailyCookies;
    rowEl.appendChild(rowData);
    TableEl.appendChild(rowEl);


}

function createHeader() {
    const rowEl = document.createElement("tr");
    let rowData = document.createElement("th");
    rowData.textContent = "Locations";
    rowEl.appendChild(rowData);
    // console.log(this.cookieEachHour)
    for (let i = 0; i < openHours.length; i++) {
        // console.log(rowData)
        rowData = document.createElement("th");
        rowData.textContent = openHours[i];//we set a document write and datacell, which will set in the array
        rowEl.appendChild(rowData);
    }   //we append, we use this to add the row onto the 
    rowData = document.createElement("th");
    //we used strings to set our text in the square
    rowData.textContent = "Daily Location Total: ";
    rowEl.appendChild(rowData);
    TableEl.appendChild(rowEl);


}

function createFooter() {
    let footerRow = document.createElement("tr");
    let footerHeader = document.createElement("th");
    footerHeader.textContent = "Hourly Numbers Per Location";
    footerRow.appendChild(footerHeader);
    let grandTotal = 0;
    for (let i = 0; i < openHours.length; i++) {
        let hourlyTotal = 0;

        for (let h = 0; h < allCookieStands.length; h++) {
            hourlyTotal += allCookieStands[h].cookieEachHour[i];
            grandTotal += allCookieStands[h].cookieEachHour[h];
        }
        let footerHeader = document.createElement("th");
        footerHeader.textContent = hourlyTotal;
        footerRow.appendChild(footerHeader);
    }
    footerHeader = document.createElement("th");
    footerHeader.textContent = grandTotal;
    footerRow.appendChild(footerHeader);
    TableEl.appendChild(footerRow);

}

createHeader();



//we add an event listener tied to what element we attached to the variable myForm
// myForm.addEventListener('submit', submitLocation);
//this event listener should react when we press submit

function submitLocation(evt) {
    evt.preventDefault(); // prevent the default stuff from happening, Kevin example
    // alert("form submit"); sanity checks
    let locname = evt.target.locname.value;
    let locmin = evt.target.locmin.value;
    let locmax = evt.target.locmax.value;
    let locavg = evt.target.locavg.value;
    // do with values (eg. add to array)
    alert(`Thanks for submitting ${locname}, with ${locmin} customers per day, and ${locmax} customers per day with and average of ${locavg}`);

};

// Let's load up an array with instances of cookie stands
let allCookieStands = [
    new CookieStand('seattle', 23, 65, 6.3),
    new CookieStand('tokyo', 3, 24, 1.2),
    new CookieStand('dubai', 11, 38, 3.7),
    new CookieStand('paris', 20, 38, 2.3),
    new CookieStand('lima', 2, 16, 4.6),
];

// Iterate through the array of stands and render each one
for (let index = 0; index < allCookieStands.length; index++) {
    allCookieStands[index].render();

}

createFooter();
