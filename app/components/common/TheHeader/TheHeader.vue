<template>
  <header
    class="fixed top-0  left-0 z-50 w-full bg-secondary"
    :class="addClass ? ' bg-secondary shadow' : ' bg-secondary'"
  >
    <div class="container mx-auto px-4">
      <div class="flex h-16 items-center justify-between gap-4">
        <!-- Logo + Search -->
        <div class="flex items-center gap-2 sm:gap-4">
          <div class="flex items-center">
            <img
              src="/assets/images/logo.webp"
              class="w-15 md:w-40 lg:w-50 max-w-[180px] sm:max-w-none"
              alt="Logo"
            />
          </div>

          <div class="hidden md:block relative">
            <Input
              placeholder="#Explore"
              type="text"
              class="w-[180px] lg:w-[220px] xl:w-[300px] h-10 lg:h-12 pl-10 pr-4"
            />
            <Search
              class="absolute left-3 top-1/2 transform -translate-y-1/2 size-4 text-muted-foreground"
            />
          </div>
        </div>

        <!-- Mobile Search Toggle -->
        <Button variant="ghost" size="icon" class="md:hidden" @click="isSearchOpen = !isSearchOpen">
          <Search class="size-5" />
        </Button>

        <div v-if="isSearchOpen" class="absolute top-16 left-0 right-0 p-4 md:hidden z-40">
          <div class="relative">
            <Input placeholder="#Explore" type="text" class="w-full h-12 pl-10 pr-4" autofocus />
            <Search
              class="absolute left-3 top-1/2 transform -translate-y-1/2 size-4 text-muted-foreground"
            />
          </div>
        </div>

        <!-- Navigation -->
        <nav class="flex-1 flex justify-center">
          <ul class="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
            <li v-for="(item, index) in navItems" :key="index">
              <nuxt-link
                :to="item.to"
                class="flex items-center justify-center p-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                active-class="bg-accent text-accent-foreground"
              >
                <component :is="item.icon" class="size-5 sm:size-5 lg:size-6 text-primary" />
                <span class="sr-only">{{ item.label }}</span>
              </nuxt-link>
            </li>
          </ul>
        </nav>

        <!-- Avatar + Side Menu -->
        <div class="flex items-center gap-2">
          <div class="hidden sm:block">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <CommonTheHeaderSideMenu />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { LucideHome, LucideUser, LucideMessageCircle, LucideCog, Search } from 'lucide-vue-next';
import { ref, onMounted, onUnmounted } from 'vue';

const isSearchOpen = ref(false);
const addClass = ref(false);

function handleScroll() {
  addClass.value = window.scrollY > 0;
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const navItems = [
  { to: '/', icon: LucideHome, label: 'Home' },
  { to: '/user', icon: LucideUser, label: 'Profile' },
  { to: '/messages', icon: LucideMessageCircle, label: 'Messages' },
  { to: '/settings', icon: LucideCog, label: 'Settings' },
];
</script>
