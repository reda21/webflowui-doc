<script setup lang="ts">
import { ref, computed } from 'vue'
import { Card, Button, Icon } from 'webflow-ui'
import type { CardVariant, CardShadow, CardPadding } from 'webflow-ui/components/card/types'

// Configurator State
const title = ref('Premium Architecture')
const subtitle = ref('Built for critical scale')
const variant = ref<CardVariant>('glass')
const shadow = ref<CardShadow>('xl')
const padding = ref<CardPadding>('lg')
// Note: hover prop might be 'hover-effect' or similar depending on actual component, assuming 'hover' based on context or 'glow' as value
const hoverEffect = ref('glow')
const showImage = ref(true)

const variantOptions = ['glass', 'solid', 'outlined', 'ghost']
const shadowOptions = ['none', 'sm', 'md', 'lg', 'xl', '2xl', 'inner']
const paddingOptions = ['none', 'sm', 'md', 'lg', 'xl']

const cardCodeExample = computed(() => {
    return `<Card 
  title="${title.value}"
  subtitle="${subtitle.value}"
  variant="${variant.value}"
  shadow="${shadow.value}"
  padding="${padding.value}"
  hoverEffect="${hoverEffect.value}"
  ${showImage.value ? 'image="https://picsum.photos/800/400"' : ''}
>
  <p class="text-slate-600 dark:text-slate-300 leading-relaxed">
    Une infrastructure résiliente capable de gérer des millions de requêtes par seconde avec une latence minimale.
  </p>
  <template #footer>
    <div class="flex justify-end pt-4">
        <Button variant="soft" size="sm" icon="heroicons:arrow-right">Explorer</Button>
    </div>
  </template>
</Card>`
})
</script>

