<template>
 <div>
  <div class="card">
  <!-- <img src="" alt="Avatar" style="width:100%"> -->
  <div class="container-fluid">
    <h4 class="subjudul">Daftar Program</h4>
    
    <div class="program-card">
      <!-- <router-link :to="{name: 'program.listening'}" class="route"> -->
        <h6>Listening</h6>
      <!-- </router-link> -->
        <div class="progress-container">
          <div class="skills listening">20%</div>
        </div>
    </div>
    <br>
    <router-link :to="{name: 'program.structure'}" class="route">
    <div class="program-card">
      
        <h6>Structure</h6>
      
        <div class="progress-container">
          <div class="skills structure">60%</div>
        </div>
    </div>
  </router-link>
    
    <br>
    <div class="program-card">
      <!-- <router-link :to="{name: 'program.reading'}" class="route"> -->
        <h6>Reading</h6>
      <!-- </router-link> -->
        <div class="progress-container">
          <div class="skills reading">0%</div>
        </div>
    </div>
    <br>
  </div>
  </div>
</div>
<br>

<br>
</template>

<script>
// export default {
//   name: 'ProgressBar',
//   props: {
//     progress: {
//       type: Number,
//       required: true,
//       validator(value) {
//         return value >= 0 && value <= 100;
//       }
//     }
//   }
// }
</script>

<style>
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
  display: flexbox;
  padding: 2px 16px;
}

.subjudul{
  color: #17A2B8;
  padding: 10px;
}

.program-card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  background-color: #EEEEEE;
  border-radius: 10px;
  padding: 20px;
}

.rekomendasi-container {
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 50%;
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

.listening {
  width: 10%; 
  background-color: #17A2B8;
  border-radius: 10px;
  } 

  .reading {
  width: 20%; 
  background-color: white;
  border-radius: 10px;
  } 

  .structure {
  width: 60%; 
  background-color: #17A2B8;
  border-radius: 10px;
  } 

.selesai {
  width: 100%; 
  background-color: #17A2B8;
  border-radius: 10px;
  } 
</style>