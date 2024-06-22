<template>
<form action="">
  <div class="container-fluid">

    <label for="email"><b>Nama</b></label>
    <input type="text" placeholder="Masukkan Nama" name="email" id="email"  value="Admin">
    

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Masukkan Email" name="email" id="email"  value="admin@gmail.com">

    <label for="psw"><b>No Whatsapp</b></label>
    <input type="text" placeholder="Masukkan Nomor WhatsApp" name="psw" id="psw"  value="087738487656">

    <label for="psw-repeat"><b>Password baru</b></label>
    <input type="password" placeholder="Password" name="psw-repeat" id="psw-repeat" >
    <label for="psw-repeat"><b>Ulangi Password</b></label>
    <input type="password" placeholder="Ulangi Password" name="psw-repeat" id="psw-repeat" >
    <hr>

    <router-link :to="{name: 'login'}" class="route">
    <button type="submit" class="logoutbtn">Logout</button>
  </router-link>
    
    <button type="submit" class="savebtn" @click="simpan">Simpan</button>
  </div>

</form>
</template>
<script>

export default{
  // name: "ListUser",
    
  //   methods: {
  //   },
    name: 'AlertNotif',
    data(){
    return{
    profile:{
      nama  : 'Admin',
      email : 'admin@gmail.com',
      phone : '087738487656',
      pw    : '',  
    }
    }
    },
    methods: {
      simpan() {
        alert('Perubahan Tersimpan!');
        
      }
      },
      
      }

</script>
<style>
* {box-sizing: border-box}

/* Add padding to container-fluids */
.container-fluid {
  padding: 16px;
}

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
  background-color: #04AA6D;
  color: white;
  padding: 5px 10px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 10%;
  opacity: 0.9;
  float: right ;
  border-radius: 10px;

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
  float: left;
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