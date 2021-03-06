/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

const Search2 = (props) => {
  const barStyle = {
    fontSize: '16px',
    fontFamily: 'opensans,sans-serif',
    fontWeight: '400',
    width: '600px',
    paddingLeft: '16px',
    boxSizing: 'border-box',
    height: '44px',
    border: '1px solid #d6d6d6',
    boxShadow: '0 4px 4px -4px #767676',
    background: '#fff',
    outline: 'none',
  };
  const imgStyle = {
    height: '44px',
    width: '44px',
    border: '1px solid gray',
    display: 'inline',
  };
  const resultsArrayStyle = {
    position: 'absolute',
    zIndex: '5',
    backgroundColor: '#f9f9f9',
  };
  const linkStyle = {
    textDecoration: 'none',
    color: 'black',
    padding: '0px',
    textAlign: 'left',
  };
  const resultsStyle = {
    border: '1px',
    position: 'relative',
  };
  return (
    <div onMouseLeave={props.removeSearchResults} onClick={props.updateSearchResults}>
      <div style={{ display: 'flex', paddingLeft: '100px' }}>
        <form id="BPsearchfield">
          {' '}
          <input style={barStyle} type="text" placeholder="Where to or what trip?" onChange={(e) => props.updateQuery(e)} />
        </form>
        <div onClick={() => window.scrollTo({
          top: 0,
        })}
        >
          <img id="BPmagnifyingGlass" style={imgStyle} src="https://front-end-capstone-trafalgar.s3-us-west-1.amazonaws.com/magnifyingglass.svg.png" alt="magnifying glass" onClick={() => props.getOneTrip(props.searchResults[0][1])} />
        </div>
      </div>
      <div
        style={resultsArrayStyle}
        onClick={() => window.scrollTo({
          top: 0,
        })}
      >
        {props.searchResults.map((result) => (
          <a
            style={linkStyle}
            href={`/${result[1]}`}
          >
            <div className="BPsearchResults" onClick={() => props.getOneTrip(result[1])} style={resultsStyle} key={result[1]}>{result[0]}</div>
          </a>
        ))}
      </div>
      {' '}
    </div>
  );
};

export default Search2;
