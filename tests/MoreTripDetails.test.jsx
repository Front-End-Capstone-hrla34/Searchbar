/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow } from 'enzyme';

import MoreTripDetails from '../client/src/components/MoreTripDetails';

describe('<MoreTripDetails />', () => {
  const fakeTrip = {
    meals: { breakfasts: 1, lunches: 1, dinners: 4 },
    cities: ['Anchorage', 'Fairbanks'],
    descriptions: ['Nullam non nisi est sit, velit ut tortor pretium v…ullam, pulvinar proin gravida hendrerit lectus a.', 'Suspendisse potenti nullam ac tortor vitae purus f…es. A pellentesque sit amet porttitor eget dolor.'],
    the_trafalgar_difference: ['DIVE INTO CULTURE eget velit aliquet sagittis id c…us pulvinar elementum integer enim neque volutpat'],
    sightseeing_highlights: ['CITY TOUR egestas sed', 'SEE nunc mi ipsum faucibus'],
    travel_highlights: ['Optional Experiences and free time', 'Audio Headsets for flexible sightseeing', 'VIP entry to many sights', 'All porterage and restaurant gratuities', 'Handcrafted Highlights', 'Must-see sightseeing and surprise extras', 'Daily breakfast and up to half your evening meals'],
    _id: '5e39ca98374c190aa36a6237',
    season: 'Winter',
    year: 2020,
    days: 6,
    country: 'The United States',
    imageUrl: 'https://front-end-capstone-trafalgar.s3-us-west-1.amazonaws.com/Fairbanks.jpg',
    name: 'Splendors of The United States',
    nights: 5,
    id: 8,
    __v: 0,
  };

  it('should render the MoreTripDetails component on the screen', () => {
    const wrapper = shallow(<MoreTripDetails trip={fakeTrip} />);
    expect(wrapper).toExist();
  });

  it('should render the correct trip details', () => {
    const wrapper = shallow(<MoreTripDetails trip={fakeTrip} />);
    const nights = wrapper.find('h4').first().text();
    expect(nights).toEqual(' 5 Nights ');
  });
});
