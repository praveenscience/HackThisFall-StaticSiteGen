const generateHeader = () => `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>HackThisFall's Events</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
    <style>
      body {font-family: "Open Sans";}
      p img {max-width: 100%;}
    </style>
  </head>
  <body>
    <nav class="navbar navbar-dark bg-dark d-block mb-3">
      <span class="navbar-brand mb-0 h1 d-block text-center">HackThisFall's Events</span>
    </nav>
    <div class="container">
      <div class="row">
        <div class="col-12">`;

const generateFooter = () => `        </div>
      </div>
    </div>
  </body>
</html>`;

module.exports = {
  generateHeader,
  generateFooter
};