<template>
    <div class="space-y-16 pb-20">
        <!-- Header -->
        <header class="space-y-4">
            <div class="flex items-center gap-3">
                <span
                    class="px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em]">Surface
                    Conteneur</span>
                <span class="text-slate-500 dark:text-slate-500 text-xs font-medium">Flexbox Optimisé •
                    Glassmorphism</span>
            </div>
            <h1 class="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Card <span class="text-gradient">Surface</span>
            </h1>
            <p class="text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed italic">
                Le fondement de toute interface moderne. Des surfaces intelligentes qui s'adaptent,
                respirent et guident l'attention de l'utilisateur avec profondeur et lumière.
            </p>
        </header>

        <!-- Interactive Section -->
        <section class="group relative">
            <div
                class="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[2rem] blur opacity-25 group-hover:opacity-40 transition duration-1000">
            </div>
            <div class="relative glass-card overflow-hidden">
                <!-- Live Preview Stage -->
                <div
                    class="relative min-h-[500px] flex items-center justify-center bg-slate-50/50 dark:bg-slate-900/50 p-12 overflow-hidden border-b border-white/5">
                    <!-- Geometric Background -->
                    <div class="absolute inset-0 opacity-20 pointer-events-none"
                        style="background-image: radial-gradient(var(--neon-cyan) 1px, transparent 1px); background-size: 40px 40px;">
                    </div>

                    <div
                        class="relative z-10 w-full max-w-md group-hover:scale-[1.02] transition-transform duration-500">
                        <Card :title="title" :subtitle="subtitle" :variant="variant" :shadow="shadow" :padding="padding"
                            :hover-effect="hoverEffect"
                            :image="showImage ? 'https://picsum.photos/seed/webmx/800/400' : undefined"
                            class="bg-white/80 dark:bg-slate-900/60">
                            <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
                                Une infrastructure résiliente capable de gérer des millions de requêtes par seconde avec
                                une latence minimale.
                                La redondance géographique assure une disponibilité de 99.99%.
                            </p>
                            <template #footer>
                                <div class="flex justify-end pt-2 border-t border-slate-200 dark:border-white/5">
                                    <Button variant="soft" size="sm" icon="heroicons:arrow-right"
                                        class="text-cyan-500 dark:text-cyan-400">Explorer</Button>
                                </div>
                            </template>
                        </Card>
                    </div>
                </div>

                <!-- Configuration Grid -->
                <div class="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-slate-50 dark:bg-black/20">
                    <div class="space-y-2">
                        <label class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Variante</label>
                        <select v-model="variant"
                            class="w-full glass bg-transparent border-slate-300 dark:border-white/10 rounded-xl px-3 py-2 text-sm outline-none focus:border-cyan-500/50 transition-all font-bold text-slate-700 dark:text-slate-300 cursor-pointer">
                            <option v-for="opt in variantOptions" :key="opt" :value="opt"
                                class="bg-white dark:bg-slate-900">{{ opt }}
                            </option>
                        </select>
                    </div>
                    <div class="space-y-2">
                        <label class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Ombre
                            (Shadow)</label>
                        <select v-model="shadow"
                            class="w-full glass bg-transparent border-slate-300 dark:border-white/10 rounded-xl px-3 py-2 text-sm outline-none focus:border-cyan-500/50 transition-all font-bold text-slate-700 dark:text-slate-300 cursor-pointer">
                            <option v-for="opt in shadowOptions" :key="opt" :value="opt"
                                class="bg-white dark:bg-slate-900">{{ opt }}
                            </option>
                        </select>
                    </div>
                    <div class="space-y-2">
                        <label class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Padding</label>
                        <select v-model="padding"
                            class="w-full glass bg-transparent border-slate-300 dark:border-white/10 rounded-xl px-3 py-2 text-sm outline-none focus:border-cyan-500/50 transition-all font-bold text-slate-700 dark:text-slate-300 cursor-pointer">
                            <option v-for="opt in paddingOptions" :key="opt" :value="opt"
                                class="bg-white dark:bg-slate-900">{{ opt }}
                            </option>
                        </select>
                    </div>
                    <div class="space-y-2 pt-6">
                        <label class="flex items-center gap-2 cursor-pointer group">
                            <div class="relative">
                                <input type="checkbox" v-model="showImage" class="peer sr-only">
                                <div
                                    class="w-9 h-5 bg-slate-200 dark:bg-slate-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-cyan-500/50 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-cyan-500">
                                </div>
                            </div>
                            <span
                                class="text-[10px] font-black text-slate-500 uppercase tracking-widest group-hover:text-cyan-500 transition-colors">Afficher
                                Cover</span>
                        </label>
                    </div>
                </div>
            </div>
        </section>

        <!-- Features Grid -->
        <section class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
                class="glass-card p-10 space-y-6 group hover:border-cyan-500/30 transition-colors border-slate-200 dark:border-white/5">
                <h3
                    class="text-xl font-bold italic flex items-center gap-3 uppercase tracking-tighter text-slate-900 dark:text-white">
                    <Icon name="heroicons:square-3-stack-3d" class="text-cyan-500 dark:text-cyan-400" />
                    Stackable Slots
                </h3>
                <p class="text-xs text-slate-500 leading-relaxed italic border-l-2 border-cyan-500/50 pl-4">
                    Structure sémantique avec slots dédiés pour <code class="text-cyan-500 font-bold">header</code>,
                    <code class="text-cyan-500 font-bold">image</code>, <code
                        class="text-cyan-500 font-bold">default</code> et
                    <code class="text-cyan-500 font-bold">footer</code>.
                </p>
            </div>

            <div
                class="glass-card p-10 space-y-6 bg-gradient-to-br from-blue-500/5 to-transparent group hover:border-blue-500/30 transition-colors border-slate-200 dark:border-white/5">
                <h3
                    class="text-xl font-bold italic flex items-center gap-3 uppercase tracking-tighter text-slate-900 dark:text-white">
                    <Icon name="heroicons:view-columns" class="text-blue-500 dark:text-blue-400" />
                    Layout Adaptatif
                </h3>
                <p class="text-xs text-slate-500 leading-relaxed italic border-l-2 border-blue-500/50 pl-4">
                    S'adapte automatiquement au conteneur parent avec une gestion fine des bordures et des ombres en
                    fonction du
                    mode (Light/Dark).
                </p>
            </div>

            <div
                class="glass-card p-10 space-y-6 group hover:border-indigo-500/30 transition-colors border-slate-200 dark:border-white/5">
                <h3
                    class="text-xl font-bold italic flex items-center gap-3 uppercase tracking-tighter text-slate-900 dark:text-white">
                    <Icon name="heroicons:sparkles" class="text-indigo-500 dark:text-indigo-400" />
                    Micro-Interactions
                </h3>
                <p class="text-xs text-slate-500 leading-relaxed italic border-l-2 border-indigo-500/50 pl-4">
                    Support natif des effets de survol <code class="text-indigo-500 font-bold">glow</code> et <code
                        class="text-indigo-500 font-bold">lift</code> pour une profondeur interactive.
                </p>
            </div>
        </section>

        <!-- Code Documentation -->
        <section class="space-y-6">
            <h2 class="text-2xl font-bold flex items-center gap-3 italic">
                <span class="w-8 h-1 bg-cyan-500 rounded-full"></span>
                Génération Dynamique
            </h2>
            <div class="code-window shadow-2xl shadow-cyan-500/5">
                <div class="code-header font-display">
                    <span
                        class="text-[10px] text-slate-500 font-mono tracking-widest uppercase font-black">Architecture.vue</span>
                </div>
                <div class="p-8 font-mono text-sm leading-relaxed overflow-x-auto bg-slate-50 dark:bg-slate-950/50">
                    <pre><span class="text-pink-600 dark:text-pink-500">import</span> { <span
                    class="text-cyan-600 dark:text-cyan-400">Card</span> } <span
                    class="text-pink-600 dark:text-pink-500">from</span> <span
                    class="text-emerald-600 dark:text-emerald-400">'@webmx/ui'</span>;

                <span class="text-slate-500">// Conteneur intelligent</span>
                <span class="text-slate-800 dark:text-white">{{ cardCodeExample }}</span>
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
    background: linear-gradient(135deg, var(--neon-cyan), var(--neon-blue));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>
