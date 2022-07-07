<h1>ACC Riverhacks Project<h1>
  
  <h2>Getting Started:  Accessing the Site</h2>
  <p>After pulling the project from the repo, in the terminal type:  node install</p>
  <p>This will install required dependencies for the project</p>
  <p>Afterwards in the browser address bar type:  localhost:3000</p>

  <h3>Theme:  Increasing Access to Education</h3>

  <h6>Our Goal:  To create an application that simplifes finding access to resources to make college affordable and access to other quality educational resources.</h6>
  
  <h4>Tools Used</h4>
  <ul>
    <li>Backend:  Node & Express</li>
    <li>Frontend:  HTML, JS, EJS, Bootstrap & CSS</li>
  </ul>
  
  <h4>Accessing Data</h4>
  <p>
  Financial aid data is consolidated into a JSON file from different financial aid sites and is accessed on the backend on the Express server.  User data is collected from a form.
  </p>
  
  <h4>Processing Data</h4>
  <p>
    The Express server processes data from the form in a method inside of a GET request handler and sends the filtered data in a response to a results page.
  </p>
  
  <h4>Viewing Data</h4>
  <p>
    Data is rendered with EJS templating to the results page.
  </p>
