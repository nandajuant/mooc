<!-- eslint-disable vue/no-parsing-error -->
<template>
    <div class="judul">
      <h5>Structure</h5>
    </div>
    
    <div class="subjudul">
      <H6>To Be</H6>
    </div>

    <div class="materi">
    <div>
        <p>To be artinya penghubung antara subyek dan predikat dalam kalimat bahasa Inggris.</p>

        <p>To be dalam bahasa Inggris memiliki berbagai arti. Dalam sebuah kalimat, to be dapat diartikan "adalah" atau "yaitu", dan terkadang tidak memiliki makna sama sekali.</p>
    </div>

    <div>
      <div>
        <p>1. To Be Simple Tense</p>
      </div>
      <div>
        <p>
          – Am, digunakan untuk subyek tunggal I atau saya.
          <br>
          – Is,  digunakan jika subyek adalah orang ketiga tunggal, yaitu dia, yakni He (laki-laki), she (perempuan), dan it (benda).
          <br>
          – Are, digunakan jika subyek adalah jamak atau banyak, yaitu kita (we) atau mereka (They).
          <br>
          – Are, juga digunakan untuk untuk subyek tunggal orang lain, yaitu kamu (You).
        </p>
      </div>
    </div>

    <div>
      <div>
        <p>2. To Be Past Tense</p>
      </div>
      <div>
        <p>
          – Was, fungsinya seperti penggunaan Is namun digunakan untuk bentuk lampau atau past tense. Was digunakan untuk subjek I, She, He dan It.
          <br>
          – Were, fungsinya seperti penggunaan Are, namun digunakan untuk waktu lampau. Were merupakan to be yang digunakan untuk subjek You, We, They.
        </p>
      </div>
    </div>
    <div>
      <div>
        <p>Contoh Penggunaan To Be</p>
      </div>
      <div>
        <p>
          – am
          <br>
          I am very busy (saya sangat sibuk)
          <br>
          I am a student (saya adalah seorang murid)
          <br>
          Am I your friend? (apakah saya temanmu?)
          <br>
          – is
          <br>
          She is busy (Dia sedang sibuk)
          <br>
          He is my brother (Dia adalah kakak laki-lakiku)
          <br>
          Is it my pen? (Apakah ini penaku?)
          <br>
          – are
          <br>
          They are students (mereka adalah murid)
          <br>
          You are my sister (kamu adalah kakak perempuanku)
          <br>
          We are the champion (kita adalah pemenang)
          <br>
          Are you my doctor? (apakah Anda dokter saya?)
          <br>
          – was
          <br>
          I was there (saya berada di sana)
          <br>
          He was not listen (dia tidak mendengarkan)
          <br>
          Was she cute? (apa dia manis?)

          <br>
          – were
          <br>
          They were not here (mereka tidak ada disini)
        </p>
      </div>
    </div>
    </div>

    <div class="footer">
        <div class="left">
            <a href="halaman1">
                << Video Perkenalan
            </a>
        </div>
        <div class="middle">
          <a >
            To Be
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
  margin-left: 670px;
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