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
        <p>SKILL 1 : USE COORDINATE CONNECTORS CORRECTLY </p>
      </div>
      <div>
        <p>
          When you have two clauses in an English sentence, you must connect the two clauses cor- rectly. One way to connect two clauses is to use and, but, or, so, or yet between the clauses.

          </p>
          <p>
          Tom is singing, and Paul is dancing.
          <br>
          Tom is tall, but Paul is short.
          <br>
          Tom must write the letter, or Paul will do it.  
          <br>
          Tom told a joke, so Paul laughed.
          <br>
          Tom is tired, yet he is not going to sleep.
        </p>
        <p>
          In each of these examples, there are two clauses that are correctly joined with a coordinate conjunction and, but, or, so, or yet, and a comma (,).
The following example shows how this sentence pattern could be tested in structure questions on the TOEFL test.
        </p>
        <p>
          Example 1
        </p>
        <p>
          A power failure occurred, _____ the lamps went out.
        </p>
        <p>
          (A) then
          <br>
          (B) so
          <br>
          (C) later
          <br>
          (D) next
        </p>

        <p>
          In this example you should notice quickly that there are two clauses, a power failure occurred and the lamps went out. This sentence needs a connector to join the two clauses. Then, later, and next are not connectors, so answers (A), (C), and (D) are not correct. The best answer is answer (B) because so can connect two clauses.
</p>
<p>
  The following chart lists the coordinate connectors and the sentence pattern used with them:
</p>
<p>
  S V , connectors S V
  <br>
  She laughed, but she wanted to cry
</p>
        
      </div>
    </div>


    </div>

    <div class="footer">
        <div class="left">
            <a href="materi">
                << SENTENCES WITH MULTIPLE CLAUSE
            </a>
        </div>
        <div class="right">
          <!-- <router-link :to="{name: 'program.structure.part2'}"> -->
          <a href="materi3">SKILL 2 : USE ADVERB TIME AND CAUSE CONNECTIONS CORRECTLY >></a>
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