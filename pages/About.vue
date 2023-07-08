<script setup lang="ts">
const { data: equalQuery } = await useAsyncData('equal', () => {
  return queryContent('/about').find();
});
</script>

<template>
  <div>
    <div v-if="equalQuery" class="w-full p-3 mb-4">
      <Profile
        v-for="person in equalQuery"
        :key="person.id"
        :name="person.name"
        :phone="person.phone"
        :email="person.email"
        :description="person.description"
        :img="person.image"
        :image-class="person.class"
      >
        <div class="w-full sm:p-1 pt-4" :class="person.position">
          <ContentRenderer :value="person" />
        </div>
      </Profile>
    </div>
    <!-- <Profile name="Anna Nemeckay" img="/img/anna_profile.jpeg" phone="561-716-6650" email="anna@motive8endurance.com">
      <div class="w-fullsm:p-1">
        <h5 class="mt-3 mb-2 underline">USAT certified triathlon coach</h5>
        <p>
          As a USAT certified coach, Training peaks Level II coach and multiple IM athlete, I create training plans that
          work around an athletes life. I believe hard work pays off but over-training is never the answer. I develop
          training plans that are unique to the athletes needs based on their current fitness level, past race
          experiences, lifestyle, race goals and injuries. Communication with my athletes is pivotal to their success so
          when they show up on the start line they know that their training has prepared them for race day.
        </p>
        <p>
          I work with athletes all over the US, from every economic and social background. I train athletes who are
          doing their very first sprint to Ironman World Championships. Each athlete is treated with the same care a
          detail that is needed for their personal goals!
        </p>
        <h5 class="mt-3 mb-2 underline">Family Background</h5>
        <p>
          Growing up in South Florida I have been in the fitness industry for almost 25 years. As a child and young
          adult, I didn't have the opportunity to play in organized sports. Being the oldest of three girls in a single
          parent family my responsibilities and lack of money didn't allow me to enjoy sports in school this is likely
          the reason that I committed to making fitness my life after school.
        </p>
      </div>
    </Profile> -->
  </div>
</template>
