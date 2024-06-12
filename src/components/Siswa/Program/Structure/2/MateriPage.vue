<!-- eslint-disable vue/no-parsing-error -->
<template>
    <div class="judul">
      <h5>Structure</h5>
    </div>
    
    <div class="subjudul">
      <H6>SENTENCES WITH MULTIPLE CLAUSE</H6>
    </div>

    <div class="materi">
    <div>
        <p>

Many sentences in English have more than one clause. (A clause is a group of words con- taining a subject and a verb.) Whenever you find a sentence on the TOEFL test with more than one clause, you need to make sure that every subject has a verb and every verb has a subject. Next you need to check that the various clauses in the sentence are correctly joined. There are various ways to join clauses in English. Certain patterns appear frequently in English and on the TOEFL test. You should be very familiar with these patterns.
          </p>
        <!-- <p>To be dalam bahasa Inggris memiliki berbagai arti. Dalam sebuah kalimat, to be dapat diartikan "adalah" atau "yaitu", dan terkadang tidak memiliki makna sama sekali.</p> -->
    </div>

    
    </div>

    <div class="footer">
        <div class="left">
            <a href="halaman1">
                << Video Perkenalan
            </a>
        </div>
        <div class="right">
          <!-- <router-link :to="{name: 'program.structure.part2'}"> -->
          <a href="materi2">SKILL 1 : USE COORDINATE CONNECTORS CORRECTLY >></a>
          <!-- </router-link> -->
        </div>

    </div>
</template>
<script>

</script>
<style>
.materi{
  /* display: flex; */
  /* float: left; */
  margin-left: 30px;
}
.judul{
  color: #17A2B8;
  margin-top: 10px;
  margin-left: 0px;
  display: flex;
  float: left;
  padding: 10px 20px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}
.subjudul{
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-left: 500px;
  padding-top: 80px;
}
.vid {
  margin-left: 100px;
  align-items: center;
}
.chip {
  display: inline-block;
  padding: 0 25px;
  height: 50px;
  font-size: 16px;
  line-height: 50px;
  border-radius: 25px;
  background-color: #f1f1f1;
}
.footer{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  color: #17A2B8;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.footer a{
  color: #17A2B8;
  padding: 14px 20px;
  text-decoration: none;
  text-align: center;
}

.btn-group button {
  /* box-shadow: 0 4px 8px 0 rgba(1,0,0,0.2); */
  background-color: #EEEEEE; /* Green background */
  border: #EEEEEE;
  color: #17A2B8  ; /* White text */
  padding: 10px 24px; /* Some padding */
  margin-top: 10px;
  margin-left: 5px;
  cursor: pointer; /* Pointer/hand icon */
}

.middle, .right , .left{
  display: flex;
  align-items: center;
}

.middle a, .right a , .left a{
  /* margin-left: 900px; */
  color: #17A2B8;
  text-decoration: none;
  margin: 0 10px;
}

.middle{
  flex-grow: 1;
  justify-content: center;
}

.right{
  justify-content: flex-end;
  color: #17A2B8;
}

</style>