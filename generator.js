const fs = require("fs");
const { generateHeader, generateFooter } = require("./static");
const generateBody = require("./event");

const generateEvent = (ev, idx) => {
  console.log(`Processing Event #${idx + 1}: ${ev.Title}`);
  const finalHTML = generateHeader() + generateBody(ev) + generateFooter();
  if (!fs.existsSync("./events")) {
    fs.mkdirSync("events");
  }
  fs.writeFileSync(`./events/event-${idx + 1}.html`, finalHTML);
  console.log(`Created Event #${idx + 1}: ${ev.Title}`);
};

module.exports = generateEvent;
