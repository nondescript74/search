document.addEventListener('DOMContentLoaded', function() {

  const qAll = document.querySelector('#allz');
  const qExact = document.querySelector('#exactz');
  const qAny = document.querySelector('#anyz');
  const qNone = document.querySelector('#nonez');
  const googleAdvSearch = document.querySelector('#advSrchButton');

  document.querySelector('#advSrchButton').onclick = () => {
    if (qAll.value.length == 0 && qExact.value.length == 0 && qAny.value.length == 0 && qNone.value.length == 0) {
      // googleAdvSearch.disabled = true;
      console.log('None of the fields have values, please enter values');
      return false;
    } else {
      const google = 'https://www.google.com/search?q=';
      console.log('qAll is: ' + qAll.value);
      console.log('qExact is: ' + qExact.value);
      console.log('qAny is: ' + qAny.value);
      console.log('qNone is: ' + qNone.value);

      var constructing = google;
      if (qAll.value.length != 0) {constructing = constructing + qAll.value};
      if (qAny.value.length != 0) {constructing = constructing + qAny.value};
      if (qExact.value.length != 0) {constructing = constructing + qExact.value};
      if (qNone.value.length != 0) {constructing = constructing + '-' + qNone.value};

      const url = constructing;
      console.log('adv search url: ' + url);

      qAll.value = '';
      qAny.value = '';
      qExact.value = '';
      qNone.value = '';

      const win = window.open(url, '_blank');
      win.focus();
      return false;
    }
  }
});
