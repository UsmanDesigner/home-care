<template>
  <footer class="bg-gray-100 py-12">
    <div
      class="max-w-[1120px] mx-auto flex gap-[30px] flex-col px-[30px] lg:px-0"
    >
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FooterColumn title="Job Seekers" :items="jobSeekers" />
        <FooterColumn
          title="Solutions for Employers"
          :items="solutionsForEmployers"
        />
        <FooterColumn title="Company" :items="company" />
      </div>
      <div
        class="hidden lg:flex justify-between items-center border-[1px] border-[#E4E6E9] rounded-lg p-[15px]"
      >
        <div class="flex gap-[10px] items-center">
          <img :src="AppLogo" />
          <span class="text-[20px] text-[#111111]">Home Care Insights</span>
        </div>
        <div>
          <ul class="nav-links">
            <li><a href="/">Privacy Police</a></li>
            <li><a href="/">California Privacy Notice</a></li>
            <li><a href="/">Terms of Use</a></li>
            <li><a href="/">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
      <div class="flex items-center justify-center">
        <p class="text-[16px] text-[#111111] font-[500]">
          Inc © 2024 All Rights Reserved Worldwide
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import FooterColumn from "./ReusableComponents/FooterColumn.vue";
import AppLogo from "@/assets/svgs/home-care-logo.svg";

const jobSeekers = [
  { text: "Search Jobs", href: "#" },
  { text: "Browse Jobs", href: "#" },
  { text: "Search Salaries", href: "#" },
  { text: "Career Advice", href: "#" },
];

const solutionsForEmployers = [
  { text: "Enterprise Overview", href: "#" },
  { text: "How it Works", href: "#" },
  { text: "Customer Stories", href: "#" },
  { text: "FAQs", href: "#" },
  { text: "Request a Consultation", href: "#" },
];

const company = [
  { text: "About Us", href: "#" },
  { text: "Careers", href: "#" },
  { text: "Investors", href: "#" },
  { text: "Blog", href: "#" },
  { text: "Press", href: "#" },
];
</script>

<style scoped>
.nav-links {
  display: flex;
  gap: 1rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links li {
  margin: 0;
}

.nav-links a {
  color: #2b6f70;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
}

.nav-links a:hover {
  text-decoration: none;
}
</style>
