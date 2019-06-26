import React from 'react';

const TabToggler = ({ handleToggleTab, currentTab }) => (
  <div className="tabs is-toggle is-fullwidth">
    <ul>
      <li className={currentTab === 'current' ? 'is-active' : ''}>
        <a onClick={() => handleToggleTab('current')}>
          Sekarang
        </a>
      </li>
      <li className={currentTab === 'hourly_forecast' ? 'is-active' : ''}>
        <a onClick={() => handleToggleTab('hourly_forecast')}>
          Per Jam
        </a>
      </li>
    </ul>
  </div>
);

export default TabToggler;
