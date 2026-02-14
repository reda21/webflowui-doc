<script setup lang="ts">
import { ref, computed } from 'vue'
import { Navbar, Button, Icon, type NavItem } from 'webflow-ui'

const extendedNavItems = ref<NavItem[]>([
    { label: 'Terminal', href: '#', icon: 'heroicons:command-line', active: true },
    { label: 'Clusters', href: '#', icon: 'heroicons:squares-2x2', badge: 'v2.1' },
    { label: 'Secrité', href: '#', icon: 'heroicons:shield-check' },
    { label: 'API SDK', href: '#', icon: 'heroicons:code-bracket', external: true },
])

// Config state for playground
const configBrandName = ref('MATRIX')
const configVariant = ref<'default' | 'minimal' | 'centered'>('default')
const configSize = ref<'sm' | 'md' | 'lg'>('md')
const configTransparent = ref(false)

const navbarCodeExample = computed(() => {
    return `<Navbar 
  brand-name="${configBrandName.value}" 
  variant="${configVariant.value}"
  size="${configSize.value}"
  ${configTransparent.value ? 'transparent' : ''}
  sticky blur
/>`
})
</script>

<template>
    <div class="space-y-16 pb-20">
        <!-- Header -->
        <header class="space-y-4">
            <div class="flex items-center gap-3">
                <span
                    class="px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 text-[10px] font-black uppercase tracking-[0.2em]">Navigation
                    Système</span>
                <span class="text-slate-500 dark:text-slate-500 text-xs font-medium">Auto-responsive • Slots
                    Injection</span>
            </div>
            <h1 class="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Navbar <span class="text-gradient">Engine</span>
            </h1>
            <p class="text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed italic">
                "Le point d'ancrage de votre univers numérique."
                La Navbar WebMX fusionne ergonomie et esthétique premium pour guider vos utilisateurs
                dans les architectures les plus denses.
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
                    class="relative min-h-[400px] bg-slate-50/50 dark:bg-slate-900/50 overflow-hidden border-b border-slate-200 dark:border-white/5">
                    <!-- Cyber background decoration -->
                    <div class="absolute inset-0 opacity-10 pointer-events-none">
                        <div class="absolute top-0 left-0 w-full h-full"
                            style="background-image: radial-gradient(var(--neon-cyan) 0.5px, transparent 0.5px); background-size: 30px 30px;">
                        </div>
                    </div>

                    <div class="relative z-10 pt-12 px-8">
                        <!-- The Navbar Instance -->
                        <div class="transform transition-all duration-700 hover:scale-[1.01]">
                            <Navbar :brand-name="configBrandName" :variant="configVariant" :size="configSize"
                                :transparent="configTransparent" :nav-items="extendedNavItems" sticky blur
                                class="rounded-xl border border-slate-200 dark:border-white/10 shadow-2xl shadow-cyan-500/10 dark:shadow-cyan-500/10 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
                                <template #logo-icon>
                                    <div
                                        class="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                                        <Icon name="heroicons:bolt" class="text-white w-5 h-5" />
                                    </div>
                                </template>
                                <template #actions>
                                    <div class="flex items-center gap-2">
                                        <Button size="sm" variant="ghost" icon="heroicons:magnifying-glass" icon-only
                                            class="text-slate-400 hover:text-slate-900 dark:hover:text-white" />
                                        <div class="h-4 w-px bg-slate-200 dark:bg-white/10 mx-1"></div>
                                        <Button size="sm" severity="primary"
                                            class="font-bold shadow-lg shadow-cyan-500/20">Connect</Button>
                                    </div>
                                </template>
                            </Navbar>
                        </div>

                        <div class="mt-24 text-center space-y-4">
                            <p
                                class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.4em] opacity-50">
                                Viewport Simulation</p>
                            <div class="flex justify-center gap-4 opacity-30">
                                <div class="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"></div>
                                <div class="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"
                                    style="animation-delay: 0.2s"></div>
                                <div class="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"
                                    style="animation-delay: 0.4s"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Configuration Grid -->
                <div class="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-slate-50 dark:bg-black/20">
                    <div class="space-y-2">
                        <label class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Identité
                            (Brand)</label>
                        <input v-model="configBrandName" type="text"
                            class="w-full glass bg-transparent border-slate-300 dark:border-white/10 rounded-xl px-3 py-2 text-sm outline-none focus:border-cyan-500/50 transition-all font-bold text-slate-700 dark:text-slate-300 placeholder-slate-400 dark:placeholder-slate-600" />
                    </div>
                    <div class="space-y-2">
                        <label class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Variante
                            (Layout)</label>
                        <select v-model="configVariant"
                            class="w-full glass bg-transparent border-slate-300 dark:border-white/10 rounded-xl px-3 py-2 text-sm outline-none focus:border-cyan-500/50 transition-all font-bold text-slate-700 dark:text-slate-300 cursor-pointer">
                            <option v-for="v in ['default', 'minimal', 'centered']" :key="v" :value="v"
                                class="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">{{ v }}
                            </option>
                        </select>
                    </div>
                    <div class="space-y-2">
                        <label class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Densité
                            (Size)</label>
                        <select v-model="configSize"
                            class="w-full glass bg-transparent border-slate-300 dark:border-white/10 rounded-xl px-3 py-2 text-sm outline-none focus:border-cyan-500/50 transition-all font-bold text-slate-700 dark:text-slate-300 cursor-pointer">
                            <option v-for="s in ['sm', 'md', 'lg']" :key="s" :value="s"
                                class="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">{{ s }}
                            </option>
                        </select>
                    </div>
                    <div class="flex items-end gap-3 pb-1">
                        <label
                            class="flex items-center gap-2 cursor-pointer p-2 glass rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 flex-1 border border-transparent hover:border-slate-300 dark:hover:border-white/10 transition-all">
                            <input v-model="configTransparent" type="checkbox"
                                class="w-4 h-4 rounded border-slate-300 dark:border-white/10 text-cyan-500 bg-transparent focus:ring-offset-0 focus:ring-0" />
                            <span
                                class="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Transparence</span>
                        </label>
                    </div>
                </div>
            </div>
        </section>

        <!-- Feature Deep Dive -->
        <section class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- Feature 1: Modular Slots -->
            <div
                class="glass-card p-10 space-y-8 group hover:border-cyan-500/30 transition-colors bg-white/50 dark:bg-transparent border-slate-200 dark:border-white/5">
                <h3
                    class="text-xl font-bold flex items-center gap-3 italic uppercase text-slate-900 dark:text-white tracking-tight">
                    <Icon name="heroicons:square-3-stack-3d" class="text-cyan-500" />
                    Architecture Modulaire
                </h3>
                <div class="space-y-6">
                    <p class="text-xs text-slate-500 leading-relaxed italic border-l-2 border-cyan-500/50 pl-4">
                        Des zones d'injection sémantiques pour un contrôle total sans casser la structure.
                    </p>
                    <div
                        class="bg-slate-100 dark:bg-black/40 p-6 rounded-2xl border border-slate-200 dark:border-white/5 space-y-4">
                        <div
                            class="flex items-center gap-3 p-2 hover:bg-white dark:hover:bg-white/5 rounded-lg transition-colors">
                            <div class="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
                            <span
                                class="text-[10px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-widest">Slot
                                #logo-icon</span>
                            <span class="text-[10px] text-slate-400 font-mono opacity-50 ml-auto">&lt;template
                                #logo-icon&gt;</span>
                        </div>
                        <div
                            class="flex items-center gap-3 p-2 hover:bg-white dark:hover:bg-white/5 rounded-lg transition-colors">
                            <div class="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                            <span
                                class="text-[10px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-widest">Slot
                                #center</span>
                            <span class="text-[10px] text-slate-400 font-mono opacity-50 ml-auto">&lt;template
                                #center&gt;</span>
                        </div>
                        <div
                            class="flex items-center gap-3 p-2 hover:bg-white dark:hover:bg-white/5 rounded-lg transition-colors">
                            <div class="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]">
                            </div>
                            <span
                                class="text-[10px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-widest">Slot
                                #actions</span>
                            <span class="text-[10px] text-slate-400 font-mono opacity-50 ml-auto">&lt;template
                                #actions&gt;</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Feature 2: Premium Effects -->
            <div
                class="glass-card p-10 space-y-8 bg-gradient-to-br from-cyan-500/5 to-transparent group hover:border-blue-500/30 transition-colors border-slate-200 dark:border-white/5">
                <h3
                    class="text-xl font-bold flex items-center gap-3 italic uppercase text-slate-900 dark:text-white tracking-tight">
                    <Icon name="heroicons:sparkles" class="text-blue-500" />
                    Premium Effects
                </h3>
                <div class="space-y-6">
                    <p class="text-xs text-slate-500 leading-relaxed italic border-l-2 border-blue-500/50 pl-4">
                        Un moteur de rendu optimisé pour le glassmorphism et les interactions fluides.
                    </p>
                    <div class="grid grid-cols-1 gap-3">
                        <div
                            class="glass p-4 rounded-xl border-slate-200 dark:border-white/5 flex items-center gap-4 bg-white/50 dark:bg-transparent">
                            <Icon name="heroicons:blur-camera" class="text-cyan-500" />
                            <div>
                                <h4
                                    class="text-[11px] font-black text-slate-900 dark:text-white uppercase tracking-wider">
                                    Backdrop Blur
                                </h4>
                                <p class="text-[10px] text-slate-500">Filtrage gaussien en temps réel sur le contenu
                                    scrollé.
                                </p>
                            </div>
                        </div>
                        <div
                            class="glass p-4 rounded-xl border-slate-200 dark:border-white/5 flex items-center gap-4 bg-white/50 dark:bg-transparent">
                            <Icon name="heroicons:moon" class="text-blue-500" />
                            <div>
                                <h4
                                    class="text-[11px] font-black text-slate-900 dark:text-white uppercase tracking-wider">
                                    Dark
                                    Mode Native
                                </h4>
                                <p class="text-[10px] text-slate-500">Inversion intelligente des tokens de couleur.</p>
                            </div>
                        </div>
                    </div>
                </div>
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
                        class="text-[10px] text-slate-500 font-mono tracking-widest uppercase font-black">NavEngine.vue</span>
                </div>
                <div class="p-8 font-mono text-sm leading-relaxed overflow-x-auto bg-slate-50 dark:bg-slate-950/50">
                    <pre><span class="text-pink-600 dark:text-pink-500">import</span> { <span
                    class="text-cyan-600 dark:text-cyan-400">Navbar</span> } <span
                    class="text-pink-600 dark:text-pink-500">from</span> <span
                    class="text-emerald-600 dark:text-emerald-400">'@webmx/ui'</span>;

                <span class="text-slate-500">// Hub de navigation v3.2</span>
                <span class="text-slate-800 dark:text-white">{{ navbarCodeExample }}</span>
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
