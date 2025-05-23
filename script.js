function showPage() { // \(^o^)/ !!
  // The line below gets the element ID of "page1" !
  var page1 = document.getElementById("page1");

  // The line below checks if page1 is currently visible!
  if (page1.style.display === "none") { 
    // If page1 is hidden, the site will show page1 if the button is clicked (>3<) !!
    page1.style.display = "block";
  } else {
    // Otherwise, page1 won't be visible.
  page1.style.display = "none";
}
  }

function dance() {
  // The line below obtains the ID in order to make it a variable's value.
    let lizzieImage = document.getElementById("lizzie");
    lizzieImage.src = "https://c.tenor.com/L8GZdKkkJhwAAAAd/tenor.gif";
    lizzieImage.style.width = "150px"; // <3
}

function stop() {
  // The line below obtains the ID in order to make it a variable's value.
    let dieDude = document.getElementById("lizzie");
    dieDude.src = "https://mc-heads.net/body/751b090e-012e-4847-974e-a666cfc2603d/512"
    dieDude.style.width = "80px"; // <3
}



































