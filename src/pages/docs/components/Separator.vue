<script setup lang="ts">
import { ref, computed } from 'vue'
import { Separator, Icon } from 'webflow-ui'
import type { SeparatorOrientation } from 'webflow-ui/components/separator/types'

const orientation = ref<SeparatorOrientation>('horizontal')
const orientationOptions: SeparatorOrientation[] = ['horizontal', 'vertical']

const generatedCode = computed(() => {
    return `<div class="flex items-center space-x-4 text-sm">
  <div>Blog</div>
  <Separator orientation="vertical" />
  <div>Docs</div>
  <Separator orientation="vertical" />
  <div>Source</div>
</div>`
})
</script>

<template>
    <div class="space-y-16 pb-20">
        <!-- Header -->
        <header class="space-y-4">
            <div class="flex items-center gap-3">
                <span
                    class="px-2.5 py-1 rounded-full bg-slate-500/10 border border-slate-500/20 text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">Layout
                    Divider</span>
                <span class="text-slate-500 text-xs font-medium">Semantic • Accessible</span>
            </div>
            <h1 class="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Separator <span class="text-gradient">Line</span>
            </h1>
            <p class="text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed italic">
                Un séparateur sémantique pour structurer le contenu visuellement sans
                interrompre le flux de lecture.
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
                        class="relative z-10 w-full max-w-lg bg-white/50 dark:bg-black/20 p-8 rounded-3xl border border-slate-200 dark:border-white/10 backdrop-blur-sm shadow-2xl">
                        <div class="space-y-4">
                            <h4 class="text-sm font-medium leading-none text-slate-900 dark:text-white">WebMX UI</h4>
                            <p class="text-sm text-slate-500 dark:text-slate-400">
                                Une bibliothèque de composants moderne.
                            </p>
                        </div>
                        <Separator class="my-6" />
                        <div class="flex h-5 items-center space-x-4 text-sm text-slate-900 dark:text-white">
                            <div>Blog</div>
                            <Separator orientation="vertical" />
                            <div>Docs</div>
                            <Separator orientation="vertical" />
                            <div>Source</div>
                        </div>
                    </div>
                </div>

                <!-- Configuration Grid -->
                <div class="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-slate-50 dark:bg-black/20">
                    <div class="space-y-2">
                        <label
                            class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Orientation</label>
                        <select v-model="orientation"
                            class="w-full glass bg-transparent border-slate-300 dark:border-white/10 rounded-xl px-3 py-2 text-sm outline-none focus:border-slate-500/50 transition-all font-bold text-slate-700 dark:text-slate-300 cursor-pointer">
                            <option v-for="o in orientationOptions" :key="o" :value="o"
                                class="bg-white dark:bg-slate-900">{{ o }}</option>
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
                    <Icon name="heroicons:bars-2" class="text-xl" />
                </div>
                <h3 class="font-black italic uppercase text-slate-900 dark:text-white tracking-tight">Responsive</h3>
                <p class="text-xs text-slate-500 leading-relaxed italic">
                    S'adapte automatiquement à l'orientation et à la taille du conteneur.
                </p>
            </div>
            <div class="glass-card p-8 space-y-4 hover:border-slate-500/30 transition-colors group">
                <div
                    class="w-12 h-12 rounded-2xl bg-slate-500/10 flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover:scale-110 transition-transform">
                    <Icon name="heroicons:eye-slash" class="text-xl" />
                </div>
                <h3 class="font-black italic uppercase text-slate-900 dark:text-white tracking-tight">Decorative</h3>
                <p class="text-xs text-slate-500 leading-relaxed italic">
                    Utilisé purement pour la décoration, ignoré par les lecteurs d'écran par défaut.
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
                        class="text-[10px] text-slate-500 font-mono font-black tracking-widest uppercase">Layout.vue</span>
                </div>
                <div class="p-8 font-mono text-sm leading-relaxed overflow-x-auto bg-slate-50 dark:bg-slate-950/50">
                    <pre><span class="text-pink-600 dark:text-pink-500">import</span> { <span class="text-slate-600 dark:text-slate-400">Separator</span> } <span class="text-pink-600 dark:text-pink-500">from</span> <span class="text-emerald-600 dark:text-emerald-400">'@webmx/ui'</span>;

<span class="text-slate-500">// Structure visuelle</span>
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
