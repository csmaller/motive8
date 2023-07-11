<script setup lang="ts">
import { useToast } from 'primevue/usetoast';
import axios, { AxiosRequestConfig } from 'axios';
import { ref } from 'vue';
import useVuelidate from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';

const toast = useToast();

interface FormInterface {
  email: string;
}

const defaultForm: FormInterface = {
  email: '',
};

const form = ref<FormInterface>({ ...defaultForm });

/**
 * The required validation rules.
 */
const rules = {
  email: { required, email },
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
      if (!error.value) doToast();
      resetForm();
    })
    .catch((e: Error) => {
      error.value = true;
      doToast();
    });
};

const resetForm = () => {
  form.value = { ...defaultForm };
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
    id="newsletter"
    name="motive8eNewsletter"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    class="flex w-full p-0 text-center justify-content-center newsletter"
    @submit.prevent="handleSubmit"
  >
    <div class="w-6 flex flex-row justify-content-center align-items-center gap-3">
      <input type="hidden" name="form-name" value="motive8Newsletter" />
      <div><a href="https://www.facebook.com/Motive8endurance/?ref=bookmarks" class="fa fa-facebook"></a></div>
      <div class="field w-7 flex flex-column gap-3 pt-4">
        <InputText
          id="email"
          v-model="v$.email.$model"
          placeholder="enter your email to join our mailing list"
          name="email"
          class="w-full newsletter-input"
        />
        <input type="hidden" name="sign-up" value="newsletter-sign-up!" />
        <div v-for="error of v$.email.$errors" :key="error.$uid" class="input-errors">
          <div class="p-error">{{ error.$message }}</div>
        </div>

        <Button
          id="save_btn"
          type="submit"
          label="Sign Up"
          :disabled="v$.$invalid"
          class="button newsletter-btn w-full"
        />
      </div>
      <div>
        <a href="https://www.instagram.com/motive8endurance" class="fa fa-instagram"></a>
      </div>
    </div>
  </form>
</template>

<style scoped lang="scss">
.newsletter {
  .newsletter-input,
  .newsletter-btn {
    height: 28px;
    padding: 4px;
    font-size: 12px;
    margin: 0;
  }
  .newsletter-btn {
    color: white;
    background-color: #55acee;

    &:hover {
      background-color: #ccc3ad;
      color: black;
    }
  }
}
</style>
