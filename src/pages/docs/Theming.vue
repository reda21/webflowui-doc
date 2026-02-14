<script setup lang="ts">
import { Icon } from 'webflow-ui'
</script>

<template>
    <div class="space-y-16 pb-20">
        <!-- Header -->
        <header class="space-y-4">
            <div class="flex items-center gap-3">
                <span
                    class="px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-black uppercase tracking-[0.2em]">Design
                    System Core</span>
                <span class="text-slate-500 dark:text-slate-500 text-xs font-medium">Tailwind v4 Engine • CSS Variables
                    Driven</span>
            </div>
            <h1 class="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Theming & <span class="text-gradient">DNA</span>
            </h1>
            <p class="text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed italic">
                "Modelez la réalité."
                WebMX n'impose pas une esthétique, il offre une structure atomique que vous pouvez
                transmuter selon l'identité de votre projet.
            </p>
        </header>

        <!-- Methods Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- Method 1: CSS Variables -->
            <div class="group relative">
                <div
                    class="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-600 rounded-[2rem] blur opacity-10 group-hover:opacity-20 transition duration-1000">
                </div>
                <div class="relative glass-card p-10 h-full flex flex-col hover:border-amber-500/30 transition-colors">
                    <div class="flex items-center gap-5 mb-8">
                        <div
                            class="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500 border border-amber-500/20 shadow-lg shadow-amber-500/10 backdrop-blur-sm">
                            <Icon name="heroicons:variable" size="md" />
                        </div>
                        <div>
                            <h3
                                class="font-black text-xl uppercase italic tracking-tighter text-slate-900 dark:text-white">
                                Variables Systèmes</h3>
                            <p class="text-[10px] text-amber-500 uppercase tracking-widest font-bold mt-1">Mutation
                                Runtime</p>
                        </div>
                    </div>
                    <p class="text-sm text-slate-500 mb-8 leading-relaxed italic border-l-2 border-amber-500/30 pl-4">
                        Redéfinissez le noyau visuel en temps réel via les variables CSS standard.
                    </p>
                    <div class="code-window mt-auto shadow-2xl shadow-amber-500/5">
                        <div class="code-header">
                            <div class="flex gap-1.5">
                                <div class="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                                <div class="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                            </div>
                            <span
                                class="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-auto">global.css</span>
                        </div>
                        <div class="p-6 bg-slate-950/50 font-mono text-xs leading-relaxed">
                            <div class="text-amber-500 mb-1">:root <span class="text-slate-500">{</span></div>
                            <div class="pl-4 flex gap-3">
                                <span class="text-slate-400">--neon-primary:</span>
                                <span class="text-emerald-400">#00f5ff</span><span class="text-slate-600">;</span>
                            </div>
                            <div class="pl-4 flex gap-3">
                                <span class="text-slate-400">--glass-bg:</span>
                                <span class="text-emerald-400">rgba(0,0,0,0.8)</span><span
                                    class="text-slate-600">;</span>
                            </div>
                            <div class="pl-4 flex gap-3">
                                <span class="text-slate-400">--radius-core:</span>
                                <span class="text-emerald-400">2rem</span><span class="text-slate-600">;</span>
                            </div>
                            <div class="text-slate-500 mt-1">}</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Method 2: Tailwind Integration -->
            <div class="group relative">
                <div
                    class="absolute -inset-1 bg-gradient-to-r from-sky-500 to-blue-600 rounded-[2rem] blur opacity-10 group-hover:opacity-20 transition duration-1000">
                </div>
                <div class="relative glass-card p-10 h-full flex flex-col hover:border-sky-500/30 transition-colors">
                    <div class="flex items-center gap-5 mb-8">
                        <div
                            class="w-14 h-14 rounded-2xl bg-sky-500/10 flex items-center justify-center text-sky-500 border border-sky-500/20 shadow-lg shadow-sky-500/10 backdrop-blur-sm">
                            <Icon name="heroicons:beaker" size="md" />
                        </div>
                        <div>
                            <h3
                                class="font-black text-xl uppercase italic tracking-tighter text-slate-900 dark:text-white">
                                Tailwind v4 Hook</h3>
                            <p class="text-[10px] text-sky-500 uppercase tracking-widest font-bold mt-1">Build-time
                                Fusion</p>
                        </div>
                    </div>
                    <p class="text-sm text-slate-500 mb-8 leading-relaxed italic border-l-2 border-sky-500/30 pl-4">
                        Étendez la syntaxe Tailwind avec les tokens WebMX natifs directement dans votre config.
                    </p>
                    <div class="code-window mt-auto shadow-2xl shadow-sky-500/5">
                        <div class="code-header">
                            <div class="flex gap-1.5">
                                <div class="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                                <div class="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                            </div>
                            <span
                                class="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-auto">tailwind.config</span>
                        </div>
                        <div class="p-6 bg-slate-950/50 font-mono text-xs leading-relaxed">
                            <div class="text-pink-500 mb-1">@theme <span class="text-slate-500">{</span></div>
                            <div class="pl-4 flex gap-3">
                                <span class="text-sky-400">--color-brand:</span>
                                <span class="text-white">var(--neon-primary)</span><span class="text-slate-600">;</span>
                            </div>
                            <div class="pl-4 flex gap-3">
                                <span class="text-sky-400">--font-display:</span>
                                <span class="text-white">'Outfit', sans-serif</span><span
                                    class="text-slate-600">;</span>
                            </div>
                            <div class="text-slate-500 mt-1">}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Visual Tokens Showcase -->
        <section class="glass-card p-12 space-y-10 border-white/5 bg-gradient-to-br from-amber-500/5 to-transparent">
            <h3 class="text-2xl font-bold italic flex items-center gap-3 text-white uppercase tracking-tight">
                <Icon name="heroicons:swatch" class="text-amber-500" />
                Visual Token Palette
            </h3>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
                <!-- Swatch 1 -->
                <div class="group cursor-pointer">
                    <div
                        class="aspect-[4/3] rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 shadow-lg shadow-indigo-500/20 border border-white/10 mb-4 group-hover:scale-105 transition-transform duration-500">
                    </div>
                    <div class="flex justify-between items-baseline px-1">
                        <span class="text-[10px] font-black text-white uppercase tracking-widest">Indigo</span>
                        <span class="text-[9px] font-mono text-indigo-400 opacity-60">neon-indigo</span>
                    </div>
                </div>

                <!-- Swatch 2 -->
                <div class="group cursor-pointer">
                    <div
                        class="aspect-[4/3] rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg shadow-emerald-500/20 border border-white/10 mb-4 group-hover:scale-105 transition-transform duration-500">
                    </div>
                    <div class="flex justify-between items-baseline px-1">
                        <span class="text-[10px] font-black text-white uppercase tracking-widest">Emerald</span>
                        <span class="text-[9px] font-mono text-emerald-400 opacity-60">neon-emerald</span>
                    </div>
                </div>

                <!-- Swatch 3 -->
                <div class="group cursor-pointer">
                    <div
                        class="aspect-[4/3] rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 shadow-lg shadow-cyan-500/20 border border-white/10 mb-4 group-hover:scale-105 transition-transform duration-500">
                    </div>
                    <div class="flex justify-between items-baseline px-1">
                        <span class="text-[10px] font-black text-white uppercase tracking-widest">Cyan</span>
                        <span class="text-[9px] font-mono text-cyan-400 opacity-60">neon-cyan</span>
                    </div>
                </div>

                <!-- Swatch 4 -->
                <div class="group cursor-pointer">
                    <div
                        class="aspect-[4/3] rounded-2xl bg-gradient-to-br from-rose-500 to-rose-600 shadow-lg shadow-rose-500/20 border border-white/10 mb-4 group-hover:scale-105 transition-transform duration-500">
                    </div>
                    <div class="flex justify-between items-baseline px-1">
                        <span class="text-[10px] font-black text-white uppercase tracking-widest">Rose</span>
                        <span class="text-[9px] font-mono text-rose-400 opacity-60">neon-rose</span>
                    </div>
                </div>
            </div>

            <div class="p-6 rounded-2xl bg-black/20 border border-white/5 flex items-center justify-between">
                <span class="text-xs font-bold text-slate-500 uppercase tracking-widest">Mode Sombre Natif</span>
                <div class="flex gap-2">
                    <div class="w-2 h-2 rounded-full bg-slate-800"></div>
                    <div class="w-2 h-2 rounded-full bg-slate-700"></div>
                    <div class="w-2 h-2 rounded-full bg-slate-600"></div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
.glass-card {
    background: var(--glass-bg);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid var(--glass-border);
    border-radius: 2rem;
}

.text-gradient {
    background: linear-gradient(135deg, var(--neon-amber), var(--neon-orange));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

.code-window {
    @apply rounded-2xl overflow-hidden border border-white/5 bg-black/40 shadow-2xl;
}

.code-header {
    @apply px-4 py-3 border-b border-white/5 bg-white/5 flex items-center;
}
</style>
