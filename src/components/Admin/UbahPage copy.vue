<template>
    <form action="">
        <div class="card">
            
            <div class="container">
                <h4 class="subjudul">Tambah Program</h4>
            
                <hr>
                <br>
                <label for="email"><b>Judul</b></label>
                <input type="text" placeholder="Masukkan Judul" name="email" id="email" value="Basic Structure"  >
                
            
                <label for="email"><b>Deskripsi</b></label>
                <input type="textarea" placeholder="Masukkan Deskripsi" name="email" id="email" value="Structure merupakah salah satu bentuk TOEFL dimana berfokus mendengarkan percakapan dan menjawab pertanyaan." >
            
                <label for="psw"><b>Rekomendasi Belajar</b></label>
                <input type="textarea" placeholder="Masukkan Rekomendasi Belajar" name="psw" id="psw" value="Gunakanlah headset untuk pendengaran yang lebih jelas dan membaca secara teliti.">
            
            
                <button type="submit" class="logoutbtn">Batal</button>
                
                <button type="submit" class="savebtn" @click="simpan">Simpan</button>
            </div>
        </div>
    
        <div class="card">
            
            <div class="container">
                <h4 class="subjudul">Tambah Materi</h4>
            
                <hr>
                <br>
                <div>
                <h5 class="subjudul">Halaman 1</h5>
                <button type="submit" class="tambahbtn">Tambah Halaman</button>
                </div>
                <hr>
                <br>

                <label for="email"><b>Subjudul</b></label>
                <input type="text" placeholder="Masukkan Subjudul" value="To Be" name="email" id="email"  >
                
            
                <label for="email"><b>Deskripsi</b></label>
                <textarea @input="autoResize" placeholder="Masukkan Deskripsi" name="email" id="email" 
                value="To be artinya penghubung antara subyek dan predikat dalam kalimat bahasa Inggris. 
To be dalam bahasa Inggris memiliki berbagai arti. Dalam sebuah kalimat, to be dapat diartikan adalah atau yaitu, dan terkadang tidak memiliki makna sama sekali.
1. To Be Simple Tense
– Am, digunakan untuk subyek tunggal I atau saya.
– Is,  digunakan jika subyek adalah orang ketiga tunggal, yaitu dia, yakni He (laki-laki), she (perempuan), dan it (benda).
– Are, digunakan jika subyek adalah jamak atau banyak, yaitu kita (we) atau mereka (They). 
– Are, juga digunakan untuk untuk subyek tunggal orang lain, yaitu kamu (You).

2. To Be Past Tense
– Was, fungsinya seperti penggunaan Is namun digunakan untuk bentuk lampau atau past tense. Was digunakan untuk subjek I, She, He dan It.
– Were, fungsinya seperti penggunaan Are, namun digunakan untuk waktu lampau. Were merupakan to be yang digunakan untuk subjek You, We, They.
   
Contoh Penggunaan To Be
– am
I am very busy (saya sangat sibuk)
I am a student (saya adalah seorang murid)
Am I your friend? (apakah saya temanmu?)

– is
She is busy (Dia sedang sibuk)
He is my brother (Dia adalah kakak laki-lakiku)
Is it my pen? (Apakah ini penaku?)

– are
They are students (mereka adalah murid)
You are my sister (kamu adalah kakak perempuanku)
We are the champion (kita adalah pemenang)
Are you my doctor? (apakah Anda dokter saya?)

– was
I was there (saya berada di sana)
He was not listen (dia tidak mendengarkan)
Was she cute? (apa dia manis?)

