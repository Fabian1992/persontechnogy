<template>
    <LayautFrontendNav>
        <div>

            <div id="mdb-intro" class="py-4 text-center text-white blue-gradient">   
                <h1 class="h4 fw-bold mb-3">Contactos</h1>
                <h5>Puedes contactar con nosotros o ubicarnos en Salcedo-Ecuador. </h5>        
            </div>
            <div class="mx-5 row my-5">
                <div class="col-sm-6 card text-dark"  >
                    <div class="card-header">Nuestra Ubicación</div>
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe class="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7978.297361125969!2d-78.59012156160483!3d-1.0497545534980437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4df497e4f888b608!2sSOYSOFTWARE!5e0!3m2!1ses!2sec!4v1613591251819!5m2!1ses!2sec" allowfullscreen aria-hidden="false" tabindex="0"></iframe>
                    </div>
                </div>
                <div class="col-sm-6 card text-dark" >
                    <div class="card-header">Enviar un mensaje</div>
                    <div class="alert alert-success alert-dismissible fade show mt-2" v-if="flash.success" role="alert">
                        <strong>Gracias por escribirnos!.</strong> {{flash.success}}.
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    <form @submit.prevent="onSubmit" class="mt-3"> 
                    <!-- Name input -->
                    <div class="form-group form-outline mb-4">
                          <label for="exampleInputPassword1">Nombres</label>
                        <input type="text"  v-model="form.nombre" id="form4Example1" class="form-control  border" />
                        
                        
                         <div class="text-danger"  :key="index" v-for="(error,index) in errors.nombre" v-if="error">{{ error }}</div>
                    </div>

                 
                    <div class="form-outline mb-4">
                         <label for="exampleInputPassword1">Email</label>
                        <input type="email" v-model="form.email" id="form4Example2" class="form-control border" />
                       
                         <div class="text-danger"  :key="index" v-for="(error,index) in errors.email" v-if="error">{{ error }}</div>
                    </div>

                    <div class="form-outline mb-4">
                         <label for="exampleInputPassword1">Asunto</label>
                        <input type="text" v-model="form.asunto" id="form4Example15" class="form-control  border" />
                        
                        <div class="text-danger"  :key="index" v-for="(error,index) in errors.asunto" v-if="error">{{ error }}</div>
                    </div>
                   
                    <div class="form-outline mb-4">
                         <label for="exampleInputPassword1">Mensaje</label>
                        <textarea class="form-control border" v-model="form.mensaje" id="form4Example3" rows="4"></textarea>
                        
                        <div class="text-danger"  :key="index" v-for="(error,index) in errors.mensaje" v-if="error">{{ error }}</div>
                    </div>                    
                
                      <button type="submit"  class="btn btn-primary btn-block mb-3" size="sm" variant="primary" :disabled="loading">
                       
                        <span><em class="icon ni ni-navigate-fill mr-1" v-if="!loading"></em> Enviar</span>
                    </button>
                   
                    </form>
                </div>
            </div>
        </div>
    </LayautFrontendNav>
</template>

<script>
export default {
      props: {
    errors: Object,
    flash:Object
  },
    data(){
          return {
            form: this.$inertia.form({
                nombre: '',
                email: '',
                asunto: '',
                mensaje: '',
            }),
            loading: false,
          
        };
    },
      methods: {
        onSubmit(){
            this.loading = true           
                    this.form.post(route(`new-contact`), {                  
                    preserveScroll: true,
                    onSuccess: () => {                        
                        this.form.reset()
                        this.loading = false
                    },
                    onError: () => {
                       this.loading = false
                    }
                })
               
        },
      }
}
</script>