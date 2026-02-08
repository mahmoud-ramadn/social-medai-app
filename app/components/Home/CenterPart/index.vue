<template>
  <div class=" relative">
    <div class="sticky top-[110px] z-40 bg-white rounded-xl shadow p-5 mb-6">
   <HomeCenterPartCreatePost/>

      <div class="flex items-center justify-between pt-4 border-t">
        <div class="flex gap-4">
          <button class="text-gray-500 hover:text-primary transition" @click="toggleMediaUpload">
            <LucideImage class="size-5" />
          </button>
          <button class="text-gray-500 hover:text-primary transition">
            <LucideSmile class="size-5" />
          </button>
          <button class="text-gray-500 hover:text-primary transition">
            <LucideMapPin class="size-5" />
          </button>
        </div>

        <Button :disabled="!newPostContent.trim()" @click="createPost"> Post </Button>
      </div>
    </div>

    <div class="sticky top-[100px] z-30 bg-white border-b mb-6">
      <div class="flex">
        <button
          v-for="tab in feedTabs"
          :key="tab.id"
          @click="activeTab = tab.id"
          :class="[
            'flex-1 py-3 font-semibold text-center border-b-2 transition',
            activeTab === tab.id
              ? 'border-primary text-primary'
              : 'border-transparent text-gray-500 hover:text-gray-700',
          ]"
        >
          {{ tab.label }}
        </button>
      </div>
    </div>
    <NewsPostCard />
  </div>
</template>

<script setup lang="ts">

import NewsPostCard from '~/components/ui/postcard/NewsPostCard.vue';

const activeTab = ref('for-you');
const newPostContent = ref('');
const mediaPreview = ref<string | null>(null);



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





function createPost() {
  if (!newPostContent.value.trim()) return;

  const newPost = {
    id: posts.value.length + 1,
    name: 'John Doe',
    username: 'johndoe',
    verified: false,
    avatar: 'https://github.com/shadcn.png',
    content: newPostContent.value,
    image: mediaPreview.value || null,
    likes: 0,
    comments: 0,
    shares: 0,
    liked: false,
    bookmarked: false,
    timestamp: new Date(),
  };
  posts.value.unshift(newPost);
  newPostContent.value = '';
  mediaPreview.value = null;
}


function toggleMediaUpload() {
  console.log('Toggle media upload');
}


</script>

<style scoped></style>
