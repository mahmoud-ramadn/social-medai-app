<template>
  <div class="grid md:grid-cols-2 grid-cols-1 min-h-screen overflow-hidden relative">
    <img
      src="/assets/images/logo.webp"
      alt="Logo"
      class="mx-auto mt-10 absolute right-0 top-0 bg-green-30 w-40 object-cover z-10"
    />
    <div
      class="bg-[url('/assets/images/auth-background.webp')] w-full h-full overflow-hidden bg-cover bg-center"
    ></div>

    <div
      class="bg-gradient-to-tl from-primary via-secondary-foreground to-secondary min-h-screen relative"
    >
      <slot />
    </div>
  </div>
</template>
