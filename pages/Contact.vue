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
const handleSubmit = async (e: Event) => {
  error.value = false;
  const axiosConfig: AxiosRequestConfig = {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  };
  doToast();
  error.value = false;
  await axios
    .post(
      location.href,
      encode({
        'form-name': e.target.getAttribute('name'),
        ...form.value,
      }),
      axiosConfig,
    )
    .then((response) => {
      console.log(response);
      doToast();
    })
    .catch((e: Error) => {
      console.log(e);
      error.value = true;
      doToast();
    });
  console.log('error??');
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
  <form name="contactMotive8" method="POST" data-netlify="true">
    <p>
      <label>
        Your Name:
        <input type="text" name="name" />
      </label>
    </p>
    <p>
      <label>
        Your Email:
        <input type="email" name="email" />
      </label>
    </p>
    <p>
      <label>
        Your Role:
        <select name="role[]" multiple>
          <option value="leader">Leader</option>
          <option value="follower">Follower</option>
        </select>
      </label>
    </p>
    <p>
      <label>
        Message:
        <textarea name="message"></textarea>
      </label>
    </p>
    <p>
      <button type="submit">Send</button>
    </p>
  </form>
</template>

<style scoped lang="scss"></style>
