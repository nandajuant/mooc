<template>
    <div>
        <form @submit.prevent="login">
  <div class="container">

    <label for="email"><b>Email</b></label>
    <input placeholder="Masukkan Email" v-model="username" type="text" id="username" required >

    <label for="psw-repeat"><b>Password</b></label>
    <input type="password" placeholder="Masukkan Password" v-model="password" id="password" required>

    <!-- <router-link :to="{name: 'beranda'}" class=""> -->
    <button type="submit" class="savebtn" >Masuk</button>
    <!-- </router-link> -->

    <br>
    <br>

    <label class="daft">
        <router-link :to="{name: 'register'}" class="route">
        Belum memiliki akun?  Daftar
        </router-link>
    </label>
  </div>

    </form>
    </div>
</template>
<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      // This is a simplified example, in a real application you should handle authentication securely.
      if (this.username === 'admin') {
        this.$router.push('/admin/program');
      } else if (this.username === 'nanda' || this.username === 'Nanda') {
        this.$router.push('/program');
      } else {
        alert('Invalid username or password');
      }
    }
  }
};
</script>
<style>
/* * {box-sizing: border-box} */

/* Add padding to containers */
.container {
    /* transition: 0.3s; */
  justify-content: center;
  align-items: center;
  display: flexbox;
  width: 40%;
  /* margin: 0 50px; */
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: #17A2B8;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  /* transition: 0.3s; */
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