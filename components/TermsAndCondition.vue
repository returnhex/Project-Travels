<template>
  <section class="max-w-4xl mx-auto py-10 px-4 pt-24 lg:pt-40">
    <h1 class="text-3xl font-bold mb-6 text-center">Terms and Conditions</h1>

    <p class="mb-4 text-[#3C3C3C]">
      Welcome to BdiGo Travels! By accessing or using our website, you agree to
      be bound by these Terms and Conditions. Please read them carefully before
      using our services.
    </p>

    <h2 class="text-xl font-semibold mt-6 mb-2">1. Booking and Payments</h2>
    <p class="mb-4 text-[#3C3C3C]">
      All bookings made through our platform are subject to availability. Full
      payment is required to confirm a reservation. We accept payments through
      our secure payment gateway.
    </p>

    <h2 class="text-xl font-semibold mt-6 mb-2">
      2. Cancellations and Refunds
    </h2>
    <p class="mb-4 text-[#3C3C3C]">
      Cancellations made 7 days prior to the tour date are eligible for a full
      refund. Cancellations made less than 7 days before the tour are
      non-refundable.
    </p>

    <h2 class="text-xl font-semibold mt-6 mb-2">3. Travel Documents</h2>
    <p class="mb-4 text-[#3C3C3C]">
      Travelers are responsible for obtaining valid travel documents (e.g.,
      passport, visa) before departure. BdiGo Travels is not liable for any
      delays or losses caused by invalid documentation.
    </p>

    <h2 class="text-xl font-semibold mt-6 mb-2">4. Changes to Itineraries</h2>
    <p class="mb-4 text-[#3C3C3C]">
      We reserve the right to modify tour itineraries due to weather, safety, or
      operational concerns. Clients will be informed of any major changes.
    </p>

    <h2 class="text-xl font-semibold mt-6 mb-2">5. Liability</h2>
    <p class="mb-4 text-[#3C3C3C]">
      BdiGo Travels is not liable for any injury, loss, or damage incurred
      during the tour. We recommend travelers purchase comprehensive travel
      insurance.
    </p>

    <h2 class="text-xl font-semibold mt-6 mb-2">6. Privacy Policy</h2>
    <p class="mb-4 text-[#3C3C3C]">
      Your personal information is protected under our Privacy Policy. We do not
      share your data with third parties without consent.
    </p>

    <h2 class="text-xl font-semibold mt-6 mb-2">7. Acceptance of Terms</h2>
    <p class="mb-4 text-[#3C3C3C]">
      By using our website or booking a tour, you acknowledge that you have
      read, understood, and agree to abide by these terms and conditions.
    </p>

    <p class="mt-8 text-gray-600 text-sm text-center">
      © {{ currentYear }} BdiGo Travels. All rights reserved.
    </p>
  </section>
</template>

<script setup lang="ts">
const currentYear = ref(0);
onMounted(() => {
  currentYear.value = new Date().getFullYear();
});
</script>
