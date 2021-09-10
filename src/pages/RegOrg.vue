<template>
    <q-page class="window-height row justify-center items-center"> <!-- Centra el contenido de la página, vertical y horizontalmente -->
        <div class="column q-pa-lg">
            <div class="row">
                <q-card square class="shadow-12" style="width:50vw">
                    <q-card-section class="bg-accent" color="primary">
                        <h4 class="text-h5 text-white q-my-md">Registrar programa</h4>
                    </q-card-section>
                    <q-card-section>
                        <q-form class="q-px-sm q-pt-xl">
                            <div class="row justify-between">
                                <div class="col-5">
                                    <q-input
                                        outlined
                                        rounded
                                        lazy-rules
                                        :rules="[this.required, this.short]"
                                        type="text"
                                        label="Nombre de la organizacion"
                                    >
                                    <template v-slot:prepend>
                                        <q-icon :name="nombre"></q-icon>
                                    </template>
                                    </q-input>
                                </div>
                                <div class="col-5">
                                    <q-input
                                        outlined
                                        rounded
                                        lazy-rules
                                        :rules="[this.required, this.short]"
                                        type="text"
                                        label="Departamento"
                                    >
                                    <template v-slot:prepend>
                                        <q-icon :name="departamento"></q-icon>
                                    </template>
                                    </q-input>
                                </div>
                            </div>
                            <q-input
                                outlined
                                rounded
                                lazy-rules
                                :rules="[this.required, this.short]"
                                type="text"
                                label="Direccion"
                            >
                            <template v-slot:prepend>
                                <q-icon :name="direccion"></q-icon>
                            </template>
                            </q-input>

                            <div class="row">
                                <div class="col"><q-icon :name="redes"></q-icon><p style="padding:5px">Redes</p></div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <q-input
                                        outlined
                                        rounded
                                        lazy-rules
                                        color="blue"
                                        :rules="[this.required, this.short]"
                                        type="link"
                                        label="Facebook"
                                    >
                                    <template v-slot:prepend>
                                        <q-icon :name="facebook"></q-icon>
                                    </template>
                                    </q-input>
                                </div>
                                <div class="col">
                                    <q-input
                                        outlined
                                        rounded
                                        lazy-rules
                                        color="cyan"
                                        :rules="[this.required, this.short]"
                                        type="link"
                                        label="Twitter"
                                    >
                                    <template v-slot:prepend>
                                        <q-icon :name="twitter"></q-icon>
                                    </template>
                                    </q-input>
                                </div>      
                                <div class="col">
                                    <q-input
                                        outlined
                                        rounded
                                        lazy-rules
                                        color="pink"
                                        :rules="[this.required, this.short]"
                                        type="link"
                                        label="Instagram"
                                    >
                                    <template v-slot:prepend>
                                        <q-icon :name="instagram"></q-icon>
                                    </template>
                                    </q-input>
                                </div>                          
                            </div>

                            <div class="row justify-between">
                                <div class="col-5">
                                     <q-input
                                        outlined
                                        rounded
                                        lazy-rules
                                        :rules="[this.required, this.short]"
                                        type="number"
                                        label="Años"
                                    >
                                    <template v-slot:prepend>
                                        <q-icon :name="anos"></q-icon>
                                    </template>
                                    </q-input>   
                                </div>
                                <div class="col-5">
                                    <q-select
                                        v-model="Insti"
                                        :options="optionsI"
                                        lazy-rules
                                        :rules="[this.required, this.short]"
                                        clearable
                                        rounded
                                        outlined
                                        label="Seleccione el tipo de institucion"
                                    >
                                    <template v-slot:prepend>
                                        <q-icon :name="institucion"></q-icon>
                                    </template>
                                    </q-select>
                                </div>
                            </div>
                            
                            <div class="row justify-between">
                                <div class="col-5">
                                    <q-select
                                        v-model="giro"
                                        lazy-rules
                                        :options="optionsG"
                                        :rules="[this.required, this.short]"
                                        clearable
                                        rounded
                                        outlined
                                        label="Seleccione su giro"
                                    >
                                    <template v-slot:prepend>
                                        <q-icon :name="giroi"></q-icon>
                                    </template>
                                    </q-select>
                                </div>
                                <div class="col-5">
                                    <q-file
                                        name="logo"
                                        lazy-rules
                                        :rules="[this.required, this.short]"
                                        rounded
                                        outlined
                                        label="Seleccione el archivo de su logo"
                                    >
                                    <template v-slot:prepend>
                                        <q-icon :name="logo"></q-icon>
                                    </template>
                                    </q-file>
                                </div>
                            </div>
                            <q-input
                                name="impactoA"
                                lazy-rules
                                :rules="[this.required, this.short]"
                                rounded
                                outlined
                                clearable
                                label="Impacto anual"
                                type="number"
                            >
                            <template v-slot:prepend>
                                <q-icon :name="impacto"></q-icon>
                            </template>
                            </q-input>
                            <div class="q-gutter-sm">
                                <div class="row">
                                    <div class="col-md-auto">
                                        <q-icon :name="ejes"></q-icon>
                                        <p>Seleccione sus ejes</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <q-checkbox v-model="ejes1" label="Cultura" color="orange"/>
                                    </div>
                                    <div class="col">
                                        <q-checkbox v-model="ejes2" label="Entretenimiento" color="blue"/>
                                    </div>
                                    <div class="col">
                                        <q-checkbox v-model="ejes3" label="Arte" color="teal"/>
                                    </div>
                                    <div class="col">
                                        <q-checkbox v-model="ejes4" label="Música" color="red"/>
                                    </div>
                                </div>
                                <div class="row">                                   
                                    <div class="col">
                                        <q-checkbox v-model="ejes5" label="Dance" color="cyan"/>
                                    </div>                                 
                                    <div class="col">
                                        <q-checkbox v-model="ejes6" label="Salud" color="pink"/>
                                    </div>
                                    <div class="col">
                                        <q-checkbox v-model="ejes7" label="Educación" color="green"/>
                                    </div>
                                    <div class="col">
                                        <q-checkbox v-model="ejes8" label="Manualidades" color="yellow"/>
                                    </div>
                                </div>
                                <div class="row">                                    
                                    <div class="col">
                                        <q-checkbox v-model="ejes9" label="Deporte" color="purple"/>
                                    </div>
                                    <div class="col">
                                        <q-checkbox v-model="ejes10" label="Proyectos productivos"  color="orange"/>
                                    </div>
                                    <div class="col">
                                        <q-checkbox v-model="ejes11" label="Emprendimiento" color="blue"/>
                                    </div>
                                    <div class="col">
                                        <q-checkbox v-model="ejes12" label="Intergeneracional" color="teal"/>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <q-checkbox v-model="ejes13" label="Viajes" color="red"/>
                                    </div>
                                    <div class="col">
                                        <q-checkbox v-model="ejes14" label="Clases" color="cyan"/>
                                    </div>
                                    <div class="col">
                                        <q-checkbox v-model="ejes15" label="Diplomados"  color="pink"/>
                                    </div>
                                    <div class="col">
                                        <q-checkbox v-model="ejes16" label="Rehabilitación" color="green"/>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <q-checkbox v-model="ejes17" label="Psicología" color="yellow"/>
                                    </div>
                                    <div class="col">
                                        <q-checkbox v-model="ejes18" label="Nutrición" color="purple"/>
                                    </div>
                                    <div class="col">
                                        <q-checkbox v-model="ejes19" label="Legalidad" color="orange"/>
                                    </div>
                                    <div class="col">
                                        <q-checkbox v-model="ejes20" label="Podología" color="blue"/>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <q-checkbox v-model="ejes21" label="Odontología" color="teal"/>
                                    </div>
                                    <div class="col">
                                        <q-checkbox v-model="ejes22" label="Optometría" color="red"/>
                                    </div>
                                    <div class="col">
                                        <q-checkbox v-model="ejes23" label="Geriatría" color="cyan"/>
                                    </div>
                                    <div class="col">
                                        <q-checkbox v-model="ejes24" label="Gerontología" color="pink"/>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <q-checkbox v-model="ejes25" label="Impacto rural" color="green"/>
                                    </div>
                                    <div class="col">
                                        <q-checkbox v-model="ejes26" label="Huertos"  color="yellow"/>
                                    </div>
                                    <div class="col">
                                        <q-checkbox v-model="ejes27" label="Activismo" color="purple"/>
                                    </div>
                                    <div class="col">
                                        <q-checkbox v-model="ejes28" label="Tecnología" color="orange"/>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <q-checkbox v-model="ejes29" label="Innovación" color="blue"/>
                                    </div>
                                    <div class="col">
                                        <q-checkbox v-model="ejes30" label="Disrupción" color="teal"/>
                                    </div>
                                    <div class="col">
                                        <q-checkbox v-model="ejes31" label="Moda" color="red"/>
                                    </div>
                                    <div class="col">
                                        <q-checkbox v-model="ejes32" label="Infraestructura" color="cyan"/>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <q-checkbox v-model="ejes33" label="Gerontodiseño" color="pink"/>
                                    </div>
                                    <div class="col">
                                        <q-checkbox v-model="ejes34" label="Asistencialismo" color="green"/>
                                    </div>
                                    <div class="col">
                                        <q-checkbox v-model="ejes35" label="Vivienda" color="yellow"/>
                                    </div>
                                    <div class="col">
                                        <q-checkbox v-model="ejes36" label="Actividades lúdicas" color="purple" />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <q-checkbox v-model="ejes37" label="Otros" color="orange"/>
                                    </div>
                                    <div class="col"></div>
                                    <div class="col"></div>
                                    <div class="col"></div>
                                </div>
                                <div class="row" style="margin:10px"></div>
                            </div>
                            <q-input
                                name="queHacen"
                                lazy-rules
                                :rules="[this.required]"
                                clearable
                                label="¿Que hacen?"
                                type="textarea"
                                rounded
                                outlined
                            >
                            <template v-slot:prepend>
                                <q-icon :name="ta1"></q-icon>
                            </template>
                            </q-input>
                            <q-input
                                name="comoHacen"
                                lazy-rules
                                :rules="[this.required]"
                                clearable
                                label="¿Cómo lo hacen?"
                                type="textarea"
                                rounded
                                outlined
                            >
                            <template v-slot:prepend>
                                <q-icon :name="ta2"></q-icon>
                            </template>
                            </q-input>
                            <q-input
                                name="porqueHacen"
                                lazy-rules
                                :rules="[this.required]"
                                clearable
                                label="¿Por qué lo hacen?"
                                type="textarea"
                                hint="Razón de ser o propósito"
                                rounded
                                outlined
                            >
                            <template v-slot:prepend>
                                <q-icon :name="ta3"></q-icon>
                            </template>
                            </q-input>
                        </q-form>
                    </q-card-section>
                </q-card>
            </div>
        </div>
    </q-page>
