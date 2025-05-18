<template>
  <section
    class="bg-[url('/assets/image/counterbg.png')] bg-cover bg-center px-4 sm:px-8 md:px-16 lg:px-32 py-8 sm:py-10 md:py-16 rounded-3xl max-w-5xl mx-auto"
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
    <form class="w-full flex gap-4 relative justify-between items-center">
      <input
        type=""
        class="bg-white w-full p-4 rounded-lg"
        placeholder="Email Here"
      />
      <button
        class="flex items-center absolute right-2 font-semibold text-[16px] leading-[24px] text-white border-1 border-red bg-red rounded-lg px-4 py-2 gap-2 hover:bg-red-600 cursor-pointer"
      >
        Subscribe Now
        <img src="/assets/image/icon/rightarrow2.png" class="" alt="" />
      </button>
    </form>
  </section>
</template>
