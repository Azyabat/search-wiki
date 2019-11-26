import React from 'react';
import './App.css';
import SearchItem from './components/SearchItem'
import FavItem from './components/FavItems'
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { SetResultWiki } from './store/Actions/Actions';
import {getLabel, getDescription, getUrl, getChosen} from './store/Selectors/Selectors';
const firstUrl = 'https://ru.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=';

const mapStateToProps = (state) => {
  if (state.searchResult.text) {
    return {
      data: {
        label: getLabel(state),
        description: getDescription(state),
        url: getUrl(state)
      },
      chosen: getChosen(state)
    }
  }
    return {
      chosen: getChosen(state)
  }
}

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


function App(props) {

  const getData = async (word) => {
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
          onChange={e => getData(e.target.value)}
        />
      </div>
      <div className="whole">

        <div className="half">
          <h3>Избранные</h3>
          {props.chosen && props.chosen.map((title, id) => {
            return (
              <div className="itemChosen" key={id} >
                <FavItem
                  url={props.chosen[id].url}
                  title={props.chosen[id].title}
                  id={id}
                  description={props.chosen[id].description}

                />
              </div>
            )
          })}</div>

        <div className="halfRight half">
          <h3>Результаты поиска</h3>
          {props.data && props.data.label.map((title, id) => {
            return (
              <div className="itemWiki" key={id}>
                <SearchItem
                  url={props.data.url[id]}
                  title={title}
                  id={id}
                  description={props.data.description[id]}

                />
              </div>
            )
          })}
        </div>

      </div>
    </div>
  );
}


export default connect(mapStateToProps)(App);