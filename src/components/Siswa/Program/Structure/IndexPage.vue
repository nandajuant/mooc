<template>
    <div>
        <div class="card">
  <!-- <img src="" alt="Avatar" style="width:100%"> -->
  <div class="container-fluid">
    <h4 >Structure</h4>
    
    <div class="deskripsi">
        <p>Structure merupakan salah satu bentuk TOEFL dimana berfokus dalam kemampuan menyusun kalimat yang benar.</p>

        <!-- <router-link :to="{name: 'program.structure.part1'}" class="btn btn-md savebtn">
            Lanjut Belajar
        </router-link> -->
    </div>
    
    <!-- <br> -->

    <div class="program-container">
        <div class="program-card atas">
            <h6>Kemajuan Belajar</h6>
            <div class="progress-container">
                <div class="skills program">60%</div>
            </div>
        </div>
        <br>
        <div class="program-card atas">
            <h6>Forum Diskusi</h6>
            <p>Gabung pada grup Telegram ini untuk berdiskusi bersama teman baru di : 
            <a href="https://t.me/nandajuant">Grup Telegram ECTC</a></p>
        </div>
        <br>
    </div>
    
    
    <br>
    <h4 >Daftar Materi</h4>
    <div class="materi-container">

      <div class="materi-card">
        <h6>SENTENCES WITH ONE CLAUSE</h6>
        <router-link :to="{name: 'program.structure.part1.video'}" class="btn btn-md savebtn">
            Ulangi Belajar
        </router-link>
        <div>  
          <table class="tabel">
            <tr>
              <td>Riwayat Latihan</td>
              <td></td>
              <td>Nilai</td>
            </tr>
            <tr>
              <td>22 Mei 2024 10:00:00</td>
              <td></td>
              <td>80%</td>
            </tr>
          </table>
        </div>
      </div>

      <!-- <br> -->

      <div class="materi-card">
        <h6>SENTENCES WITH MULTIPLE CLAUSE</h6>
        <router-link :to="{name: 'program.structure.part2.video'}" class="btn btn-md savebtn">
            Ulangi Belajar
        </router-link>
        <div>  
          <table class="tabel">
            <tr>
              <td>Riwayat Latihan</td>
              <td></td>
              <td>Nilai</td>
            </tr>
            <tr>
              <td>22 Mei 2024 10:00:00</td>
              <td></td>
              <td>100%</td>
            </tr>
          </table>
        </div>
      </div>

      <!-- <br> -->

      <div class="materi-card">
        <h6>MORE SENTENCES WITH MULTIPLE CLAUSE</h6>
        <router-link :to="{name: 'program.structure.part1.video'}" class="btn btn-md savebtn">
            Ulangi Belajar
        </router-link>
        <div>  
          <table class="tabel">
            <tr>
              <td>Riwayat Latihan</td>
              <td></td>
              <td>Nilai</td>
            </tr>
            <tr>
              <td>22 Mei 2024 10:00:00</td>
              <td></td>
              <td>80%</td>
            </tr>
          </table>
        </div>
      </div>
      
      <!-- <br> -->

      <div class="materi-card mulai">
        <router-link :to="{name: 'program.structure.part1.video'}" class="btn btn-md mulaibtn">
            Mulai Belajar
        </router-link>
        <h6>SENTENCES WITH REDUCED CLAUSE</h6>
        
        <div>  
          <!-- <table class="tabel">
            <tr>
              <td>Riwayat Latihan</td>
              <td></td>
              <td>Nilai</td>
            </tr>
            <tr>
              <td>22 Mei 2024 10:00:00</td>
              <td></td>
              <td>80%</td>
            </tr>
          </table> -->
        </div>
      </div>

      <!-- <br> -->

      <div class="materi-card  mulai">
        <router-link :to="{name: 'program.structure.part1.video'}" class="btn btn-md mulaibtn">
            Mulai Belajar
        </router-link>
        <h6>SENTENCES WITH INVERTED SUBJECTS AND VERBS</h6>
        
        
        <div>  
          <!-- <table class="tabel">
            <tr>
              <td>Riwayat Latihan</td>
              <td></td>
              <td>Nilai</td>
            </tr>
            <tr>
              <td>22 Mei 2024 10:00:00</td>
              <td></td>
              <td>80%</td>
            </tr>
          </table> -->
        </div>
      </div>
      <!-- <div class="program-card bawah">
          <h6>Forum Diskusi</h6>
          <p>Gabung pada grup Telegram ini untuk berdiskusi bersama teman baru</p>
          <a href="https://t.me/nandajuant">Grup Telegram ECTC</a>
      </div> -->
  </div>

    <br>
    <br>
  </div>
  </div>
    </div>
</template>
<script>
</script>
<style>

td{
  width: 180px;
}


.deskripsi{
    display: flex;
    /* justify-content: space-around;  */
}
.savebtn {
  background-color: #17A2B8;
  color: white;
  /* padding: 5px 10px; */
  /* margin: 8px 0; */
  border: none;
  float: right;
  cursor: pointer;
  width: 12%;
  height: 10%;
  opacity: 0.9;
  border-radius: 10px;
  margin-left: 130px;
  /* margin-top: 10px; */
}

.mulai{
  display: inline-table;
}

.mulaibtn {
  background-color: #17A2B8;
  color: white;
  /* padding: 5px 10px; */
  /* margin: 8px 0; */
  /* border: none; */
  float: right ;
  cursor: pointer;
  width: 12%;
  height: 10%;
  opacity: 0.9;
  border-radius: 10px;
  /* margin-right: 60px; */
  /* margin-top: 10px; */
}
.card {
  /* Add shadows to create the "card" effect */
  /* box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); */
  transition: 0.3s;
  padding: 10px;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 0 50px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.route{
  color: black;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

/* Add some padding inside the card container */
.container-fluid {
  padding: 2px 16px;
}

.subjudul{
  color: #17A2B8;
  padding: 10px;
}

.program-card {
  /* Add shadows to create the "card" effect */
  margin-right: 20px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  background-color: #EEEEEE;
  border-radius: 10px;
  padding: 20px;
  align-items: center;
  width: 60%;
}

.materi-card {
  /* Add shadows to create the "card" effect */

  margin-right: 20px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  background-color: #EEEEEE;
  border-radius: 10px;
  padding: 20px;
  align-items: center;
  width: 100%;
  margin-top: 12px;
  /* display:flex; */
}



.atas{
    height: 105px;
}

/* .bawah{
    width: 1200px;
} */

.program-container {
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 100%;
        }

        .materi-container {
            /* display: flex; */
            justify-content: space-around;
            align-items: center;
            width: 100%;
        }
.rekomendasi-card {
  /* Add shadows to create the "card" effect */
  background-color: #EEEEEE;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            width: 30%;
            padding: 16px;
            box-sizing: border-box;
            text-align: center;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.progress-container {
        width: 100%;
        background-color: white;
        border-radius: 10px;
        }
.progress-bar {
            width: 0%;
            height: 30px;
            background-color: #17A2B8;
            border-radius: 25px;
            text-align: center;
            line-height: 30px;
            color: white;
            font-weight: bold;
        }

.skills {
  text-align: right; /* Right-align text */
  color: white; /* White text color */
  padding-right : 10px;
}

.program {
  width: 60%; 
  background-color: #17A2B8;
  border-radius: 10px;
  } 
.selesai {
  width: 100%; 
  background-color: #17A2B8;
  border-radius: 10px;
  } 

  .tabel{
    border: none;
  }
</style>