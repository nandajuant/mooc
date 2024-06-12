<template>
  <form action="">
      <div class="card">
          
          <div class="container">
              <h4 class="subjudul">Tambah Program</h4>
          
              <hr>
              <br>
              <label for="email"><b>Judul</b></label>
              <input type="text" placeholder="Masukkan Judul" name="email" id="email"  >
              
          
              <label for="email"><b>Deskripsi</b></label>
              <input type="textarea" placeholder="Masukkan Deskripsi" name="email" id="email"  >
          
              <label for="psw"><b>Materi</b></label><button type="submit" class="tambahbtn">Tambah Materi</button>
              <input type="text" placeholder="Masukkan Materi" name="psw" id="psw"  >
          
          
              <router-link :to="{name: 'admin.program'}" class="route">
              <button type="submit" class="logoutbtn" @click="batal">Batal</button>
              </router-link>
              <router-link :to="{name: 'admin.program'}" class="route">
              <button type="submit" class="savebtn" @click="simpan">Simpan</button>
            </router-link>
          </div>
      </div>
  


  </form>
  </template>
  <script>
  
  export default{
    // name: "ListUser",
      
    //   methods: {
    //   },
      name: 'AlertNotif',
      methods: {
        simpan() {
          alert('Perubahan Tersimpan!');
          
        }
        },
        
        }
  
  </script>
  <style>
  .subjudul{
      color: #17A2B8;
      /* padding: 10px; */
      /* margin-left: 1px; */
      float: left;
  }
  .card {
/* Add shadows to create the "card" effect */
/* box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); */
transition: 0.3s;
/* padding: 10px; */
width: 90%;
margin: 0 50px;
margin-top: 10px;
margin-bottom: 10px;
}
  * {box-sizing: border-box}
  
  /* Add padding to containers */
  
  /* Full-width input fields */
  input[type=text], input[type=password] {
    width: 100%;
    padding: 15px;
    margin: 5px 0 22px 0;
    display: inline-block;
    border: none;
    background: #f1f1f1;
    border-radius: 10px;
  }

  input[type=jawaban] {
    width: 90%;
    padding: 15px;
    margin: 5px 0 22px 0;
    margin-left: 10px;
    display: inline-block;
    border: none;
    background: #f1f1f1;
    border-radius: 10px;
  }
  
  input[type=text]:focus, input[type=password]:focus {
    background-color: #ddd;
    outline: none;
  }
  
  /* Overwrite default styles of hr */
  hr {
    border: 1px solid #f1f1f1;
    margin-bottom: 25px;
  }
  
  /* Set a style for the submit/register button */
  .savebtn {
    background-color: #17A2B8;
    color: white;
    padding: 5px 10px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 10%;
    opacity: 0.9;
    /* float: right ; */
    border-radius: 10px;
    margin-left: 5px;
  
  }

  .tambahbtn {
    background-color: #17A2B8;
    color: white;
    padding: 5px 10px;
    /* margin: 8px 0; */
    border: none;
    cursor: pointer;
    width: auto;
    opacity: 0.9;
    float: right ;
    border-radius: 10px;
    /* margin-left: 5px; */
  
  }
  
  .logoutbtn {
    background-color: #aa0404;
    color: white;
    padding: 5px 10px;
    margin-right: 10px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 10%;
    opacity: 0.9;
    /* float: right; */
    border-radius: 10px;
    
  }

  input[type=textarea]{
  width: 1100px;
  height: 100px;
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
  border-radius: 10px;
  }
  
  .registerbtn:hover {
    opacity:1;
  }
  
  /* Add a blue text color to links */
  a {
    color: dodgerblue;
  }
  
  /* Set a grey background color and center the text of the "sign in" section */
  .signin {
    background-color: #f1f1f1;
    text-align: center;
  }
  
  </style>