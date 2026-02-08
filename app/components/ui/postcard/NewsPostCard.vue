<template>
    <div class="space-y-4 mt-13 pb-20 lg:pb-6">
        
        <div
          v-for="post in filteredPosts"
          :key="post.id"
          class=" bg-white rounded-xl shadow hover:shadow-md transition-shadow"
        >
          <div class="p-5">
            <div class="flex items-start justify-between">
              <div class="flex items-center gap-3">
                <Avatar class="h-10 w-10">
                  <AvatarImage :src="post.avatar" />
                  <AvatarFallback>{{ post.name.charAt(0) }}</AvatarFallback>
                </Avatar>
                <div>
                  <div class="flex items-center gap-1">
                    <h3 class="font-bold hover:text-primary cursor-pointer">{{ post.name }}</h3>
                    <Badge v-if="post.verified" variant="outline" class="text-xs px-1"> ✓ </Badge>
                  </div>
                  <p class="text-sm text-gray-500">
                    @{{ post.username }} · {{ formatTime(post.timestamp) }}
                  </p>
                </div>
              </div>
  
              <DropdownMenu>
                <DropdownMenuTrigger as-child>
                  <Button variant="ghost" size="icon" class="h-8 w-8">
                    <MoreVertical class="size-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Report post</DropdownMenuItem>
                  <DropdownMenuItem>Save post</DropdownMenuItem>
                  <DropdownMenuItem>Mute user</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
  
            <p class="mt-4 mb-3">{{ post.content }}</p>
  
            <div v-if="post.image" class="mt-3 rounded-lg overflow-hidden">
              <img
                :src="post.image"
                :alt="`Post by ${post.name}`"
                class="w-full max-h-[400px] object-cover cursor-pointer"
                @click="showImageLightbox(post.image)"
              />
            </div>
  
            <div class="flex justify-between mt-6 pt-4 border-t">
              <button
                class="flex items-center gap-2 text-gray-500 hover:text-red-500 transition"
                @click="toggleLike(post.id)"
              >
                <Heart class="size-5" :class="{ 'fill-red-500 text-red-500': post.liked }" />
                <span>{{ post.likes }}</span>
              </button>
  
              <button class="flex items-center gap-2 text-gray-500 hover:text-primary transition">
                <MessageCircle class="size-5" />
                <span>{{ post.comments }}</span>
              </button>
  
              <button class="flex items-center gap-2 text-gray-500 hover:text-green-500 transition">
                <Repeat2 class="size-5" />
                <span>{{ post.shares }}</span>
              </button>
  
              <button class="flex items-center gap-2 text-gray-500 hover:text-yellow-500 transition">
                <Bookmark class="size-5" :class="{ 'fill-yellow-500': post.bookmarked }" />
              </button>
            </div>
          </div>
        </div>
  
        <div class="text-center py-8">
          <Button
            variant="outline"
            class="w-full max-w-sm mx-auto"
            @click="loadMorePosts"
            :disabled="loading"
          >
            <Loader2 v-if="loading" class="size-4 mr-2 animate-spin" />
            {{ loading ? 'Loading...' : 'Load More Posts' }}
          </Button>
        </div>
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
const activeTab = ref('for-you');
const newPostContent = ref('');
const mediaPreview = ref<string | null>(null);

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

const filteredPosts = computed(() => {
  if (activeTab.value === 'following') {
    return posts.value.filter((post) => post.verified); // Example filter
  }
  if (activeTab.value === 'trending') {
    return [...posts.value].sort((a, b) => b.likes - a.likes);
  }
  return posts.value;
});

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

function toggleLike(postId: number) {
  const post = posts.value.find((p) => p.id === postId);
  if (post) {
    post.liked = !post.liked;
    post.likes += post.liked ? 1 : -1;
  }
}

function toggleNotifications() {
  unreadNotifications.value = 0;
}

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

function showImageLightbox(imageUrl: string) {
  console.log('Show image lightbox:', imageUrl);
}

function toggleMediaUpload() {
  console.log('Toggle media upload');
}

function loadMorePosts() {
  loading.value = true;
  setTimeout(() => {
    for (let i = 1; i <= 5; i++) {
      posts.value.push({
        id: posts.value.length + 1,
        name: `User ${posts.value.length + 1}`,
        username: `user${posts.value.length + 1}`,
        verified: Math.random() > 0.7,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${posts.value.length + 1}`,
        content: `This is additional post content #${posts.value.length + 1}`,
        image:
          Math.random() > 0.5
            ? 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&auto=format&fit=crop'
            : null,
        likes: Math.floor(Math.random() * 1000),
        comments: Math.floor(Math.random() * 100),
        shares: Math.floor(Math.random() * 50),
        liked: false,
        bookmarked: false,
        timestamp: new Date(Date.now() - Math.random() * 86400000 * 7),
      });
    }
    loading.value = false;
  }, 1000);
}

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

<style scoped></style>
