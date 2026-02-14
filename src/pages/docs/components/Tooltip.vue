<script setup lang="ts">
import { ref, computed } from 'vue'
import { Tooltip, Button, Icon, Avatar } from 'webflow-ui'
import type { TooltipPosition, TooltipVariant, TooltipSize, TooltipTrigger, TooltipAnimation } from 'webflow-ui/components/tooltip/types'

// Configurator State
const selectedPosition = ref<TooltipPosition>('top')
const selectedVariant = ref<TooltipVariant>('dark')
const selectedSize = ref<TooltipSize>('md')
const selectedTrigger = ref<TooltipTrigger>('hover')
const selectedAnimation = ref<TooltipAnimation>('scale')
const showArrow = ref(true)
const isInteractive = ref(false)
const customContent = ref('Architecture prédictive activée')

const positionOptions: TooltipPosition[] = [
    'top', 'top-start', 'top-end',
    'bottom', 'bottom-start', 'bottom-end',
    'left', 'left-start', 'left-end',
    'right', 'right-start', 'right-end'
]
const variantOptions: TooltipVariant[] = ['dark', 'light', 'primary', 'success', 'warning', 'danger', 'info']

const tooltipCodeExample = computed(() => {
    return `<Tooltip 
  content="${customContent.value}"
  position="${selectedPosition.value}"
  variant="${selectedVariant.value}"
  animation="${selectedAnimation.value}"
  ${isInteractive.value ? 'interactive' : ''}
>
  <Button>Trigger</Button>
</Tooltip>`
})
</script>

