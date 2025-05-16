<template>
  <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
  <div class="min-h-screen flex flex-col bg-unyt-primary-dark text-unyt-bg font-sans">
    <!-- Top Bar -->
    <div
      class="flex flex-col sm:flex-row justify-between items-center sm:items-start pl-4 sm:pl-8 md:pl-16 lg:pl-24 pr-4 sm:pr-8 md:pr-12 lg:pr-16 pt-8 sm:pt-12 md:pt-14">
      <!-- Logo and Accounting -->
      <div class="flex flex-col items-center sm:items-start">
        <img src="@/assets/unyt-logo.svg" alt="Unyt Logo" class="h-24 sm:h-28 md:h-32 lg:h-36" />
      </div>
      <!-- Releases and Email -->
      <div class="flex flex-row sm:flex-col items-center sm:items-end mt-4 sm:mt-2 space-x-4 sm:space-x-0 mb-8 sm:mb-0">
        <a
          href="https://github.com/unytco/domino-releases/releases"
          target="_blank"
          class="hover:opacity-80 transition-opacity">
          <span class="text-lg sm:text-xl text-unyt-bg/80 border-b border-unyt-accent">Releases</span>
        </a>
        <a href="mailto:info@unyt.co" class="text-unyt-accent text-lg sm:text-xl hover:opacity-80 transition-opacity"
          >info@unyt.co</a
        >
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col justify-center pl-4 sm:pl-8 md:pl-16 lg:pl-24 pr-4 sm:pr-8 md:pr-16">
      <h1 class="text-4xl sm:text-5xl md:text-6xl font-normal mb-10 sm:mb-14">Make DePIN Payments Easy</h1>
      <ul class="space-y-8 sm:space-y-10">
        <li class="flex items-center">
          <span class="w-5 h-5 sm:w-6 sm:h-6 bg-unyt-accent rounded-sm mr-4 sm:mr-6"></span>
          <span class="text-lg sm:text-xl"> <b>Affordable</b>: Low fees, handle more customers, quick payments </span>
        </li>
        <li class="flex items-center">
          <span class="w-5 h-5 sm:w-6 sm:h-6 bg-unyt-accent rounded-sm mr-4 sm:mr-6"></span>
          <span class="text-lg sm:text-xl">
            <b>Secure</b>: Payment records can't be changed because every action is locked and verified
          </span>
        </li>
        <li class="flex items-center">
          <span class="w-5 h-5 sm:w-6 sm:h-6 bg-unyt-accent rounded-sm mr-4 sm:mr-6"></span>
          <span class="text-lg sm:text-xl">
            <b>Independent</b>: Works directly between you and customers, but can connect to traditional systems
          </span>
        </li>
      </ul>
    </div>

    <!-- Footer -->
    <footer class="w-full relative mt-auto pb-8 sm:pb-10">
      <div
        class="container mx-auto pl-4 sm:pl-8 md:pl-16 lg:pl-24 pr-4 sm:pr-8 lg:pr-16 py-6 sm:py-10 lg:py-14 max-w-[1920px] flex flex-col items-center sm:block">
        <img
          src="@/assets/PBH_logo_white.svg"
          alt="Powered by Holochain"
          class="h-8 sm:h-8 md:h-12 lg:h-14 xl:h-18 w-auto" />
        <p
          class="text-unyt-bg/40 text-sm sm:text-base font-light mt-3 sm:mt-0 sm:absolute sm:bottom-8 sm:right-8 lg:bottom-14 lg:right-16">
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
