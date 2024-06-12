<!-- eslint-disable vue/no-parsing-error -->
<template>
    <div class="judul">
      <h5>Structure</h5>
    </div>
    
    <div class="subjudul">
      <H6>Detail</H6>
    </div>

    <div class="materi">
      

        <p>
            1. The North Platte River _____ from Wyoming into Nebraska.
            <button class="mulaibtn">Benar</button> 
        </p>
        <br>
        <input type="radio" id="a" value="am" name="1" disabled>
        <label class="label" for="a">it flowed</label><br>
        <input type="radio" id="a" value="is" name="1" checked>
        <label class="label" for="a">flows  </label> <button class="mulaibtn">Jawaban Benar</button> <br> 
        <input type="radio" id="a" value="are" name="1" disabled>
        <label class="label" for="a">flowing</label><br>
        <input type="radio" id="a" value="was" name="1" disabled>
        <label class="label" for="a">with flowing water</label><br>
        <br>
        <!-- <p>Jawaban Benar</p>
        <p><u>flows</u></p>
        <br> -->
        <p>
            2. _____ Biloxi received its name from a Sioux word meaning "first people."
            <button class="salahbtn">Salah</button>
        </p>
        <input type="radio" id="a" value="am" name="2" disabled>
        <label class="label" for="a">The city of   </label><button class="mulaibtn">Jawaban Benar</button><br>
        <input type="radio" id="a" value="is" name="2" checked>
        <label class="label" for="a">Located in</label><br>
        <input type="radio" id="a" value="are" name="2" disabled>
        <label class="label" for="a">It is in</label><br>
        <input type="radio" id="a" value="was" name="2" disabled>
        <label class="label" for="a">The tour included</label><br>
        <br>
        <!-- <p>Jawaban Benar</p>
        <p><u>The city of</u></p>
        <br> -->
        <p>
            3. A pride of lions _____ up to forty lions, including one to three males, several females, and cubs.
            <button class="mulaibtn"> Benar</button>
          </p>
        <input type="radio" id="a" value="am" name="3" checked> 
        <label class="label" for="a">can contain </label><button class="mulaibtn">Jawaban Benar</button><br>
        <input type="radio" id="a" value="is" name="3" disabled>
        <label class="label" for="a">it contains</label><br>
        <input type="radio" id="a" value="are" name="3" disabled>
        <label class="label" for="a">contain</label><br>
        <input type="radio" id="a" value="was" name="3" disabled>
        <label class="label" for="a">containing</label><br>

        <br>
        <!-- <p>Jawaban Benar</p>
        <p><u>can contain</u></p>
        <br> -->
        <p>
            4. ____ tea plant are small and white.
            <button class="mulaibtn"> Benar</button>
        </p>
        <input type="radio" id="a" value="am" name="4" disabled>
        <label class="label" for="a">The</label><br>
        <input type="radio" id="a" value="is" name="4" disabled>
        <label class="label" for="a">On the</label><br >
        <input type="radio" id="a" value="are" name="4" disabled>
        <label class="label" for="a">Having flowers the</label><br>
        <input type="radio" id="a" value="was" name="4" checked>
        <label class="label" for="a">The flowers of the </label> <button class="mulaibtn">Jawaban Benar</button><br>

        <br>
        <!-- <p>Jawaban Benar</p>
        <p><u>The flowers of the</u></p>
        <br> -->
        <p>
            5. The tetracyclines, ____ antibiotics, are used to treat infections.
            <button class="mulaibtn">Benar</button>
        </p>
        <input type="radio" id="a" value="am" name="5" disabled>
        <label class="label" for="a">are a family of</label><br>
        <input type="radio" id="a" value="is" name="5" disabled>
        <label class="label" for="a">being a family</label><br>
        <input type="radio" id="a" value="are" name="5" checked>
        <label class="label" for="a">a family of </label><button class="mulaibtn">Jawaban Benar</button><br>
        <input type="radio" id="a" value="was" name="5" disabled>
        <label class="label" for="a">their family is</label><br>
        <br>
        <!-- <p>Jawaban Benar</p>
        <p><u>a family of</u></p>
        <br> -->
    </div>

    <div class="footer">
        <div class="left">
          <router-link :to="{name: 'program.structure.part1.hasil'}" class="foot">
            <a>
                < Hasil
            </a>
          </router-link>
        </div>
        <!-- <div class="middle">
          <a >
            Latihan
          </a>
        </div> -->
        <div class="right">
          <router-link :to="{name: 'program.structure'}" class="foot">
          <a>Selesai ></a>
          </router-link>
        </div>

    </div>
</template>
<script>

</script>
<style>
 
.mulaibtn {
  background-color: #17A2B8;
  color: white;
  /* padding: 5px 10px; */
  /* margin: 8px 0; */
  border: none;
  /* float: right ; */
  display: inline-table;
  cursor: pointer;
  width: auto;
  height: 10%;
  /* opacity: 0.9; */
  border-radius: 10px;
  /* margin-right: 60px; */
  /* margin-top: 10px; */
}

.salahbtn {
  background-color: red;
  color: white;
  /* padding: 5px 10px; */
  /* margin: 8px 0; */
  border: none;
  /* float: right ; */
  display: inline-table;
  cursor: pointer;
  width: auto;
  height: 10%;
  /* opacity: 0.9; */
  border-radius: 10px;
  /* margin-right: 60px; */
  /* margin-top: 10px; */
}

.label{
    margin-left: 10px;
    display: inline;
}
.materi{
  /* display: flex; */
  /* float: left; */
  margin-left: 30px;
  display: inline-block;
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
  /* padding: 10px 20px; */
  color: #17A2B8;
  /* box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); */
  /* margin-left: 0%; */
  /* display: inline-flex; */
  margin-top: 90px;
  /* position: fixed; */
  bottom: 0;
  
}

.footer a{
  color: #17A2B8;
  padding: 8px 8px;
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
}


</style>