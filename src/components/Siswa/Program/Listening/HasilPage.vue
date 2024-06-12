<!-- eslint-disable vue/no-parsing-error -->
<template>
    <div class="judul">
      <h5>Listening</h5>
    </div>
    
    <div class="subjudul">
      <H6>Hasil</H6>
    </div>

    <div class="materi">
        <div class="deskripsi">
        <H6>Riwayat</H6>

        <router-link :to="{name: 'program.listening.test'}" class="btn btn-md savebtn">
            Ulang
        </router-link>
        </div>
        <br>    
        <div>
            <table>
                <tr>
                    <th>Tanggal</th>
                    <th>Presentase</th>
                    <th>Detail</th>
                </tr>
                <tr>
                    <td>22 Mei 2024 10:00:00</td>
                    <td>100%</td>
                    <td>
                        <router-link :to="{name: 'program.listening.detail'}" class="btn detail"> Detail
                        </router-link>
                    </td>
                </tr>
            </table>
        </div>
    </div>

    <div class="footer">
        <div class="left">
            <a href="halaman2">
                << Tip dan Trik
            </a>
        </div>
        <div class="middle">
          <a >
            Hasil
          </a>
        </div>
        <div class="right">
          <router-link :to="{name: 'program.listening'}">
          <a>Selesai >></a>
          </router-link>
        </div>

    </div>
</template>
<script>

</script>
<style>
.tr:hover {background-color: #D6EEEE;}
table {
  border-collapse: collapse;
  width: 95%;
  border: 1px solid #ddd;
}

th, td {
  text-align: left;
  padding: 16px;
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
  margin-left: 950px;
}

.detail{
  
  /* padding: 5px 10px; */
  /* margin: 8px 0; */
  border: 1;
  /* float: right; */
  cursor: pointer;
  width: 40%;
  height: 10%;
  opacity: 0.9;
  border-radius: 10px;
  background-color: #EEEEEE;
}
.deskripsi{
    display: flex;
    /* justify-content: space-around;  */
}
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
  margin-left: 590px;
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