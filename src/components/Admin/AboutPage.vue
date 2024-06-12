<template>
  <div class="card about">
  <!-- <img src="" alt="Avatar" style="width:100%"> -->
  <div>
    <h4>About Us</h4>
    
    <div class="program-card">
        <textarea @input="autoResize" type="text-area" value="ECTC merupakan penyedia kursus serta ujian TOEFL yang terpercaya. Kami memberikan layanan terbaik secara online yang dapat membantu kalian dalam meraih nilai TOEFL terbaik.">
          </textarea>
        </div>
    
  </div>
</div>
<div class="card">
<form action="">
  <div class="container">
    

    <Label><b>Contact Us</b></Label>

  <br>
    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Masukkan Email" name="email" id="email" value="admin@gmail.com">

    <button type="submit" @click="simpan" class="savebtn">Simpan</button>
  </div>

</form>
</div>
</template>
<script>
export default {
  name: 'AutoResizingTextarea',
  data() {
    return {
      text: ''
    };
  },
  methods: {
    autoResize() {
      const textarea = this.$refs.textarea;
      textarea.style.height = 'auto'; // Reset height to auto
      textarea.style.height = `${textarea.scrollHeight}px`; // Set height to the scroll height
    },
    simpan() {
        alert('Perubahan Tersimpan!');
        
      }
  }
};
</script>
<style>
.card {
  /* Add shadows to create the "card" effect */
  /* box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); */
  transition: 0.3s;
  padding: 10px;
  /* justify-content: center;
  align-items: center; */
  width: 90%;
  margin: 0 50px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.about{
  background-color: #EEEEEE;
}

/* Add padding to containers */
.container {
  padding: 16px;
}

/* Full-width input fields */


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

/* input[type=text-area]{
  width: 1100px;
  height: auto;
} */

textarea {
  width: 100%;
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  overflow: hidden; /* Hide overflow to prevent scrollbars */
  resize: none; /* Prevent manual resizing */
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