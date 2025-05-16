<template>
  <div class="min-h-screen flex flex-col bg-unyt-primary-dark text-unyt-bg font-sans">
    <!-- Top Bar -->
    <div
      class="flex flex-col sm:flex-row justify-between items-center sm:items-start pl-4 sm:pl-8 md:pl-16 lg:pl-24 pr-4 sm:pr-8 md:pr-12 lg:pr-16 pt-6 sm:pt-10 md:pt-12">
      <!-- Logo and Accounting -->
      <div class="flex flex-col items-center sm:items-start">
        <img src="@/assets/unyt-logo.svg" alt="Unyt Logo" class="h-20 sm:h-24 md:h-28 lg:h-32" />
      </div>
      <!-- Releases and Email -->
      <div class="flex flex-row sm:flex-col items-center sm:items-end mt-4 sm:mt-2 space-x-4 sm:space-x-0">
        <a href="https://github.com/unytco/domino-releases/releases" class="hover:opacity-80 transition-opacity">
          <span class="text-base sm:text-lg text-unyt-bg/80 border-b border-unyt-accent">Releases</span>
        </a>
        <a href="mailto:info@unyt.co"
          class="text-unyt-accent text-base sm:text-lg hover:opacity-80 transition-opacity">info@unyt.co</a>
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col justify-center pl-4 sm:pl-8 md:pl-16 lg:pl-24 pr-4 sm:pr-8 md:pr-16">
      <h1 class="text-3xl sm:text-4xl md:text-5xl font-normal mb-8 sm:mb-12">
        Make DePIN Payments Easy</h1>
      <ul class="space-y-6 sm:space-y-8">
        <li class="flex items-start">
          <span class="w-4 h-4 sm:w-5 sm:h-5 bg-unyt-accent rounded-sm mt-1 mr-3 sm:mr-5"></span>
          <span>
            <b>Affordable</b>: Low fees, handle more customers, quick payments
          </span>
        </li>
        <li class="flex items-start">
          <span class="w-4 h-4 sm:w-5 sm:h-5 bg-unyt-accent rounded-sm mt-1 mr-3 sm:mr-5"></span>
          <span>
            <b>Secure</b>: Payment records can't be changed because every action is locked and verified
          </span>
        </li>
        <li class="flex items-start">
          <span class="w-4 h-4 sm:w-5 sm:h-5 bg-unyt-accent rounded-sm mt-1 mr-3 sm:mr-5"></span>
          <span>
            <b>Independent</b>: Works directly between you and customers, but can connect to traditional systems
          </span>
        </li>
      </ul>
    </div>

    <!-- Footer -->
    <footer class="w-full relative mt-auto pb-6 sm:pb-8">
      <div
        class="container mx-auto pl-4 sm:pl-8 md:pl-16 lg:pl-24 pr-4 sm:pr-8 lg:pr-16 py-4 sm:py-8 lg:py-12 max-w-[1920px] flex flex-col items-center sm:block">
        <img src="@/assets/PBH_logo_white.svg" alt="Powered by Holochain"
          class="h-10 sm:h-14 md:h-20 lg:h-24 xl:h-32 w-auto" />
        <p
          class="text-unyt-bg/40 text-xs sm:text-sm font-light mt-2 sm:mt-0 sm:absolute sm:bottom-6 sm:right-8 lg:bottom-12 lg:right-16">
          © {{ new Date().getFullYear() }} Unyt.co All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
// No script needed for static layout
</script>

<style scoped>
/* Add any extra tweaks here if needed */
</style>
