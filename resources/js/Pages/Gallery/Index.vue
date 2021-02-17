<template>
   <FrontendNav>
    <div>      
        <div id="mdb-intro" class="py-4 text-center text-white blue-gradient" style="background-color: #F0F2F5;">   
          <h1 class="h4 fw-bold mb-3">Galeria</h1>        
        </div>
        <div class="container"> 
          <div class="card" >
            <div class="row mt-4">
              <div class="col-sm-3 mt-3 bg-image  shadow-2-strong " :key="index" v-for="(alf,index) in alfa">
                <EnlargeableImage  height="150 px" class="img-fluid "  :src="alf.img" :src_large="alf.img" animation_duration="2000" />
                
              </div>
            </div>

          </div>
        </div>
    </div>  
       
   </FrontendNav>

</template>

<script>
import FrontendNav from '../Layaut/FrontendNav.vue'

export default {
  components: { FrontendNav },
  props:{
    alfa:Array
  }
    
}
</script>
<style scoped>

.enlargeable-image .enlargeable-image-slot {
  display:inline-block;
}
.enlargeable-image .enlargeable-image-slot > img {
  max-width:100%;
}
.enlargeable-image > .enlargeable-image-slot {
  max-width:100%;
  max-height:100%;
  cursor:zoom-in;
}
.enlargeable-image > .enlargeable-image-slot.active {
  opacity:0.3;
  filter:grayscale(100%);
}
.enlargeable-image .enlargeable-image-full {
  cursor:zoom-out;
  background-color:transparent;
  align-items:center;
  justify-content:center;
  background-position: center center;
  background-repeat:no-repeat;
  background-size:contain;
  z-index:2000;
  display:none;
}
.enlargeable-image .enlargeable-image-full > img {
  object-fit:contain;
  width:100%;
  height:100%;
}
.enlargeable-image .enlargeable-image-full.enlarging {
  display:flex;
  position:fixed;
  left:0px;
  top:0px;
  width:100%;
  height:100%;
  background-color:transparent;
  cursor:zoom-out;
}
.enlargeable-image .enlargeable-image-full.delarging {
  display:flex;
  position:fixed;
  left:0px;
  top:0px;
  width:100%;
  height:100%;
  background-color:transparent;
  cursor:zoom-in;
}
.enlargeable-image .enlargeable-image-full.enlarged {
  display:flex;
}
</style>