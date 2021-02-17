<template>
    <header>
        <!-- Navbar -->
        <nav class="navbar navbar-expand-lg navbar-light bg-white">
                <!-- Container wrapper -->
                <div class="container-fluid">
                    <!-- Navbar brand -->
                    <inertia-link class="navbar-brand" :href="route('home')">
                        PT                
                    </inertia-link>

                    <!-- Toggle button -->
                    <button class="navbar-toggler" type="button"    data-mdb-toggle="collapse"  data-mdb-target="#navbarSupportedContent"   aria-controls="navbarSupportedContent"    aria-expanded="false"
                    aria-label="Toggle navigation" >
                        <i class="fas fa-bars">  </i>
                    
                    </button>

                    <!-- Collapsible wrapper -->
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left links -->
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                        
                                <inertia-link class="nav-link " :href="route('home')" :active="route().current('home')">Inicio

                                </inertia-link>                
                            </li>
                            <li class="nav-item">
                                <inertia-link class="nav-link" :href="route('acerca')" :active="route().current('acerca')">Acerca de nosotros
                                </inertia-link>                    
                            </li>
                            <li class="nav-item">
                                <inertia-link class="nav-link" :href="route('servicios')" :active="route().current('servicios')">Servicios
                                </inertia-link>
                            
                            </li>   
                            <li class="nav-item">
                                <inertia-link class="nav-link" :href="route('gallery')" :active="route().current('gallery')">Galeria
                                </inertia-link>
                            
                            </li>             
                               <li class="nav-item">
                                <inertia-link class="nav-link" :href="route('contact')" :active="route().current('contact')">Contactos
                                </inertia-link>
                            
                            </li>         
                            
                    </ul>
                    <!-- Left links -->            
                    <ul class="navbar-nav d-flex flex-row">
                        <!-- Icons -->
                        <li class="nav-item me-3 me-lg-0">
                            <a class="nav-link" href="https://www.youtube.com/channel/UCTQWC6Ms6a2G0GLNQHcjWtg" rel="nofollow" target="_blank">
                            <i class="fab fa-youtube"></i>
                            </a>
                        </li>
                        <li class="nav-item me-3 me-lg-0">
                            <a class="nav-link" href="https://www.facebook.com/persontechnology" rel="nofollow" target="_blank">
                            <i class="fab fa-facebook-f"></i>
                            </a>
                        </li>
                        <li class="nav-item me-3 me-lg-0">
                            <a class="nav-link" href="https://wa.me/message/P6E77NRUVOC3A1" rel="nofollow" target="_blank">
                            <i class="fab fa-whatsapp"></i>
                            </a>
                        </li>
                        <li class="nav-item me-3 me-lg-0">
                            <a class="nav-link" href="https://www.instagram.com/persontechnology/" rel="nofollow" target="_blank">
                            <i class="fab fa-instagram"></i>
                            </a>
                        </li>
                        </ul>
                         
                </div>
                    <!-- Collapsible wrapper -->
                  

              
                
            </div>
                <!-- Container wrapper -->
                
        </nav>

  
    </header>


</template>