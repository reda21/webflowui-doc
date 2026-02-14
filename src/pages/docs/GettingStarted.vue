<script setup lang="ts">
import { Icon, Button } from 'webflow-ui'
</script>

<template>
    <div class="space-y-16 pb-20">
        <!-- Header -->
        <header class="space-y-4">
            <div class="flex items-center gap-3">
                <span
                    class="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-[0.2em]">Initialisation</span>
                <span class="text-slate-500 dark:text-slate-500 text-xs font-medium">Temps de setup &lt; 1min • Zero
                        Config</span>
            </div>
            <h1 class="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Getting <span class="text-gradient">Started</span>
            </h1>
            <p class="text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed italic">
                "La simplicité est la sophistication suprême."
                Intégrez l'écosystème WebMX dans votre projet et commencez à bâtir des interfaces
                interstellaires dès aujourd'hui.
            </p>
        </header>

        <!-- Installation Steps -->
        <section class="space-y-12">
            <!-- Step 1 -->
            <div class="group relative">
                <div
                    class="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-[2rem] blur opacity-10 group-hover:opacity-20 transition duration-1000">
                </div>
                <div
                    class="relative glass-card p-10 flex flex-col md:flex-row gap-10 items-start hover:border-emerald-500/30 transition-colors">
                    <div class="flex-shrink-0">
                        <div
                            class="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-black text-2xl border border-emerald-500/20 shadow-lg shadow-emerald-500/10 backdrop-blur-sm">
                            01
                        </div>
                    </div>
                    <div class="flex-1 space-y-6 w-full">
                        <div>
                            <h3
                                class="text-2xl font-bold italic text-slate-900 dark:text-white uppercase tracking-tighter flex items-center gap-3">
                                <Icon name="heroicons:cube-transparent" class="text-emerald-500" />
                                Infection du Noyau
                            </h3>
                            <p class="text-slate-500 text-sm mt-1 border-l-2 border-emerald-500/30 pl-3">Ajoutez les
                                dépendances WebMX à votre environnement de calcul.</p>
                        </div>
                        <div class="code-window shadow-2xl shadow-emerald-500/5">
                            <div class="code-header">
                                <div class="flex gap-1.5">
                                    <div class="w-2.5 h-2.5 rounded-full bg-red-500/20"></div>
                                    <div class="w-2.5 h-2.5 rounded-full bg-yellow-500/20"></div>
                                    <div class="w-2.5 h-2.5 rounded-full bg-green-500/20"></div>
                                </div>
                                <span
                                    class="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-auto">Protocol:
                                    NPM_INSTALL</span>
                            </div>
                            <div
                                class="p-6 bg-slate-950/50 font-mono text-sm group/code cursor-pointer transition-colors hover:bg-slate-950/70">
                                <div class="flex items-center justify-between">
                                    <div>
                                        <span class="text-emerald-400">$ </span><span class="text-white">npm install
                                            @webmx/core @webmx/ui</span>
                                    </div>
                                    <Icon name="heroicons:clipboard"
                                        class="text-slate-600 opacity-0 group-hover/code:opacity-100 transition-opacity" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Step 2 -->
            <div class="group relative">
                <div
                    class="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-[2rem] blur opacity-10 group-hover:opacity-20 transition duration-1000">
                </div>
                <div
                    class="relative glass-card p-10 flex flex-col md:flex-row gap-10 items-start hover:border-blue-500/30 transition-colors">
                    <div class="flex-shrink-0">
                        <div
                            class="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 font-black text-2xl border border-blue-500/20 shadow-lg shadow-blue-500/10 backdrop-blur-sm">
                            02
                        </div>
                    </div>
                    <div class="flex-1 space-y-6 w-full">
                        <div>
                            <h3
                                class="text-2xl font-bold italic text-slate-900 dark:text-white uppercase tracking-tighter flex items-center gap-3">
                                <Icon name="heroicons:swatch" class="text-blue-500" />
                                Synchronisation CSS
                            </h3>
                            <p class="text-slate-500 text-sm mt-1 border-l-2 border-blue-500/30 pl-3">Importez le
                                spectre visuel dans votre point d'entrée principal.</p>
                        </div>
                        <div class="code-window shadow-2xl shadow-blue-500/5">
                            <div class="code-header">
                                <div class="flex gap-1.5">
                                    <div class="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                                    <div class="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                                </div>
                                <span
                                    class="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-auto">Source:
                                    main.ts</span>
                            </div>
                            <div class="p-6 bg-slate-950/50 font-mono text-sm space-y-2">
                                <div class="flex gap-2">
                                    <span class="text-slate-600">1</span>
                                    <span><span class="text-pink-500">import</span> <span
                                            class="text-emerald-400">'@webmx/ui/style.css'</span>;</span>
                                </div>
                                <div class="flex gap-2">
                                    <span class="text-slate-600">2</span>
                                    <span><span class="text-pink-500">import</span> { <span
                                            class="text-blue-400">createApp</span> } <span
                                            class="text-pink-500">from</span> <span
                                            class="text-emerald-400">'vue'</span>;</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Step 3 -->
            <div class="group relative">
                <div
                    class="absolute -inset-1 bg-gradient-to-r from-violet-500 to-purple-600 rounded-[2rem] blur opacity-10 group-hover:opacity-20 transition duration-1000">
                </div>
                <div
                    class="relative glass-card p-10 flex flex-col md:flex-row gap-10 items-start hover:border-violet-500/30 transition-colors">
                    <div class="flex-shrink-0">
                        <div
                            class="w-16 h-16 rounded-2xl bg-violet-500/10 flex items-center justify-center text-violet-400 font-black text-2xl border border-violet-500/20 shadow-lg shadow-violet-500/10 backdrop-blur-sm">
                            03
                        </div>
                    </div>
                    <div class="flex-1 space-y-6 w-full">
                        <div>
                            <h3
                                class="text-2xl font-bold italic text-slate-900 dark:text-white uppercase tracking-tighter flex items-center gap-3">
                                <Icon name="heroicons:rocket-launch" class="text-violet-500" />
                                Manifestation Atomique
                            </h3>
                            <p class="text-slate-500 text-sm mt-1 border-l-2 border-violet-500/30 pl-3">Déployez votre
                                premier composant premium.</p>
                        </div>
                        <div class="code-window shadow-2xl shadow-violet-500/5">
                            <div class="code-header">
                                <div class="flex gap-1.5">
                                    <div class="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                                    <div class="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                                </div>
                                <span
                                    class="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-auto">Component:
                                    Welcome.vue</span>
                            </div>
                            <div class="p-6 bg-slate-950/50 font-mono text-sm space-y-1">
                                <div class="text-slate-500">&lt;script setup&gt;</div>
                                <div class="pl-4"><span class="text-pink-500">import</span> { <span
                                        class="text-violet-400">Button</span> } <span class="text-pink-500">from</span>
                                    <span class="text-emerald-400">'@webmx/ui'</span>;</div>
                                <div class="text-slate-500">&lt;/script&gt;</div>
                                <div class="text-slate-500">&lt;template&gt;</div>
                                <div class="pl-4 text-violet-400">&lt;Button severity="primary"
                                    variant="glass"&gt;Initialiser Flux&lt;/Button&gt;</div>
                                <div class="text-slate-500">&lt;/template&gt;</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Support Section -->
        <section
            class="p-12 glass-card bg-gradient-to-br from-emerald-500/5 to-transparent text-center space-y-8 relative overflow-hidden group">
            <div
                class="absolute inset-0 bg-emerald-500/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none transform scale-50">
            </div>

            <div
                class="relative z-10 w-20 h-20 mx-auto bg-emerald-500/10 rounded-full flex items-center justify-center border border-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                <Icon name="heroicons:bolt" size="3xl" class="text-emerald-400 animate-pulse-slow" />
            </div>

            <div class="space-y-4">
                <h2 class="text-4xl font-black italic uppercase tracking-tighter text-white">Paré pour le décollage ?
                </h2>
                <p class="text-slate-500 max-w-xl mx-auto italic leading-relaxed text-lg">
                    Vous avez configuré le noyau. Explorez maintenant la bibliothèque de composants
                    pour découvrir toute la puissance de WebMX.
                </p>
            </div>

            <div class="pt-4 flex justify-center gap-4">
                <Button severity="contrast" size="xl"
                    class="px-12 h-16 text-lg font-black tracking-widest italic shadow-2xl shadow-emerald-500/20 hover:scale-105 transition-transform"
                    icon="heroicons:rectangle-stack">
                    EXPLORER
                </Button>
                <Button variant="outlined" size="xl"
                    class="px-8 h-16 text-lg font-black tracking-widest italic hover:bg-white/5 transition-colors"
                    icon="heroicons:book-open">
                    DOCS
                </Button>
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
    background: linear-gradient(135deg, var(--neon-emerald), var(--neon-teal));
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

@keyframes pulse-slow {

    0%,
    100% {
        opacity: 0.5;
        transform: scale(1);
    }

    50% {
        opacity: 1;
        transform: scale(1.1);
    }
}

.animate-pulse-slow {
    animation: pulse-slow 3s ease-in-out infinite;
}
</style>
