const Events = require("./events.json");
const generateEvent = require("./generator");
console.log("Hello HackThisFall!");
console.log("There are " + Events.length + " events available.");
console.log("Listing all the events.");
Events.forEach(generateEvent);
console.log("Generated pages for " + Events.length + " events.");