<template>
    <div class="space-y-16 pb-20">
        <!-- Header -->
        <header class="space-y-4">
            <div class="flex items-center gap-3">
                <span
                    class="px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em]">Context
                    Layer</span>
                <span class="text-slate-500 dark:text-slate-500 text-xs font-medium">Popper.js Powered • Inertie
                    Physique</span>
            </div>
            <h1 class="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Tooltip <span class="text-gradient">Engine</span>
            </h1>
            <p class="text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed italic">
                Des informations contextuelles qui respirent. Le moteur de Tooltip de WebMX
                combine précision de positionnement et fluidité de mouvement pour une UX sans friction.
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
                        class="relative z-10 w-full max-w-lg flex flex-col items-center gap-12 group-hover:scale-105 transition-transform duration-700">
                        <Tooltip :content="customContent" :position="selectedPosition" :variant="selectedVariant"
                            :size="selectedSize" :trigger="selectedTrigger" :animation="selectedAnimation"
                            :arrow="showArrow ? 'md' : 'none'" :interactive="isInteractive">
                            <Button severity="primary" size="xl"
                                class="px-12 h-20 text-xl font-black italic tracking-widest shadow-2xl shadow-indigo-500/30 border-indigo-400/30">
                                {{ selectedTrigger === 'click' ? 'CLICK ME' : 'HOVER ME' }}
                            </Button>
                        </Tooltip>

                        <div class="flex gap-2 text-[10px] font-mono text-slate-500 opacity-60">
                            <span>POS: {{ selectedPosition.toUpperCase() }}</span>
                            <span>•</span>
                            <span>VAR: {{ selectedVariant.toUpperCase() }}</span>
                        </div>
                    </div>
                </div>

                <!-- Configuration Grid -->
                <div class="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-slate-50 dark:bg-black/20">
                    <div class="space-y-2">
                        <label
                            class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Positionnement</label>
                        <select v-model="selectedPosition"
                            class="w-full glass bg-transparent border-slate-300 dark:border-white/10 rounded-xl px-3 py-2 text-sm outline-none focus:border-indigo-500/50 transition-all font-bold text-slate-700 dark:text-slate-300 cursor-pointer">
                            <option v-for="opt in positionOptions" :key="opt" :value="opt"
                                class="bg-white dark:bg-slate-900">{{ opt
                                }}</option>
                        </select>
                    </div>
                    <div class="space-y-2">
                        <label
                            class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Thématique</label>
                        <select v-model="selectedVariant"
                            class="w-full glass bg-transparent border-slate-300 dark:border-white/10 rounded-xl px-3 py-2 text-sm outline-none focus:border-indigo-500/50 transition-all font-bold text-slate-700 dark:text-slate-300 cursor-pointer">
                            <option v-for="opt in variantOptions" :key="opt" :value="opt"
                                class="bg-white dark:bg-slate-900">{{ opt }}
                            </option>
                        </select>
                    </div>
                    <div class="col-span-2 space-y-2">
                        <label class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Contenu (Live
                            Edit)</label>
                        <input v-model="customContent" type="text"
                            class="w-full glass bg-transparent border-slate-300 dark:border-white/10 rounded-xl px-3 py-2 text-sm outline-none focus:border-indigo-500/50 transition-all font-bold text-slate-700 dark:text-slate-300" />
                    </div>
                </div>
            </div>
        </section>

        <!-- Use Cases & Patterns -->
        <section class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Feature 1: Status Indicator -->
            <div
                class="glass-card p-10 space-y-8 bg-gradient-to-br from-indigo-500/5 to-transparent group hover:border-emerald-500/30 transition-colors border-slate-200 dark:border-white/5">
                <h3
                    class="text-xl font-bold italic flex items-center gap-3 uppercase tracking-tighter text-slate-900 dark:text-white">
                    <div class="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></div>
                    Live Status
                </h3>
                <p class="text-xs text-slate-500 leading-relaxed italic border-l-2 border-emerald-500/50 pl-4">
                    Indicateurs de santé système avec détails au survol.
                </p>
                <div
                    class="flex items-center justify-center p-8 glass bg-slate-100 dark:bg-black/40 rounded-2xl border border-slate-200 dark:border-white/5">
                    <Tooltip content="All Systems Operational • 99.9% Uptime" variant="success" position="bottom"
                        animation="bounce">
                        <div
                            class="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center cursor-help hover:bg-emerald-500/30 transition-colors">
                            <Icon name="heroicons:server-stack" class="text-emerald-400" />
                        </div>
                    </Tooltip>
                </div>
            </div>

            <!-- Feature 2: Keyboard Hints -->
            <div
                class="glass-card p-10 space-y-8 group hover:border-purple-500/30 transition-colors border-slate-200 dark:border-white/5">
                <h3
                    class="text-xl font-bold italic flex items-center gap-3 uppercase tracking-tighter text-slate-900 dark:text-white">
                    <Icon name="heroicons:command-line" class="text-purple-500 dark:text-purple-400" />
                    Smart Hints
                </h3>
                <p class="text-xs text-slate-500 leading-relaxed italic border-l-2 border-purple-500/50 pl-4">
                    Révélez les raccourcis clavier sans encombrer l'interface.
                </p>
                <div
                    class="flex items-center justify-center p-8 glass bg-slate-100 dark:bg-black/40 rounded-2xl border border-slate-200 dark:border-white/5">
                    <Tooltip content="Press ⌘ + K to search" variant="dark" position="top" animation="scale">
                        <Button variant="ghost" size="lg" icon="heroicons:magnifying-glass"
                            class="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white" />
                    </Tooltip>
                </div>
            </div>

            <!-- Feature 3: Rich Content -->
            <div
                class="glass-card p-10 space-y-8 group hover:border-amber-500/30 transition-colors border-slate-200 dark:border-white/5">
                <h3
                    class="text-xl font-bold italic flex items-center gap-3 uppercase tracking-tighter text-slate-900 dark:text-white">
                    <Icon name="heroicons:users" class="text-amber-500 dark:text-amber-400" />
                    Rich Interaction
                </h3>
                <p class="text-xs text-slate-500 leading-relaxed italic border-l-2 border-amber-500/50 pl-4">
                    Insérez des composants complexes (boutons, listes) dans les tooltips.
                </p>
                <div
                    class="flex items-center justify-center p-8 glass bg-slate-100 dark:bg-black/40 rounded-2xl border border-slate-200 dark:border-white/5">
                    <Tooltip interactive position="right" variant="light" animation="slide">
                        <template #default>
                            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                                class="cursor-pointer ring-2 ring-transparent hover:ring-amber-500 transition-all" />
                        </template>
                        <template #content>
                            <div class="p-3 space-y-3 w-48">
                                <div class="flex items-center gap-3">
                                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" size="sm" />
                                    <div>
                                        <p class="text-xs font-bold text-slate-900">Sarah Connor</p>
                                        <p class="text-[10px] text-slate-500">Tech Lead</p>
                                    </div>
                                </div>
                                <div class="grid grid-cols-2 gap-2">
                                    <Button size="xs" variant="outlined" class="w-full">Profile</Button>
                                    <Button size="xs" severity="primary" class="w-full">Message</Button>
                                </div>
                            </div>
                        </template>
                    </Tooltip>
                </div>
            </div>
        </section>

        <!-- Code Documentation -->
        <section class="space-y-6">
            <h2 class="text-2xl font-bold flex items-center gap-3 italic">
                <span class="w-8 h-1 bg-indigo-500 rounded-full"></span>
                Génération Dynamique
            </h2>
            <div class="code-window shadow-2xl shadow-indigo-500/5">
                <div class="code-header font-display">
                    <span
                        class="text-[10px] text-slate-500 font-mono tracking-widest uppercase font-black">ContextView.vue</span>
                </div>
                <div class="p-8 font-mono text-sm leading-relaxed overflow-x-auto bg-slate-50 dark:bg-slate-950/50">
                    <pre><span class="text-pink-600 dark:text-pink-500">import</span> { <span
                    class="text-indigo-600 dark:text-indigo-400">Tooltip</span> } <span
                    class="text-pink-600 dark:text-pink-500">from</span> <span
                    class="text-emerald-600 dark:text-emerald-400">'@webmx/ui'</span>;

                <span class="text-slate-500">// Injection contextuelle v2</span>
                <span class="text-slate-800 dark:text-white">{{ tooltipCodeExample }}</span>
            </pre>
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
</style>
