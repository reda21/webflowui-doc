<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { Navbar, ModalRenderer, ToastProvider, Icon, type NavItem } from 'webflow-ui'

const route = useRoute()
const isDark = ref(true) // Force dark by default for premium feel
const brandName = ref('WEBMX')
const ctaText = ref('CONSOLE')

const navItems = computed<NavItem[]>(() => [
    { label: 'ACCUEIL', href: '/', active: route.path === '/' },
    { label: 'LABORATOIRE', href: '/docs', active: route.path.startsWith('/docs') },
])

const toggleDarkMode = () => {
    isDark.value = !isDark.value
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

watch(isDark, (dark) => {
    const html = document.documentElement
    if (dark) {
        html.classList.add('dark')
    } else {
        html.classList.remove('dark')
    }
})

onMounted(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
        isDark.value = savedTheme === 'dark'
    } else {
        isDark.value = true // Force dark default
    }
    document.documentElement.classList.toggle('dark', isDark.value)
})
</script>

<template>
    <div class="min-h-screen bg-transparent selection:bg-cyan-500/30">
        <!-- Background Layer -->
        <div class="fixed inset-0 pointer-events-none">
            <div class="absolute inset-0 bg-[#020617]"></div>
            <div class="absolute inset-0 opacity-20"
                style="background-image: radial-gradient(#1e293b 1px, transparent 1px); background-size: 40px 40px;">
            </div>
        </div>

        <!-- Global UI: Navbar -->
        <Navbar :brand-name="brandName" logo-href="/" :nav-items="navItems" :show-search="true"
            :show-theme-toggle="true" :is-dark="isDark" :cta-text="ctaText" sticky blur @theme-toggle="toggleDarkMode">
            <template #logo-icon>
                <div
                    class="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                    <Icon name="heroicons:bolt" class="text-white w-5 h-5" />
                </div>
            </template>

            <template #nav-links>
                <router-link v-for="item in navItems" :key="item.label" :to="item.href"
                    class="relative px-6 py-2 text-[10px] font-black tracking-[0.3em] transition-all duration-300 rounded-full hover:bg-white/5 italic"
                    :class="item.active ? 'text-cyan-400 bg-white/5' : 'text-slate-500 hover:text-white'">
                    {{ item.label }}
                    <span v-if="item.active"
                        class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cyan-400 animate-pulse" />
                </router-link>
            </template>
        </Navbar>

        <!-- Dynamic Content -->
        <main class="relative z-10">
            <ToastProvider>
                <router-view />
                <ModalRenderer />
            </ToastProvider>
        </main>

        <!-- Global UI: Footer -->
        <footer class="relative z-10 py-12 border-t border-white/5 bg-black/40 backdrop-blur-xl">
            <div class="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
                <div class="flex items-center gap-4">
                    <div
                        class="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                        <Icon name="heroicons:cube-transparent" class="text-slate-500" />
                    </div>
                    <div>
                        <p class="text-[10px] font-black text-white tracking-[0.2em] italic uppercase">WebMX Engine</p>
                        <p class="text-[10px] text-slate-600 tracking-widest uppercase">Protocol v5.4.0 • Node Paris_01
                        </p>
                    </div>
                </div>

                <div class="flex gap-8">
                    <a href="#"
                        class="text-[10px] font-black text-slate-500 hover:text-cyan-400 tracking-widest uppercase transition-colors italic">GitHub</a>
                    <a href="#"
                        class="text-[10px] font-black text-slate-500 hover:text-cyan-400 tracking-widest uppercase transition-colors italic">Twitter</a>
                    <a href="#"
                        class="text-[10px] font-black text-slate-500 hover:text-cyan-400 tracking-widest uppercase transition-colors italic">Discord</a>
                </div>

                <p class="text-[10px] font-black text-slate-700 tracking-[0.2em] italic uppercase">
                    &copy; 2026 WebMX Collective. All bits reserved.
                </p>
            </div>
        </footer>
    </div>
</template>

<style>
/* Global Premium Transitions */
.page-fade-enter-active,
.page-fade-leave-active {
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.page-fade-enter-from {
    opacity: 0;
    transform: translateY(10px);
}

.page-fade-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}

/* Custom Scrollbar */
::-webkit-scrollbar {
    width: 6px;
}

::-webkit-scrollbar-track {
    background: #020617;
}

::-webkit-scrollbar-thumb {
    background: #1e293b;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
    background: #334155;
}
</style>
