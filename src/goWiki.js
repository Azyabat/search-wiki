import React from 'react';

async function goWiki(props) {
  const getData = await fetch();
  const dataJson = await getData.json();
  
}

function infoWiki(props) {
    console.log(props.Url);
}

export default infoWiki;