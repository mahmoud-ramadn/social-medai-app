<template>
  <div class="sticky top-[110px] space-y-6 max-h-[calc(100vh-130px)] overflow-y-auto pb-6">
    <div class="bg-white rounded-xl shadow p-4">
      <div class="relative">
        <lucide-search
          class="absolute left-3 top-1/2 transform -translate-y-1/2 size-4 text-gray-400"
        />
        <Input
          v-model="searchQuery"
          placeholder="Search posts or people"
          class="pl-10 bg-gray-50 border-0"
          @keyup.enter="performSearch"
        />
      </div>
    </div>

    <div class="bg-white rounded-xl shadow p-5">
      <div class="flex items-center justify-between mb-4">
        <h2 class="font-bold text-lg">Who to Follow</h2>
        <Button variant="ghost" size="sm" class="h-8 text-xs">Refresh</Button>
      </div>
      <div class="space-y-4">
        <div
          v-for="user in suggestedUsers"
          :key="user.id"
          class="flex items-center justify-between"
        >
          <div class="flex items-center gap-3">
            <Avatar class="h-10 w-10">
              <AvatarImage :src="user.avatar" />
              <AvatarFallback>{{ user.name.charAt(0) }}</AvatarFallback>
            </Avatar>
            <div>
              <p class="font-semibold text-sm">{{ user.name }}</p>
              <p class="text-xs text-gray-500">{{ user.followers }} followers</p>
            </div>
          </div>
          <Button size="sm" variant="outline" @click="followUser(user.id)">
            {{ user.isFollowing ? 'Following' : 'Follow' }}
          </Button>
        </div>
      </div>

      <Button variant="ghost" class="w-full mt-4 text-primary">Show more</Button>
    </div>

    <div class="bg-white rounded-xl shadow p-5">
      <div class="flex items-center justify-between mb-4">
        <h2 class="font-bold text-lg">Recent Activity</h2>
        <Button variant="ghost" size="sm" class="h-8 text-xs" @click="markAllAsRead">
          Mark all as read
        </Button>
      </div>
      <div class="space-y-3">
        <div
          v-for="activity in recentActivity"
          :key="activity.id"
          class="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer"
          :class="{ 'bg-blue-50': !activity.read }"
        >
          <Avatar class="h-8 w-8">
            <AvatarImage :src="activity.avatar" />
            <AvatarFallback>{{ activity.user.charAt(0) }}</AvatarFallback>
          </Avatar>
          <div class="flex-1 min-w-0">
            <p class="text-sm truncate">
              <span class="font-semibold">{{ activity.user }}</span> {{ activity.action }}
            </p>
            <p class="text-xs text-gray-500">{{ formatTime(activity.timestamp) }}</p>
          </div>
          <span v-if="!activity.read" class="size-2 bg-blue-500 rounded-full"></span>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-xl shadow p-5">
      <h2 class="font-bold text-lg mb-4">Trending Hashtags</h2>
      <div class="flex flex-wrap gap-2">
        <Badge
          v-for="tag in trendingHashtags"
          :key="tag"
          variant="secondary"
          class="cursor-pointer hover:bg-primary/10"
          @click="searchHashtag(tag)"
        >
          #{{ tag }}
        </Badge>
      </div>
    </div>

    <div class="bg-white rounded-xl shadow p-5">
      <h2 class="font-bold text-lg mb-4">Online Friends</h2>
      <div class="flex -space-x-2">
        <Avatar
          v-for="friend in onlineFriends"
          :key="friend.id"
          class="h-10 w-10 border-2 border-white hover:scale-110 transition-transform cursor-pointer"
          :title="friend.name"
        >
          <AvatarImage :src="friend.avatar" />
          <AvatarFallback>{{ friend.name.charAt(0) }}</AvatarFallback>
        </Avatar>
        <Avatar class="h-10 w-10 border-2 border-white cursor-pointer">
          <AvatarFallback class="bg-gray-100 text-gray-500"
            >+{{ onlineFriends.length - 5 }}</AvatarFallback
          >
        </Avatar>
      </div>
      <p class="text-sm text-gray-500 mt-3">{{ onlineFriends.length }} friends online</p>
    </div>

    <div class="bg-transparent p-4">
      <div class="flex flex-wrap gap-3 text-xs text-gray-500">
        <a href="#" class="hover:text-primary transition">Terms of Service</a>
        <a href="#" class="hover:text-primary transition">Privacy Policy</a>
        <a href="#" class="hover:text-primary transition">Cookie Policy</a>
        <a href="#" class="hover:text-primary transition">Accessibility</a>
        <a href="#" class="hover:text-primary transition">Ads info</a>
        <a href="#" class="hover:text-primary transition">More</a>
        <span class="text-gray-400">© 2024 SocialApp, Inc.</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { recentActivity, trendingHashtags, onlineFriends, suggestedUsers } from '~/constants';

const searchQuery = ref('');

function triggerFileInput() {
  // In real app, trigger file input and handle upload
  console.log('Trigger file upload');
}

function formatTime(date: Date) {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  return `${diffDays}d ago`;
}

function searchHashtag(tag: string) {
  searchQuery.value = `#${tag}`;
  performSearch();
}

function performSearch() {
  if (searchQuery.value.trim()) {
    console.log('Searching for:', searchQuery.value);
  }
}
function markAllAsRead() {
  recentActivity.forEach((activity) => (activity.read = true));
}

function followUser(userId: number) {
  const user = suggestedUsers.find((u) => u.id === userId);
  if (user) {
    user.isFollowing = !user.isFollowing;
    console.log(user.isFollowing ? 'Followed user' : 'Unfollowed user');
  }
}
</script>

<style scoped></style>
