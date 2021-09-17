<template>
  <q-card class="my-card" flat bordered>
    <q-item>
      <q-item-section avatar>
        <q-avatar size="100px">
          <img
            src="https://avu.mx/wp-content/uploads/2020/06/cropped-Logotipo-AVU-3.png"
          />
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label style="font-size: 52px; text-align: center"
          ><b>AVU</b></q-item-label
        >
        <q-item-label
          caption
          style="font-size: 20px; color: teal; text-align: center"
        >
          <I>AVU Diversión Para Personas Mayores I.A.P.</I>
        </q-item-label>
      </q-item-section>
    </q-item>
    <q-banner style="text-align: center">
      Somos una fundación que combate la discriminación por edad de forma
      intergeneracional. <br />
      Un HUB de innovación para el envejecimientosin fines de lucro enfocado en
      crear soluciones sostenibles y escalables.
    </q-banner>
  </q-card>

  <q-page class="window-height">
    <div class="q-pa-md doc-container row justify-center">
      <div class="col-4">
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card flat bordered class="my-card">
            <img
              src="https://avu.mx/wp-content/uploads/2020/07/AVU_LOGO_CONECTA-1.png"
              style="height: 170px"
            />
            <q-card-section>
              <div class="text-h6" style="color: purple">
                <center>CONECTA</center>
              </div>
            </q-card-section>
            <q-separator inset />
            <q-card class="my-card">
              <q-card-section>
                El modelo AVU-CONECTA representa un acompañamiento telefónico a
                las personas mayores por parte de voluntariado corporativo,
                desde un trabajo intergeneracional loable para la crisis
                emocional que se está viviendo a nivel mundial.
              </q-card-section>
            </q-card>
          </q-card>
        </div>
      </div>
      <div class="col-4">
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card flat bordered class="my-card">
            <img
              src="https://avu.mx/wp-content/uploads/2021/06/fb3b21913deb84f0e43eaccf3fa8b7d7-1536x1117.jpg"
              style="height: 170px"
            />
            <q-card-section>
              <div class="text-h6" style="color: purple">
                <center>LATIN SUMMIT</center>
              </div>
            </q-card-section>
            <q-separator inset />
            <q-card class="my-card">
              <q-card-section>
                El objetivo de este proyecto es reunir en un evento virtual de
                inteligencia colectiva a todo el sector del envejecimiento en
                Latinoamérica interesado en el emprendimiento gerontológico.
                Además de realizar dinámicas que visibilicen, difundan y cocreen
                ideas/proyectos de instituciones y organizaciones innovadoras en
                el área de la salud.
              </q-card-section>
            </q-card>
          </q-card>
        </div>
      </div>

      <div class="col-2">
        <div class="q-pa-md q-gutter-sm">
          <q-btn
            color="grey-2"
            text-color="purple-14"
            glossy
            unelevated
            icon="add"
            label="Agregar Proyecto"
            @click="prompt = true"
          />

          <q-dialog v-model="prompt" persistent>
            <q-card style="min-width: 350px">
              <q-card-section>
                <div class="text-h6">Nombre del proyecto:</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <q-input
                  dense
                  v-model="address"
                  autofocus
                  @keyup.enter="prompt = false"
                />
              </q-card-section>

              <q-card-actions align="right" class="text-primary">
                <q-btn flat label="Cancelar" v-close-popup />
                <q-btn flat label="Siguiente/Guardar" v-close-popup />
              </q-card-actions>
            </q-card>
          </q-dialog>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      alert: ref(false),
      confirm: ref(false),
      prompt: ref(false),

      address: ref(""),
    };
  },
};
</script>
