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
      <div>
        <p>SKILL 2 : USE ADVERB TIME AND CAUSE CONNECTIONS CORRECTLY</p>
      </div>
      <div>
        <p>
          Sentences with adverb clauses have two basic patterns in English. Study the clauses and · connectors in the following sentences:
</p>
<p>
  I will sign the check before you leave.
  <br>
Before you leave, I will sign the check.
</p>
<p>
In each of these examples, there are two clauses: you leave and I will sign the check, and the clause you leave is an adverb time clause because it is introduced with the connector before. In the first example the connector before comes in the middle of the sentence, and no comma (,) is used. In the second example the connector before comes at the beginning of the sentence. In this pattern, when the connector comes at the beginning of the sentence, a comma (,) is required in the middle of the sentence.
The following example shows how this sentence pattern could be tested in structure questions on the TOEFL test. 
        </p>
       
        <p>
          Example 
        </p>
        <p>
          "____ was late, I missed the appointment."
        </p>
        <p>
          (A) I
          <br>(B) Because
          <br>(C) The train
          <br>(D) Since he
        </p>

        <p>
          In this example you should recognize easily that there is a verb, was, that needs a subject. There is also another clause, I missed the appointment. If you choose answer (A) or answer (C), you will have a subject for the verb was, but you will not have a connector to join the two clauses. Because you need a connector to join two clauses, answers (A) and (C) are incorrect. Answer (B) is incorrect because there is no subject for the verb was. Answer (D) is the best answer because there is a subject, he, for the verb was, and there is a connector, since, to join the two clauses.
</p>

      </div>
    </div>


    </div>

    <div class="footer">
        <div class="left">
            <a href="materi2">
                << SKILL 1 : USE COORDINATE CONNECTORS CORRECTLY
            </a>
        </div>
        <div class="right">
          <!-- <router-link :to="{name: 'program.structure.part2'}"> -->
          <a href="test">Test >></a>
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