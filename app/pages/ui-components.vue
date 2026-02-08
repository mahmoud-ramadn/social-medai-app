<template>
  <div class="min-h-screen bg-green-950 py-10">
    <UiReveiwNumberChoos />
    <div>
      <Button>Click me</Button>
    </div>

    <div class="grid w-full max-w-xl items-start gap-4">
      <Alert>
        <CheckCircle2Icon />
        <AlertTitle>Success! Your changes have been saved</AlertTitle>
        <AlertDescription> This is an alert with icon, title and description. </AlertDescription>
      </Alert>
      <Alert>
        <PopcornIcon />
        <AlertTitle>This Alert has a title and an icon. No description.</AlertTitle>
      </Alert>
      <Alert variant="destructive">
        <AlertCircleIcon />
        <AlertTitle>Unable to process your payment.</AlertTitle>
        <AlertDescription>
          <p>Please verify your billing information and try again.</p>
          <ul class="mt-2 list-inside list-disc space-y-1">
            <li>Check your card details</li>
            <li>Ensure sufficient funds</li>
            <li>Verify billing address</li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
    <div
      class="bg-yellow-300 container mx-auto mt-10 rounded-3xl p-5 flex items-center justify-center"
    >
      <StoriesSwiper />
      <Forms />
    </div>
  </div>
</template>

<script setup lang="ts">
import { CheckCircle2Icon, PopcornIcon, AlertCircleIcon } from 'lucide-vue-next';
// import Swiper from '~/components/stories/swiper.vue';
</script>

<style lang="scss" scoped></style>
