const fs = require("fs");
const Events = require("./events.json");
const generateEvent = require("./generator");
const genHome = require("./genhome");
console.log("Hello HackThisFall!");
console.log("There are " + Events.length + " events available.");
console.log("Processing home page.");
if (!fs.existsSync("./events")) {
  fs.mkdirSync("events");
}
fs.writeFileSync(`./events/index.html`, genHome(Events));
console.log("Generated home page.");
console.log("Listing all the events.");
Events.forEach(generateEvent);
console.log("Generated pages for " + Events.length + " events.");
