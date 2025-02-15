<template>
  <div class="min-h-screen bg-[#053185] flex flex-col">
    <main class="container mx-auto px-4 sm:px-8 lg:px-16 flex-grow max-w-[1920px]">
      <div class="py-8 sm:py-12 lg:py-16">
        <h1 class="text-[#0EDDD3] text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light mb-6 sm:mb-8">
          Unyt<br />Accounting
        </h1>

        <p
          class="text-white text-lg sm:text-xl lg:text-2xl max-w-xl sm:max-w-2xl lg:max-w-4xl xl:max-w-5xl font-light leading-relaxed">
          Mutual credit accounting systems for DePIN that are immutable, transparent, and backed by productive capacity.
        </p>

        <div class="mt-12 sm:mt-16 lg:mt-20">
          <p class="text-white text-lg sm:text-xl">
            Interested in testing?
            <a href="mailto:info@unyt.co" class="text-white hover:text-[#0EDDD3] transition-colors duration-300"
              >info@unyt.co</a
            >
          </p>
        </div>
      </div>

      <div class="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8">
        <a
          href="https://github.com/unytco/hfvz-releases/releases"
          target="_blank"
          rel="noopener noreferrer"
          class="text-[#0EDDD3] text-lg sm:text-xl hover:underline transition-colors duration-300"
          >Releases</a
        >
      </div>
    </main>

    <footer class="mt-auto w-full">
      <div class="container mx-auto px-4 sm:px-8 lg:px-16 py-6 sm:py-8 lg:py-12 max-w-[1920px] relative">
        <img
          src="@/assets/PBH_logo_white.svg"
          alt="Powered by Holochain"
          class="h-10 sm:h-14 md:h-20 lg:h-24 xl:h-32 w-auto" />
        <p
          class="text-white/40 text-xs font-light absolute bottom-6 sm:bottom-8 lg:bottom-12 right-4 sm:right-8 lg:right-16">
          © {{ new Date().getFullYear() }} Unyt.co All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400&display=swap");

body {
  margin: 0;
  font-family: "Inter", sans-serif;
  background: #053185;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

@media (max-width: 640px) {
  html {
    font-size: 14px;
  }
}

@media (min-width: 1920px) {
  html {
    font-size: 18px;
  }
}
</style>
