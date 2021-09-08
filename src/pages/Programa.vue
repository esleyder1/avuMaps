<template>
  <q-page class="window-height ">
    <div class="q-pa-md doc-container row justify-center">
       <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md"
        ref="form"
        greedy
      >

      
       
  
       
  
        <div>
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" ></q-btn>
        </div>
      </q-form>
      <div class="row justify-evenly">
        <div class="col-4">
           <q-input
          filled
          v-model="name"
          @input="programaticSubmit"
          debounce="500"
          label="Your name *"
          hint="Name and surname"
          :rules="[validateName]"
        ></q-input>
  
        </div>
        <div class="col-4">
           <q-input
          filled
          v-model="name"
          @input="programaticSubmit"
          debounce="500"
          label="Your name *"
          hint="Name and surname"
          :rules="[validateName]"
        ></q-input>
  
        </div>
         <q-toggle @input="programaticSubmit" v-model="accept" label="I accept the license and terms" ></q-toggle>
      </div>
    </div>
  </q-page>
</template>
<script>
export default {
  data () {
    return {
      name: null,
      age: null,
      accept: false
    }
  },

  methods: {
    validateName(val) {
       return val && val.length > 0 || 'Please type something';
    },
     
    validateAgeRequired(val) {
       return val !== null && val !== '' || 'Please type your age';
    },
     
    validateAgeRange(val) {
       return val > 0 && val < 100 || 'Please type a real age';
    },
    
    programaticSubmit () {
       const form = this.$refs.form;
       setTimeout(function() {
         form.submit();
       }, 100);
    },
    onSubmit () {
      this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        })
    },

    onReset () {
      this.name = null
      this.age = null
      this.accept = false
    }
  }
}
</script>

