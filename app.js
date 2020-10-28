const Events = require("./events.json");
console.log("Hello HackThisFall!");
console.log("There are " + Events.length + " events available.");
console.log("Listing all the events.");
Events.forEach((ev, idx) => {
  console.log(`Event #${idx + 1}: ${ev.Title}`);
});
