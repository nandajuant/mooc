<!-- eslint-disable vue/no-parsing-error -->
<template>
    <div class="judul">
      <h5>Listening</h5>
    </div>
    
    <div class="subjudul">
      <H6>Latihan</H6>
    </div>

    <div class="materi">
      <!-- <audio controls>
        <source src="D:\Kuliah\SMT 8\Web Vue\mooc\src\components\Siswa\Program\Listening\listen.ogg" type="audio/ogg">
        <source src="D:\Kuliah\SMT 8\Web Vue\mooc\src\components\Siswa\Program\Listening\listen.mp3" type="audio/mpeg">
      Your browser does not support the audio element.
      </audio> -->
      <div class="audio-container">
        <audio :src="embedUrl" controls></audio>
      </div>
      <p>
            1. Why does the student come to the library?
        </p>
        <input type="radio" id="a" value="am" name="1">
        <label class="label" for="a">To learn about the library’s resources</label><br>
        <input type="radio" id="a" value="is" name="1">
        <label class="label" for="a">To ask about interlibrary loans</label><br>
        <input type="radio" id="a" value="are" name="1">
        <label class="label" for="a">To attend the new student orientation</label><br>
        <input type="radio" id="a" value="was" name="1">
        <label class="label" for="a">To start work on a research project</label><br>
        <br>
        <p>
            2. Why does the librarian point out the history section to the student?
        </p>
        <input type="radio" id="a" value="am" name="2">
        <label class="label" for="a">She wants to point out the closest area containing copy machines.</label><br>
        <input type="radio" id="a" value="is" name="2">
        <label class="label" for="a">She assumes that he will need to do research there.</label><br>
        <input type="radio" id="a" value="are" name="2">
        <label class="label" for="a">The student is looking for a book he used at his last school.</label><br>
        <input type="radio" id="a" value="was" name="2">
        <label class="label" for="a">Students sometimes mistakenly assume that the section contains literature books</label><br>
    </div>

    <div class="footer">
        <div class="left">
            <a href="halaman2">
                << Tip dan Trik
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
export default {
  data() {
    return {
      // Replace 'FILE_ID' with the actual file ID from your Google Drive link
      // embedUrl: 'https://docs.google.com/uc?export=open&id=1zwC98MMOqYoYPa8XfR5zXjryAq0a9MOK'
      embedUrl: 'https://drive.google.com/file/d/1zwC98MMOqYoYPa8XfR5zXjryAq0a9MOK/preview'
    };
  }
};
</script>
<style>
.audio-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
}
audio {
  width: 100%;
  max-width: 600px;
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