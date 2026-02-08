import { Search, Bell, MessageCircle, Bookmark, Users, Video, Music, Gamepad2, Home } from "lucide-vue-next";

export const recentActivity = [
  {
    id: 1,
    user: 'Jane Doe',
    action: 'liked your post',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane',
    timestamp: new Date(Date.now() - 1200000),
    read: false,
  },
  {
    id: 2,
    user: 'Tom Smith',
    action: 'started following you',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tom',
    timestamp: new Date(Date.now() - 2400000),
    read: true,
  },
  {
    id: 3,
    user: 'Lisa Brown',
    action: 'commented on your photo',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa',
    timestamp: new Date(Date.now() - 3600000),
    read: false,
  },
  {
    id: 4,
    user: 'Alex Johnson',
    action: 'mentioned you in a post',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
    timestamp: new Date(Date.now() - 4800000),
    read: true,
  },
];

export const trendingHashtags = [
  'Tech',
  'Design',
  'AI',
  'Startup',
  'Web3',
  'NFT',
  'Crypto',
  'Mobile',
  'React',
  'Vue',
];
export const onlineFriends = [
  { id: 1, name: 'Alice', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alice' },
  { id: 2, name: 'Bob', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bob' },
  { id: 3, name: 'Charlie', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Charlie' },
  { id: 4, name: 'Diana', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Diana' },
  { id: 5, name: 'Eve', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Eve' },
  { id: 6, name: 'Frank', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Frank' },
];

export const suggestedUsers = [
  {
    id: 1,
    name: 'Sarah Miller',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    followers: '12.4k',
    isFollowing: false,
  },
  {
    id: 2,
    name: 'Mike Chen',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike',
    followers: '8.7k',
    isFollowing: true,
  },
  {
    id: 3,
    name: 'Emma Wilson',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
    followers: '15.2k',
    isFollowing: false,
  },
];

export const menuItems = [
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

export const trendingTopics = [
  { tag: 'WebDevelopment', posts: 12.4 },
  { tag: 'AIRevolution', posts: 8.9 },
  { tag: 'DesignTips', posts: 5.2 },
  { tag: 'TechNews', posts: 7.8 },
  { tag: 'StartupLife', posts: 4.1 },
];

export const recentVisits = [
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