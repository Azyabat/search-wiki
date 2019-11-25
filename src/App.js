import React, { useState } from 'react';
import './App.css';
import SearchItem from './components/searchItem'
import FavItem from './components/favItems'


//MUI//////////////////////////////////////
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

//end MUI///////////////////////////////////

//redux////////////////////////////////////
import { connect } from 'react-redux';
import { SetResultWiki } from './index';


const mapStateToProps = (state) => {
  if (state.searchResult.text) {
    return {
      data: {
        label: state.searchResult.text[1],
        description: state.searchResult.text[2],
        url: state.searchResult.text[3]
      },
      chosen: state.chosen.chosen
    }
  }
  if (state.chosen) {
    return {
      chosen: state.chosen.chosen
    }
  }
}


//end redux///////////////////////////////

const firstUrl = 'https://ru.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=';


//MUI//////////////////////////////////////
const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'green',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'blue',
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
  },
})(TextField);

/////////////////////////////////////////////////

function App(props) {

  const disPatch = async (word) => {
    if (word) {
      let data = await fetch(firstUrl + word);
      await data.json().then(function (result) {
        props.dispatch(SetResultWiki(result));
      })
    }
  }



  return (
    <div className="wrapper">
      <h2>SearchWiki</h2>
      <div className="inputDiv">
        <CssTextField
          label="Запрос на Wiki"
          variant="outlined"
          id="custom-css-outlined-input"
          autoComplete='none'
          name='textField'
          onChange={e => disPatch(e.target.value)}
        />
      </div>
      <div className="whole">

        <div className="half">
          <h3>Избранные</h3>
          {props.chosen && props.chosen.map((title, id) => {
            return (
              <div className="itemChosen" key={id} >
                <FavItem url={props.chosen[id].url} title={props.chosen[id].title} id={id} description={props.chosen[id].description} />
              </div>
            )
          })}</div>

        <div className="halfRight half">
          <h3>Результаты поиска</h3>
          {props.data && props.data.label.map((title, id) => {
            return (
              <div className="itemWiki" key={id}>
                <SearchItem url={props.data.url[id]} title={title} id={id} description={props.data.description[id]} />
              </div>
            )
          })}
        </div>

      </div>
    </div>
  );
}


export default connect(mapStateToProps)(App);