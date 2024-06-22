<template>
 <div>
  <div class="card">
  <!-- <img src="" alt="Avatar" style="width:100%"> -->
  <div class="container-fluid">
    <h4 class="subjudul">Program</h4>

    <router-link :to="{name: 'admin.tambah'}" class="btn btn-md createbtn">
          Tambah Program
    </router-link>
    <br>
    </div>

    
  <div class="container">
    
    <div v-for="(card, index) in cards" :key="index" class="program-card">
      <h3>{{ card.title }}</h3>
      <p>{{ card.content }}</p>
      <div>
          <button class="logoutbtn">Ubah</button>
          <button class="savebtn" @click="deleteCard(index)">Hapus</button>   
        </div>
      <br>
    </div>

    <!-- <div class="program-card">
        <h6> Listening</h6>
       
        <p>Listening merupakah salah satu bentuk TOEFL dimana berfokus mendengarkan percakapan dan menjawab pertanyaan</p>
        <div>
          <button class="logoutbtn">Ubah</button>
          <button class="savebtn" @click="deleteCard(index)">Hapus</button>   
        </div>
      </div>
    <br>
    -->
    <!-- <div class="program-card">
        <h6> Reading</h6>
        <p>Reading merupakah salah satu bentuk TOEFL dimana berfokus mendengarkan percakapan dan menjawab pertanyaan</p>
        <div>
          <button class="logoutbtn">Ubah</button>
          <button class="savebtn">Hapus</button>   
        </div>
      </div>
    <br> -->
    
    <div class="program-card">
        <h3> Structure</h3>
        <p>Structure merupakah salah satu bentuk TOEFL dimana berfokus mendengarkan percakapan dan menjawab pertanyaan</p>
        <div>
          <!-- <button class="logoutbtn">Ubah</button> -->
          <router-link :to="{name: 'admin.ubah'}" class="">
          <button type="submit" class="logoutbtn" >Ubah</button>
          </router-link>
          <button class="savebtn">Hapus</button>   
        </div>
      </div>
      <div class="program-card">
        <h3> Reading</h3>
        <p>Reading merupakah salah satu bentuk TOEFL dimana berfokus mendengarkan percakapan dan menjawab pertanyaan</p>
        <div>
          <!-- <button class="logoutbtn">Ubah</button> -->
          <router-link :to="{name: 'admin.ubah'}" class="">
          <button type="submit" class="logoutbtn" >Ubah</button>
          </router-link>
          <button class="savebtn">Hapus</button>   
        </div>
      </div>
    <br>
    <br>
  </div>
  </div>
</div>
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

export default {
  name: 'CardContainer',
  data() {
    return {
      cards: [
        { title: ' Listening', content: 'Listening merupakah salah satu bentuk TOEFL dimana berfokus mendengarkan percakapan dan menjawab pertanyaan.' },
        // { title: ' Reading', content: 'Reading merupakah salah satu bentuk TOEFL dimana berfokus mendengarkan percakapan dan menjawab pertanyaan.' },
        // { title: ' Structure', content: 'Structure merupakah salah satu bentuk TOEFL dimana berfokus mendengarkan percakapan dan menjawab pertanyaan.' }
      ]
    };
  },
  methods: {
    deleteCard(index) {
      this.cards.splice(index, 1);
    }
  }
};
</script>

<style>
.createbtn {
background-color: #17A2B8;
color: white;
/* padding: 5px 10px; */
/* margin: 8px 0; */
border: none;
float: right;
cursor: pointer;
width: 15%;
height: 10%;
opacity: 0.9;
border-radius: 10px;
margin-left: 160px;
margin-top: 0px;
}
.savebtn {
  background-color: #B81717;
  color: white;
  padding: 5px 10px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 10%;
  opacity: 0.9;
  border-radius: 10px;
  margin-left: 5px;
}

.logoutbtn {
  background-color: #1727B8;
  color: white;
  padding: 5px 10px;
  margin-right: 10px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 10%;
  opacity: 0.9;
  border-radius: 10px;
  
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
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  background-color: #EEEEEE;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  margin-top: 10px
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

.program {
  width: 20%; 
  background-color: #17A2B8;
  border-radius: 10px;
  } 
.selesai {
  width: 100%; 
  background-color: #17A2B8;
  border-radius: 10px;
  } 
</style>