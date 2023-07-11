<script setup lang="ts">
import { useToast } from 'primevue/usetoast';
import { ref } from 'vue';
import useVuelidate from '@vuelidate/core';
import { required, minLength, email } from '@vuelidate/validators';

const toast = useToast();

interface FormInterface {
  name: string;
  email: string;
  message: string;
}

const defaultForm: FormInterface = {
  name: '',
  email: '',
  message: '',
};

const form = ref<FormInterface>({ ...defaultForm });

/**
 * The required validation rules.
 */
const rules = {
  name: { required, minLength: minLength(3) },
  email: { required, email },
  message: { required, minLength: minLength(10) },
};

/**
 * vuelidate
 */
const v$ = useVuelidate(rules, form);

/**
 * error for form submit
 */
const error = ref<boolean>(false);

const resetForm = () => {
  form.value = { ...defaultForm };
};

const handleSubmit = (event) => {
  event.preventDefault();
  error.value = false;
  const myForm = event.target;
  const formData = new FormData(myForm);

  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => {
      doToast();
      resetForm();
    })
    .catch((error) => {
      error.value = true;
      doToast();
    });
};

/**
 *
 * @param data
 * encode the query params
 */
const encode = (data: FormInterface) => {
  const formData = new FormData();

  for (const key of Object.keys(data)) {
    formData.append(key, data[key as keyof FormInterface]);
  }

  return formData;
};

/**
 * Display the toast message.
 */
const doToast = () => {
  toast.add({
    severity: error.value ? 'error' : 'success',
    summary: error.value ? 'Error' : 'Sent',
    detail: error.value ? 'There was an error. Please try again' : 'Thank you! Your info has been sent over ',
    life: 3000,
  });
};
</script>

<template>
  <form
    name="m8EnduranceContact"
    method="POST"
    netlify
    netlify-honeypot
    class="flex flex-wrap sm:w-full lg:w-6 p-3 gap-3"
    @submit.prevent="handleSubmit"
  >
    <div class="flex w-full">
      <h3>Contact Us</h3>
    </div>
    <div class="w-full">
      <input type="hidden" name="form-name" value="m8EnduranceContact" />
      <div class="field flex flex-column">
        <label for="name" class="required">Name</label>
        <InputText id="name" v-model="v$.name.$model" name="name" />
        <div v-for="error of v$.name.$errors" :key="error.$uid" class="input-errors">
          <div class="p-error">{{ error.$message }}</div>
        </div>
      </div>
      <div class="field flex flex-column">
        <label for="email" class="required">Email</label>
        <InputText id="email" v-model="v$.email.$model" name="email" />
        <div v-for="error of v$.email.$errors" :key="error.$uid" class="input-errors">
          <div class="p-error">{{ error.$message }}</div>
        </div>
      </div>
      <div class="field flex flex-column">
        <label for="message" class="required">message</label>
        <textarea id="message" v-model="v$.message.$model" name="message"></textarea>
        <div v-for="error of v$.message.$errors" :key="error.$uid" class="input-errors">
          <div class="p-error">{{ error.$message }}</div>
        </div>
      </div>
      <Button id="save_btn" type="submit" label="Send" :disabled="v$.$invalid" class="button" />
    </div>
  </form>
</template>

<style scoped lang="scss"></style>
