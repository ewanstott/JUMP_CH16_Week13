const rootRef = document.getElementById("root");

const btnRef = document.getElementById("getLocation");

btnRef.addEventListener("click", (e) => {
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  //get location once
  navigator.geolocation.getCurrentPosition(success, error, options);

  //keep getting location
  // navigator.geolocation.watchPosition(success, error);

  function success(data) {
    console.log(data);

    const { longitude, latitude } = data.coords;
    console.log(data);
    rootRef.innerHTML = `<h1>Your location is: </h1>
                          <p>${longitude}, ${latitude}</p>
                          <a href="https://www.google.com/maps/place/${latitude},${longitude}">See on Google Maps</a>`;
  }

  function error(err) {
    console.log(err);
    rootRef.innerHTML = err.message;
  }
});
