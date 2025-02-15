<template>
  <div class="holochain-logo">
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="holochainGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" style="stop-color: #00ffff; stop-opacity: 1" />
          <stop offset="50%" style="stop-color: #8a2be2; stop-opacity: 1" />
          <stop offset="100%" style="stop-color: #00ffff; stop-opacity: 1" />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <circle cx="50" cy="50" r="40" fill="url(#holochainGradient)" filter="url(#glow)">
        <animate attributeName="r" values="38;42;38" dur="3s" repeatCount="indefinite" />
      </circle>
    </svg>
  </div>
</template>

<style scoped>
.holochain-logo {
  position: relative;
  width: 100%;
  height: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

svg {
  width: 100%;
  height: 100%;
}
</style>
