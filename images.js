document.addEventListener('DOMContentLoaded', function() {

  // Select the submit button and input to be used later
  const searchField = document.querySelector('#googleSearchImg');
  const googleSearch = document.querySelector('#button');


  // Disable submit button by default:
  googleSearch.disabled = true;

  // Listen for input to be typed into the input field
  searchField.onkeyup = () => {
    if (searchField.value.length > 0) {
      googleSearch.disabled = false;
    }
    else {
      googleSearch.disabled = true;
    }
  }

  document.querySelector('#button').onclick = () => {
    const searchThis = searchField.value;
    console.log('googleSearch: ' + searchThis);
    const google = 'https://www.google.com/images?q=';
    const url = google + searchThis;
    console.log('googleSearch url: ' + url);

    searchField.value = '';

    googleSearch.disabled = true;

    const win = window.open(url, '_blank');
    win.focus();
    return false;
  }
});
