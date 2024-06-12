<!-- eslint-disable vue/no-parsing-error -->
<template>
    <div class="judul">
      <h5>Structure</h5>
    </div>
    
    <div class="subjudul">
      <H6>SENTENCES WITH ONE CLAUSE</H6>
    </div>

    <div class="materi">
    <div>
        <p>Some sentences in English have just one subject and verb, and it is very important for you to find the subject and verb in these sentences. In some sentences it is easy to find the sub- ject and verb. However, certain structures, such as objects of prepositions, appositives, and participles, can cause confusion in locating the subject and verb because each of these structures can look like a subject or verb. An object of the preposition or an appositive can be mistaken for a subject, while a participle can be mistaken for a verb.
Therefore, you should be able to do the following in sentences with one subject and verb: </p>
<p>(1) be sure the sentence has a subject and a verb,</p> 
<p>(2) be careful of objects of preposi- tions and appositives when you are looking for the subject, and </p>
<p>(3) be careful of present participles and past participles when you are looking for the verb.</p>

        <!-- <p>To be dalam bahasa Inggris memiliki berbagai arti. Dalam sebuah kalimat, to be dapat diartikan "adalah" atau "yaitu", dan terkadang tidak memiliki makna sama sekali.</p> -->
    </div>

    
    </div>

    <div class="footer">
        <div class="left">
          <button class="btn">

            <a href="video">
                < Video Perkenalan
            </a>
          </button>
            
        </div>
        <div class="middle">
          <!-- <button class="btn">

            <a href="video">
                < Video Perkenalan
            </a>
          </button> -->
            
        </div>
        <div class="right">
          <!-- <router-link :to="{name: 'program.structure.part2'}"> -->
            <button class="btn">
              <a href="materi2">SKILL 1 : BE SURE THAT A SENTENCE HAS A SUBJECT AND A VERB ></a>

            </button>
          
          <!-- </router-link> -->
        </div>

    </div>
</template>
<script>

</script>
<style>

.btn{
  color: white;
  background-color: #17A2B8;  
  border-radius: 10px;
  width: auto;
}


.footer{
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 10px 20px; */
  color: #EEEEEE;
  /* box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); */
  /* margin-left: 0%; */
  /* display: inline-flex; */
  margin-top: 90px;
  /* position: fixed; */
  bottom: 0;
  
}
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


.footer a{
  /* color: #17A2B8; */
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
  /* align-items: center; */
}

.middle a, .right a , .left a{
  /* margin-left: 900px; */
  color: #EEEEEE ;
  text-decoration: none;
  margin: 0 10px;
}

.middle{
  flex-grow: 1;
  /* justify-content: center; */
}

.right{
  float: right;
  justify-content: flex-end;
  /* color: #17A2B8; */
  margin-right: 10px;
}

.left{
  margin-left: 10px;
}

</style>