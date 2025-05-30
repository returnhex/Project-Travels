<script setup lang="ts">
import { motion } from 'motion-v';
</script>

<template>
  <section class="bg-[#FBFBFB] py-10 md:py-14 lg:py-16 xl:py-20 2xl:py-24">
    <div
      class="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-6 px-4 2xl:px-0"
    >
      <motion.div
        :initial="{x: -100}"
        :while-in-view="{x: 0}"
        :transition="{duration: 1}"
        class="h-[400px] md:h-[600px] w-full lg:w-[50%] rounded-3xl overflow-hidden"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d14594.148413840105!2d90.38472946319179!3d23.870565779743476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s23%2C%20Tropical%20Akhand%20Tower%20(Level%20%23%2003-05)%2C%20Gareeb-e-Nawaz%20Ave%2C%20Sector%20%23%2011%2C%20Uttara%2C%20Dhaka%20-%201230!5e0!3m2!1sen!2sbd!4v1747593733574!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </motion.div>
      <ContactForm />
    </div>
  </section>
</template>
