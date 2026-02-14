<script setup lang="ts">
import { Icon } from 'webflow-ui'
</script>

<template>
    <div class="space-y-16 pb-20">
        <!-- Header -->
        <header class="space-y-8 text-center max-w-2xl mx-auto">
            <div class="flex justify-center relative group">
                <div
                    class="absolute inset-0 bg-indigo-500 blur-[80px] opacity-20 group-hover:opacity-30 transition-opacity duration-1000 rounded-full">
                </div>
                <div
                    class="w-24 h-24 rounded-3xl glass border border-white/10 flex items-center justify-center shadow-2xl shadow-indigo-500/20 relative z-10 hover:scale-105 transition-transform duration-500">
                    <Icon name="heroicons:moon" size="xl" class="text-indigo-400" />
                </div>
            </div>

            <div class="space-y-4">
                <h1
                    class="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white uppercase italic tracking-tighter">
                    Lumière & <span class="text-gradient">Ombre</span>
                </h1>
                <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed italic">
                    "Adaptez-vous aux cycles."
                    WebMX bascule entre les spectres de fréquence pour protéger la vision de vos
                    explorateurs, peu importe l'heure du cycle.
                </p>
            </div>
        </header>

        <!-- Implementation -->
        <section class="max-w-4xl mx-auto space-y-12">
            <div
                class="glass-card p-12 space-y-10 border-indigo-500/10 from-indigo-500/5 to-transparent bg-gradient-to-br">
                <div class="flex items-center gap-6">
                    <div
                        class="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 border border-indigo-500/20 shadow-lg shadow-indigo-500/10 backdrop-blur-sm">
                        <Icon name="heroicons:bolt-slash" size="md" />
                    </div>
                    <div>
                        <h3
                            class="text-2xl font-black italic uppercase tracking-tighter text-slate-900 dark:text-white">
                            Le Protocole .dark</h3>
                        <p class="text-[10px] text-indigo-500 uppercase tracking-widest font-bold mt-1">Mutation DOM</p>
                    </div>
                </div>

                <p class="text-sm text-slate-500 italic leading-relaxed border-l-2 border-indigo-500/30 pl-4">
                    Le noyau WebMX écoute la mutation de l'élément racine. L'application de la classe <code
                        class="text-indigo-400 bg-indigo-500/10 px-1 rounded">.dark</code> transmute instantanément
                    l'ensemble de l'écosystème.
                </p>

                <div class="code-window shadow-2xl shadow-indigo-500/5">
                    <div class="code-header font-display">
                        <div class="flex gap-1.5">
                            <div class="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                            <div class="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                        </div>
                        <span
                            class="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-auto">Mutation_Script.ts</span>
                    </div>
                    <div class="p-8 font-mono text-xs leading-relaxed overflow-x-auto bg-slate-950/50">
                        <div class="text-slate-500 mb-2">// Activation du spectre sombre</div>
                        <div class="flex gap-1 mb-6">
                            <span class="text-violet-400">document</span><span class="text-slate-500">.</span><span
                                class="text-white">documentElement</span><span class="text-slate-500">.</span><span
                                class="text-white">classList</span><span class="text-slate-500">.</span><span
                                class="text-blue-400">add</span>(<span class="text-emerald-400">'dark'</span>);
                        </div>

                        <div class="text-slate-500 mb-2">// Retour au spectre solaire</div>
                        <div class="flex gap-1">
                            <span class="text-violet-400">document</span><span class="text-slate-500">.</span><span
                                class="text-white">documentElement</span><span class="text-slate-500">.</span><span
                                class="text-white">classList</span><span class="text-slate-500">.</span><span
                                class="text-blue-400">remove</span>(<span class="text-emerald-400">'dark'</span>);
                        </div>
                    </div>
                </div>
            </div>

            <!-- Theme Strategy -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div
                    class="glass-card p-10 border-indigo-500/10 hover:border-indigo-500/30 transition-all group hover:-translate-y-1 duration-500">
                    <div
                        class="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 border border-indigo-500/20 shadow-lg shadow-indigo-500/10 backdrop-blur-sm mb-6 group-hover:scale-110 transition-transform">
                        <Icon name="heroicons:computer-desktop" size="md" />
                    </div>
                    <h4 class="font-black text-lg uppercase tracking-widest mb-3 text-slate-900 dark:text-white">Système
                        natif</h4>
                    <p class="text-sm text-slate-500 italic">Détection automatique des préférences OS des observateurs
                        via <span class="text-indigo-400">prefers-color-scheme</span>.</p>
                </div>

                <div
                    class="glass-card p-10 border-violet-500/10 hover:border-violet-500/30 transition-all group hover:-translate-y-1 duration-500">
                    <div
                        class="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-500 border border-violet-500/20 shadow-lg shadow-violet-500/10 backdrop-blur-sm mb-6 group-hover:scale-110 transition-transform">
                        <Icon name="heroicons:swatch" size="md" />
                    </div>
                    <h4 class="font-black text-lg uppercase tracking-widest mb-3 text-slate-900 dark:text-white">
                        Thémisation Totale</h4>
                    <p class="text-sm text-slate-500 italic">Styles dédiés pour chaque état afin de garantir un
                        contraste maximal et une lisibilité parfaite.</p>
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
    background: linear-gradient(135deg, var(--neon-indigo), var(--neon-purple));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

.code-window {
    border-radius: 1rem;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.05);
    background-color: rgba(0, 0, 0, 0.4);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.code-header {
    padding: 0.75rem 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    background-color: rgba(255, 255, 255, 0.05);
    display: flex;
    align-items: center;
}
</style>
