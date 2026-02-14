<script setup lang="ts">
import { ref, computed } from 'vue'
import { Kbd, Button, Icon } from 'webflow-ui'
import type { KbdSize } from 'webflow-ui/components/kbd/types'

// Configurator State
const configSize = ref<KbdSize>('md')
const keys = ref(['Ctrl', 'Shift', 'F'])

const generatedCode = computed(() => {
    return `<Kbd size="${configSize.value}">
  ${keys.value.join(' + ')}
</Kbd>`
})
</script>

<template>
    <div class="space-y-16 pb-20">
        <!-- Header -->
        <header class="space-y-4">
            <div class="flex items-center gap-3">
                <span
                    class="px-2.5 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-400 text-[10px] font-black uppercase tracking-[0.2em]">Raccourci
                    Clavier</span>
                <span class="text-slate-500 dark:text-slate-500 text-xs font-medium">Touches Natives • Rendu
                    Tactile</span>
            </div>
            <h1 class="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Input <span class="text-gradient">Key</span>
            </h1>
            <p class="text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed italic">
                La signalétique de l'interaction rapide. Affichez les combinaisons de touches
                avec un réalisme qui incite à l'action immédiate.
            </p>
        </header>

        <!-- Interactive Section -->
        <section class="group relative">
            <div
                class="absolute -inset-1 bg-gradient-to-r from-fuchsia-500 to-pink-600 rounded-[2rem] blur opacity-25 group-hover:opacity-40 transition duration-1000">
            </div>
            <div class="relative glass-card overflow-hidden">
                <!-- Live Preview Stage -->
                <div
                    class="relative min-h-[400px] flex items-center justify-center bg-slate-50/50 dark:bg-slate-900/50 p-12 overflow-hidden border-b border-white/5">
                    <!-- Keyboard Matrix Background -->
                    <div class="absolute inset-0 opacity-10 pointer-events-none"
                        style="background-image: radial-gradient(var(--neon-fuchsia) 1px, transparent 1px); background-size: 40px 40px;">
                    </div>

                    <div
                        class="relative z-10 flex flex-col items-center gap-12 group-hover:scale-110 transition-transform duration-700">
                        <div
                            class="flex gap-4 items-center p-8 glass rounded-2xl bg-black/40 border-white/10 shadow-2xl shadow-fuchsia-500/20">
                            <Kbd v-for="key in keys" :key="key" :size="configSize"
                                class="text-fuchsia-200 border-fuchsia-500/30 bg-fuchsia-500/10">{{ key }}</Kbd>
                        </div>
                    </div>
                </div>

                <!-- Configuration Grid -->
                <div class="p-8 grid grid-cols-1 md:grid-cols-2 gap-6 bg-black/20">
                    <div class="space-y-2">
                        <label class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Échelle
                            (Size)</label>
                        <select v-model="configSize"
                            class="w-full glass bg-transparent border-white/10 rounded-xl px-3 py-2 text-sm outline-none focus:border-fuchsia-500/50 transition-all font-bold text-slate-300 cursor-pointer">
                            <option v-for="s in ['sm', 'md', 'lg']" :key="s" :value="s" class="bg-slate-900">{{ s }}
                            </option>
                        </select>
                    </div>
                    <div class="space-y-2">
                        <label class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Combinaison
                            (Simulation)</label>
                        <div class="flex gap-2">
                            <Button size="xs" variant="soft" @click="keys = ['Ctrl', 'C']"
                                class="text-[10px]">Copy</Button>
                            <Button size="xs" variant="soft" @click="keys = ['⌘', 'K']"
                                class="text-[10px]">Command</Button>
                            <Button size="xs" variant="soft" @click="keys = ['Alt', 'F4']"
                                class="text-[10px]">Quit</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Use Cases & Patterns -->
        <section class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Feature 1: Command Palette -->
            <div
                class="glass-card p-10 space-y-8 bg-gradient-to-br from-fuchsia-500/5 to-transparent group hover:border-fuchsia-500/30 transition-colors">
                <h3 class="text-xl font-bold italic flex items-center gap-3 uppercase tracking-tighter text-white">
                    <Icon name="heroicons:command-line" class="text-fuchsia-400" />
                    Command Menu
                </h3>
                <p class="text-xs text-slate-500 leading-relaxed italic border-l-2 border-fuchsia-500/50 pl-4">
                    Indication visuelle pour déclencher des actions globales ou ouvrir la palette de commandes.
                </p>
                <div class="flex items-center justify-between p-4 glass rounded-xl border-white/5 bg-black/40">
                    <span class="text-xs font-bold text-slate-400">Rechercher...</span>
                    <div class="flex gap-1">
                        <Kbd size="sm">Ctrl</Kbd>
                        <Kbd size="sm">K</Kbd>
                    </div>
                </div>
            </div>

            <!-- Feature 2: Contextual Hints -->
            <div class="glass-card p-10 space-y-8 group hover:border-pink-500/30 transition-colors">
                <h3 class="text-xl font-bold italic flex items-center gap-3 uppercase tracking-tighter text-white">
                    <Icon name="heroicons:cursor-arrow-rays" class="text-pink-400" />
                    Context Hints
                </h3>
                <p class="text-xs text-slate-500 leading-relaxed italic border-l-2 border-pink-500/50 pl-4">
                    Rappels contextuels discrets dans les menus déroulants ou les tooltips.
                </p>
                <div class="p-4 glass rounded-xl border-white/5 space-y-2 bg-black/40">
                    <div
                        class="flex items-center justify-between p-2 hover:bg-white/5 rounded-lg transition-colors cursor-pointer group/item">
                        <span class="text-xs font-bold text-slate-300 group-hover/item:text-white">Nouveau
                            fichier</span>
                        <Kbd size="sm" class="opacity-50 group-hover/item:opacity-100">N</Kbd>
                    </div>
                    <div
                        class="flex items-center justify-between p-2 hover:bg-white/5 rounded-lg transition-colors cursor-pointer group/item">
                        <span class="text-xs font-bold text-slate-300 group-hover/item:text-white">Sauvegarder</span>
                        <div class="flex gap-1 opacity-50 group-hover/item:opacity-100">
                            <Kbd size="sm">Ctrl</Kbd>
                            <Kbd size="sm">S</Kbd>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Code Documentation -->
        <section class="space-y-6">
            <h2 class="text-2xl font-bold flex items-center gap-3 italic">
                <span class="w-8 h-1 bg-fuchsia-500 rounded-full"></span>
                Génération Dynamique
            </h2>
            <div class="code-window shadow-2xl shadow-fuchsia-500/5">
                <div class="code-header font-display">
                    <span
                        class="text-[10px] text-slate-500 font-mono tracking-widest uppercase font-black">ShortcutHint.vue</span>
                </div>
                <div class="p-8 font-mono text-sm leading-relaxed overflow-x-auto bg-slate-950/50">
                    <pre><span class="text-pink-500">import</span> { <span class="text-fuchsia-400">Kbd</span> } <span class="text-pink-500">from</span> <span class="text-emerald-400">'@webmx/ui'</span>;

<span class="text-slate-500">// Indication visuelle v1</span>
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
    background: linear-gradient(135deg, var(--neon-fuchsia), var(--neon-pink));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>
