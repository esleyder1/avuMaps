<template>
  <q-page class="window-height row justify-center items-center">
    <div class="column q-pa-lg">
      <div class="row">
        <q-card square class="shadow-24" style="width: 400px; height: 540px">
          <q-card-section class="bg-accent" color="primary">
            <h4 class="text-h5 text-white q-my-md">{{ title }}</h4>
          </q-card-section>
          <q-card-section>
            <q-fab
              color="info"
              @click="switchTypeForm"
              icon="add"
              class="absolute"
              style="top: 0; right: 12px; transform: translateY(-50%)"
            >
              <q-tooltip> Registro de nuevo usuario </q-tooltip>
            </q-fab>
            <q-form class="q-px-sm q-pt-xl">
              <q-input
                ref="email"
                square
                clearable
                v-model="email"
                type="email"
                lazy-rules
                :rules="[this.required, this.isEmail, this.short]"
                label="Correo electrónico"
              >
                <template v-slot:prepend>
                  <q-icon name="email" />
                </template>
              </q-input>
              <q-input
                ref="username"
                v-if="register"
                square
                clearable
                v-model="username"
                lazy-rules
                :rules="[this.required, this.short]"
                type="username"
                label="Usuario"
              >
                <template v-slot:prepend>
                  <q-icon name="person" />
                </template>
              </q-input>
              <q-input
                ref="password"
                square
                clearable
                v-model="password"
                :type="passwordFieldType"
                lazy-rules
                :rules="[this.required, this.short]"
                label="Contraseña"
              >
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
                <template v-slot:append>
                  <q-icon
                    :name="visibilityIcon"
                    @click="switchVisibility"
                    class="cursor-pointer"
                  />
                </template>
              </q-input>
              <q-input
                ref="repassword"
                v-if="register"
                square
                clearable
                v-model="repassword"
                :type="passwordFieldType"
                lazy-rules
                :rules="[this.required, this.short, this.diffPassword]"
                label="Повторить пароль"
              >
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
                <template v-slot:append>
                  <q-icon
                    :name="visibilityIcon"
                    @click="switchVisibility"
                    class="cursor-pointer"
                  />
                </template>
              </q-input>
            </q-form>
          </q-card-section>

          <q-card-actions class="q-px-lg">
            <q-btn
              unelevated
              size="lg"
              color="secondary"
              @click="submit"
              class="full-width text-white"
              :label="btnLabel"
            />
          </q-card-actions>
          <q-card-section v-if="!register" class="text-center q-pa-sm">
            <p class="text-grey-6">¿Olvidaste tu contraseña?</p>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { api } from "boot/axios";
import { useQuasar } from 'quasar'

export default {
  name: "Login",
  data() {
    
    return {
      
      title: "Bienvenido",
      email: "",
      username: "",
      password: "",
      repassword: "",
      register: false,
      passwordFieldType: "password",
      btnLabel: "Iniciar sesión",
      visibility: false,
      visibilityIcon: "visibility",
    };
  },
  methods: {
    required(val) {
      return (val && val.length > 0) || "El campo no puede estar vacio";
    },
    diffPassword(val) {
      const val2 = this.$refs.password.value;
      return (val && val === val2) || "La contraseña no coincide";
    },
    short(val) {
      return (val && val.length > 3) || "El valor es demasiado corto";
    },
    isEmail(val) {
      const emailPattern =
        /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      return (
        emailPattern.test(val) ||
        "Por favor introduzca una dirección de correo electrónico válida"
      );
    },
    submit() {
      const $q = useQuasar()
      if (this.register) {
        this.$refs.email.validate();
        this.$refs.username.validate();
        this.$refs.password.validate();
        this.$refs.repassword.validate();
      } else {
        this.$refs.email.validate();
        this.$refs.password.validate();
      }

      if (!this.register)
        if (!this.$refs.email.hasError && !this.$refs.password.hasError) {
          let form = { email: this.email, password: this.password };
          console.log(form)
          api
            .post("/login", form)
            .then((response) => {
              let data = response.data;
              console.log(data);
              this.$q.notify({
                icon: "done",
                color: "positive",
                message: "Autorizado",
                position: "top-right",
                timeout: 2000
              });
              this.$router.push("/maps") 
            })
            .catch(() => {
              this.$q.notify({
                color: "negative",
                position: "top",
                message: "Correo o contraseña incorrectos",
                icon: "report_problem",
                position: "top-right",
                timeout: 2000
              });
            });
        }
    },
    switchTypeForm() {
      this.register = !this.register;
      this.title = this.register ? "Nuevo Usuario" : "Bienvenido";
      this.btnLabel = this.register ? "Registro" : "Iniciar sesión";
    },
    switchVisibility() {
      this.visibility = !this.visibility;
      this.passwordFieldType = this.visibility ? "text" : "password";
      this.visibilityIcon = this.visibility ? "visibility_off" : "visibility";
    },
  },
};
</script>
