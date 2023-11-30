import React from 'react';

function QuestNav() {

  return (
    <div className="quest-navbar">
        <div className='quest-nav-header'>
            <img src={require('../black-sun.png')} alt='logo of a sun' />
            <h2 id="os-title">SolOS</h2>
        </div>
        <div className='sizing'></div>
        <div className='quest-nav'>
            <button>All</button>
            <button>Recurrent Tasks</button>
            <button>Regular Tasks</button>
            <button>Projects</button>
        </div>
    </div>
  );
}

export default QuestNav;