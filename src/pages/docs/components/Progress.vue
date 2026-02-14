<script setup lang="ts">
import { ref, computed } from 'vue'
import { Progress, CircularProgress, Button, Icon } from 'webflow-ui'

const progress = ref(42)
const isIndeterminate = ref(false)

const progressCodeExample = computed(() => {
    return `<div class="space-y-4">
  <Progress :value="${progress.value}"${isIndeterminate.value ? ' indeterminate' : ''} />
  <CircularProgress :value="${progress.value}" class="text-cyan-500" />
</div>`
})

const startDownload = () => {
    progress.value = 0
    const interval = setInterval(() => {
        progress.value += 2
        if (progress.value >= 100) clearInterval(interval)
    }, 50)
}
</script>

<template>
    <div class="space-y-16 pb-20">
        <!-- Header -->
        <header class="space-y-4">
            <div class="flex items-center gap-3">
                <span
                    class="px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em]">Feedback
                    Loop</span>
                <span class="text-slate-500 dark:text-slate-500 text-xs font-medium">Interpolated • Hardware
                    Accel</span>
            </div>
            <h1 class="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Progress <span class="text-gradient">Indicators</span>
            </h1>
            <p class="text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed italic">
                La visualisation du temps et de l'effort. Des indicateurs de progression linaires et
                circulaires conçus pour rassurer et informer.
            </p>
        </header>

        <!-- Interactive Section -->
        <section class="group relative">
            <div
                class="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-teal-600 rounded-[2rem] blur opacity-25 group-hover:opacity-40 transition duration-1000">
            </div>
            <div class="relative glass-card overflow-hidden">
                <!-- Live Preview Stage -->
                <div
                    class="relative min-h-[400px] flex items-center justify-center bg-slate-50/50 dark:bg-slate-900/50 p-12 overflow-hidden border-b border-white/5">
                    <!-- Geometric Background -->
                    <div class="absolute inset-0 opacity-20 pointer-events-none"
                        style="background-image: radial-gradient(var(--neon-cyan) 1px, transparent 1px); background-size: 30px 30px;">
                    </div>

                    <div class="relative z-10 w-full max-w-lg space-y-12">
                        <div
                            class="glass p-8 rounded-2xl bg-white/50 dark:bg-black/20 border border-slate-200 dark:border-white/10 space-y-8">
                            <div class="space-y-2">
                                <div
                                    class="flex justify-between text-xs font-black uppercase tracking-widest text-slate-500">
                                    <span>System Load</span>
                                    <span>{{ isIndeterminate ? 'Calculating...' : Math.round(progress) + '%' }}</span>
                                </div>
                                <Progress :value="progress" :indeterminate="isIndeterminate" class="h-2" color="cyan" />
                            </div>

                            <div class="flex justify-center">
                                <CircularProgress :value="progress" :indeterminate="isIndeterminate" size="xl"
                                    class="text-cyan-500" />
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Configuration Grid -->
                <div class="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-slate-50 dark:bg-black/20">
                    <div class="space-y-2">
                        <label class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Valeur
                            (%)</label>
                        <input v-model.number="progress" type="range" min="0" max="100"
                            class="w-full accent-cyan-500" />
                    </div>
                    <div class="space-y-2 pt-6">
                        <label class="flex items-center gap-2 cursor-pointer group">
                            <div class="relative">
                                <input type="checkbox" v-model="isIndeterminate" class="peer sr-only">
                                <div
                                    class="w-9 h-5 bg-slate-200 dark:bg-slate-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-cyan-500/50 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-cyan-500">
                                </div>
                            </div>
                            <span
                                class="text-[10px] font-black text-slate-500 uppercase tracking-widest group-hover:text-cyan-500 transition-colors">Indeterminate</span>
                        </label>
                    </div>
                    <div class="space-y-2 flex items-end">
                        <Button severity="contrast" size="sm" variant="soft" class="w-full" @click="startDownload"
                            :disabled="isIndeterminate">
                            <Icon name="heroicons:play" class="mr-2" />
                            Simulate
                        </Button>
                    </div>
                </div>
            </div>
        </section>

        <!-- Features Grid -->
        <section class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="glass-card p-8 space-y-4 hover:border-cyan-500/30 transition-colors group">
                <div
                    class="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <Icon name="heroicons:arrow-path" class="text-xl" />
                </div>
                <h3 class="font-black italic uppercase text-slate-900 dark:text-white tracking-tight">Indeterminate</h3>
                <p class="text-xs text-slate-500 leading-relaxed italic">
                    Animation fluide pour les états de chargement inconnu.
                </p>
            </div>
            <div class="glass-card p-8 space-y-4 hover:border-cyan-500/30 transition-colors group">
                <div
                    class="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <Icon name="heroicons:paint-brush" class="text-xl" />
                </div>
                <h3 class="font-black italic uppercase text-slate-900 dark:text-white tracking-tight">Themable</h3>
                <p class="text-xs text-slate-500 leading-relaxed italic">
                    Utilise les couleurs du thème (primary, success, danger...) automatiquement.
                </p>
            </div>
            <div class="glass-card p-8 space-y-4 hover:border-cyan-500/30 transition-colors group">
                <div
                    class="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <Icon name="heroicons:cpu-chip" class="text-xl" />
                </div>
                <h3 class="font-black italic uppercase text-slate-900 dark:text-white tracking-tight">Optimized</h3>
                <p class="text-xs text-slate-500 leading-relaxed italic">
                    Rendu via CSS transform pour éviter le repaint du layout.
                </p>
            </div>
        </section>

        <!-- Code Documentation -->
        <section class="space-y-6">
            <h2 class="text-2xl font-bold flex items-center gap-3 italic">
                <span class="w-8 h-1 bg-cyan-500 rounded-full"></span>
                Injection
            </h2>
            <div class="code-window shadow-2xl shadow-cyan-500/5">
                <div class="code-header font-display">
                    <span
                        class="text-[10px] text-slate-500 font-mono font-black tracking-widest uppercase">Loader.vue</span>
                </div>
                <div class="p-8 font-mono text-sm leading-relaxed overflow-x-auto bg-slate-50 dark:bg-slate-950/50">
                    <pre><span class="text-pink-600 dark:text-pink-500">import</span> { <span class="text-cyan-600 dark:text-cyan-400">Progress</span> } <span class="text-pink-600 dark:text-pink-500">from</span> <span class="text-emerald-600 dark:text-emerald-400">'@webmx/ui'</span>;

<span class="text-slate-500">// Feedback visuel</span>
<span class="text-slate-800 dark:text-white">{{ progressCodeExample }}</span></pre>
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
    background: linear-gradient(135deg, var(--neon-cyan), var(--neon-teal));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>