– were
They were not here (mereka tidak ada disini)
" >
                </textarea>
            
                <label for="psw"><b>Unggah File</b></label>
                <input type="text" placeholder="Unggah File" name="psw" id="psw"  >
            
            
                <button type="submit" class="logoutbtn">Batal</button>
                
                <button type="submit" class="savebtn" @click="simpan">Simpan</button>
            </div>
        </div>

        <div class="card">
            
            <div class="container">
                <h4 class="subjudul">Tambah Test</h4>
                <hr>
                <br>
            
                <label for="email"><b>Judul</b></label>
                <input type="text" value="Latihan" placeholder="Masukkan Judul" name="email" id="email"  >
                
                
            
                <label for="email"><b>Deskripsi</b></label>
                <input type="textarea" placeholder="Masukkan Deskripsi" name="email" id="email"  >
            
                <label for="psw"><b>Unggah File</b></label>
                <input type="text" placeholder="Unggah File" name="psw" id="psw"  >
<!--             
            
                <button type="submit" class="logoutbtn">Batal</button>
                
                <button type="submit" class="savebtn" @click="simpan">Simpan</button> -->
            </div>

            <div class="container">
                <div >
                    <h6 class="subjudul">Pertanyaan 1</h6>
                    <button type="submit" class="tambahbtn">Tambah Pertanyaan</button>
                </div>
                
                <hr>
                <br>
            
                <label for="email"><b>Pertanyaan</b></label>
                <input type="text" value="I ___ eat apple" placeholder="Masukkan Pertanyaan" name="email" id="email"  >
                
            
                <label for="email"><b>Jawaban</b></label>
                <!-- <input type="text" placeholder="Masukkan Jawaban" name="email" id="email"  > -->
                <div>
                    <input type="radio" id="a" value="am" name="1" checked>
                    <input type="jawaban" value="am" placeholder="Masukkan Jawaban Benar" name="email" id="email"  >
                    <br>
                    
                    <input type="radio" id="a" value="am" name="1" disabled>
                    <input type="jawaban" value="is" placeholder="Masukkan Jawaban Salah" name="email" id="email"  >
                    <br>
                    
                    <input type="radio" id="a" value="am" name="1" disabled>
                    <input type="jawaban" value="are" placeholder="Masukkan Jawaban Salah" name="email" id="email"  >
                    <br>
                    
                    <input type="radio" id="a" value="am" name="1" disabled>
                    <input type="jawaban" value="was" placeholder="Masukkan Jawaban Salah" name="email" id="email"  >
                    <br>
                </div>
            
                <label for="psw"><b>Alasan</b></label>
                <input type="text" value="Penggunaan To Be untuk I adalah am" placeholder="Masukkan Alasan" name="psw" id="psw"  >
            
            
                <!-- <button type="submit" class="logoutbtn">Batal</button>
                
                <button type="submit" class="savebtn" @click="simpan">Simpan</button> -->
            </div>

            <div class="container">
                <div >
                    <h6 class="subjudul">Pertanyaan 2</h6>
                    <!-- <button type="submit" class="tambahbtn">Tambah Pertanyaan</button> -->
                </div>
                
                <hr>
                <br>
            
                <label for="email"><b>Pertanyaan</b></label>
                <input type="text" value="___ is busy" placeholder="Masukkan Pertanyaan" name="email" id="email"  >
                
            
                <label for="email"><b>Jawaban</b></label>
                <!-- <input type="text" placeholder="Masukkan Jawaban" name="email" id="email"  > -->
                <div>
                    <input type="radio" id="b" value="am" name="2" checked>
                    <input type="jawaban" value="She" placeholder="Masukkan Jawaban Benar" name="email" id="email"  >
                    <br>
                    
                    <input type="radio" id="b" value="am" name="2" disabled>
                    <input type="jawaban" value="I" placeholder="Masukkan Jawaban Salah" name="email" id="email"  >
                    <br>
                    
                    <input type="radio" id="b" value="am" name="2" disabled>
                    <input type="jawaban" value="We" placeholder="Masukkan Jawaban Salah" name="email" id="email"  >
                    <br>
                    
                    <input type="radio" id="b" value="am" name="2" disabled>
                    <input type="jawaban" value="They" placeholder="Masukkan Jawaban Salah" name="email" id="email"  >
                    <br>
                </div>
            
                <label for="psw"><b>Alasan</b></label>
                <input type="text" value="Penggunaan To Be is adalah She atau He" placeholder="Masukkan Alasan" name="psw" id="psw"  >
            
            
                <button type="submit" class="logoutbtn">Batal</button>
                
                <button type="submit" class="savebtn" @click="simpan">Simpan</button>
            </div>
        </div>
    </form>
    </template>
    <script>
