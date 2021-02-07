const ECOM_VISIBILITY_VISIBLE = 'VISIBLE';

const convertToUrlPath = value => value.replace(/\s/g, '_').toLowerCase();

const formatPrice = amount => {
  const price = amount.toString();
  if (price.length < 3) {
    return price;
  }
  return `${price.slice(0, -2)}.${price.slice(-2)}`;
};

export const normalizeCatalog = ({items, inventory, categories}) => {
  const normalizedCategories = categories.objects.reduce((acc, item) => {
    return {
      ...acc,
      [item.id]: {
        ...item,
        name: item.category_data.name,
        urlSafeName: convertToUrlPath(item.category_data.name),
      },
    };
  }, {});

  return {
    items: items.reduce((acc, item) => {
      const {
        item_data: {
          name,
          description,
          variations,
          category_id,
          ecom_image_uris,
          tax_ids,
          ecom_visibility,
        },
        id,
      } = item;

      const normalizedVariations = variations.reduce(
        (
          acc,
          {
            item_variation_data: {
              name,
              price_money: {amount},
            },
            id: catalogItemId,
          }
        ) => {
          const quantity =
            inventory.find(
              ({catalog_object_id}) => catalog_object_id === catalogItemId
            )?.quantity || null;

          if (quantity === 0 || quantity === '0') {
            return acc;
          }
          return [
            ...acc,
            {
              variationName: name,
              amount: formatPrice(amount),
              amountRaw: amount,
              quantity,
              catalogItemId,
            },
          ];
        },
        []
      );

      if (
        !category_id ||
        ecom_visibility !== ECOM_VISIBILITY_VISIBLE ||
        normalizedVariations.length == 0
      ) {
        return acc;
      }

      const {
        item_variation_data: {
          price_money: {amount},
        },
        id: catalogItemId,
      } = variations[0];

      return {
        ...acc,
        [category_id]: {
          ...acc[category_id],
          [id]: {
            name,
            urlSafeName: convertToUrlPath(name),
            description,
            variations: normalizedVariations,
            categoryId: category_id,
            taxId: tax_ids ? tax_ids[0] : null,
            images: ecom_image_uris,
            amount: formatPrice(amount),
            amountRaw: amount,
            catalogItemId,
            categoryName: normalizedCategories[category_id].name,
            urlSafeCategoryName: normalizedCategories[category_id].urlSafeName,
          },
        },
      };
    }, {}),
    categories: normalizedCategories,
  };
};
