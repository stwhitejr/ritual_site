import 'whatwg-fetch';
import {normalizeCatalog} from '@root/core/util';

export const getCatalog = () =>
  window
    .fetch('/api/router.php?action=catalog')
    .then(response => response.json())
    .then(normalizeCatalog)
    .catch(e => console.log(e));

export const checkout = data =>
  window
    .fetch('/api/router.php?action=checkout', {
      method: 'POST',
      body: JSON.stringify(data),
    })
    .then(response => {
      return response.json();
    })
    .then(response => {
      window.location.href = response.checkout.checkout_page_url;
    })
    .catch(e => console.log(e));
