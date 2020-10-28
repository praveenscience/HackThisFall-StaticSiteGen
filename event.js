const generateBody = ev => {
  const { Title, Subtitle, ImageURL, AboutEvent, DateTime } = ev;
  return `          <h1 class="display-4 text-center">${Title}</h1>
          <p><img src="${ImageURL}" alt="${Title}" class="responsive image"></p>
          <p class="lead text-center">${Subtitle}</p>
          <h2>About the Event</h2>
          <p>${AboutEvent}</p>
          <h2>Date &amp; Time</h2>
          <ul>
            <li><strong>Date:</strong> <span>${
              DateTime.split(" ")[0]
            }</span></li>
            <li><strong>Time:</strong> <span>${DateTime.split(" ")[1]} ${
    DateTime.split(" ")[2]
  }</span></li>
          </ul>`;
};

module.exports = generateBody;
