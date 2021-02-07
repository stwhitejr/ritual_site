import {normalizeCatalog} from '@root/core/util';

const mockData = {
  categories: {
    objects: [
      {
        type: 'CATEGORY',
        id: 'KLT3FHCD53ETHO2VNQPSZ45L',
        updated_at: '2020-06-19T00:40:10.041Z',
        version: 1592527210041,
        is_deleted: false,
        present_at_all_locations: true,
        category_data: {
          name: 'class',
        },
      },
      {
        type: 'CATEGORY',
        id: '6UIRUFOOSGLDYQYD2YJO73RX',
        updated_at: '2020-06-19T00:44:13.98Z',
        version: 1592527453980,
        is_deleted: false,
        present_at_all_locations: true,
        category_data: {
          name: 'Ritual Home',
        },
      },
      {
        type: 'CATEGORY',
        id: 'RJ6RYO7O73DDDYGGLXSVN3HF',
        updated_at: '2020-11-18T21:14:13.897Z',
        version: 1605734053897,
        is_deleted: false,
        present_at_all_locations: true,
        category_data: {
          name: 'Body',
        },
      },
    ],
  },
  items: [
    // class
    {
      type: 'ITEM',
      id: '4PA7EJPN3FYZTRGQ3BP45H4D',
      updated_at: '2021-01-12T22:00:39.644Z',
      version: 1610488839644,
      is_deleted: false,
      present_at_all_locations: true,
      item_data: {
        name: 'One on One Virtual Session w/Sara White',
        description:
          "Are you interested in scheduling some one on one time to workshop any flows/poses or to ask any burning questions? Maybe you are brand new to yoga and would like an intro session. Or maybe you've been practicing but would like a flow suited to your specific needs. Schedule a 1 hour zoom session with Sara White!",
        category_id: 'KLT3FHCD53ETHO2VNQPSZ45L',
        variations: [
          {
            type: 'ITEM_VARIATION',
            id: '7XDJVD7TEUOL76XRFKILAWPU',
            updated_at: '2020-11-18T20:15:05.588Z',
            version: 1605730505588,
            is_deleted: false,
            present_at_all_locations: true,
            item_variation_data: {
              item_id: '4PA7EJPN3FYZTRGQ3BP45H4D',
              name: 'Regular',
              ordinal: 0,
              pricing_type: 'FIXED_PRICING',
              price_money: {
                amount: 4500,
                currency: 'USD',
              },
              track_inventory: false,
            },
          },
        ],
        product_type: 'REGULAR',
        skip_modifier_screen: false,
        ecom_uri:
          'https://ritual-yoga.square.site/product/one-on-one-virtual-session-w-sara-white/13',
        ecom_image_uris: [
          'https://ritual-yoga.square.site/uploads/1/3/2/1/132111918/s881575848977771397_p13_i1_w1080.jpeg',
        ],
        ecom_available: true,
        ecom_visibility: 'VISIBLE',
      },
    },
    // physical item
    {
      type: 'ITEM',
      id: 'VVZEIELEKVGLTO2PYGM6MSYX',
      updated_at: '2021-01-12T22:00:39.644Z',
      version: 1610488839644,
      is_deleted: false,
      present_at_all_locations: true,
      item_data: {
        name: 'Courage Bracelet',
        description:
          'Garnet | Bloodstone | Carnelian:\nFor inspiring courage, creativity and success!\n\n-6mm healing gemstones on stretch cord\n*expect slight variations of color and texture in gems as they are natural*',
        visibility: 'PRIVATE',
        category_id: '6UIRUFOOSGLDYQYD2YJO73RX',
        tax_ids: ['GFWE5NUB22U3WXKHFHR3XDHG'],
        variations: [
          {
            type: 'ITEM_VARIATION',
            id: 'MQRVVC46GJ3SCQZUZGN5URUX',
            updated_at: '2020-12-13T00:28:08.18Z',
            version: 1607819288180,
            is_deleted: false,
            present_at_all_locations: true,
            item_variation_data: {
              item_id: 'VVZEIELEKVGLTO2PYGM6MSYX',
              name: 'Regular',
              ordinal: 1,
              pricing_type: 'FIXED_PRICING',
              price_money: {
                amount: 1800,
                currency: 'USD',
              },
              location_overrides: [
                {
                  location_id: '6ADJC2QR2EDRD',
                  track_inventory: true,
                },
              ],
            },
          },
          {
            type: 'ITEM_VARIATION',
            id: 'MOCK_OUT_OF_STOCK_ITEM',
            updated_at: '2020-12-13T00:28:08.18Z',
            version: 1607819288180,
            is_deleted: false,
            present_at_all_locations: true,
            item_variation_data: {
              item_id: 'VVZEIELEKVGLTO2PYGM6MSYX',
              name: 'Regular',
              ordinal: 1,
              pricing_type: 'FIXED_PRICING',
              price_money: {
                amount: 1800,
                currency: 'USD',
              },
              location_overrides: [
                {
                  location_id: '6ADJC2QR2EDRD',
                  track_inventory: true,
                },
              ],
            },
          },
        ],
        product_type: 'REGULAR',
        skip_modifier_screen: false,
        ecom_uri: 'https://ritual-yoga.weebly.com/product/courage-bracelet/37',
        ecom_image_uris: [
          'https://ritual-yoga.square.site/uploads/1/3/2/1/132111918/s881575848977771397_p37_i6_w700.png',
        ],
        ecom_available: true,
        ecom_visibility: 'VISIBLE',
        legacy_tax_ids: ['GFWE5NUB22U3WXKHFHR3XDHG'],
      },
    },
  ],
  inventory: [
    {
      catalog_object_id: 'MQRVVC46GJ3SCQZUZGN5URUX',
      catalog_object_type: 'ITEM_VARIATION',
      state: 'IN_STOCK',
      location_id: '6ADJC2QR2EDRD',
      quantity: '2',
      calculated_at: '2020-12-13T00:28:08.121312Z',
    },
    {
      catalog_object_id: 'MOCK_OUT_OF_STOCK_ITEM',
      catalog_object_type: 'ITEM_VARIATION',
      state: 'IN_STOCK',
      location_id: '6ADJC2QR2EDRD',
      quantity: '0',
      calculated_at: '2020-12-13T00:28:08.121312Z',
    },
  ],
};

describe('normalizeCatalog', () => {
  const output = normalizeCatalog(mockData).items;
  const classes = output.KLT3FHCD53ETHO2VNQPSZ45L;
  const home = output['6UIRUFOOSGLDYQYD2YJO73RX'];

  it('should separate into categories', () => {
    expect(Object.keys(output)).toMatchObject([
      'KLT3FHCD53ETHO2VNQPSZ45L',
      '6UIRUFOOSGLDYQYD2YJO73RX',
    ]);

    expect(classes['4PA7EJPN3FYZTRGQ3BP45H4D']).toBeTruthy();
    expect(home['VVZEIELEKVGLTO2PYGM6MSYX']).toBeTruthy();
  });

  it('should remove any phsyical variations with a qty of 0', () => {
    expect(home['MOCK_OUT_OF_STOCK_ITEM']).toBeFalsy();
  });
});
