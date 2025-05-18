<template>
  <section
    class="bg-[url('/assets/image/counterbg.png')] bg-cover bg-center  px-4 sm:px-8 md:px-16 lg:px-32 py-8 sm:py-10 md:py-16 rounded-3xl max-w-5xl mx-auto"
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
    <form class="w-full flex flex-col sm:flex-row items-stretch gap-4">
      <input
        type="email"
        class="flex-1 bg-white p-3 sm:p-4 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green"
        placeholder="Email Here"
      />
      <button
        type="submit"
        class="flex-shrink-0 bg-red text-white font-semibold text-sm sm:text-base leading-relaxed px-4 sm:px-6 py-3 sm:py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-red-700 transition"
      >
        <span>Subscribe Now</span>
        <img
          src="/assets/image/icon/rightarrow2.png"
          alt="→"
          class="h-4 w-4 sm:h-5 sm:w-5"
        />
      </button>
    </form>
  </section>
</template>
