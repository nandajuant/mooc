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
        <p>SKILL 1 : BE SURE THAT A SENTENCE HAS A SUBJECT AND A VERB</p>
      </div>
      <div>
        <p>
          You know that a sentence in English should have a subject and a verb. The most common types of problems that you will encounter in structure questions on the TOEFL test have to do with subjects and verbs: perhaps the sentence is missing either the subject or the verb, or perhaps the sentence has an extra subject or verb.
        </p>
        <p>
          Example 1
        </p>
        <p>
          "_____ was backed up for miles on the freeway."
        </p>
        <p>
          (A) Yesterday
          <br>
          (B) In the morning
          <br>
          (C) Traffic
          <br>
          (D) Cars
        </p>

        <p>
          In this example, you should notice immediately that there is a verb "was", but there is no subject. The best answer is (C) "traffic" because it contains the singular subject that agrees with the singular verb "was". Answer (A) "yesterday" and answer (B) "in the morning" are not subjects, so they are not correct. Although answer (D) "cars" could be a subject, it is not correct because "cars" is plural and does not agree with the singular verb "was".
        </p>

        <p>Example 2</p>
        <p>"Engineers _____ for work on the new space program."</p>
        <p>
          (A) necessary 
          <br>
          (B) are needed 
          <br>
          (C) hopefully 
          <br>
          (D) next month 
        </p>
        <p>
          In this example, you should notice immediately that the sentence has a subject "engineers" and that there is no verb. Because answer (B) "are needed" is a verb, it is the best answer. Answers (A) "necessary", (C) "hopefully", and (D) "next month" are not verbs, so they are not correct.
        </p>

        <p>Example 3</p>
        <p>
          "The boy _____ going to the movies with a friend."
        </p>
        <p>
          (A) he is 
          <br>
          (B) he always was
          <br>
          (C) is relaxing 
          <br>
          (D) will be 
        </p>
        <p>
          The sentence presented has a subject "boy" and part of a verb "going". To be correct, some form of the verb "be" is needed to make the sentence complete. Answers (A) and (B) are incorrect because the sentence already has a subject "boy" and does not need the extra subject "he". Answer (C) is incorrect because "relaxing" is an extra verb part that is unnecessary due to the existing "going". Answer (D) "will be" together with "going" forms a complete verb.
        </p>
        <p>The following chart outlines what you should remember about subjects and verbs :</p>
        <p>
          A sentence in English must have at least one subject and one verb.
        </p>
      </div>
    </div>


    </div>

    <div class="footer">
        <div class="left">
          <button class="btn">
            <a href="materi">
                < SENTENCES WITH ONE CLAUSE
            </a>
          </button>
        </div>
        <div class="right">
          <!-- <router-link :to="{name: 'program.structure.part2'}"> -->
            <button class="btn">
          <a href="materi3">SKILL 2 : BE CAREFUL OF OBJECTS OF PREPOSITIONS ></a>
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
  color: #17A2B8;
  /* box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); */
  /* margin-left: 0%; */
  /* display: inline-flex; */
  margin-top: 20px;
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