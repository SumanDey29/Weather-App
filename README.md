# Weather-App

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Weather App | Suman Dey </title>
  <link rel="stylesheet" type="text/css" href="about.css">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
</head>

<body>
  <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="/index.html"><b>Suman's Weather App</b></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/index.html">Home</a>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Frequently Searched Places
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#" id="kol">KOLKATA</a></li>
              <li><a class="dropdown-item" href="#" id="mum">MUMBAI</a></li>
              <li><a class="dropdown-item" href="#" id="del">DELHI</a></li>
              <li><a class="dropdown-item" href="#" id="chen">CHENNAI</a></li>
              <li><a class="dropdown-item" href="#" id="pun">PUNE</a></li>
              <li><a class="dropdown-item" href="#" id="ban">BANGALORE</a></li>
              <li><a class="dropdown-item" href="#" id="bhu">BHUBANESWAR</a></li>
              <li><a class="dropdown-item" href="#" id="ahm">AHMEDABAD</a></li>
              <li><a class="dropdown-item" href="#" id="lakh">LAKHNOW</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about.html">About</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container">
    <header>
      <h1>About Weather App</h1>
      <p class="tagline">Your reliable weather information provider</p>
    </header>

    <section class="about">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <p class="about-text">Our weather app is designed to provide users with reliable and real-time weather
              information effortlessly. Built using basic HTML, CSS, and JavaScript, coupled with a weather API, it
              delivers accurate updates for cities across the globe. Whether you're planning your day or staying
              informed about weather conditions, our app ensures you have the essential details at your fingertips.</p>

            <h2 class="section-title">Features</h2>
            <ul class="feature-list">
              <li><span>Real-Time Weather Updates:</span> Provides up-to-date weather information for multiple
                locations.</li>
              <li><span>Temperature in Celsius and Fahrenheit:</span> Displays temperature in both Celsius and
                Fahrenheit for user convenience.</li>
              <li><span>Feels Like Temperature:</span> Shows the "feels like" temperature, accounting for factors like
                wind and humidity.</li>
              <li><span>Wind Speed:</span> Reports current wind speed in kilometers per hour (Kph) for each location.
              </li>
              <li><span>Last Updated Timestamp:</span> Indicates when the weather data was last updated for accurate
                information.</li>
              <li><span>Responsive Design:</span> Ensures the app is accessible and functional across various devices
                and screen sizes.</li>
              <li><span>User-Friendly Interface:</span> Simple and intuitive layout for easy navigation and quick access
                to weather data.</li>
              <li><span>Minimalist Design:</span> Emphasizes clarity and essential information without unnecessary
                clutter.</li>
            </ul>

            <h2 class="section-title">Technology Stack</h2>
            <p class="tech-stack">This weather app was built using basic HTML, CSS, and JavaScript. It utilizes a
              weather API to fetch real-time weather data.</p>
            <div class="developer">
              <h2>Meet the Developer</h2>
              <div class="developer-info">
                <div class="developer-details">
                  <p><strong>Suman Dey</strong></p>
                  <a href="https://www.linkedin.com/in/sumandey29/" target="_blank" rel="noopener noreferrer">LinkedIn
                    Profile</a>
                  </p>
                </div>
              </div>
              <div>
              </div>
            </div>
          </div>

    </section>


  </div>
  <script src="./index.js"></script>
</body>

</html>
