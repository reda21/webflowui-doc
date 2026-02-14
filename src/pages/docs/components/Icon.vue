<script setup lang="ts">
import { ref, computed } from 'vue'
import { Icon } from 'webflow-ui'

// Interactive playground state
const selectedSize = ref<string>('md')
const selectedMode = ref<string>('svg')
const iconName = ref('heroicons:cursor-arrow-rays')
const isSpinning = ref(false)
const isPulsing = ref(false)
const isLazy = ref(false)
const showSkeleton = ref(false)
const scaleValue = ref(1)

const iconCodeExample = computed(() => {
  return `<Icon 
  name="${iconName.value}" 
  size="${selectedSize.value}" 
  mode="${selectedMode.value}"
  ${isSpinning.value ? 'spin' : ''}
  ${isPulsing.value ? 'pulse' : ''}
/>`
})
</script>

<template>
  <div class="space-y-16 pb-20">
    <!-- Header -->
    <header class="space-y-4">
      <div class="flex items-center gap-3">
        <span
          class="px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em]">Sémantique
          Visuelle</span>
        <span class="text-slate-500 dark:text-slate-500 text-xs font-medium">Iconify framework • 200k+ assets</span>
      </div>
      <h1 class="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
        Icon <span class="text-gradient">Core</span>
      </h1>
      <p class="text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed italic">
        "Une image vaut mille mots. Une icône WebMX vaut mille octets optimisés."
        Accédez à l'univers complet d'Iconify avec un rendu haute performance.
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
          <!-- Geometric Shapes -->
          <div class="absolute inset-0 opacity-10 pointer-events-none">
            <!-- Grid pattern -->
            <div class="absolute inset-0"
              style="background-image: linear-gradient(var(--neon-indigo) 1px, transparent 1px), linear-gradient(90deg, var(--neon-indigo) 1px, transparent 1px); background-size: 60px 60px; opacity: 0.1">
            </div>

            <div class="absolute top-10 left-10 w-32 h-32 border border-indigo-500/30 rounded-full animate-pulse-slow">
            </div>
            <div
              class="absolute bottom-10 right-10 w-40 h-40 border border-purple-500/30 rounded-lg rotate-12 animate-pulse-slow"
              style="animation-delay: 1s"></div>
          </div>

          <div
            class="relative z-10 flex flex-col items-center gap-12 group-hover:scale-105 transition-transform duration-700">
            <div
              class="p-10 glass rounded-full shadow-2xl shadow-indigo-500/20 border-indigo-500/30 bg-black/20 flex items-center justify-center">
              <Icon :name="iconName" :size="selectedSize" :mode="selectedMode" :spin="isSpinning" :pulse="isPulsing"
                :lazy="isLazy" :skeleton="showSkeleton" :scale="scaleValue"
                class="text-indigo-400 drop-shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all duration-300" />
            </div>

            <div class="flex items-center gap-3 px-6 py-2 glass rounded-full border-white/10 bg-black/40">
              <Icon name="heroicons:tag" size="xs" class="text-indigo-400" />
              <span class="text-[10px] font-mono text-slate-400 uppercase tracking-widest">{{ iconName }}</span>
            </div>
          </div>
        </div>

        <!-- Configuration Grid -->
        <div class="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-black/20">
          <div class="space-y-2">
            <label class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Identifiant</label>
            <input v-model="iconName" type="text"
              class="w-full glass bg-transparent border-white/10 rounded-xl px-3 py-2 text-sm outline-none focus:border-indigo-500/50 transition-all font-bold text-slate-300 placeholder-slate-600"
              placeholder="ex: heroicons:home" />
          </div>
          <div class="space-y-2">
            <label class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Échelle (Size)</label>
            <select v-model="selectedSize"
              class="w-full glass bg-transparent border-white/10 rounded-xl px-3 py-2 text-sm outline-none focus:border-indigo-500/50 transition-all font-bold text-slate-300 cursor-pointer">
              <option v-for="s in ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl']" :key="s" :value="s"
                class="bg-slate-900">{{ s }}</option>
            </select>
          </div>
          <div class="space-y-2">
            <label class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Moteur (Mode)</label>
            <select v-model="selectedMode"
              class="w-full glass bg-transparent border-white/10 rounded-xl px-3 py-2 text-sm outline-none focus:border-indigo-500/50 transition-all font-bold text-slate-300 cursor-pointer">
              <option value="svg" class="bg-slate-900">SVG Logic</option>
              <option value="css" class="bg-slate-900">CSS Mask</option>
            </select>
          </div>

          <!-- Toggles -->
          <div class="flex flex-col justify-center gap-3">
            <label class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Effets</label>
            <div class="flex gap-2">
              <button @click="isSpinning = !isSpinning"
                class="px-3 py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all border"
                :class="isSpinning ? 'bg-indigo-500/20 border-indigo-500 text-indigo-400' : 'glass border-white/5 text-slate-500 hover:bg-white/5'">
                Spin
              </button>
              <button @click="isPulsing = !isPulsing"
                class="px-3 py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all border"
                :class="isPulsing ? 'bg-purple-500/20 border-purple-500 text-purple-400' : 'glass border-white/5 text-slate-500 hover:bg-white/5'">
                Pulse
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Content Sections -->
    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Rendering Modes -->
      <div class="glass-card p-10 space-y-6 lg:col-span-2 group hover:border-indigo-500/30 transition-colors">
        <h3 class="text-xl font-bold flex items-center gap-3 italic uppercase text-white tracking-tight">
          <Icon name="heroicons:cpu-chip" class="text-indigo-400" />
          Moteurs de Rendu
        </h3>
        <p class="text-xs text-slate-500 leading-relaxed italic border-l-2 border-indigo-500/50 pl-4">
          Choisissez la stratégie de rendu optimale selon vos contraintes de performance.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            class="p-6 glass bg-black/40 rounded-2xl space-y-4 border border-emerald-500/10 hover:border-emerald-500/30 transition-all cursor-default">
            <div class="flex items-center gap-3">
              <div
                class="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 shadow-lg shadow-emerald-500/5">
                <Icon name="heroicons:photo" />
              </div>
              <div>
                <span class="font-black text-xs uppercase tracking-widest text-emerald-400 block">Mode SVG</span>
                <span class="text-[10px] text-slate-500 font-bold">Précision Vectorielle</span>
              </div>
            </div>
            <p class="text-[11px] text-slate-400 leading-relaxed">Injecte le code SVG complet. Idéal pour les animations
              internes complexes et les icônes multicolores qui nécessitent une fidélité parfaite.</p>
          </div>

          <div
            class="p-6 glass bg-black/40 rounded-2xl space-y-4 border border-indigo-500/10 hover:border-indigo-500/30 transition-all cursor-default">
            <div class="flex items-center gap-3">
              <div
                class="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 shadow-lg shadow-indigo-500/5">
                <Icon name="heroicons:paint-brush" />
              </div>
              <div>
                <span class="font-black text-xs uppercase tracking-widest text-indigo-400 block">Mode CSS</span>
                <span class="text-[10px] text-slate-500 font-bold">Haute Performance</span>
              </div>
            </div>
            <p class="text-[11px] text-slate-400 leading-relaxed">Utilise les masques CSS background-image. Recommandé
              pour les listes massives, les tableaux de données et les éléments répétitifs.</p>
          </div>
        </div>
      </div>

      <!-- Feature: Library -->
      <div
        class="glass-card p-10 space-y-6 bg-gradient-to-br from-indigo-500/5 to-transparent group hover:border-purple-500/30 transition-colors">
        <h3 class="text-xl font-bold flex items-center gap-3 italic uppercase text-white tracking-tight">
          <Icon name="heroicons:rectangle-group" class="text-purple-400" />
          Universal Assets
        </h3>
        <p class="text-xs text-slate-500 leading-relaxed italic border-l-2 border-purple-500/50 pl-4">
          Compatible avec tous les sets d'icônes populaires.
        </p>
        <div class="grid grid-cols-3 gap-3">
          <div v-for="collection in ['heroicons', 'mdi', 'ph', 'lucide', 'carbon', 'bx', 'ri', 'tabler', 'uil']"
            :key="collection"
            class="aspect-square glass bg-black/40 rounded-xl flex items-center justify-center hover:bg-white/10 hover:scale-105 transition-all cursor-pointer group/icon border border-white/5 shadow-lg relative overflow-hidden"
            :title="collection">
            <div
              class="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover/icon:opacity-100 transition-opacity">
            </div>
            <Icon :name="collection + ':cube'" class="text-slate-500 group-hover/icon:text-purple-400 transition-colors"
              size="md" />
          </div>
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
          <span class="text-[10px] text-slate-500 font-mono tracking-widest uppercase font-black">IconEngine.vue</span>
        </div>
        <div class="p-8 font-mono text-sm leading-relaxed overflow-x-auto bg-slate-950/50">
          <pre><span class="text-pink-500">import</span> { <span class="text-indigo-400">Icon</span> } <span class="text-pink-500">from</span> <span class="text-emerald-400">'@webmx/ui'</span>;

<span class="text-slate-500">// Visualisation vectorielle v5.4</span>
<span class="text-white">{{ iconCodeExample }}</span></pre>
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

@keyframes pulse-slow {

  0%,
  100% {
    opacity: 0.1;
    transform: scale(1);
  }

  50% {
    opacity: 0.3;
    transform: scale(1.1);
  }
}

.animate-pulse-slow {
  animation: pulse-slow 6s ease-in-out infinite;
}
</style>
