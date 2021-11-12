// Wait for page to load
document.addEventListener('DOMContentLoaded', function() {

    // Select the submit button and input to be used later
    const googleSearch = document.querySelector('#googleSearch');
    const luckySearch = document.querySelector('#luckySearch');
    const searchField = document.querySelector('#searchField');

    // Disable submit button by default:
    googleSearch.disabled = true;
    luckySearch.disabled = true;

    // Listen for input to be typed into the input field
    searchField.onkeyup = () => {
        if (searchField.value.length > 0) {
            googleSearch.disabled = false;
            luckySearch.disabled = false;
        }
        else {
            googleSearch.disabled = true;
            luckySearch.disabled = true;
        }
    }

    document.querySelector('#luckySearch').onclick = () => {
      const searchThis = searchField.value;
      console.log('luckySearch: ' + searchThis);
      const wikipedia = 'https://en.wikipedia.org/wiki/';
      const url = wikipedia + searchThis;
      console.log('luckySearch url: ' + url);

      searchField.value = '';

      googleSearch.disabled = true;
      luckySearch.disabled = true;
      const win = window.open(url, '_blank');
      win.focus();
      return false;
      return false;
    }

    document.querySelector('#googleSearch').onclick = () => {
      const searchThis = searchField.value;
      console.log('googleSearch: ' + searchThis);
      const google = 'https://www.google.com/search?q=';
      const url = google + searchThis;
      console.log('googleSearch url: ' + url);

      searchField.value = '';

      googleSearch.disabled = true;
      luckySearch.disabled = true;

      const win = window.open(url, '_blank');
      win.focus();
      return false;
    }
});
