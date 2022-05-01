import './App.css';
import React, { useEffect, useState } from 'react'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import configs from './config'
import Login from './Login'
import Player from './Player'
import { getTokenFromURL } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from './DataLayer';
import { ActionTypes } from '@mui/base';

// Initialize Firebase
const firebaseConfig = configs.firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const spotify = new SpotifyWebApi();

function App() {
  //state
  const [{ user, token }, dispatch] = useDataLayerValue();

  //run code on condition
  useEffect(() => {
    //code
    const hash = getTokenFromURL();
    window.location.hash = '';
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      })
      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user
        })
      })

      spotify.getUserPlaylists().then(playlists => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists
        })
      })

      spotify.getPlaylist('37i9dQZF1DX0XUsuxWHRQd').then(_rapCavier => {
        dispatch({
          type: 'SET_RAP_CAVIER',
          rapCavier: _rapCavier
        })
      })
    }
  }, []) //condition

  console.log(user)

  return (
    <div className="app">
      {
        token ? (<Player spotify={spotify} />) : (<Login />)
      }
    </div>
  );
}

export default App;
