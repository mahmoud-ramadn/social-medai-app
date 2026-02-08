<script setup lang="ts">
import { useForm, Field as VeeField } from 'vee-validate';
import { h } from 'vue';
import { toast } from 'vue-sonner';

import { formSchema } from './schema';

const { handleSubmit, resetForm } = useForm({
  validationSchema: formSchema,
  initialValues: {
    email: '',
    password: '',
  },
});

const onSubmit = handleSubmit((data) => {
  toast('You submitted the following values:', {
    description: h(
      'pre',
      { class: 'bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4' },
      h('code', JSON.stringify(data, null, 2)),
    ),
    position: 'bottom-right',
    class: 'flex flex-col gap-2',
    style: {
      '--border-radius': 'calc(var(--radius)  + 4px)',
    },
  });
});
</script>

<template>
  <Card class="w-full sm:max-w-lg bg-transparent shadow-none border-0">
    <CardHeader>
      <CardTitle class="font-bold text-4xl text-white">WELCOME BACK</CardTitle>
      <CardDescription class="text-white font-medium text-2xl">
        Reconnect. Share. Belong.</CardDescription
      >
    </CardHeader>
    <CardContent>
      <form id="form-vee-demo" @submit="onSubmit">
        <FieldGroup>
          <VeeField v-slot="{ field, errors }" name="email">
            <Field :data-invalid="!!errors.length">
              <FieldLabel for="form-vee-demo-title" class="text-white"> Email </FieldLabel>
              <Input
                id="form-vee-demo-title"
                v-bind="field"
                placeholder="Enter your email"
                autocomplete="off"
                class="h-15"
                :aria-invalid="!!errors.length"
              />
              <FieldError v-if="errors.length" :errors="errors" />
            </Field>
          </VeeField>

          <VeeField v-slot="{ field, errors }" name="password">
            <Field :data-invalid="!!errors.length">
              <FieldLabel for="form-vee-demo-password" class="text-white"> Password </FieldLabel>
              <Input
                id="form-vee-demo-password"
                v-bind="field"
                type="password"
                class="h-15"
                placeholder="Enter Strong password"
                autocomplete="off"
                :aria-invalid="!!errors.length"
              />
              <FieldError v-if="errors.length" :errors="errors" />
            </Field>
          </VeeField>
        </FieldGroup>
      </form>
    </CardContent>
    <CardFooter class="flex flex-col gap-5 items-center">
      <Field orientation="responsive">
        <Button type="button" variant="outline" class="h-15" @click="resetForm"> Reset </Button>
        <Button type="submit" form="form-vee-demo" class="h-15"> Submit </Button>
      </Field>

      <p class="text-center text-white">
        Don't have an account?
        <NuxtLink href="/signup" class="text-blue-500 hover:underline">Register</NuxtLink>
      </p>
    </CardFooter>
  </Card>
</template>
