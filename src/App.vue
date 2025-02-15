<template>
  <div class="min-h-screen bg-[#053185] flex flex-col relative overflow-hidden">
    <!-- Gradient overlay at bottom -->
    <div class="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#0EDDD3]/5 to-transparent"></div>

    <main class="container mx-auto px-4 sm:px-8 lg:px-16 flex-grow max-w-[1920px] relative">
      <div class="py-8 sm:py-12 lg:py-16">
        <h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-normal mb-6 sm:mb-8 tracking-tight">
          <span class="metallic-text">Unyt</span>
          <br />
          <span class="metallic-text">Accounting</span>
        </h1>

        <p
          class="text-white text-lg sm:text-xl lg:text-2xl max-w-xl sm:max-w-2xl lg:max-w-4xl xl:max-w-5xl font-light leading-relaxed">
          Mutual credit accounting systems for DePIN that are immutable, transparent, and backed by productive capacity.
        </p>

        <div class="mt-12 sm:mt-16 lg:mt-20">
          <p class="text-white text-xl sm:text-2xl lg:text-3xl font-normal">
            Interested in testing?
            <a href="mailto:info@unyt.co" class="metallic-text hover:opacity-80 transition-opacity duration-300 ml-2"
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
          class="text-lg sm:text-xl transition-colors duration-300 group">
          <span class="metallic-text">Releases</span>
          <span class="inline-block ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 metallic-text"
            >↗</span
          >
        </a>
      </div>
    </main>

    <footer class="mt-auto w-full relative">
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
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap");

.metallic-text {
  background: linear-gradient(180deg, #0eddd3 0%, #7ff4ed 30%, #0eddd3 50%, #06a59d 70%, #0eddd3 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 30px rgba(14, 221, 211, 0.3);
}

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
