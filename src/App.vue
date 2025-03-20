<template>
  <div class="min-h-screen bg-unyt-blue flex flex-col relative overflow-hidden">
    <!-- Particle/wave background -->
    <div class="particle-background">
      <div class="particles-container"></div>
      <div class="glow-overlay"></div>
    </div>

    <!-- Gradient overlay at bottom -->
    <div class="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-unyt-green/5 to-transparent"></div>

    <!-- Alternative wave animation elements -->
    <div class="wave-container">
      <div class="wave-alt wave-alt1"></div>
      <div class="wave-alt wave-alt2"></div>
      <div class="wave-alt wave-alt3"></div>
    </div>

    <main class="container mx-auto px-4 sm:px-8 lg:px-16 flex-grow max-w-[1920px] relative flex flex-col">
      <div class="flex-grow flex flex-col justify-center py-4 sm:py-12 lg:py-16">
        <h1 class="text-6xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-normal mb-6 sm:mb-8 tracking-tight">
          <span class="metallic-text">Unyt</span>
          <br />
          <span class="metallic-text">Accounting</span>
        </h1>

        <p
          class="text-white text-xl sm:text-xl lg:text-2xl max-w-xl sm:max-w-2xl lg:max-w-4xl xl:max-w-5xl font-light leading-relaxed">
          Unlock the Potential of DePIN with Microtransaction Accounting
        </p>

        <div class="mt-8 sm:mt-16 lg:mt-20">
          <p class="text-white text-2xl sm:text-2xl lg:text-3xl font-normal">
            Interested in testing?
            <a href="mailto:info@unyt.co"
              class="metallic-text hover:opacity-80 transition-opacity duration-300 ml-2">info@unyt.co</a>
          </p>
        </div>
      </div>

      <div class="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8">
        <a href="https://github.com/unytco/hfvz-releases/releases" target="_blank" rel="noopener noreferrer"
          class="text-xl sm:text-xl transition-colors duration-300 group">
          <span class="metallic-text">Releases</span>
          <span
            class="inline-block ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 metallic-text">↗</span>
        </a>
      </div>
    </main>

    <footer class="w-full relative mt-auto pb-8 sm:pb-0">
      <div
        class="container mx-auto px-4 sm:px-8 lg:px-16 py-4 sm:py-8 lg:py-12 max-w-[1920px] flex flex-col items-center sm:block">
        <img src="@/assets/PBH_logo_white.svg" alt="Powered by Holochain"
          class="h-16 sm:h-14 md:h-20 lg:h-24 xl:h-32 w-auto" />
        <p
          class="text-white/40 text-sm font-light mt-2 sm:mt-0 sm:absolute sm:bottom-6 sm:right-8 lg:bottom-12 lg:right-16">
          © {{ new Date().getFullYear() }} Unyt.co All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap");

.metallic-text {
  color: theme("colors.unyt-green");
}

body {
  margin: 0;
  font-family: theme("fontFamily.sans");
  background: theme("colors.unyt-blue");
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

/* New background styles inspired by the example */
.particle-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(135deg, #001440 0%, #00205c 100%);
}

.particles-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image:
    radial-gradient(circle at 25% 25%, rgba(10, 100, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, rgba(10, 100, 255, 0.1) 0%, transparent 50%),
    url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50' cy='50' r='1' fill='%230a62ff' fill-opacity='0.15'/%3E%3C/svg%3E");
  opacity: 0.7;
  animation: particle-drift 30s linear infinite;
}

.glow-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:
    radial-gradient(circle at 30% 40%, rgba(10, 100, 255, 0.15) 0%, transparent 40%),
    radial-gradient(circle at 70% 60%, rgba(10, 100, 255, 0.15) 0%, transparent 40%);
  filter: blur(40px);
  animation: glow-pulse 15s ease-in-out infinite alternate;
}

/* Wave effect that moves across the screen */
.particle-background::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 200%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(10, 100, 255, 0.05), transparent);
  transform: skewX(-15deg);
  animation: wave-sweep 20s linear infinite;
}

@keyframes particle-drift {
  0% {
    background-position: 0% 0%;
  }

  100% {
    background-position: 100% 100%;
  }
}

@keyframes glow-pulse {
  0% {
    opacity: 0.5;
    transform: scale(1);
  }

  50% {
    opacity: 0.7;
    transform: scale(1.05);
  }

  100% {
    opacity: 0.5;
    transform: scale(1);
  }
}

@keyframes wave-sweep {
  0% {
    transform: translateX(-30%) skewX(-15deg);
  }

  100% {
    transform: translateX(30%) skewX(-15deg);
  }
}

/* Updated Wave animation styles */
.wave {
  position: absolute;
  width: 200%;
  height: 100%;
  left: -50%;
  background: transparent;
  z-index: 0;
  pointer-events: none;
}

.wave1 {
  top: 20%;
  border-radius: 40%;
  background: radial-gradient(circle, transparent 50%, rgba(10, 238, 183, 0.03) 70%, transparent 100%);
  animation: wave 20s linear infinite;
}

.wave2 {
  top: 40%;
  border-radius: 35%;
  background: radial-gradient(circle, transparent 50%, rgba(10, 238, 183, 0.03) 70%, transparent 100%);
  animation: wave 15s linear infinite;
  animation-delay: 2s;
}

.wave3 {
  top: 60%;
  border-radius: 45%;
  background: radial-gradient(circle, transparent 50%, rgba(10, 238, 183, 0.03) 70%, transparent 100%);
  animation: wave 25s linear infinite;
  animation-delay: 4s;
}

@keyframes wave {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@media (max-width: 640px) {
  html {
    font-size: 18px;
  }
}

@media (min-width: 1920px) {
  html {
    font-size: 18px;
  }
}

/* Alternative wave animation */
.wave-container {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
  pointer-events: none;
}

.wave-alt {
  position: absolute;
  width: 200%;
  height: 200px;
  background: linear-gradient(90deg, transparent, rgba(10, 238, 183, 0.1), transparent);
  animation: wave-move 15s linear infinite;
}

.wave-alt1 {
  top: 20%;
  opacity: 0.3;
  height: 180px;
  animation-duration: 18s;
}

.wave-alt2 {
  top: 45%;
  opacity: 0.2;
  height: 220px;
  animation-duration: 15s;
  animation-delay: 2s;
}

.wave-alt3 {
  top: 70%;
  opacity: 0.25;
  height: 200px;
  animation-duration: 20s;
  animation-delay: 4s;
}

@keyframes wave-move {
  0% {
    transform: translateX(-50%) translateY(0) skewX(15deg);
  }

  50% {
    transform: translateX(-30%) translateY(-10px) skewX(-15deg);
  }

  100% {
    transform: translateX(-50%) translateY(0) skewX(15deg);
  }
}
</style>
