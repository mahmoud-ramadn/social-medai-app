<template>
  <div class="container mx-auto mt-[60px] flex gap-4 md:gap-6 px-4 md:px-6 min-h-screen">
    <aside class="hidden lg:block w-64 xl:w-72 2xl:w-80 space-y-6">
      <HomeLeftPart />
    </aside>

    <div class="fixed bottom-0 left-0 right-0 bg-white border-t lg:hidden z-50">
      <div class="flex justify-around items-center h-16">
        <NuxtLink to="/" class="flex flex-col items-center p-3">
          <Home class="size-5" :class="{ 'text-primary': currentRoute === '/' }" />
          <span class="text-xs mt-1">Home</span>
        </NuxtLink>

        <NuxtLink to="/explore" class="flex flex-col items-center p-3">
          <Search class="size-5" :class="{ 'text-primary': currentRoute === '/explore' }" />
          <span class="text-xs mt-1">Explore</span>
        </NuxtLink>

        <Button class="size-12 rounded-full -mt-6 shadow-lg" @click="showCreateModal = true">
          <Plus class="size-6" />
        </Button>

        <button class="flex flex-col items-center p-3 relative" @click="toggleNotifications">
          <Bell class="size-5" />
          <span class="text-xs mt-1">Notifications</span>
          <span
            v-if="unreadNotifications > 0"
            class="absolute top-1 right-4 size-2 bg-red-500 rounded-full"
          ></span>
        </button>

        <NuxtLink to="/profile" class="flex flex-col items-center p-3">
          <User class="size-5" :class="{ 'text-primary': currentRoute === '/profile' }" />
          <span class="text-xs mt-1">Profile</span>
        </NuxtLink>
      </div>
    </div>

    <main class="flex-1 max-w-2xl mx-auto">
      <HomeCenterPart />
    </main>

    <aside class="hidden lg:block w-64 xl:w-72 2xl:w-80 space-y-6">
      <HomeRightPart />
    </aside>
  </div>
</template>

<script setup lang="ts">
import {
  Home,
  Search,
  Plus,
  Bell,
  User,
  Image,
  Smile,
  MapPin,
  Heart,
  MessageCircle,
  Repeat2,
  Bookmark,
  MoreVertical,
  X,
  Users,
  Video,
  Music,
  Gamepad2,
  Loader2,
} from 'lucide-vue-next';

const route = useRoute();
const currentRoute = ref(route.path);
const activeTab = ref('for-you');
const newPostContent = ref('');
const mediaPreview = ref<string | null>(null);
const searchQuery = ref('');
const activeMenu = ref('/');
const loading = ref(false);

const unreadNotifications = ref(3);

const feedTabs = [
  { id: 'for-you', label: 'For You' },
  { id: 'following', label: 'Following' },
  { id: 'trending', label: 'Trending' },
];

const posts = ref([
  {
    id: 1,
    name: 'Alex Johnson',
    username: 'alexj',
    verified: true,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
    content:
      'Just launched my new startup! 🚀 Building the future of social media. Excited to share more updates soon!',
    image:
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&auto=format&fit=crop',
    likes: 245,
    comments: 42,
    shares: 18,
    liked: true,
    bookmarked: false,
    timestamp: new Date(Date.now() - 3600000), // 1 hour ago
  },
]);





onMounted(() => {
  for (let i = 2; i <= 10; i++) {
    posts.value.push({
      id: i,
      name: `User ${i}`,
      username: `user${i}`,
      verified: i % 3 === 0,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`,
      content: `This is sample post content #${i}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      image:
        i % 2 === 0
          ? 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&auto=format&fit=crop'
          : null,
      likes: Math.floor(Math.random() * 1000),
      comments: Math.floor(Math.random() * 100),
      shares: Math.floor(Math.random() * 50),
      liked: i % 4 === 0,
      bookmarked: i % 5 === 0,
      timestamp: new Date(Date.now() - Math.random() * 86400000 * 7),
    });
  }
});





</script>

<style scoped>
/* Smooth scrolling for feed */
main {
  scroll-behavior: smooth;
}

/* Custom scrollbar for sidebars */
aside > div::-webkit-scrollbar {
  width: 4px;
}

aside > div::-webkit-scrollbar-track {
  background: transparent;
}

aside > div::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 2px;
}

aside > div::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

/* Custom scrollbar for main feed */
main::-webkit-scrollbar {
  width: 6px;
}

main::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

main::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 3px;
}

main::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* Hide scrollbar for mobile */
@media (max-width: 1024px) {
  aside > div::-webkit-scrollbar {
    display: none;
  }
}

/* Prevent horizontal scroll on mobile */
.container {
  overflow-x: hidden;
}
</style>
