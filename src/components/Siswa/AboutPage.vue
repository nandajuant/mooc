<template>
  <div class="card about">
  <!-- <img src="" alt="Avatar" style="width:100%"> -->
  <div>
    <h4>About Us</h4>
    
    <div class="program-card">
        <p>ECTC merupakan penyedia kursus serta ujian TOEFL yang terpercaya. Kami memberikan layanan terbaik secara online yang dapat membantu kalian dalam meraih nilai TOEFL terbaik.</p>
    </div>
    
  </div>
</div>
<div class="card">
<form action="">
  <div class="container-fluid">
    

    <Label><b>Contact Us</b></Label>
    
    <hr> 

    <label for="email"><b>Nama</b></label>
    <input type="text" placeholder="Masukkan Nama" value="Nanda Juan Triatma" name="email" id="email" required>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Masukkan Email" value="nandajuant@gmail.com" name="email" id="email" required>

    <label for="psw"><b>No Whatsapp</b></label>
    <input type="text" placeholder="Masukkan No WhatsApp" value="087738487656"  required>

    <label for="psw-repeat"><b>Tuliskan pesan</b></label>
    <input type="textarea" placeholder="Tuliskan Pesan" required>
    


    <button type="submit" class="savebtn" @click="simpan">Kirim</button>
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
        alert('Pesan Terkirim');
        
      }
      },
      
      }
</script>
<style>
.card {
  /* Add shadows to create the "card" effect */
  /* box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); */
  transition: 0.3s;
  padding: 10px;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 0 50px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.about{
  background-color: #EEEEEE;
}

/* Add padding to containers */
.container-fluid {
  padding: 16px;
}

/* Full-width input fields */
input[type=textarea] {
  width: 100%;
  padding: 15px;
  margin: 10px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
  height: 80px;
  border-radius: 10px;
}

input[type=text]{
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
  background-color: #17A2B8;
  color: white;
  padding: 5px 10px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 10%;
  opacity: 0.9;
  border-radius: 10px;
}

.logoutbtn {
  background-color: #aa0404;
  color: white;
  padding: 5px 10px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 10%;
  opacity: 0.9;
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