<script setup lang="ts">
import { useToast } from 'primevue/usetoast';
import axios, { AxiosRequestConfig } from 'axios';
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

/**
 * handle submit. dont need a service layer for now
 */
// const handleSubmit = async (e: Event) => {
//   error.value = false;
//   const axiosConfig: AxiosRequestConfig = {
//     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//   };
//   error.value = false;
//   try {
//     await axios
//       .post(
//         location.href,
//         encode({
//           'form-name': e.target.getAttribute('name'),
//           ...form.value,
//         }),
//         axiosConfig,
//       )
//       .then((response) => {
//         doToast();
//       })
//       .catch((e: Error) => {
//         error.value = true;
//         doToast();
//       });
//   } catch (er) {
//     alert(er);
//   }
// };

const handleSubmit = (event) => {
  event.preventDefault();

  const myForm = event.target;
  const formData = new FormData(myForm);
  console.log(formData);
  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => doToast())
    .catch((error) => alert(error));
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
  console.log('tast');
  toast.add({
    severity: error.value ? 'error' : 'success',
    summary: error.value ? 'Error' : 'Sent',
    detail: error.value ? 'There was an error. Please try again' : 'Thank you! Your info has been sent over ',
    life: 300000,
  });
};
</script>

<template>
  <div class="feedback-form">
    <form netlify netlify-honeypot name="motive8feedback" method="POST" action="/success">
      <p class="hidden">
        <label>
          Don’t fill this out if you’re human:
          <input name="bot-field" />
        </label>
      </p>
      <input type="hidden" name="form-name" value="motive8feedback" />
      <label for="name">Name</label>
      <input id="name" type="text" name="name" />
      <label for="email">Email</label>
      <input id="email" type="email" name="email" required />
      <label for="feedback">Message</label>
      <textarea id="feedback" wrap="soft" name="feedback" required></textarea>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<style scoped lang="scss"></style>
