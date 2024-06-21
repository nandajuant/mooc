<template>
    <div class="judul">
      <h5>Structure</h5>
    </div>
    
    <div class="subjudul">
      <H6>Perkenalan Structure</H6>
    </div><div>
        <!-- <video width="1000px" controls class="vid">
        <source src="structure.mp4" type="video/mp4">
        Your browser does not support the video tag.
        </video> -->
        <div class="video-container">
          <iframe
            :src="embedUrl"
            width="1920"
            height="1080"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
    </div>


    <div class="footer">
        <div class="left">

        </div>
        <!-- <div class="middle">
          <a >
            Video Perkenalan
          </a>
        </div> -->
        <div class="right">
          <!-- <router-link :to="{name: 'program.structure'}"> -->
          <button class="btn">
            <a href="materi">SENTENCES WITH ONE CLAUSE  ></a>
          </button>
          <!-- </router-link> -->
        </div>

    </div>
</template>
<script>
export default {
  data() {
    return {
      // Replace 'FILE_ID' with the actual file ID from your Google Drive link
      embedUrl: 'https://drive.google.com/file/d/1pdrNwIUMSCphZp9kIanbkoxpderj9OLH/preview'
    };
  }
};

</script>
<style>

.btn{
  color: white;
  background-color: #17A2B8;  
  border-radius: 10px;
  width: auto;
}


/* .btn a:hover{
  background-color: #17A2B8;
  border-radius: 10px;
  width: 330px;
}  */

.video-container {
  display: flex;
  justify-content: center;
  align-items: center;
  /* size-adjust: 50%; */
  /* margin: 20px; */
}
iframe {
  height: 400px;
  width: 800px;
  border: none;
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
  /* padding: 10px 20px; */
  /* color: #17A2B8; */
  color: #EEEEEE;
  /* box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); */
  /* margin-left: 0%; */
  margin-top: 20px;
  /* position: fixed; */
  bottom: 0;
  
}

.footer a{

  color: #EEEEEE;
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

.middle, .right {
  display: flex;
  align-items: center;
}

.middle a, .right a {
  /* margin-left: 900px; */
  /* color: #17A2B8; */
  text-decoration: none;
  margin: 0 10px;
}

.middle{
  flex-grow: 1;
  justify-content: center;
}

.right{
  justify-content: flex-end;  
  margin-right: 10px;
  /* color: #17A2B8; */
  /* bottom: 0; */
}



</style>