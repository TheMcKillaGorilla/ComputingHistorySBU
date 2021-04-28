import React from 'react';

const SearchBar = ({input:keyword, onChange:setKeyword}) => {
  const BarStyling = {width:"20rem",background:"#99000", border:"dotted", padding:"0.5rem", color:'white'};
  return (
    <input 
     style={BarStyling}
     key="random1"
     value={keyword}
     placeholder={"search"}
     onChange={(e) => setKeyword(e.target.value)}
    />
  );
}

export default SearchBar