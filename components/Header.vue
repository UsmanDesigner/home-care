<template>
  <header class="relative bg-white border-b border-[#e4e6e9] py-4">
    <nav
      class="w-full max-w-[1120px] mx-auto flex items-center justify-between"
    >
      <button
        @click="toggleMenu"
        class="absolute left-4 top-1/2 transform -translate-y-1/2 md:hidden text-[#111111]"
      >
        <img src="../assets/svgs/menu-icon.svg" alt="Menu" class="w-6 h-6" />
      </button>
      <div
        class="flex items-center gap-2 mx-auto md:mx-0 cursor-pointer"
        @click="handleNavigate"
      >
        <img :src="AppLogo" class="w-12 h-12" />
        <span class="text-[20px] text-[#111111]">Home Care Insights</span>
      </div>
      <ul class="nav-links hidden md:flex">
        <li><a href="/">Industry Talent Reports</a></li>
        <li><a href="#">For employers in home health →</a></li>
      </ul>
    </nav>
    <div
      v-if="isMenuOpen"
      class="fixed inset-0 bg-white shadow-lg z-50 flex flex-col py-4 px-6 md:hidden"
    >
      <button
        @click="toggleMenu"
        class="absolute top-4 right-4 text-[#111111] text-2xl"
      >
        &times;
      </button>
      <ul class="flex flex-col gap-4">
        <li><a href="/">Industry Talent Reports</a></li>
        <li><a href="#">For employers in home health →</a></li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import AppLogo from "../assets/svgs/home-care-logo.svg";
import { useRouter } from "nuxt/app";

const isMenuOpen = ref(false);
const router = useRouter();

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
const handleNavigate = () => {
  router.push("/");
};
</script>

<style scoped>
header {
  background-color: #ffffff;
  color: #111111;
  padding: 1rem;
  position: relative;
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links li {
  margin: 0;
}

.nav-links a {
  color: #111111;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
}

.nav-links a:hover {
  text-decoration: none;
}

@media (max-width: 767px) {
  .nav-links {
    display: none;
  }
}
</style>
