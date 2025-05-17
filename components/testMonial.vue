<template>
  <section class="px-4 md:px-12 py-16 max-w-7xl mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <!-- Left: Profile Image -->
      <div class="flex justify-center">
        <img
          src="/assets/image/testimonial.png"
          alt="Customer"
          class="object-cover"
        />
      </div>

      <!-- Right: Testimonial Content -->
      <div class="">
        <div class="border-1 border-green">
          <div class="flex justify-start items-center gap-2">
            <img src="/assets/image/Vector.png" alt="" />
            <p class="text-green font-semibold text-xl leading-[32px] mb-1">
              Testimonial
            </p>
          </div>
          <h2
            class="text-xl md:text-3xl leading-xl md:leading-[64px] text-gray font-bold mb-2"
          >
            Experiences Shared By Our Customers
          </h2>
          <p
            class="text-gray text-base leading-relaxed font-medium mb-6 max-w-lg"
          >
            The statement implies a willingness to help someone escape their
            daily routine by taking care of their travel plans. It suggests a
            travel agency or similar service.
          </p>
        </div>

        <div class="bg-[#F2F4F7] p-6 rounded-lg border-l-3 border-green">
          <p class="text-black font-medium text-xl leading-[32px] mb-4">
            "Our family trip to the Maldives was magical! From the booking to
            the resort, everything was perfectly organized. The team even
            surprised us with a sunset dinner. Thank you for making this
            unforgettable!"
          </p>
          <div>
            <div class="flex items-center text-[#F4A004] text-sm mb-2">
              <span v-for="n in 5" :key="n">★</span>
            </div>

            <p class="font-semibold text-black text-xl leading-[32px]">
              Sarah Karim
            </p>
            <p class="font-medium text-[20px] leading-[28px] text-black">
              Manager at Banoi LifeStyle
            </p>
          </div>
        </div>

        <div class="flex justify-between items-center mt-6 space-x-4">
          <button
            class="flex items-center font-semibold text-base leading-relaxed text-red border-1 border-red rounded-lg px-4 py-2 gap-2"
          >
            See All <img src="/assets/image/icon/rightarrow.png" alt="" />
          </button>
          <div class="flex">
            <img src="/assets/image/leftarrow.png" alt="" />
            <img src="/assets/image/rightarrow.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
