<script setup lang='ts'>
import { ref } from 'vue'
const email = ref<string | ''>('')
const message = ref<string | ''>('')

const subscribe = async () => {
  try {
    const res = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email.value }),
    })

    const data = await res.json()
    message.value = data.message
    email.value = ''
    alert("Subscribed")
  } catch (err) {
    alert('Failed to subscribe.')
    console.error(err)
  }
}
</script>

<template>
  <section
    class="bg-[url('/assets/image/counterbg.png')] bg-cover bg-center mx-4 px-4 sm:px-8 md:px-16 lg:px-32 py-8 sm:py-10 md:py-16
    rounded-xl md:rounded-3xl max-w-5xl md:mx-auto"
  >
    <!-- Headline & Subtext -->
    <div class="text-center sm:text-left mb-6 sm:mb-8">
      <h2
        class="text-xl sm:text-xl md:text-2xl lg:text-2xl sm:leading-normal md:leading-extra-loose font-semibold text-white"
      >
        Get Updated with the Latest Newsletter
      </h2>
      <p
        class="mt-2 text-sm sm:text-base md:text-lg leading-relaxed sm:leading-[28px] font-medium text-white"
      >
        Thinking of taking a break from everyday life? Don’t worry, we take care
        of your trip.
      </p>
    </div>

    <!-- Input + Button -->
    <form @submit.prevent="subscribe"
     class="w-full flex gap-4 relative justify-between items-center">
      <input
       v-model="email"
        type="email"
        
        class="bg-white w-full px-2 py-2 sm:py-4 sm:px-4 rounded-lg"
        placeholder="Email Here"
      />
      <button
        type="submit"
        class="flex items-center absolute right-1 sm:right-2 font-semibold text-[10px] md:text-[16px] leading-[24px] text-white border-1 border-red bg-red rounded-lg px-2 py-1 sm:px-4 sm:py-2 gap-2 hover:bg-red-600 cursor-pointer"
      >
        Subscribe Now
        <img src="/assets/image/icon/rightarrow2.png" class="" alt="" />
      </button>
       <p v-if="message">{{ message }}</p>
    </form>
  </section>
</template>
