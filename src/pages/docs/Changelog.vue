<script setup lang="ts">
import { Icon } from 'webflow-ui'

const releases = [
    {
        version: 'v5.4.0',
        date: '14 Février 2026',
        summary: 'Synchronisation Stitch effectuée. Le système de design premium est désormais opérationnel.',
        features: [
            'Architecture Glassmorphism v2 intégrée.',
            'Moteur de tokens néon activé.',
            'Refonte systémique de la documentation.'
        ],
        improvements: [
            'Performance du pipeline de rendu Vue 3.5+.',
            'Optimisation des assets Iconify à la volée.'
        ],
        fixes: [
            'Saturation des dégradés sur les écrans OLED.',
            'Latence d\'ouverture des terminaux de code.'
        ]
    },
    {
        version: 'v5.3.1',
        date: '28 Janvier 2026',
        summary: 'Maintenance des protocoles de communication.',
        features: [],
        improvements: [
            'Clarification des schémas TypeScript.',
        ],
        fixes: [
            'Collision de z-index dans le vide spatial.'
        ]
    }
]
</script>

<template>
    <div class="space-y-16 pb-20">
        <!-- Header -->
        <header class="space-y-4">
            <div class="flex items-center gap-3">
                <span
                    class="px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em]">Historique
                    des Flux</span>
                <span class="text-slate-500 dark:text-slate-500 text-xs font-medium">Pipeline continu • Audit de
                    version</span>
            </div>
            <h1
                class="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white uppercase italic tracking-tighter">
                Changelog <span class="text-gradient">Protocol</span>
            </h1>
            <p class="text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed italic">
                "Chaque bit compte dans l'évolution."
                Suivez la ligne temporelle de WebMX. De la singularité initiale à l'expansion
                multiverselle actuelle du design system.
            </p>
        </header>

        <!-- Timeline Wrapper -->
        <div class="relative mt-8">
            <!-- Vertical Line -->
            <div
                class="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/20 via-cyan-500/5 to-transparent">
            </div>

            <div class="space-y-20">
                <div v-for="release in releases" :key="release.version" class="relative pl-20 group">
                    <!-- Timeline Dot -->
                    <div class="absolute left-0 top-0 w-12 h-12 flex items-center justify-center">
                        <div
                            class="w-3 h-3 rounded-full bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,1)] group-hover:scale-150 transition-transform duration-500 z-10 relative">
                        </div>
                        <div class="absolute inset-0 bg-cyan-500/20 rounded-full animate-ping opacity-20"></div>
                    </div>

                    <div
                        class="glass-card p-10 space-y-8 hover:border-cyan-500/30 transition-all duration-500 group-hover:-translate-y-1 relative overflow-hidden">
                        <!-- Decorative bg -->
                        <div
                            class="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none transform translate-x-1/2 -translate-y-1/2">
                        </div>

                        <!-- Title Section -->
                        <div
                            class="flex flex-col md:flex-row md:items-start justify-between gap-6 border-b border-white/5 pb-8 relative z-10">
                            <div class="space-y-2">
                                <div class="flex items-center gap-4">
                                    <h3 class="text-4xl font-black italic tracking-tighter text-white">{{
                                        release.version }}</h3>
                                    <span
                                        class="px-2.5 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-black uppercase tracking-widest hover:bg-cyan-500/20 transition-colors">{{
                                        release.date }}</span>
                                </div>
                                <p class="text-sm text-slate-500 italic leading-relaxed max-w-xl">"{{ release.summary
                                    }}"</p>
                            </div>
                        </div>

                        <!-- Details Grid -->
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
                            <!-- Nouveautés -->
                            <div v-if="release.features && release.features.length" class="space-y-5">
                                <h4
                                    class="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-400 flex items-center gap-2 mb-2 opacity-80">
                                    <div
                                        class="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]">
                                    </div>
                                    Nouveautés
                                </h4>
                                <ul class="space-y-4">
                                    <li v-for="f in release.features" :key="f"
                                        class="text-xs text-slate-400 leading-relaxed flex gap-3 group/item">
                                        <span
                                            class="mt-0.5 shrink-0 transition-transform group-hover/item:translate-x-1 duration-300">
                                            <Icon name="heroicons:plus-circle" size="xs" class="text-emerald-500" />
                                        </span>
                                        {{ f }}
                                    </li>
                                </ul>
                            </div>

                            <!-- Améliorations -->
                            <div v-if="release.improvements && release.improvements.length" class="space-y-5">
                                <h4
                                    class="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-400 flex items-center gap-2 mb-2 opacity-80">
                                    <div
                                        class="w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]">
                                    </div>
                                    Optimisations
                                </h4>
                                <ul class="space-y-4">
                                    <li v-for="i in release.improvements" :key="i"
                                        class="text-xs text-slate-400 leading-relaxed flex gap-3 group/item">
                                        <span
                                            class="mt-0.5 shrink-0 transition-transform group-hover/item:translate-x-1 duration-300">
                                            <Icon name="heroicons:sparkles" size="xs" class="text-indigo-500" />
                                        </span>
                                        {{ i }}
                                    </li>
                                </ul>
                            </div>

                            <!-- Fixes -->
                            <div v-if="release.fixes && release.fixes.length" class="space-y-5">
                                <h4
                                    class="text-[10px] font-black uppercase tracking-[0.3em] text-rose-400 flex items-center gap-2 mb-2 opacity-80">
                                    <div
                                        class="w-1.5 h-1.5 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.8)]">
                                    </div>
                                    Corrections
                                </h4>
                                <ul class="space-y-4">
                                    <li v-for="f in release.fixes" :key="f"
                                        class="text-xs text-slate-400 leading-relaxed flex gap-3 group/item">
                                        <span
                                            class="mt-0.5 shrink-0 transition-transform group-hover/item:translate-x-1 duration-300">
                                            <Icon name="heroicons:wrench-screwdriver" size="xs" class="text-rose-500" />
                                        </span>
                                        {{ f }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
    background: linear-gradient(135deg, var(--neon-cyan), var(--neon-blue));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>
