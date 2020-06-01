import 'whatwg-fetch';

const formatPrice = amount => {
  const price = amount.toString();
  if (price.length < 3) {
    return price;
  }
  return `${price.slice(0, -2)}.${price.slice(-2)}`;
};

const formatCatalog = items =>
  items.map(({item_data: {name, description, variations}}) => {
    if (variations.length > 1) {
      return {
        name,
        description,
        variations: variations.map(
          (
            {
              item_variation_data: {
                name,
                price_money: {amount},
              },
              id: catalogItemId
            },
          ) => ({
            variationName: name,
            amount: formatPrice(amount),
            catalogItemId,
          })
        ),
      };
    }
    const {
      item_variation_data: {
        price_money: {amount},
      },
      id: catalogItemId,
    } = variations[0];
    return {
      name,
      description,
      amount: formatPrice(amount),
      catalogItemId,
    };
  });

export const getCatalog = () =>
  fetch('http://ritualyogastudio.com/dev/catalog.php')
    .then(response => response.json())
    .then(response => response.objects)
    .then(formatCatalog)
    .catch(e => console.log(e));

export const checkout = catalogItemId =>
  fetch(
    `http://ritualyogastudio.com/dev/checkout.php?catalogItemId=${catalogItemId}`
  )
    .then(response => {
      console.log(response);
      return response.text();
    })
    .then(url => {
      console.log(url);
      window.location.href = url;
    })
    .catch(e => console.log(e));
