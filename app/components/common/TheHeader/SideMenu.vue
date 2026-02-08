<template>
  <Sheet>
    <SheetTrigger as-child class="block md:hidden">
      <LucideMenu class="text-primary" />
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Edit profile</SheetTitle>
        <SheetDescription>
          Make changes to your profile here. Click save when you're done.
        </SheetDescription>
      </SheetHeader>
      <div class="grid flex-1 auto-rows-min gap-6 px-4">
        <div class="grid gap-3">
          <Label for="sheet-demo-name">Name</Label>
          <Input id="sheet-demo-name" default-value="Pedro Duarte" />
        </div>
        <div class="grid gap-3">
          <Label for="sheet-demo-username">Username</Label>
          <Input id="sheet-demo-username" default-value="@peduarte" />

          <div class="absolute top-16 left-0 right-0 bg-background border-b p-4 sm:hidden z-40">
            <div class="space-y-4">
              <div class="flex items-center gap-3 p-2">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <p class="font-medium">John Doe</p>
                  <p class="text-sm text-muted-foreground">john@example.com</p>
                </div>
              </div>

              <div class="space-y-2">
                <div
                  v-for="(item, index) in navItems"
                  :key="`mobile-${index}`"
                  class="flex items-center gap-3 p-3 rounded-md hover:bg-accent"
                >
                  <component :is="item.icon" class="size-5 text-primary" />
                  <span class="font-medium">{{ item.label }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SheetFooter>
        <Button type="submit"> Save changes </Button>
        <SheetClose as-child>
          <Button variant="outline"> Close </Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  </Sheet>
</template>

<script setup lang="ts">
import { LucideHome, LucideUser, LucideMessageCircle, LucideCog } from 'lucide-vue-next';

const navItems = [
  { to: '/', icon: LucideHome, label: 'Home' },
  { to: '/user', icon: LucideUser, label: 'Profile' },
  { to: '/messages', icon: LucideMessageCircle, label: 'Messages' },
  { to: '/settings', icon: LucideCog, label: 'Settings' },
];
</script>
