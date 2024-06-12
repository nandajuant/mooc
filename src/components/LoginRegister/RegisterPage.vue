<template>
    <div>
        <form action="">
  <div class="container">

    <label for="email"><b>Nama</b></label>
    <input type="text" placeholder="Masukkan Nama Lengkap" name="email" id="email"  required>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Masukkan Email" name="email" id="email" required >

    <label for="email"><b>Nomor WhatsApp</b></label>
    <input type="text" placeholder="Masukkan Nomor WhatsApp" name="email" id="email" required >

    <label for="psw-repeat"><b>Password</b></label>
    <input type="password" placeholder="Masukkan Password" name="psw-repeat" id="psw-repeat" required>

    <label for="psw-repeat"><b>Ulangi Password</b></label>
    <input type="password" placeholder="Ulangi Password" name="psw-repeat" id="psw-repeat" required>

    
    <button type="submit" class="savebtn" @click="simpan">Daftar</button>

    <br>
    <br>

    <label class="daft">
        <router-link :to="{name: 'login'}" class="route">
        Sudah memiliki akun? Masuk
        </router-link>
    </label>
  </div>

    </form>
    </div>
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
        alert('Anda Berhasil Mendaftarkan Akun!');
        
      }
      },
      
      }
</script>
<style>
* {box-sizing: border-box}

/* Add padding to containers */
.container {
    transition: 0.3s;
  padding: 10px;
  justify-content: center;
  align-items: center;
  width: 40%;
  /* margin: 0 50px; */
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: #17A2B8;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 10px;
  padding: 20px;
}

.route{
    color: white;
}

label{
    color: white;
    justify-content: center;
    align-items: center;
}

.daft{
    margin-left: 130px;
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
  align-items: center;
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
  background-color: #4C94FF;
  color: white;
  padding: 5px 10px;
  /* margin: 8px 0; */
  border: none;
  cursor: pointer;
  /* width: 10%; */
  opacity: 0.9;
  align-items: center;
  justify-content: center;
  margin-left: 40%;
  font-size: larger;
  /* float: center ; */
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