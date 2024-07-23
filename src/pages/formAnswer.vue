<template>
  <div id="app" class="bg-red-600 py-56 min-h-screen">
    <div class="container mx-auto text-center px-8">
      <h2 class="text-3xl lg:text-6xl font-bold mb-2 text-white">{{type}}</h2>
      <h3 class="text-2xl lg:text-4xl font-bold mb-10 text-white">{{question}}</h3>
      <input type="text" v-model="inputAnswer" name="answer" id="answer" autocomplete="answer" class="block text-2xl flex-1 border-3 bg-white w-full p-4 pl-1 text-gray-900 placeholder:text-gray-400 placeholder:text-2xl focus:ring-0 sm:leading-6 text-center mb-5" placeholder="Masukkan jawaban" >
      <button type="submit" @click="processSubmit()" class="rounded-md bg-indigo-600 px-3 py-2 text-2xl font-semibold text-white w-1/2 shadow-md hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
      <!-- <h3 class="text-xl lg:text-4xl text-green-200">
        Deployed to
        <span
          class="font-bold bg-clip-text text-transparent bg-gradient-to-br from-blue-400 via-purple-400 to-blue-500"
        >DigitalOcean</span>
      </h3> -->

      <!-- <div class="flex justify-center space-x-2 mt-6 lg:mt-10">
        <a
          href="https://www.digitalocean.com/docs/app-platform"
          class="inline-block py-2 lg:py-4 px-4 lg:px-8 rounded bg-green-500 hover:bg-green-400 text-green-100 shadow hover:shadow-2xl transition duration-300"
        >View the Docs</a>
        <a
          href="https://cloud.digitalocean.com/apps"
          class="inline-block py-2 lg:py-4 px-4 lg:px-8 rounded bg-yellow-400 hover:bg-yellow-300 text-yellow-800 shadow hover:shadow-2xl transition duration-300"
        >View Your Dashboard</a>
        <a class="inline-block py-2 lg:py-4 px-4 lg:px-8 rounded bg-yellow-400 hover:bg-yellow-300 text-yellow-800 shadow hover:shadow-2xl transition duration-300">
          Test
        </a>
      </div> -->
    </div>
  </div>
</template>
<style scoped>
#app {
  /* background-color: #268351; */
  background-color: #001A41;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232c945c' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
</style>
  
  <script>
  
  import Swal from "sweetalert2"
  import wrongSfx from '../assets/sfx/wrong_sfx.mp3';
  import correctSfx from '../assets/sfx/correct_sfx.mp3';
  export default {
    
    name: 'formAnswer',
    metaInfo() {
      return {
        title: 'formAnswer',
      };
    },
    data(){
        return{
            idAnswer : null,
            question : "",
            inputAnswer:"",
            type:"",
            correctAnswer:null,
            statusAnswer:null,
            obj_answer:[
                {
                    idAnswer:1,
                    question:"Masukkan jawaban anda :",
                    type:'Extreme Addition',
                    answer:"9921",
                    status:false,
                },
                {
                    idAnswer:2,
                    question:"Masukkan jawaban anda : ",
                    type:'Riddles (1)',
                    answer:"ayu putri",
                    status:false,
                },
                {
                    idAnswer:3,
                    question:"Masukkan jawaban anda (in english): ",
                    type:'Riddles (2)',
                    answer:"mirror",
                    status:false,
                },
                {
                    idAnswer:4,
                    question:"Masukkan jawaban anda : ",
                    type:'Riddles (3)',
                    answer:"bagja",
                    status:false,
                },
                {
                    idAnswer:5,
                    question:"Masukkan jawaban anda : ",
                    type:'Riddles (4)',
                    answer:"kwok wai kiat",
                    status:false,
                },
                {
                    idAnswer:6,
                    question:"Masukkan jawaban anda (in english): ",
                    type:'Riddles (5)',
                    answer:"camera",
                    status:false,
                },
                {
                    idAnswer:7,
                    question:"Masukkan jawaban anda : ",
                    type:'Riddles (6)',
                    answer:"switaning ria lim",
                    status:false,
                },
                {
                    idAnswer:8,
                    question:"Masukkan jawaban anda : ",
                    type:'Riddles (7)',
                    answer:"kharisma",
                    status:false,
                },
                {
                    idAnswer:9,
                    question:"Masukkan jawaban anda : ",
                    type:'Riddles (8)',
                    answer:"greta pike",
                    status:false,
                },
                {
                    idAnswer:10,
                    question:"Masukkan jawaban anda : ",
                    type:'Riddles (9)',
                    answer:"dayu aditya pratama",
                    status:false,
                },
                {
                    idAnswer:11,
                    question:"Masukkan jawaban anda : ",
                    type:'Riddles (10)',
                    answer:"tedy rustandi",
                    status:false,
                },
                {
                    idAnswer:12,
                    question:"Masukkan jawaban anda (in english): ",
                    type:'Riddles (11)',
                    answer:"hair dryer",
                    status:false,
                },
            ],
        }
    },
    mounted(){
        console.log(this.$route.params.id)
        if(this.$route.params.id===undefined||this.$route.params.id==''||this.$route.params.id==null){
            this.$router.replace('/formAnswer/1').then(() => {
              this.$router.go()
            });
        }
        this.idAnswer = this.$route.params.id;
        console.log(this.idAnswer)
        // console.log(this.$route.params)
        this.question = this.obj_answer[this.idAnswer-1].question;
        this.type = this.obj_answer[this.idAnswer-1].type;
        this.correctAnswer = this.obj_answer[this.idAnswer-1].answer;
        this.statusAnswer = this.obj_answer[this.idAnswer-1].status;
        // alert(this.$route.params.id)
    },
    methods:{
        processSubmit(){
            if(this.inputAnswer!=this.correctAnswer){
                this.alertFalse()
            }else{
                this.alertTrue()
            }
            this.inputAnswer = "";
        },
        alertTrue(){
            var audio = new Audio(correctSfx)
             audio.play();
            Swal.fire({
                title: "Selamat",
                text: "Jawaban Benar!",
                icon: "success",
                showConfirmButton: false,
                timer: 6000,
                backdrop:`rgb(0, 103, 79)`,
                showClass: {
                popup: "animate__animated animate__fadeInDown",
                },
                hideClass: {
                popup: "animate__animated animate__fadeOutUp",
                },
            })
            // .then(() => {
            //     this.$router.back()
            // })
        },
        alertFalse(){
            var audio = new Audio(wrongSfx)
             audio.play();
            Swal.fire({
                title: "Maaf",
                text: "Jawaban Salah!",
                icon: "error",
                showConfirmButton: false,
                timer: 3000,
                backdrop:`rgb(136, 8, 8)`,
                showClass: {
                popup: "animate__animated animate__fadeInDown",
                },
                hideClass: {
                popup: "animate__animated animate__fadeOutUp",
                },
            })
        }
    },
    computed:{
      
    }
  };
  </script>
  