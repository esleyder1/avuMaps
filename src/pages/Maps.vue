<template>
  <q-page class="full-width">
    <div class="q-pa-md">
      <div class="row">
        <div class="col-9">
          <div class="row">
            <div class="col-2">
              <q-select
                @update:model-value="selectCountry"
                bottom-slot
                v-model="model"
                :options="options"
              >
                <template v-slot:append>
                  <q-avatar>
                    <img :src="flagImg" />
                  </q-avatar>
                </template>
              </q-select>
            </div>
          </div>
          <co-map />
        </div>
        <div class="col-3">
          <h5>Noticias</h5>
          <q-card>
            <q-card-section>
              <div class="text-h6">Noticia 1</div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
                similique dolorum modi voluptatibus laborum magni. Blanditiis
                numquam fuga magni totam cupiditate quas commodi voluptatem
                excepturi dolorum qui! Quos, repellat in.
              </p>
            </q-card-section>

            <q-card-section class="q-pt-none"> </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import CoMap from "src/components/CoMap.vue";

export default {
  name: "Maps",
  data() {
    return {
      active: false,
      title: "Colombia",
      customDialogModel: false,
      model: "Colombia",
      options: ["Colombia", "México"],
      flagImg: "col.png"
    };
  },
  components: {
    CoMap,
  },
  methods: {
    selectCountry(e) {
      if(e === "México"){
        this.flagImg = "mex.png"
      }else if(e === "Colombia"){
        this.flagImg = "col.png"
      }
    }
  }
};
</script>