export default {
  name: 'AutoResizingTextarea',
  data() {
    return {
      text: ''
    };
  },
  methods: {
    autoResize() {
      const textarea = this.$refs.textarea;
      textarea.style.height = 'auto'; // Reset height to auto
      textarea.style.height = `${textarea.scrollHeight}px`; // Set height to the scroll height
    },
    simpan() {
        alert('Perubahan Tersimpan!');
        
      }
  }
};
    </script>
    <style>
    .subjudul{
        color: #17A2B8;
        /* padding: 10px; */
        /* margin-left: 1px; */
        float: left;
    }
    .card {
  /* Add shadows to create the "card" effect */
  /* box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); */
  transition: 0.3s;
  /* padding: 10px; */
  width: 90%;
  margin: 0 50px;
  margin-top: 10px;
  margin-bottom: 10px;
}
    * {box-sizing: border-box}
    
    /* Add padding to containers */
    
    /* Full-width input fields */
    input[type=text], input[type=password] {
      width: 100%;
      padding: 15px;
      margin: 5px 0 22px 0;
      display: inline-block;
      border: none;
      background: #f1f1f1;
      border-radius: 10px;
    }

    input[type=jawaban] {
      width: 90%;
      padding: 15px;
      margin: 5px 0 22px 0;
      margin-left: 10px;
      display: inline-block;
      border: none;
      background: #f1f1f1;
      border-radius: 10px;
    }
    
    input[type=text]:focus, input[type=password]:focus {
      background-color: #ddd;
      outline: none;
    }
    
    /* Overwrite default styles of hr */
    hr {
      border: 1px solid #f1f1f1;
      margin-bottom: 25px;
    }
    
    /* Set a style for the submit/register button */
    .savebtn {
      background-color: #17A2B8;
      color: white;
      padding: 5px 10px;
      margin: 8px 0;
      border: none;
      cursor: pointer;
      width: 10%;
      opacity: 0.9;
      /* float: right ; */
      border-radius: 10px;
      margin-left: 5px;
    
    }

    .tambahbtn {
      background-color: #17A2B8;
      color: white;
      padding: 5px 10px;
      /* margin: 8px 0; */
      border: none;
      cursor: pointer;
      width: auto;
      opacity: 0.9;
      float: right ;
      border-radius: 10px;
      /* margin-left: 5px; */
    
    }
    
    .logoutbtn {
      background-color: #aa0404;
      color: white;
      padding: 5px 10px;
      margin-right: 10px;
      margin: 8px 0;
      border: none;
      cursor: pointer;
      width: 10%;
      opacity: 0.9;
      /* float: right; */
      border-radius: 10px;
      
    }

    input[type=textarea]{
    width: 1100px;
    height: 100px;
    width: 100%;
    padding: 15px;
    margin: 5px 0 22px 0;
    display: inline-block;
    border: none;
    background: #f1f1f1;
    border-radius: 10px;
    white-space: pre-line;
    }
    
    textarea{
width: 100%;
height: auto;
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  /* overflow: hidden;    */
  resize: none; 
    }
    .registerbtn:hover {
      opacity:1;
    }
    
    /* Add a blue text color to links */
    a {
      color: dodgerblue;
    }
    
    /* Set a grey background color and center the text of the "sign in" section */
    .signin {
      background-color: #f1f1f1;
      text-align: center;
    }
    
    </style>