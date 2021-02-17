<style >
.slide-fade-enter-active {
  transition: all .8s ease;
}
.slide-fade-leave-active {
  transition: all .14s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
<template>
    <div>
        <NavBar></NavBar>
         <!--Main layout-->
        <main>
            <!--Main container-->            
              <transition name="slide-fade" appear>      
                <slot>

                </slot>
              </transition>
            
        </main>

        <Footer></Footer>
    </div>
</template>
<script>
import NavBar from './Nav';
import Footer from './Footer'
export default {
    components:{
        NavBar,
        Footer
    }
}
</script>
