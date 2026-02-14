<script setup lang="ts">
import { ref, computed } from 'vue'
import { Icon } from 'webflow-ui'

const configName = ref('heroicons:command-line')
const configSize = ref('3xl')
const configClass = ref('text-purple-500 dark:text-purple-400')
const isSpin = ref(false)

const sizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl']

const iconCodeExample = computed(() => {
  return `<Icon 
  name="${configName.value}" 
  size="${configSize.value}"
  class="${configClass.value}"${isSpin.value ? ' spin' : ''} 
/>`
})
</script>

<template>
  <div class="space-y-16 pb-20">
    <!-- Header -->
    <header class="space-y-4">
      <div class="flex items-center gap-3">
        <span
          class="px-2.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] font-black uppercase tracking-[0.2em]">Universal
          Glyphs</span>
        <span class="text-slate-500 dark:text-slate-500 text-xs font-medium">SVG Engine • Tree-shakable</span>
      </div>
      <h1 class="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
        Icon <span class="text-gradient">System</span>
      </h1>
      <p class="text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed italic">
        La sémantique visuelle pure. Une collection unifiée d'icônes optimisées
        qui s'intègrent nativement au système de design.
      </p>
    </header>

    <!-- Interactive Section -->
    <section class="group relative">
      <div
        class="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-[2rem] blur opacity-25 group-hover:opacity-40 transition duration-1000">
      </div>
      <div class="relative glass-card overflow-hidden">
        <!-- Live Preview Stage -->
        <div
          class="relative min-h-[400px] flex items-center justify-center bg-slate-50/50 dark:bg-slate-900/50 p-12 overflow-hidden border-b border-white/5">
          <!-- Geometric Background -->
          <div class="absolute inset-0 opacity-20 pointer-events-none"
            style="background-image: radial-gradient(var(--neon-purple) 1px, transparent 1px); background-size: 40px 40px;">
          </div>

          <div
            class="relative z-10 flex flex-col items-center gap-8 group-hover:scale-110 transition-transform duration-500">
            <div
              class="p-12 bg-white/50 dark:bg-black/20 rounded-3xl border border-slate-200 dark:border-white/10 backdrop-blur-sm shadow-2xl shadow-purple-500/20">
              <Icon :name="configName" :size="configSize" :class="[configClass, { 'animate-spin': isSpin }]" />
            </div>
            <span class="font-mono text-xs text-purple-500 uppercase tracking-widest">{{ configName }}</span>
          </div>
        </div>

        <!-- Configuration Grid -->
        <div class="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-slate-50 dark:bg-black/20">
          <div class="space-y-2">
            <label class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Nom (Iconify)</label>
            <input v-model="configName" type="text"
              class="w-full glass bg-transparent border-slate-300 dark:border-white/10 rounded-xl px-3 py-2 text-sm outline-none focus:border-purple-500/50 transition-all font-bold text-slate-700 dark:text-slate-300 placeholder-slate-400" />
          </div>
          <div class="space-y-2">
            <label class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Taille</label>
            <select v-model="configSize"
              class="w-full glass bg-transparent border-slate-300 dark:border-white/10 rounded-xl px-3 py-2 text-sm outline-none focus:border-purple-500/50 transition-all font-bold text-slate-700 dark:text-slate-300 cursor-pointer">
              <option v-for="size in sizes" :key="size" :value="size" class="bg-white dark:bg-slate-900">{{ size }}
              </option>
            </select>
          </div>
          <div class="space-y-2">
            <label class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Classes CSS</label>
            <input v-model="configClass" type="text"
              class="w-full glass bg-transparent border-slate-300 dark:border-white/10 rounded-xl px-3 py-2 text-sm outline-none focus:border-purple-500/50 transition-all font-bold text-slate-700 dark:text-slate-300 placeholder-slate-400" />
          </div>
          <div class="space-y-2 pt-6">
            <label class="flex items-center gap-2 cursor-pointer group">
              <div class="relative">
                <input type="checkbox" v-model="isSpin" class="peer sr-only">
                <div
                  class="w-9 h-5 bg-slate-200 dark:bg-slate-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-purple-500/50 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-purple-500">
                </div>
              </div>
              <span
                class="text-[10px] font-black text-slate-500 uppercase tracking-widest group-hover:text-purple-500 transition-colors">Spin</span>
            </label>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Grid -->
    <section class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="glass-card p-8 space-y-4 hover:border-purple-500/30 transition-colors group">
        <div
          class="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
          <Icon name="heroicons:bolt" class="text-xl" />
        </div>
        <h3 class="font-black italic uppercase text-slate-900 dark:text-white tracking-tight">Zero Runtime</h3>
        <p class="text-xs text-slate-500 leading-relaxed italic">
          Les icônes sont inline SVG, éliminant les requêtes HTTP supplémentaires.
        </p>
      </div>
      <div class="glass-card p-8 space-y-4 hover:border-purple-500/30 transition-colors group">
        <div
          class="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
          <Icon name="heroicons:swatch" class="text-xl" />
        </div>
        <h3 class="font-black italic uppercase text-slate-900 dark:text-white tracking-tight">Full CSS Control</h3>
        <p class="text-xs text-slate-500 leading-relaxed italic">
          Contrôlez la couleur, la taille et l'animation via les classes utilitaires standard.
        </p>
      </div>
      <div class="glass-card p-8 space-y-4 hover:border-purple-500/30 transition-colors group">
        <div
          class="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
          <Icon name="heroicons:archive-box" class="text-xl" />
        </div>
        <h3 class="font-black italic uppercase text-slate-900 dark:text-white tracking-tight">100k+ Icons</h3>
        <p class="text-xs text-slate-500 leading-relaxed italic">
          Accès direct à la bibliothèque Iconify (Heroicons, Material, Lucide...).
        </p>
      </div>
    </section>

    <!-- Code Documentation -->
    <section class="space-y-6">
      <h2 class="text-2xl font-bold flex items-center gap-3 italic">
        <span class="w-8 h-1 bg-purple-500 rounded-full"></span>
        Injection
      </h2>
      <div class="code-window shadow-2xl shadow-purple-500/5">
        <div class="code-header font-display">
          <span class="text-[10px] text-slate-500 font-mono font-black tracking-widest uppercase">Symbol.vue</span>
        </div>
        <div class="p-8 font-mono text-sm leading-relaxed overflow-x-auto bg-slate-50 dark:bg-slate-950/50">
          <pre><span class="text-pink-600 dark:text-pink-500">import</span> { <span class="text-purple-600 dark:text-purple-400">Icon</span> } <span class="text-pink-600 dark:text-pink-500">from</span> <span class="text-emerald-600 dark:text-emerald-400">'@webmx/ui'</span>;

<span class="text-slate-500">// Icône vectorielle</span>
<span class="text-slate-800 dark:text-white">{{ iconCodeExample }}</span></pre>
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
  background: linear-gradient(135deg, var(--neon-purple), var(--neon-pink));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
