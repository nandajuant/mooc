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
            1. The North Platte River _____ from Wyoming into Nebraska.
        </p>
        <input type="radio" id="a" value="am" name="1">
        <label class="label" for="a">it flowed</label><br>
        <input type="radio" id="a" value="is" name="1">
        <label class="label" for="a">flows</label><br>
        <input type="radio" id="a" value="are" name="1">
        <label class="label" for="a">flowing</label><br>
        <input type="radio" id="a" value="was" name="1">
        <label class="label" for="a">with flowing water</label><br>
        <br>
        <p>
            2. _____ Biloxi received its name from a Sioux word meaning "first people."
        </p>
        <input type="radio" id="a" value="am" name="2">
        <label class="label" for="a">The city of</label><br>
        <input type="radio" id="a" value="is" name="2">
        <label class="label" for="a">Located in</label><br>
        <input type="radio" id="a" value="are" name="2">
        <label class="label" for="a">It is in</label><br>
        <input type="radio" id="a" value="was" name="2">
        <label class="label" for="a">The tour included</label><br>

        <br>
        <p>
            3. A pride of lions _____ up to forty lions, including one to three males, several females, and cubs.
        </p>
        <input type="radio" id="a" value="am" name="3">
        <label class="label" for="a">can contain</label><br>
        <input type="radio" id="a" value="is" name="3">
        <label class="label" for="a">it contains</label><br>
        <input type="radio" id="a" value="are" name="3">
        <label class="label" for="a">contain</label><br>
        <input type="radio" id="a" value="was" name="3">
        <label class="label" for="a">containing</label><br>

        <br>
        <p>
            4. ____ tea plant are small and white.
        </p>
        <input type="radio" id="a" value="am" name="4">
        <label class="label" for="a">The</label><br>
        <input type="radio" id="a" value="is" name="4">
        <label class="label" for="a">On the</label><br>
        <input type="radio" id="a" value="are" name="4">
        <label class="label" for="a">Having flowers the</label><br>
        <input type="radio" id="a" value="was" name="4">
        <label class="label" for="a">The flowers of the</label><br>

        <br>
        <p>
            5. The tetracyclines, ____ antibiotics, are used to treat infections.
        </p>
        <input type="radio" id="a" value="am" name="5">
        <label class="label" for="a">are a family of</label><br>
        <input type="radio" id="a" value="is" name="5">
        <label class="label" for="a">being a family</label><br>
        <input type="radio" id="a" value="are" name="5">
        <label class="label" for="a">a family of</label><br>
        <input type="radio" id="a" value="was" name="5">
        <label class="label" for="a">their family is</label><br>
    </div>

    <div class="footer">
        <div class="left">
          <button class="btn">
            <a href="materi3">
                < SKILL 2 : BE CAREFUL OF OBJECTS OF PREPOSITIONS
            </a>
          </button>
        </div>
        <div class="right">
          
          <button class="btn">
          <!-- <router-link :to="{name: 'program.structure.part2'}"> -->
          <a href="hasil">Selesai ></a>
        </button>
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