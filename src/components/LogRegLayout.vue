<template>
    <div class="navbar">
      <div class="navbar-left">
      </div>
      <div class="navbar-right">
        <a href="login" class="masuk">Masuk</a>
        <a href="register" class="daftar">Daftar</a>
      </div>
    </div>
    <router-view></router-view>
  </template>
  
  <style>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    padding: 14px 20px;
    overflow: hidden;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  }
  
  .navbar a {
    color: #17A2B8;
    padding: 14px 20px;
    text-decoration: none;
    text-align: center;
  }
  
  .navbar a:hover {
    background-color: #ddd;
    /* color: black; */
  }
  
  .navbar-right {
    border: 2px solid #17A2B8;
    display: flex;
    align-items: center;
  }
  
  /* .navbar-left a, .navbar-right a {
    margin: 0 10px;
  } */
  
  .navbar a.masuk {
    float: right;
    background-color: #17A2B8;
    color: white;
    /* border-radius: 10%; */
  }
  .navbar a.daftar {
    float: right;
    color: #17A2B8;
    /* border-radius: 10%; */
  }
  </style>
  