<h1>ACC Riverhacks Project<h1>

  <h2>Theme:  Increasing Access to Education</h2>

  <h6>Our Goal:  To create an application that simplifes finding access to resources to make college affordable and access to other quality educational resources.</h6>
  
  <h6>Tools Used</h6>
  <ul>
    <li>Backend:  Node & Express</li>
    <li>Frontend:  HTML, JS, EJS, Bootstrap & CSS</li>
  </ul>
  
  <h6>Accessing Data</h6>
  <p>
  Financial aid data is consolidated into a JSON file from different financial aid sites and is accessed on the backend on the Express server.  User data is collected from a form.
  </p>
  
  <h6>Processing Data</h6>
  <p>
    The Express server processes data from the form in a method inside of a GET request handler and sends the filtered data in a response to a results page.
  </p>
  
  <h6>Viewing Data</h6>
  <p>
    Data is rendered with EJS templating to the results page.
  </p>
