import React from 'react';

import Dropdown from './Dropdown';

const Dropdowns = ({ data }) => (
  <>
    {
      Object.keys(data).map(key => (
        <Dropdown
          key={key}
          type={key}
          option={data[key]}
        />
      ))
    }
  </>
);

export default Dropdowns;
