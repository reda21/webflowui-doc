<script setup lang="ts">
import { ref, computed } from 'vue'
import { Card, Button, Icon } from 'webflow-ui'
import type { CardVariant, CardShadow, CardPadding } from 'webflow-ui/components/card/types'

// Configurator State
const title = ref('Premium Architecture')
const subtitle = ref('Built for critical scale')
const variant = ref<CardVariant>('glass')
const shadow = ref<CardShadow>('xl')
const padding = ref<CardPadding>('md')
const hover = ref<string>('glow')
const showImage = ref(true)

const cardCodeExample = computed(() => {
    return `<Card 
  title="${title.value}"
  variant="${variant.value}"
  shadow="${shadow.value}"
  hover="${hover.value}"
  image="/banner.jpg"
>
  <p>Contenu de la carte...</p>
</Card>`
})
</script>

<template>
    <div class="space-y-20 pb-20">
        <!-- Header -->
        <header class="space-y-6">
            <div class="flex items-center gap-3">
                <span
                    class="px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em]">Surface
                    Conteneur</span>
                <span class="text-slate-500 dark:text-slate-500 text-xs font-medium">Flexbox Optimisé •
                    Glassmorphism</span>
            </div>
            <h1 class="text-6xl font-extrabold tracking-tighter text-slate-900 dark:text-white">
                Card <span class="text-gradient">Surface</span>
            </h1>
            <p class="text-xl text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed italic">
                Le fondement de toute interface moderne. Des surfaces intelligentes qui s'adaptent,
                respirent et guident l'attention de l'utilisateur avec profondeur et lumière.
            </p>
        </header>

        <!-- Interactive Section -->
        <section class="group relative">
            <div
                class="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000">
            </div>
            <div class="relative glass-card overflow-hidden">
                <!-- Live Preview Stage -->
                <div
                    class="relative min-h-[500px] flex items-center justify-center bg-slate-50/30 dark:bg-slate-900/40 p-12 overflow-hidden border-b border-white/5">
                    <!-- Geometric Background -->
                    <div class="absolute inset-0 opacity-20 pointer-events-none"
                        style="background-image: radial-gradient(var(--neon-cyan) 1px, transparent 1px); background-size: 50px 50px;">
                    </div>

                    <div
                        class="relative z-10 w-full max-w-md transform group-hover:scale-[1.02] transition-transform duration-700">
                        <Card :title="title" :subtitle="subtitle" :variant="variant" :shadow="shadow" :padding="padding"
                            :hover="hover"
                            :image="showImage ? 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800' : undefined"
                            class="border border-white/10">
                            <div class="space-y-4">
                                <p class="text-sm text-slate-400 leading-relaxed italic">
                                    Composez des interfaces spatiales avec une gestion de profondeur native et des
                                    effets de lumière volumétriques.
                                </p>
                                <div class="flex gap-2">
                                    <div class="h-1.5 w-12 bg-cyan-500 rounded-full animate-pulse"></div>
                                    <div class="h-1.5 w-8 bg-blue-500 rounded-full opacity-50"></div>
                                </div>
                            </div>
                            <template #footer>
                                <div class="flex items-center justify-between w-full pt-4 border-t border-white/5">
                                    <span
                                        class="text-[10px] font-black uppercase text-slate-500 tracking-widest">Metadata</span>
                                    <Button severity="primary" size="sm" icon="heroicons:arrow-right" trailing
                                        class="bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 border-cyan-500/20">Explorer</Button>
                                </div>
                            </template>
                        </Card>
                    </div>
                </div>

                <!-- Configuration Grid -->
                <div class="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 bg-black/20">
                    <div class="space-y-3">
                        <label class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Variante
                            Visuelle</label>
                        <select v-model="variant"
                            class="w-full glass bg-transparent border-white/10 rounded-2xl px-4 py-3 text-sm outline-none focus:border-cyan-500/50 transition-all font-bold text-slate-300 cursor-pointer">
                            <option v-for="v in ['default', 'outlined', 'ghost', 'glass', 'soft', 'gradient']" :key="v"
                                :value="v" class="bg-slate-900">{{ v }}</option>
                        </select>
                    </div>
                    <div class="space-y-3">
                        <label class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Interaction
                            Survol</label>
                        <select v-model="hover"
                            class="w-full glass bg-transparent border-white/10 rounded-2xl px-4 py-3 text-sm outline-none focus:border-cyan-500/50 transition-all font-bold text-slate-300 cursor-pointer">
                            <option v-for="h in ['scale', 'raise', 'glow']" :key="h" :value="h" class="bg-slate-900">{{
                                h }}</option>
                        </select>
                    </div>
                    <div class="space-y-3">
                        <label class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Densité
                            (Padding)</label>
                        <select v-model="padding"
                            class="w-full glass bg-transparent border-white/10 rounded-2xl px-4 py-3 text-sm outline-none focus:border-cyan-500/50 transition-all font-bold text-slate-300 cursor-pointer">
                            <option v-for="p in ['none', 'xs', 'sm', 'md', 'lg', 'xl']" :key="p" :value="p"
                                class="bg-slate-900">{{ p }}
                            </option>
                        </select>
                    </div>
                    <div class="flex items-end pb-1">
                        <label
                            class="flex items-center gap-3 cursor-pointer group w-full p-3 glass rounded-2xl hover:bg-white/5 transition-colors"
                            @click="showImage = !showImage">
                            <div :class="[showImage ? 'bg-cyan-500 border-cyan-500' : 'bg-transparent border-white/10']"
                                class="w-5 h-5 rounded border flex items-center justify-center transition-colors">
                                <Icon v-if="showImage" name="heroicons:check" size="xs" class="text-white w-3 h-3" />
                            </div>
                            <span
                                class="text-xs font-bold text-slate-400 group-hover:text-white uppercase tracking-tighter">Image
                                Banner</span>
                        </label>
                    </div>
                </div>
            </div>
        </section>

        <!-- Use Cases Grid -->
        <section class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="glass-card p-8 group hover:border-cyan-500/30 transition-colors cursor-default">
                <div
                    class="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-cyan-500/5">
                    <Icon name="heroicons:shopping-bag" class="text-2xl" />
                </div>
                <h3 class="text-lg font-black uppercase text-white tracking-tight mb-2">E-Commerce</h3>
                <p class="text-xs text-slate-500 italic leading-relaxed">
                    Cartes produit optimisées avec slots d'action rapide, badges de prix et galeries d'images natives.
                </p>
            </div>

            <div class="glass-card p-8 group hover:border-blue-500/30 transition-colors cursor-default">
                <div
                    class="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/5">
                    <Icon name="heroicons:chart-bar" class="text-2xl" />
                </div>
                <h3 class="text-lg font-black uppercase text-white tracking-tight mb-2">Analytics</h3>
                <p class="text-xs text-slate-500 italic leading-relaxed">
                    Surface dense pour visualisations de données, métriques clés et graphiques vectoriels.
                </p>
            </div>

            <div class="glass-card p-8 group hover:border-indigo-500/30 transition-colors cursor-default">
                <div
                    class="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-indigo-500/5">
                    <Icon name="heroicons:user-group" class="text-2xl" />
                </div>
                <h3 class="text-lg font-black uppercase text-white tracking-tight mb-2">Social</h3>
                <p class="text-xs text-slate-500 italic leading-relaxed">
                    Feed infini, profils utilisateurs et interactions sociales riches avec layout flexible.
                </p>
            </div>
        </section>

        <!-- Code Documentation -->
        <section class="space-y-6">
            <h2 class="text-2xl font-bold flex items-center gap-3 italic">
                <span class="w-8 h-1 bg-blue-500 rounded-full"></span>
                Code Generation
            </h2>
            <div class="code-window">
                <div class="code-header font-display">
                    <span
                        class="text-[10px] text-slate-500 font-mono tracking-widest uppercase font-black">ViewComponent.vue</span>
                </div>
                <div class="p-8 font-mono text-sm leading-relaxed overflow-x-auto bg-slate-950/50">
                    <pre><span class="text-pink-500">import</span> { <span class="text-cyan-400">Card</span> } <span
                    class="text-pink-500">from</span> <span class="text-emerald-400">'@webmx/ui'</span>;

                <span class="text-slate-500">// Instance Premium</span>
                <span class="text-white">{{ cardCodeExample }}</span>
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
