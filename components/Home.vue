<template>
  <div>
    <ParallaxContainer background-img="img/blue_bg.jpg">
      <ParallaxElement :factor="0.3">
        <div>
          <LayoutContainer :is-slider="true" img="/img/img_8880.jpeg">
            <Mission />
          </LayoutContainer>
        </div>
      </ParallaxElement>
    </ParallaxContainer>
  </div>
</template>
