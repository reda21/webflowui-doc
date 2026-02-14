<script setup lang="ts">
import { ref, computed } from 'vue'
import { Progress, CircularProgress, Button, Icon } from 'webflow-ui'
import type { ProgressSize, ProgressSeverity, ProgressVariant, ProgressAnimation } from 'webflow-ui/components/progress/types'

// Configurator State
const configValue = ref(65)
const configSize = ref<ProgressSize>('md')
const configSeverity = ref<ProgressSeverity>('primary')
const configVariant = ref<ProgressVariant>('solid')
const configAnimation = ref<ProgressAnimation>('none')

const downloadProgress = ref(0)
const isDownloading = ref(false)

const startDownload = () => {
    isDownloading.value = true
    downloadProgress.value = 0
    const interval = setInterval(() => {
        downloadProgress.value += Math.random() * 8
        if (downloadProgress.value >= 100) {
            downloadProgress.value = 100
            isDownloading.value = false
            clearInterval(interval)
        }
    }, 200)
}

const progressCodeExample = computed(() => {
    return `<Progress 
  :value="${configValue.value}"
  severity="${configSeverity.value}"
  variant="${configVariant.value}"
  animation="${configAnimation.value}"
  size="${configSize.value}"
  show-value
/>`
})
</script>

<template>
    <div class="space-y-16 pb-20">
        <!-- Header -->
        <header class="space-y-4">
            <div class="flex items-center gap-3">
                <span
                    class="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-[0.2em]">Indicateur
                    de Flux</span>
                <span class="text-slate-500 dark:text-slate-500 text-xs font-medium">Bézier & GPU Accelerated</span>
            </div>
            <h1 class="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Progress <span class="text-gradient">Bar</span>
            </h1>
            <p class="text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed italic">
                Visualisez le temps qui passe. Le système de progression de WebMX offre une précision millimétrée
                et des animations riches pour transformer l'attente en expérience.
            </p>
        </header>

        <!-- Interactive Section -->
        <section class="group relative">
            <div
                class="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-600 rounded-[2rem] blur opacity-25 group-hover:opacity-40 transition duration-1000">
            </div>
            <div class="relative glass-card overflow-hidden">
                <!-- Live Preview Stage -->
                <div
                    class="relative min-h-[400px] flex items-center justify-center bg-slate-50/50 dark:bg-slate-900/50 p-12 overflow-hidden border-b border-white/5">
                    <!-- Animated Tech Grid -->
                    <div class="absolute inset-0 opacity-5 pointer-events-none"
                        style="background-image: linear-gradient(var(--neon-emerald) 1px, transparent 1px), linear-gradient(90deg, var(--neon-emerald) 1px, transparent 1px); background-size: 50px 50px;">
                    </div>

                    <div class="relative z-10 w-full max-w-lg space-y-12 animate-float-slow">
                        <!-- Main Progress Display -->
                        <div class="space-y-6">
                            <div class="flex justify-between items-end">
                                <div class="space-y-1">
                                    <span
                                        class="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none">System
                                        Load</span>
                                    <p class="text-sm font-bold text-slate-400 italic">Analyse heuristique en temps
                                        réel...</p>
                                </div>
                                <span class="text-4xl font-black text-emerald-500 tracking-tighter italic">{{
                                    configValue }}%</span>
                            </div>
                            <Progress :value="configValue" :size="configSize" :severity="configSeverity"
                                :variant="configVariant" :animation="configAnimation"
                                class="shadow-2xl shadow-emerald-500/10" />
                        </div>

                        <!-- Secondary Indicators -->
                        <div class="flex items-center justify-center gap-12 border-t border-white/5 pt-8">
                            <div class="text-center space-y-3 group cursor-pointer">
                                <CircularProgress :value="configValue" size="lg" :severity="configSeverity"
                                    class="ring-4 ring-white/5 p-1 rounded-full group-hover:scale-110 transition-transform" />
                                <span class="text-[10px] font-black text-slate-500 uppercase tracking-widest block">Core
                                    Efficiency</span>
                            </div>
                            <div class="text-center space-y-3 group cursor-pointer">
                                <CircularProgress indeterminate size="lg" severity="info"
                                    class="opacity-50 group-hover:opacity-100 transition-opacity" />
                                <span
                                    class="text-[10px] font-black text-slate-500 uppercase tracking-widest block">Background
                                    I/O</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Configuration Grid -->
                <div class="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-black/20">
                    <div class="space-y-2">
                        <label class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Niveau
                            (Value)</label>
                        <input v-model.number="configValue" type="range" min="0" max="100"
                            class="w-full accent-emerald-500 h-2 bg-white/10 rounded-lg appearance-none cursor-pointer" />
                    </div>
                    <div class="space-y-2">
                        <label class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Échelle
                            (Size)</label>
                        <select v-model="configSize"
                            class="w-full glass bg-transparent border-white/10 rounded-xl px-3 py-2 text-sm outline-none focus:border-emerald-500/50 transition-all font-bold text-slate-300 cursor-pointer">
                            <option v-for="s in ['xs', 'sm', 'md', 'lg', 'xl']" :key="s" :value="s"
                                class="bg-slate-900">{{ s }}</option>
                        </select>
                    </div>
                    <div class="space-y-2">
                        <label class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Variant</label>
                        <select v-model="configVariant"
                            class="w-full glass bg-transparent border-white/10 rounded-xl px-3 py-2 text-sm outline-none focus:border-emerald-500/50 transition-all font-bold text-slate-300 cursor-pointer">
                            <option v-for="v in ['solid', 'striped', 'gradient']" :key="v" :value="v"
                                class="bg-slate-900">{{ v }}</option>
                        </select>
                    </div>
                    <div class="space-y-2">
                        <label class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Animation</label>
                        <select v-model="configAnimation"
                            class="w-full glass bg-transparent border-white/10 rounded-xl px-3 py-2 text-sm outline-none focus:border-emerald-500/50 transition-all font-bold text-slate-300 cursor-pointer">
                            <option v-for="a in ['none', 'striped', 'pulse', 'glow', 'flash']" :key="a" :value="a"
                                class="bg-slate-900">{{ a }}</option>
                        </select>
                    </div>
                </div>
            </div>
        </section>

        <!-- Case Studies -->
        <section class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- Feature 1: Circular Metrics -->
            <div class="glass-card p-10 space-y-8 group hover:border-emerald-500/30 transition-colors">
                <h3 class="text-xl font-bold flex items-center gap-3 italic uppercase text-white tracking-tight">
                    <Icon name="heroicons:arrow-path" class="text-emerald-400" />
                    Circular Metrics
                </h3>
                <p class="text-xs text-slate-500 leading-relaxed italic border-l-2 border-emerald-500/50 pl-4">
                    Visualisation radiale compacte pour les scores, les ratios et les indicateurs dashboard.
                </p>
                <div class="flex items-center justify-around p-8 glass bg-black/40 rounded-2xl border border-white/5">
                    <div class="flex flex-col items-center gap-3">
                        <CircularProgress :value="45" size="md" severity="danger" />
                        <span class="text-[9px] uppercase font-black tracking-widest text-slate-600">CPU</span>
                    </div>
                    <div class="flex flex-col items-center gap-3">
                        <CircularProgress :value="72" size="md" severity="warn" />
                        <span class="text-[9px] uppercase font-black tracking-widest text-slate-600">RAM</span>
                    </div>
                    <div class="flex flex-col items-center gap-3">
                        <CircularProgress :value="98" size="md" severity="success" />
                        <span class="text-[9px] uppercase font-black tracking-widest text-slate-600">Network</span>
                    </div>
                </div>
            </div>

            <!-- Feature 2: IO Simulation -->
            <div
                class="glass-card p-10 space-y-8 bg-gradient-to-br from-emerald-500/5 to-transparent group hover:border-cyan-500/30 transition-colors">
                <div class="flex items-center justify-between">
                    <h3 class="text-xl font-bold italic flex items-center gap-3 uppercase text-white tracking-tight">
                        <Icon name="heroicons:cloud-arrow-down" class="text-cyan-400" />
                        IO Stream
                    </h3>
                    <Button v-if="!isDownloading" severity="primary" size="xs" variant="soft" @click="startDownload"
                        class="font-black tracking-widest uppercase text-[10px]">
                        Start Stream
                    </Button>
                </div>
                <div class="space-y-6">
                    <div class="p-6 glass bg-black/40 rounded-2xl border border-white/5 space-y-4">
                        <div
                            class="flex justify-between text-[10px] font-black text-slate-500 uppercase tracking-widest">
                            <span class="flex items-center gap-2">
                                <Icon name="heroicons:document" size="xs" /> matrix_core.bin
                            </span>
                            <span :class="downloadProgress === 100 ? 'text-emerald-400' : 'text-cyan-400'">{{
                                isDownloading ? 'DOWNLOADING...' : downloadProgress === 100 ? 'COMPLETE' : 'PENDING'
                                }}</span>
                        </div>
                        <Progress :value="downloadProgress" :severity="downloadProgress === 100 ? 'success' : 'primary'"
                            animation="striped" variant="gradient" size="sm" />

                        <!-- Mini visualizer -->
                        <div v-if="isDownloading" class="flex gap-0.5 h-1 w-full overflow-hidden opacity-50">
                            <div v-for="i in 20" :key="i" class="flex-1 bg-emerald-500/40 rounded-full animate-pulse"
                                :style="{ animationDelay: `${Math.random() * 1000}ms` }"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Code Documentation -->
        <section class="space-y-6">
            <h2 class="text-2xl font-bold flex items-center gap-3 italic">
                <span class="w-8 h-1 bg-emerald-500 rounded-full"></span>
                Génération Dynamique
            </h2>
            <div class="code-window shadow-2xl shadow-emerald-500/5">
                <div class="code-header font-display">
                    <span
                        class="text-[10px] text-slate-500 font-mono tracking-widest uppercase font-black">FluxController.vue</span>
                </div>
                <div class="p-8 font-mono text-sm leading-relaxed overflow-x-auto bg-slate-950/50">
                    <pre><span class="text-pink-500">import</span> { <span class="text-emerald-400">Progress</span> } <span class="text-pink-500">from</span> <span class="text-emerald-400">'@webmx/ui'</span>;

<span class="text-slate-500">// Indication de charge v4</span>
<span class="text-white">{{ progressCodeExample }}</span></pre>
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
    background: linear-gradient(135deg, var(--neon-emerald), var(--neon-cyan));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

@keyframes float-slow {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }
}

.animate-float-slow {
    animation: float-slow 8s ease-in-out infinite;
}
</style>
