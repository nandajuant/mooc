<template>
    <div class="navbar">
      <div class="navbar-left">
        <router-link :to="{name: 'admin.program'}" class="route">
          <a>Program</a>
        </router-link>

        <router-link :to="{name: 'admin.about'}" class="route">
          <a>About</a>
        </router-link>
      </div>
      <div class="navbar-right">
        <router-link :to="{name: 'admin.profil'}" class="route">
          <a class="split">Admin</a>
        </router-link>
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
  
  .navbar-left, .navbar-right {
    display: flex;
    align-items: center;
  }
  
  .navbar-left a, .navbar-right a {
    margin: 0 10px;
  }
  
  .navbar a.split {
    float: right;
    background-color: yellow;
    color: #17A2B8;
    border-radius: 10%;
  }
  </style>
  