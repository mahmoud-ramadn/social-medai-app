<template>
  <div class="bg-white max-w-[600px] mx-auto p-4 rounded-lg shadow-md">
    <h1 class="text-2xl font-semibold text-center">How Would You rate yourService with us?</h1>

    <div class="flex justify-center items-center mt-10 gap-5">
      <button
        v-for="n in 10"
        :key="n"
        @click="handleSelectedNumber"
        type="button"
        :class="[n === selectedNumber ? 'bg-yellow-400' : 'bg-white']"
        class="bg-white border cursor-pointer rounded-full size-10 flex justify-center items-center"
      >
        {{ n }}
      </button>
    </div>
    <p class="text-center text-gray-600 mt-10">You selected {{ selectedNumber }}</p>
    <input
      type="text"
      name=""
      id=""
      v-model="commitRating"
      class="bg-white border rounded-lg p-2 my-5 w-full"
    />
    <button @click="HandleSubmit" class="bg-yellow-400 text-white rounded-lg p-2 w-full">
      Submit
    </button>
    <div v-for="review in reviewsData" :key="review.id" class="mt-10">
      <UiReveiweListing
        :id="review.id"
        :reviewNumber="review.reviewNumber"
        :reviewText="review.reviewText"
        @delete="handleDelete"
        @edit="handleEdit"
      />
    </div>
  </div>
</template>

<script setup lang="ts">

const selectedNumber = ref(0);
const commitRating = ref('');
const reviewsData = ref<{ id: number; reviewNumber: number; reviewText: string }[]>([]);
const editingId = ref<number | null>(null);

const handleSelectedNumber = (e: MouseEvent) => {
  const target = e.target as HTMLButtonElement;
  selectedNumber.value = parseInt(target.textContent || '0');
};

const HandleSubmit = () => {
  if (editingId.value) {
    // تعديل
    reviewsData.value = reviewsData.value.map((review) =>
      review.id === editingId.value
        ? { ...review, reviewNumber: selectedNumber.value, reviewText: commitRating.value }
        : review
    );
    editingId.value = null;
  } else {
    // إضافة جديدة
    reviewsData.value.push({
      id: Math.random(),
      reviewNumber: selectedNumber.value,
      reviewText: commitRating.value,
    });
  }
  commitRating.value = '';
};

const handleDelete = (id: number) => {
  reviewsData.value = reviewsData.value.filter((review) => review.id !== id);
};

const handleEdit = (id: number) => {
  const review = reviewsData.value.find(r => r.id === id);
  if (review) {
    selectedNumber.value = review.reviewNumber;
    commitRating.value = review.reviewText;
    editingId.value = id;
  }
};

onMounted(() => {
  const stored = localStorage.getItem('reviews');
  if (stored) {
    reviewsData.value = JSON.parse(stored);
  }
});

watch(reviewsData, (newVal) => {
  localStorage.setItem('reviews', JSON.stringify(newVal));
}, { deep: true });
</script>
