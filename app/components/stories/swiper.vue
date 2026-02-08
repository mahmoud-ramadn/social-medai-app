<script setup lang="ts">

</script>

<template>
  <Carousel class="w-full  ">
    <CarouselContent>
      <CarouselItem v-for="i in 10" :key="i" class="md:basis-1/2 lg:basis-1/4">
        <div class="p-1">
          <Card>
            <CardContent class="flex aspect-square items-center justify-center p-6">
              <span class="text-4xl font-semibold">{{ i }}</span>
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    </CarouselContent>
    <!-- <CarouselPrevious />
    <CarouselNext /> -->
  </Carousel>
</template>
