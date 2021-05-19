import React from 'react';

const SearchBar = ({input:keyword, onChange:setKeyword}) => {
  const BarStyling = {marginRight: 80, width:"20rem",background:"#99000", border:"dotted", padding:"56", color:'white', borderRadius: 56, textAlign: 'center'};
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