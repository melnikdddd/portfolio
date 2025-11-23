<template>
  <article class="w-full">
    <!-- Bio Section: Photo + Name + Info -->
    <section class="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-8">
      <ProfilePhoto />
      <!-- Name, Description & Main Information -->
      <div class="flex flex-col gap-6 md:pl-6 lg:pl-8 w-full max-w-full">
        <ProfileHeader />
        <!-- Main Information Section -->
        <div class="flex flex-col gap-6">
          <WorkExperienceSection />
          <EducationSection />
          <LocationSection />
          <LanguagesSection />
        </div>
      </div>
    </section>
  </article>
</template>
