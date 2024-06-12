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
      <div>
        <p>SKILL 2 : BE CAREFUL OF OBJECTS OF PREPOSITIONS</p>
      </div>
      <div>
        <p>
          An object of a preposition is a noun, pronoun, gerund or noun clause that comes after a preposition, such as in, at, of, to, by, behind, on, and so on, to form a prepositional phrase.
        </p>
        <p>  
          (After his exams) Tom will take a trip (by boat).
        </p>
        <p>
        This sentence contains two objects of prepositions. "Exams" is the object of the preposition "after", and "boat" is the object of the preposition "by".
        </p>
        <p>
        An object of a preposition can cause confusion in structure questions on the TOEFL test because it can be mistaken for the subject of a sentence.  
        </p>
        <p>
          Example 
        </p>
        <p>
          "With his friend _____ found the movie theater."
        </p>
        <p>
          (A) has 
          <br>(B) he 
          <br>(C) later 
          <br>(D) when 
        </p>

        <p>
          In this example you should look first for the subject and the verb. You should notice the verb found and should also notice that there is no subject. Do not think that friend is the subject; friend is the object of the preposition with, and one noun cannot be both a subject and an object at the same time. Because a subject is needed in this sentence, answer (B), he, is the best answer. Answers (A), (C), and (D) are not correct because they cannot be subjects.
</p>
<p>The following chart outlines the key information that you should remember about objects of prepositions:</p>
        <p> A preposition is followed by a noun, pronoun, gerund or noun clause that is called an object of the preposition. If a word is an object of a preposition, it is not the subject.</p>
        
      </div>
    </div>


    </div>

    <div class="footer">
        <div class="left">
          <button class="btn">
            <a href="materi2">
                < SKILL 1 : BE SURE THAT A SENTENCE HAS A SUBJECT AND A VERB
            </a>
          </button>
        </div>
        <div class="right">
          <button class="btn">
          <!-- <router-link :to="{name: 'program.structure.part2'}"> -->
          <a href="test">Latihan ></a>
        </button>
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
  color: #17A2B8;
  /* box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); */
  /* margin-left: 0%; */
  /* display: inline-flex; */
  margin-top: 20px;
  /* position: fixed; */
  bottom: 0;
  
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
  color: #EEEEEE;
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
  margin-right: 10px;
}
.left{
  margin-left: 10px;
}
</style>