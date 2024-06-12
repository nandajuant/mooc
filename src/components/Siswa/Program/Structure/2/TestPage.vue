<!-- eslint-disable vue/no-parsing-error -->
<template>
    <div class="judul">
      <h5>Structure</h5>
    </div>
    
    <div class="subjudul">
      <H6>Latihan</H6>
    </div>

    <div class="materi">
        <p>
            1. The president of the United States appoints the cabinet members, ____ appointments are subject to Senate approval.
        </p>
        <input type="radio" id="a" value="am" name="1">
        <label class="label" for="a">their</label><br>
        <input type="radio" id="a" value="is" name="1">
        <label class="label" for="a">with their</label><br>
        <input type="radio" id="a" value="are" name="1">
        <label class="label" for="a">because their</label><br>
        <input type="radio" id="a" value="was" name="1">
        <label class="label" for="a">but their</label><br>
        <br>
        <p>
            2. The prisoners were prevented from speaking to reporters because ____.
        </p>
        <input type="radio" id="a" value="am" name="2">
        <label class="label" for="a">not wanting the story in the papers</label><br>
        <input type="radio" id="a" value="is" name="2">
        <label class="label" for="a">the story in the papers the superintendent did not want</label><br>
        <input type="radio" id="a" value="are" name="2">
        <label class="label" for="a">the public to hear the story</label><br>
        <input type="radio" id="a" value="was" name="2">
        <label class="label" for="a">the superintendent did not want the story in the papers</label><br>

        <br>
        <p>
            3. Like Thomas Berger's fictional character Little Big Man, Lauderdale managed to find himself where ____ of important events took place.
        </p>
        <input type="radio" id="a" value="am" name="3">
        <label class="label" for="a">it was an extraordinary number</label><br>
        <input type="radio" id="a" value="is" name="3">
        <label class="label" for="a">there was an extraordinary number</label><br>
        <input type="radio" id="a" value="are" name="3">
        <label class="label" for="a">an extraordinary number</label><br>
        <input type="radio" id="a" value="was" name="3">
        <label class="label" for="a">an extraordinary number existed</label><br>

        <br>
        <p>
            4. ____ sucked groundwater from below, some parts of the city have begun to sink as much as ten inches annually.
        </p>
        <input type="radio" id="a" value="am" name="4">
        <label class="label" for="a">Pumps have</label><br>
        <input type="radio" id="a" value="is" name="4">
        <label class="label" for="a">As pumps have</label><br>
        <input type="radio" id="a" value="are" name="4">
        <label class="label" for="a">So pumps have</label><br>
        <input type="radio" id="a" value="was" name="4">
        <label class="label" for="a">With pumps</label><br>

        <br>
        <p>
            5. Case studies are the target of much skepticism in the scientific community, ____ used extensively by numerous researchers.
        </p>
        <input type="radio" id="a" value="am" name="5">
        <label class="label" for="a">they are</label><br>
        <input type="radio" id="a" value="is" name="5">
        <label class="label" for="a">are</label><br>
        <input type="radio" id="a" value="are" name="5">
        <label class="label" for="a">yet they</label><br>
        <input type="radio" id="a" value="was" name="5">
        <label class="label" for="a">yet they are</label><br>
    </div>

    <div class="footer">
        <div class="left">
            <a href="materi3">
                << SKILL 2 : USE ADVERB TIME AND CAUSE CONNECTIONS CORRECTLY
            </a>
        </div>
        <div class="right">
          <!-- <router-link :to="{name: 'program.structure.part2'}"> -->
          <a href="hasil">Selesai >></a>
          <!-- </router-link> -->
        </div>

    </div>
</template>
<script>

</script>
<style>
.label{
    margin-left: 10px;
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
  margin-left: 610px;
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