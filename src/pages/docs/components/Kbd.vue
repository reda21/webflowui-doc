<script setup lang="ts">
import { ref, computed } from 'vue'
import { Icon } from 'webflow-ui'
import type { ButtonSize as KbdSize } from 'webflow-ui/components/button/types' // using ButtonSize as proxy or just define local

// Local Kbd Component Mock since it's missing in UI lib
const Kbd = {
    props: ['size'],
    template: `
    <kbd class="px-2 py-1.5 text-xs font-semibold text-slate-800 bg-slate-100 border border-slate-200 rounded-lg dark:bg-slate-700 dark:text-slate-100 dark:border-slate-600 shadow-sm mx-1 inline-flex items-center justify-center min-w-[24px]">
      <slot />
    </kbd>
  `
}

const size = ref<KbdSize>('md')
const sizeOptions: KbdSize[] = ['xs', 'sm', 'md', 'lg']

const generatedCode = computed(() => {
    return `<div class="flex gap-2 text-slate-500">
  <span class="text-xs">Recherche rapide:</span>
  <div>
    <Kbd size="${size.value}">⌘</Kbd> + <Kbd size="${size.value}">K</Kbd>
  </div>
</div>`
})
</script>

<template>
    <div class="space-y-16 pb-20">
        <!-- Header -->
        <header class="space-y-4">
            <div class="flex items-center gap-3">
                <span
                    class="px-2.5 py-1 rounded-full bg-slate-500/10 border border-slate-500/20 text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">Micro-Typographie</span>
                <span class="text-slate-500 text-xs font-medium">Semantic Keycap • Cross-Platform</span>
            </div>
            <h1 class="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Kbd <span class="text-gradient">Input</span>
            </h1>
            <p class="text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed italic">
                La représentation visuelle des commandes physiques. Une touche de clavier virtuelle
                pour enrichir l'expérience d'apprentissage et la navigation.
            </p>
        </header>

        <!-- Interactive Section -->
        <section class="group relative">
            <div
                class="absolute -inset-1 bg-gradient-to-r from-slate-400 to-gray-500 rounded-[2rem] blur opacity-25 group-hover:opacity-40 transition duration-1000">
            </div>
            <div class="relative glass-card overflow-hidden">
                <!-- Live Preview Stage -->
                <div
                    class="relative min-h-[400px] flex items-center justify-center bg-slate-50/50 dark:bg-slate-900/50 p-12 overflow-hidden border-b border-white/5">
                    <!-- Geometric Background -->
                    <div class="absolute inset-0 opacity-20 pointer-events-none"
                        style="background-image: radial-gradient(var(--neon-slate) 1px, transparent 1px); background-size: 30px 30px;">
                    </div>

                    <div
                        class="relative z-10 flex flex-col items-center gap-8 group-hover:scale-110 transition-transform duration-500">
                        <div
                            class="flex items-center gap-2 p-12 bg-white/50 dark:bg-black/20 rounded-3xl border border-slate-200 dark:border-white/10 backdrop-blur-sm shadow-2xl shadow-slate-500/10">
                            <component :is="Kbd" :size="size">Ctrl</component>
                            <span class="text-slate-400 dark:text-slate-500 font-black text-xl">+</span>
                            <component :is="Kbd" :size="size">Shift</component>
                            <span class="text-slate-400 dark:text-slate-500 font-black text-xl">+</span>
                            <component :is="Kbd" :size="size">P</component>
                        </div>
                    </div>
                </div>

                <!-- Configuration Grid -->
                <div class="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-slate-50 dark:bg-black/20">
                    <div class="space-y-2">
                        <label class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Densité
                            (Size)</label>
                        <select v-model="size"
                            class="w-full glass bg-transparent border-slate-300 dark:border-white/10 rounded-xl px-3 py-2 text-sm outline-none focus:border-slate-500/50 transition-all font-bold text-slate-700 dark:text-slate-300 cursor-pointer">
                            <option v-for="s in sizeOptions" :key="s" :value="s" class="bg-white dark:bg-slate-900">{{ s
                                }}</option>
                        </select>
                    </div>
                </div>
            </div>
        </section>

        <!-- Features Grid -->
        <section class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="glass-card p-8 space-y-4 hover:border-slate-500/30 transition-colors group">
                <div
                    class="w-12 h-12 rounded-2xl bg-slate-500/10 flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover:scale-110 transition-transform">
                    <Icon name="heroicons:command-line" class="text-xl" />
                </div>
                <h3 class="font-black italic uppercase text-slate-900 dark:text-white tracking-tight">OS Aware</h3>
                <p class="text-xs text-slate-500 leading-relaxed italic">
                    Style adaptatif ressemblant aux touches physiques.
                </p>
            </div>
            <div class="glass-card p-8 space-y-4 hover:border-slate-500/30 transition-colors group">
                <div
                    class="w-12 h-12 rounded-2xl bg-slate-500/10 flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover:scale-110 transition-transform">
                    <Icon name="heroicons:language" class="text-xl" />
                </div>
                <h3 class="font-black italic uppercase text-slate-900 dark:text-white tracking-tight">Semantic</h3>
                <p class="text-xs text-slate-500 leading-relaxed italic">
                    Utilisez la balise <code class="font-bold">&lt;kbd&gt;</code> HTML5 standard pour une meilleure
                    accessibilité.
                </p>
            </div>
            <div class="glass-card p-8 space-y-4 hover:border-slate-500/30 transition-colors group">
                <div
                    class="w-12 h-12 rounded-2xl bg-slate-500/10 flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover:scale-110 transition-transform">
                    <Icon name="heroicons:cube-transparent" class="text-xl" />
                </div>
                <h3 class="font-black italic uppercase text-slate-900 dark:text-white tracking-tight">Nestable</h3>
                <p class="text-xs text-slate-500 leading-relaxed italic">
                    S'intègre parfaitement dans les Tooltips, Modals et Menus.
                </p>
            </div>
        </section>

        <!-- Code Documentation -->
        <section class="space-y-6">
            <h2 class="text-2xl font-bold flex items-center gap-3 italic">
                <span class="w-8 h-1 bg-slate-500 rounded-full"></span>
                Injection
            </h2>
            <div class="code-window shadow-2xl shadow-slate-500/5">
                <div class="code-header font-display">
                    <span
                        class="text-[10px] text-slate-500 font-mono font-black tracking-widest uppercase">Shortcuts.vue</span>
                </div>
                <div class="p-8 font-mono text-sm leading-relaxed overflow-x-auto bg-slate-50 dark:bg-slate-950/50">
                    <pre><span class="text-pink-600 dark:text-pink-500">import</span> { <span class="text-slate-600 dark:text-slate-400">Kbd</span> } <span class="text-pink-600 dark:text-pink-500">from</span> <span class="text-emerald-600 dark:text-emerald-400">'@webmx/ui'</span>;

<span class="text-slate-500">// Indication visuelle</span>
<span class="text-slate-800 dark:text-white">{{ generatedCode }}</span></pre>
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
    background: linear-gradient(135deg, var(--neon-slate), #94a3b8);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>
