<script setup lang="ts">
import { ref, computed } from 'vue'
import { Separator, Button, Icon } from 'webflow-ui'
import type { SeparatorOrientation, SeparatorVariant, SeparatorSize, SeparatorSeverity } from 'webflow-ui/components/separator/types'

// Configurator State
const configOrientation = ref<SeparatorOrientation>('horizontal')
const configVariant = ref<SeparatorVariant>('solid')
const configSize = ref<SeparatorSize>('md')
const configSeverity = ref<SeparatorSeverity>('default')
const configLabel = ref('FLUX EDGE')

const generatedCode = computed(() => {
    return `<Separator 
  orientation="${configOrientation.value}" 
  variant="${configVariant.value}"
  label="${configLabel.value}"
/>`
})
</script>

<template>
    <div class="space-y-16 pb-20">
        <!-- Header -->
        <header class="space-y-4">
            <div class="flex items-center gap-3">
                <span
                    class="px-2.5 py-1 rounded-full bg-slate-500/10 border border-slate-500/20 text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">Division
                    Spatiale</span>
                <span class="text-slate-500 dark:text-slate-500 text-xs font-medium">Bordures Sub-pixel • Label
                    Flottant</span>
            </div>
            <h1 class="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Separator <span class="text-gradient">Line</span>
            </h1>
            <p class="text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed italic">
                L'art du silence visuel. Le Separator de WebMX définit les frontières sans encombrer
                l'espace, apportant structure et rythme avec une précision chirurgicale.
            </p>
        </header>

        <!-- Interactive Section -->
        <section class="group relative">
            <div
                class="absolute -inset-1 bg-gradient-to-r from-slate-500 to-slate-800 rounded-[2rem] blur opacity-25 group-hover:opacity-40 transition duration-1000">
            </div>
            <div class="relative glass-card overflow-hidden">
                <!-- Live Preview Stage -->
                <div
                    class="relative min-h-[400px] flex items-center justify-center bg-slate-50/50 dark:bg-slate-900/50 p-12 overflow-hidden border-b border-white/5">
                    <!-- Technical Grid Background -->
                    <div class="absolute inset-0 opacity-10 pointer-events-none">
                        <div
                            class="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent">
                        </div>
                        <div
                            class="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent">
                        </div>
                        <!-- Dot pattern -->
                        <div class="absolute inset-0"
                            style="background-image: radial-gradient(var(--slate-700) 1px, transparent 1px); background-size: 20px 20px; opacity: 0.2">
                        </div>
                    </div>

                    <div class="relative z-10 w-full max-w-lg space-y-12 backdrop-blur-sm">
                        <!-- Module Stack -->
                        <div class="space-y-8">
                            <div
                                class="h-16 flex items-center justify-center glass rounded-2xl bg-black/20 border-white/5 shadow-inner">
                                <span class="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Module
                                    Alpha</span>
                            </div>

                            <div :class="configOrientation === 'vertical' ? 'h-32 flex justify-center' : ''"
                                class="transition-all duration-500">
                                <Separator :orientation="configOrientation" :variant="configVariant" :size="configSize"
                                    :severity="configSeverity" :label="configLabel || undefined"
                                    class="transition-all duration-700" />
                            </div>

                            <div
                                class="h-16 flex items-center justify-center glass rounded-2xl bg-black/20 border-white/5 shadow-inner">
                                <span class="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Module
                                    Beta</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Configuration Grid -->
                <div class="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-black/20">
                    <div class="space-y-2">
                        <label class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Axe
                            (Orientation)</label>
                        <select v-model="configOrientation"
                            class="w-full glass bg-transparent border-white/10 rounded-xl px-3 py-2 text-sm outline-none focus:border-white/50 transition-all font-bold text-slate-300 cursor-pointer">
                            <option v-for="o in ['horizontal', 'vertical']" :key="o" :value="o" class="bg-slate-900">{{
                                o }}</option>
                        </select>
                    </div>
                    <div class="space-y-2">
                        <label class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Style
                            (Variant)</label>
                        <select v-model="configVariant"
                            class="w-full glass bg-transparent border-white/10 rounded-xl px-3 py-2 text-sm outline-none focus:border-white/50 transition-all font-bold text-slate-300 cursor-pointer">
                            <option v-for="v in ['solid', 'dashed', 'dotted', 'gradient']" :key="v" :value="v"
                                class="bg-slate-900">{{ v }}</option>
                        </select>
                    </div>
                    <div class="space-y-2">
                        <label class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Épaisseur
                            (Size)</label>
                        <select v-model="configSize"
                            class="w-full glass bg-transparent border-white/10 rounded-xl px-3 py-2 text-sm outline-none focus:border-white/50 transition-all font-bold text-slate-300 cursor-pointer">
                            <option v-for="s in ['xs', 'sm', 'md', 'lg', 'xl']" :key="s" :value="s"
                                class="bg-slate-900">{{ s }}</option>
                        </select>
                    </div>
                    <div class="space-y-2">
                        <label class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Label ID</label>
                        <input v-model="configLabel" type="text"
                            class="w-full glass bg-transparent border-white/10 rounded-xl px-3 py-2 text-sm outline-none focus:border-white/50 transition-all font-bold text-slate-300 placeholder-slate-600"
                            placeholder="Label optionnel..." />
                    </div>
                </div>
            </div>
        </section>

        <!-- Use Cases & Patterns -->
        <section class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Feature 1: Login Pattern -->
            <div
                class="glass-card p-10 space-y-8 bg-gradient-to-br from-white/5 to-transparent group hover:border-slate-500/30 transition-colors">
                <h3 class="text-xl font-bold italic flex items-center gap-3 uppercase tracking-tighter text-white">
                    <Icon name="heroicons:finger-print" class="text-slate-400" />
                    Authentication Flow
                </h3>
                <p class="text-xs text-slate-500 leading-relaxed italic border-l-2 border-slate-500/50 pl-4">
                    Pattern classique de séparation d'actions pour les formulaires de connexion.
                </p>
                <div class="space-y-5 p-8 glass bg-black/40 rounded-2xl border border-white/5">
                    <Button severity="contrast"
                        class="w-full h-10 font-bold uppercase tracking-widest text-xs shadow-lg">Continuer avec
                        Email</Button>
                    <Separator label="OU" class="opacity-50" />
                    <div class="flex gap-3">
                        <Button variant="soft"
                            class="flex-1 bg-white/5 hover:bg-white/10 text-xs font-bold">Google</Button>
                        <Button variant="soft"
                            class="flex-1 bg-white/5 hover:bg-white/10 text-xs font-bold">GitHub</Button>
                    </div>
                </div>
            </div>

            <!-- Feature 2: Vertical Split -->
            <div class="glass-card p-10 space-y-8 group hover:border-slate-500/30 transition-colors">
                <h3 class="text-xl font-bold italic flex items-center gap-3 uppercase tracking-tighter text-white">
                    <Icon name="heroicons:columns" class="text-slate-400" />
                    Column Layout
                </h3>
                <p class="text-xs text-slate-500 leading-relaxed italic border-l-2 border-slate-500/50 pl-4">
                    Séparation verticale pour délimiter les zones de contenu dans les headers ou toolbars.
                </p>
                <div
                    class="flex items-center justify-center p-6 glass rounded-2xl bg-black/20 h-40 gap-8 border border-white/5">
                    <div class="flex flex-col items-center gap-2">
                        <span class="text-[10px] font-black text-slate-500 uppercase tracking-widest">View Mode</span>
                        <Icon name="heroicons:list-bullet" class="text-slate-400" />
                    </div>

                    <Separator orientation="vertical" variant="dashed" severity="primary" class="h-16" />

                    <div class="flex flex-col items-center gap-2">
                        <span class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Sort By</span>
                        <Icon name="heroicons:arrows-up-down" class="text-slate-400" />
                    </div>

                    <Separator orientation="vertical" variant="gradient" severity="success" class="h-16" />

                    <div class="flex flex-col items-center gap-2">
                        <span class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Filter</span>
                        <Icon name="heroicons:funnel" class="text-slate-400" />
                    </div>
                </div>
            </div>
        </section>

        <!-- Code Documentation -->
        <section class="space-y-6">
            <h2 class="text-2xl font-bold flex items-center gap-3 italic">
                <span class="w-8 h-1 bg-slate-500 rounded-full"></span>
                Génération Dynamique
            </h2>
            <div class="code-window shadow-2xl shadow-slate-500/5">
                <div class="code-header font-display">
                    <span
                        class="text-[10px] text-slate-500 font-mono tracking-widest uppercase font-black">LayoutLine.vue</span>
                </div>
                <div class="p-8 font-mono text-sm leading-relaxed overflow-x-auto bg-slate-950/50">
                    <pre><span class="text-pink-500">import</span> { <span class="text-slate-400">Separator</span> } <span class="text-pink-500">from</span> <span class="text-emerald-400">'@webmx/ui'</span>;

<span class="text-slate-500">// Délimitation structurelle</span>
<span class="text-white">{{ generatedCode }}</span></pre>
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
    background: linear-gradient(135deg, var(--slate-300), var(--slate-600));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>
