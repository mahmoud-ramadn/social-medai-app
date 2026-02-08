<template>
  <div>
    <div class="sticky top-[110px] z-40 bg-white rounded-xl shadow p-5 mb-6">
      <div class="flex gap-3 mb-4">
        <Avatar class="h-10 w-10">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div class="flex-1">
          <Dialog>
            <form>
              <DialogTrigger as-child>
                <textarea
                  v-model="newPostContent"
                  placeholder="What's happening?"
                  class="w-full border-0 focus:ring-0 resize-none min-h-[80px]"
                  rows="3"
                ></textarea>
              </DialogTrigger>
              <DialogContent class="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Edit profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when you're done.
                  </DialogDescription>
                </DialogHeader>
                <div class="grid gap-4">
                  <div class="grid gap-3">
                    <Label for="name-1">Name</Label>
                    <Input id="name-1" name="name" default-value="Pedro Duarte" />
                  </div>
                  <div class="grid gap-3">
                    <Label for="username-1">Username</Label>
                    <Input id="username-1" name="username" default-value="@peduarte" />
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose as-child>
                    <Button variant="outline"> Cancel </Button>
                  </DialogClose>
                  <Button type="submit"> Save changes </Button>
                </DialogFooter>
              </DialogContent>
            </form>
          </Dialog>
        </div>
      </div>

      <div class="flex items-center justify-between pt-4 border-t">
        <div class="flex gap-4">
          <button class="text-gray-500 hover:text-primary transition" @click="toggleMediaUpload">
            <Image class="size-5" />
          </button>
          <button class="text-gray-500 hover:text-primary transition">
            <Smile class="size-5" />
          </button>
          <button class="text-gray-500 hover:text-primary transition">
            <MapPin class="size-5" />
          </button>
        </div>

        <Button :disabled="!newPostContent.trim()" @click="createPost"> Post </Button>
      </div>
    </div>

    <div class="sticky top-[186px] z-30 bg-white border-b mb-6">
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