</template>
<script>

import { ref } from 'vue'
import { fasUser } from '@quasar/extras/fontawesome-v5'
import { fasBuilding } from '@quasar/extras/fontawesome-v5'
import { fasStreetView } from '@quasar/extras/fontawesome-v5'
import { fabTwitterSquare } from '@quasar/extras/fontawesome-v5'
import { fabInstagramSquare } from '@quasar/extras/fontawesome-v5'
import { fabFacebookSquare } from '@quasar/extras/fontawesome-v5'
import { fasStopwatch20 } from '@quasar/extras/fontawesome-v5'
import { fasUniversity } from '@quasar/extras/fontawesome-v5'
import { fasCircleNotch } from '@quasar/extras/fontawesome-v5'
import { fasFile } from '@quasar/extras/fontawesome-v5'
import { fasChartPie } from '@quasar/extras/fontawesome-v5'
import { fasVoteYea } from '@quasar/extras/fontawesome-v5'
import { fasQuestionCircle } from '@quasar/extras/fontawesome-v5'

export default{
    created(){
        this.nombre = fasUser,
        this.departamento = fasBuilding
        this.direccion = fasStreetView
        this.twitter = fabTwitterSquare
        this.instagram = fabInstagramSquare
        this.facebook = fabFacebookSquare
        this.anos = fasStopwatch20
        this.institucion = fasUniversity
        this.giroi = fasCircleNotch
        this.logo = fasFile
        this.impacto = fasChartPie
        this.ejes = fasVoteYea
        this.ta1 = fasQuestionCircle
        this.ta2 = fasQuestionCircle
        this.ta3 = fasQuestionCircle
    },
    setup(){
        return{
            giro: ref(null),
            optionsG: [
                'Rehabilitacion','Casa de día','Residencia','Caja de compensacion','Otro'
            ],

            Insti: ref(null),
            optionsI:[
                'Institución de gobierno', 'Institución privada'
            ],

            ejes1: ref(false), ejes2: ref(false), ejes3: ref(false), ejes4: ref(false), ejes5: ref(false),
            ejes6: ref(false), ejes7: ref(false), ejes8: ref(false), ejes9: ref(false), ejes10: ref(false),
            ejes11: ref(false), ejes12: ref(false), ejes13: ref(false), ejes14: ref(false), ejes15: ref(false),
            ejes16: ref(false), ejes17: ref(false), ejes18: ref(false), ejes19: ref(false), ejes20: ref(false),
            ejes21: ref(false), ejes22: ref(false), ejes23: ref(false), ejes24: ref(false), ejes25: ref(false),
            ejes26: ref(false), ejes27: ref(false), ejes28: ref(false), ejes29: ref(false), ejes30: ref(false),
            ejes31: ref(false), ejes32: ref(false), ejes33: ref(false), ejes34: ref(false), ejes35: ref(false),
            ejes36: ref(false), ejes37: ref(false),
        }        
    }    
}

</script>
