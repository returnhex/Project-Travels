<script setup lang="ts">
import { motion } from 'motion-v';
defineProps({
    topImg: String,
    cardIcon: String,
    cardTitle: String,
    cardDesc: String
})
</script>

<template>
    <section class="relative max-w-[1440px] md:h-[870px] mx-auto">
        <motion.div
        :initial="{x: -100}"
        :while-in-view="{x: 0}"
        :transition="{duration: 2}"
        class="relative flex flex-col gap-5 w-full h-full px-3 xxl:px-0">
            <div class="block md:absolute right-0 -z-10 md:px-3 xxl:px-0">
                <img class=" rounded-3xl" :src="topImg"/>
            </div>
            <div class="block md:absolute bottom-0 z-10
            w-full mr-10 md:mr-0
            md:w-[400px] 
            xl:w-[600px] 
            2xl:w-[706px] 
            px-8 xl:px-14 
            py-8 lg:py-16 xl:py-24 
            bg-[#F2F2F2] 
            rounded-3xl">
                <div class="w-full h-auto flex flex-col items-start gap-1 md:gap-2 xl:gap-5 2xl:gap-10">
                    <img :src="cardIcon" class="h-[50px] w-[50px] md:h-[80px] md:w-[80px] lg:h-[150px] lg:w-[150px]" />
                    <h1 class="font-bold text-2xl md:text-5xl text-[#3C3C3C]">{{cardTitle}}</h1>
                    <p class="font-medium text-[1rem] text-[#3C3C3C]">
                        {{ cardDesc }}
                    </p>
                </div>
            </div>
        </motion.div>
    </section>
</template>