<template>
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
</template>

<script setup lang="ts">
const newPostContent = ref<string>('');
</script>