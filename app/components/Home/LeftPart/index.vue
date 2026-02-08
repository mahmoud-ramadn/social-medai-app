<template>
  <div class="sticky top-[110px] space-y-6 max-h-[calc(100vh-130px)] overflow-y-auto pb-6">
    <div class="bg-white rounded-xl shadow p-5">
      <div class="flex items-center gap-3 mb-5">
        <Avatar class="h-14 w-14">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div>
          <h3 class="font-bold">John Doe</h3>
          <p class="text-sm text-gray-500">@johndoe</p>
        </div>
      </div>

      <div class="space-y-3">
        <div class="flex justify-between text-sm">
          <div>
            <p class="font-semibold">342</p>
            <p class="text-gray-500">Following</p>
          </div>
          <div>
            <p class="font-semibold">1.2k</p>
            <p class="text-gray-500">Followers</p>
          </div>
          <div>
            <p class="font-semibold">89</p>
            <p class="text-gray-500">Posts</p>
          </div>
        </div>

        <Button class="w-full bg-primary hover:bg-primary/90">New Post</Button>
      </div>
    </div>
    <div class="bg-white rounded-xl shadow p-5">
      <h2 class="font-bold text-lg mb-4">Menu</h2>
      <nav class="space-y-2">
        <NuxtLink
          v-for="item in menuItems"
          :key="item.label"
          :to="item.path"
          class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition group"
          :class="{ 'bg-primary/10 text-primary': activeMenu === item.path }"
        >
          <component :is="item.icon" class="size-5 group-hover:scale-110 transition-transform" />
          <span class="font-medium">{{ item.label }}</span>
          <Badge v-if="item.badge" class="ml-auto" variant="secondary" size="sm">
            {{ item.badge }}
          </Badge>
        </NuxtLink>
      </nav>
    </div>
    <div class="bg-white rounded-xl shadow p-5">
      <div class="flex items-center justify-between mb-4">
        <h2 class="font-bold text-lg">Trending Now</h2>
        <Button variant="ghost" size="sm" class="h-8 text-xs">Refresh</Button>
      </div>
      <div class="space-y-4">
        <div
          v-for="(trend, index) in trendingTopics"
          :key="index"
          class="group cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition"
          @click="searchTrend(trend.tag)"
        >
          <div class="flex justify-between items-center">
            <span class="text-gray-500 text-sm">{{ index + 1 }} · Trending</span>
            <span class="text-xs text-gray-400">{{ trend.posts }}K posts</span>
          </div>
          <p class="font-semibold group-hover:text-primary transition">#{{ trend.tag }}</p>
        </div>
      </div>
    </div>
    <div class="bg-white rounded-xl shadow p-5">
      <h2 class="font-bold text-lg mb-4">Recent Visits</h2>
      <div class="space-y-3">
        <div
          v-for="user in recentVisits"
          :key="user.id"
          class="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer"
        >
          <Avatar class="h-9 w-9">
            <AvatarImage :src="user.avatar" />
            <AvatarFallback>{{ user.name.charAt(0) }}</AvatarFallback>
          </Avatar>
          <div class="flex-1 min-w-0">
            <p class="font-semibold text-sm truncate">{{ user.name }}</p>
            <p class="text-xs text-gray-500 truncate">Last visited {{ user.lastVisit }}</p>
          </div>
          <span v-if="user.isOnline" class="size-2 bg-green-500 rounded-full"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  Home,
  Search,
  Bell,
  MessageCircle,
  Bookmark,
  Users,
  Video,
  Music,
  Gamepad2,
} from 'lucide-vue-next';

const searchQuery = ref('');
const activeMenu = ref('/');

const menuItems = [
  { label: 'Home', path: '/', icon: Home },
  { label: 'Explore', path: '/explore', icon: Search },
  { label: 'Notifications', path: '/notifications', icon: Bell, badge: '3' },
  { label: 'Messages', path: '/messages', icon: MessageCircle, badge: '12' },
  { label: 'Bookmarks', path: '/bookmarks', icon: Bookmark },
  { label: 'Communities', path: '/communities', icon: Users },
  { label: 'Live', path: '/live', icon: Video },
  { label: 'Music', path: '/music', icon: Music },
  { label: 'Gaming', path: '/gaming', icon: Gamepad2 },
];

const trendingTopics = [
  { tag: 'WebDevelopment', posts: 12.4 },
  { tag: 'AIRevolution', posts: 8.9 },
  { tag: 'DesignTips', posts: 5.2 },
  { tag: 'TechNews', posts: 7.8 },
  { tag: 'StartupLife', posts: 4.1 },
];

const recentVisits = [
  {
    id: 1,
    name: 'Sarah Miller',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    lastVisit: '2h ago',
    isOnline: true,
  },
  {
    id: 2,
    name: 'Mike Chen',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike',
    lastVisit: '1d ago',
    isOnline: false,
  },
  {
    id: 3,
    name: 'Emma Wilson',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
    lastVisit: '3h ago',
    isOnline: true,
  },
  {
    id: 4,
    name: 'David Park',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
    lastVisit: '5h ago',
    isOnline: false,
  },
];

function searchTrend(tag: string) {
  searchQuery.value = `#${tag}`;
  performSearch();
}

function performSearch() {
  if (searchQuery.value.trim()) {
    console.log('Searching for:', searchQuery.value);
  }
}
</script>

<style scoped></style>
