import ActionTypes from '../Actions/ActionTypes';
const customData = require('../assets/data/zomato/file1.json');

const {
  DATA_REQUST,
  DATA_REQUEST_SUCCESS,
  DATA_REQUST_ERROR,
} = ActionTypes;

const initialState = {
  loading: false,
  pieData: [],
  ratingData: [],
  onlineDeliveryData: {yes: 0, no: 0},
  dataError: '',
};

const analyticReducer = (state = initialState, action) => {
  const {payload} = action;
  switch (action.type) {
    case DATA_REQUST:
      return {
        ...state,
        loading: false,
        data: [],
        dataError: '',
      };
    case DATA_REQUEST_SUCCESS: {
      // operation on zomata file 1
      const priceRange = {};
      const ratingData = {};
      const onlineDelivery = {
        yes: 0,
        no: 0,
      };

      customData.forEach(data => {
        const {restaurants = []} = data;
        restaurants.forEach(element => {
          const {restaurant = {}} = element;
          const {
            price_range = {},
            user_rating = {},
            has_online_delivery = 0,
          } = restaurant;

          const {aggregate_rating = 0} = user_rating;

          // price data
          priceRange[price_range] = priceRange[price_range]
            ? priceRange[price_range] + 1
            : 1;

          // rating data
          ratingData[Math.floor(aggregate_rating)] = ratingData[
            Math.floor(aggregate_rating)
          ]
            ? ratingData[Math.floor(aggregate_rating)] + 1
            : 1;

          //onlineDelivery
          if (has_online_delivery === 1) {
            onlineDelivery.yes = onlineDelivery.yes + 1;
          } else {
            onlineDelivery.no = onlineDelivery.no + 1;
          }
        });
      });

      const _priceRange = [];
      for (let key in priceRange) {
        _priceRange.push({
          x: key,
          y: priceRange[key],
          label: `${key}(${priceRange[key]})`,
        });
      }

      const _ratingData = [];
      for (let key in ratingData) {
        _ratingData.push({x: key, y: ratingData[key]});
      }

      return {
        ...state,
        loading: false,
        pieData: [...state.pieData, ..._priceRange],
        ratingData: [...state.ratingData, ..._ratingData],
        onlineDeliveryData: {
          ...state.onlineDeliveryData,
          ...onlineDelivery,
        },
        dataError: '',
      };
    }
    case DATA_REQUST_ERROR:
      return {
        ...state,
        loading: false,
        data: [],
        dataError: payload,
      };
    default:
      return state;
  }
};

export default analyticReducer;
