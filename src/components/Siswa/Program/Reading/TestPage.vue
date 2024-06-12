<!-- eslint-disable vue/no-parsing-error -->
<template>
    <div class="judul">
      <h5>Reading</h5>
    </div>
    
    <div class="subjudul">
      <H6>Latihan</H6>
    </div>


    <div class="materi">
      <p>
        Awarded the Nobel prize for physics in 1918, German physics Max Planck is the best remembered as the originator of the quantum theory. His work helped user in a new area in theoretical physics and revolutionized the scientific community’s understanding of atomic and sub atomic processes.
        <br>
        <br>Plank introduced an idea that led to the quantum theory, which became the foundation of twentieth century physics. In December 1990, Planck worked out an equation that described the distribution of radiation accurately over the range of low to high frequencies. He had developed a theory which depended on a model of matter that seemed very strange at the time. The model electromagnetic radiation in small chunks or particles. These particles were later called quantums. The energy associated with each quantum is measured by multiplying the frequency of the radiation, v, by a universal constant, h. Thus, energy, or E, equals hv. The constant, h, is known as Planck’s constant. It is now recognized as one of the fundamental constant of the world.
        <br>
        <br>Planck announced his finding in 1900, but it was years before the full consequences of his revolutionary quantum theory were  recognized. Throughout his life, Planck made significant contributions to optics, thermodynamics and statistical mechanics, physical chemistry, and other fields. In 1930, He was elected president of the Kaiser Wilhelm society, which was renamed the Max II. Though deeply opposed to the fascist regime of Adolf Hitler, Planck remained in Germany throughout the war. He died in Gottingen on October 4, 1947.

      </p>
        <p>
          1. In which of the following field di Max Planck NOT make a significant contribution?
        </p>
        <input type="radio" id="a" value="am" name="1">
        <label class="label" for="a">Optics</label><br>
        <input type="radio" id="a" value="is" name="1">
        <label class="label" for="a">Thermodynamics</label><br>
        <input type="radio" id="a" value="are" name="1">
        <label class="label" for="a">Statistical mechanics</label><br>
        <input type="radio" id="a" value="was" name="1">
        <label class="label" for="a">Biology</label><br>
        <br>
        <p>
            2. It can inferred from the passage that Planck’s work led to the development of which of the following?
        </p>
        <input type="radio" id="a" value="am" name="2">
        <label class="label" for="a">The rocket</label><br>
        <input type="radio" id="a" value="is" name="2">
        <label class="label" for="a">The atomic bomb</label><br>
        <input type="radio" id="a" value="are" name="2">
        <label class="label" for="a">The internal combustion engine</label><br>
        <input type="radio" id="a" value="was" name="2">
        <label class="label" for="a">The computer</label><br>
        <br>
        <p>
            2. The particles of electromagnetic radiation given off by matter are knows as…….
        </p>
        <input type="radio" id="a" value="am" name="3">
        <label class="label" for="a">Quantums</label><br>
        <input type="radio" id="a" value="is" name="3">
        <label class="label" for="a">Atoms</label><br>
        <input type="radio" id="a" value="are" name="3">
        <label class="label" for="a">Electrons</label><br>
        <input type="radio" id="a" value="was" name="3">
        <label class="label" for="a">Valences</label><br>
    </div>

    <div class="footer">
        <div class="left">
            <a href="halaman2">
                << Reading
            </a>
        </div>
        <div class="middle">
          <a >
            Latihan
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
  margin-right: 20px;
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