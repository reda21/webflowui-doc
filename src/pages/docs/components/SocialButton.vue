<script setup lang="ts">
import { computed } from 'vue'
import { SocialButton, Icon } from 'webflow-ui'
import type { SocialProvider } from 'webflow-ui/components/social-button/types'

const networks: SocialProvider[] = ['github', 'twitter', 'google', 'facebook', 'linkedin', 'discord']

const generatedCode = computed(() => {
    return `<div class="flex gap-2">
  <SocialButton provider="github" />
  <SocialButton provider="twitter" />
  <SocialButton provider="discord" />
</div>`
})
</script>

<template>
    <div class="space-y-16 pb-20">
        <!-- Header -->
        <header class="space-y-4">
            <div class="flex items-center gap-3">
                <span
                    class="px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em]">OAuth
                    Provider</span>
                <span class="text-slate-500 dark:text-slate-500 text-xs font-medium">Brand Guidelines • Single
                    Sign-On</span>
            </div>
            <h1 class="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Social <span class="text-gradient">Connect</span>
            </h1>
            <p class="text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed italic">
                Des points d'entrée authentifiés conformes aux guidelines de marque officielles.
                Optimisés pour la conversion et la reconnaissance immédiate.
            </p>
        </header>

        <!-- Interactive Section -->
        <section class="group relative">
            <div
                class="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-[2rem] blur opacity-25 group-hover:opacity-40 transition duration-1000">
            </div>
            <div class="relative glass-card overflow-hidden">
                <!-- Live Preview Stage -->
                <div
                    class="relative min-h-[400px] flex items-center justify-center bg-slate-50/50 dark:bg-slate-900/50 p-12 overflow-hidden border-b border-white/5">
                    <!-- Geometric Background -->
                    <div class="absolute inset-0 opacity-20 pointer-events-none"
                        style="background-image: radial-gradient(var(--neon-indigo) 1px, transparent 1px); background-size: 40px 40px;">
                    </div>

                    <div
                        class="relative z-10 w-full max-w-2xl flex flex-wrap justify-center gap-6 p-12 bg-white/50 dark:bg-black/20 rounded-3xl border border-slate-200 dark:border-white/10 backdrop-blur-sm shadow-2xl">
                        <SocialButton v-for="network in networks" :key="network" :provider="network"
                            class="transform hover:scale-110 transition-transform duration-300" />
                    </div>
                </div>

                <!-- Meta Grid -->
                <div class="p-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center bg-slate-50 dark:bg-black/20">
                    <div class="space-y-1">
                        <span class="text-[10px] font-black text-slate-500 uppercase tracking-widest">SVG</span>
                        <p class="text-xs font-bold text-slate-500 dark:text-slate-400 italic">Logos vectoriels
                            officiels</p>
                    </div>
                    <div class="space-y-1 border-x border-slate-200 dark:border-white/5">
                        <span class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Hover</span>
                        <p class="text-xs font-bold text-slate-500 dark:text-slate-400 italic">Micro-interactions
                            natives</p>
                    </div>
                    <div class="space-y-1">
                        <span class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Contrast</span>
                        <p class="text-xs font-bold text-slate-500 dark:text-slate-400 italic">Conforme AAA</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Features Grid -->
        <section class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="glass-card p-8 space-y-4 hover:border-indigo-500/30 transition-colors group">
                <div
                    class="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                    <Icon name="heroicons:shield-check" class="text-xl" />
                </div>
                <h3 class="font-black italic uppercase text-slate-900 dark:text-white tracking-tight">Verified</h3>
                <p class="text-xs text-slate-500 leading-relaxed italic">
                    Couleurs et formes validées par les guidelines de chaque plateforme.
                </p>
            </div>
            <div class="glass-card p-8 space-y-4 hover:border-indigo-500/30 transition-colors group">
                <div
                    class="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                    <Icon name="heroicons:finger-print" class="text-xl" />
                </div>
                <h3 class="font-black italic uppercase text-slate-900 dark:text-white tracking-tight">Auth Ready</h3>
                <p class="text-xs text-slate-500 leading-relaxed italic">
                    Prêt à être connecté à Firebase Auth, Auth0 ou Supabase.
                </p>
            </div>
            <div class="glass-card p-8 space-y-4 hover:border-indigo-500/30 transition-colors group">
                <div
                    class="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                    <Icon name="heroicons:cursor-arrow-rays" class="text-xl" />
                </div>
                <h3 class="font-black italic uppercase text-slate-900 dark:text-white tracking-tight">Interactive</h3>
                <p class="text-xs text-slate-500 leading-relaxed italic">
                    Effets de survol et de focus pour une accessibilité maximale.
                </p>
            </div>
        </section>

        <!-- Code Documentation -->
        <section class="space-y-6">
            <h2 class="text-2xl font-bold flex items-center gap-3 italic">
                <span class="w-8 h-1 bg-indigo-500 rounded-full"></span>
                Injection
            </h2>
            <div class="code-window shadow-2xl shadow-indigo-500/5">
                <div class="code-header font-display">
                    <span
                        class="text-[10px] text-slate-500 font-mono font-black tracking-widest uppercase">Login.vue</span>
                </div>
                <div class="p-8 font-mono text-sm leading-relaxed overflow-x-auto bg-slate-50 dark:bg-slate-950/50">
                    <pre><span class="text-pink-600 dark:text-pink-500">import</span> { <span class="text-indigo-600 dark:text-indigo-400">SocialButton</span> } <span class="text-pink-600 dark:text-pink-500">from</span> <span class="text-emerald-600 dark:text-emerald-400">'@webmx/ui'</span>;

<span class="text-slate-500">// Authentification sociale</span>
<span class="text-slate-800 dark:text-white">{{ generatedCode }}</span></pre>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
.glass {
    background: var(--glass-bg);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid var(--glass-border);
}

.glass-card {
    background: var(--glass-bg);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid var(--glass-border);
    border-radius: 2.5rem;
}

.text-gradient {
    background: linear-gradient(135deg, var(--neon-indigo), var(--neon-violet));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>
