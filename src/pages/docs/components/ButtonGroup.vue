<script setup lang="ts">
import { ref, computed } from 'vue'
import { Button, ButtonGroup, Icon } from 'webflow-ui'

const toggleValue = ref('center')
const multiValues = ref(['bold'])

const buttonGroupCode = computed(() => {
    return `<ButtonGroup v-model="toggleValue" toggle>
  <Button value="left" icon="heroicons:bars-3-bottom-left" />
  <Button value="center" icon="heroicons:bars-3" />
  <Button value="right" icon="heroicons:bars-3-bottom-right" />
</ButtonGroup>`
})
</script>

<template>
    <div class="space-y-16 pb-20">
        <!-- Header -->
        <header class="space-y-4">
            <div class="flex items-center gap-3">
                <span
                    class="px-2.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-[10px] font-black uppercase tracking-[0.2em]">Séquence
                    d'Action</span>
                <span class="text-slate-500 dark:text-slate-500 text-xs font-medium">Bords Fusionnés • États
                    Mutuels</span>
            </div>
            <h1 class="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Button <span class="text-gradient">Group</span>
            </h1>
            <p class="text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed italic">
                Maîtrisez la densité. ButtonGroup fusionne vos actions dans une structure unique
                pour une interface épurée et une navigation intuitive.
            </p>
        </header>

        <!-- Interactive Section -->
        <section class="group relative">
            <div
                class="absolute -inset-1 bg-gradient-to-r from-violet-500 to-indigo-600 rounded-[2rem] blur opacity-25 group-hover:opacity-40 transition duration-1000">
            </div>
            <div class="relative glass-card overflow-hidden">
                <!-- Live Preview Stage -->
                <div
                    class="relative min-h-[400px] flex items-center justify-center bg-slate-50/50 dark:bg-slate-900/50 p-12 overflow-hidden border-b border-white/5">
                    <!-- Geometric Background -->
                    <div class="absolute inset-0 opacity-10 pointer-events-none"
                        style="background-image: radial-gradient(var(--neon-violet) 1px, transparent 1px); background-size: 30px 30px;">
                    </div>

                    <div class="relative z-10 flex flex-col items-center gap-12">
                        <div class="space-y-8 text-center flex flex-col items-center">
                            <span class="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Flux
                                Controlleur</span>

                            <!-- Main Visual Showcase -->
                            <div
                                class="p-2 glass rounded-2xl bg-white/20 dark:bg-black/20 border-slate-200 dark:border-white/10 scale-125 transform transition-transform duration-500 hover:scale-[1.3]">
                                <ButtonGroup v-model="toggleValue" toggle class="shadow-2xl shadow-violet-500/20">
                                    <Button value="left" icon="heroicons:bars-3-bottom-left" square severity="primary"
                                        size="lg" />
                                    <Button value="center" icon="heroicons:bars-3" square severity="primary"
                                        size="lg" />
                                    <Button value="right" icon="heroicons:bars-3-bottom-right" square severity="primary"
                                        size="lg" />
                                </ButtonGroup>
                            </div>

                            <div
                                class="px-4 py-1.5 glass rounded-full inline-block mt-4 border-violet-500/30 bg-violet-500/10">
                                <span
                                    class="text-[10px] font-mono text-violet-300 uppercase tracking-widest font-black">ACTIVE_NODE:
                                    {{ toggleValue.toUpperCase() }}</span>
                            </div>
                        </div>

                        <div
                            class="flex gap-8 items-center border-t border-slate-200 dark:border-white/5 pt-8 w-full justify-center">
                            <!-- Example 1: Vertical -->
                            <div class="flex flex-col items-center gap-2">
                                <span class="text-[9px] font-black uppercase text-slate-600 tracking-widest">Zoom
                                    UI</span>
                                <ButtonGroup direction="vertical" class="shadow-xl">
                                    <Button icon="heroicons:plus" square variant="soft" />
                                    <Button icon="heroicons:minus" square variant="soft" />
                                </ButtonGroup>
                            </div>

                            <!-- Example 2: Multi-select -->
                            <div class="flex flex-col items-center gap-2">
                                <span class="text-[9px] font-black uppercase text-slate-600 tracking-widest">Text
                                    Format</span>
                                <ButtonGroup multiple v-model="multiValues" toggle class="shadow-xl">
                                    <Button value="bold" icon="heroicons:bold" square variant="outlined" />
                                    <Button value="italic" icon="heroicons:italic" square variant="outlined" />
                                    <Button value="underline" icon="heroicons:underline" square variant="outlined" />
                                </ButtonGroup>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Feature Highligts -->
                <div class="p-8 grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-50 dark:bg-black/20">
                    <div class="space-y-2 p-4 rounded-xl hover:bg-white dark:hover:bg-white/5 transition-colors">
                        <div class="flex items-center gap-2 mb-2">
                            <Icon name="heroicons:arrows-up-down" class="text-violet-400" size="xs" />
                            <h4 class="text-[10px] font-black text-slate-400 uppercase tracking-widest">Direction</h4>
                        </div>
                        <p class="text-xs text-slate-500 italic font-medium leading-relaxed">
                            Support natif des axes <span class="text-violet-400">Horizontal</span> et <span
                                class="text-violet-400">Vertical</span> pour s'adapter à tous les layouts.
                        </p>
                    </div>
                    <div class="space-y-2 p-4 rounded-xl hover:bg-white dark:hover:bg-white/5 transition-colors">
                        <div class="flex items-center gap-2 mb-2">
                            <Icon name="heroicons:cursor-arrow-rays" class="text-violet-400" size="xs" />
                            <h4 class="text-[10px] font-black text-slate-400 uppercase tracking-widest">Sémantique</h4>
                        </div>
                        <p class="text-xs text-slate-500 italic font-medium leading-relaxed">
                            Comportement <span class="text-violet-400">Radio</span> (unique) ou <span
                                class="text-violet-400">Checkbox</span> (multiple) intégré sans logique externe.
                        </p>
                    </div>
                    <div class="space-y-2 p-4 rounded-xl hover:bg-white dark:hover:bg-white/5 transition-colors">
                        <div class="flex items-center gap-2 mb-2">
                            <Icon name="heroicons:puzzle-piece" class="text-violet-400" size="xs" />
                            <h4 class="text-[10px] font-black text-slate-400 uppercase tracking-widest">Fusion</h4>
                        </div>
                        <p class="text-xs text-slate-500 italic font-medium leading-relaxed">
                            Calcul automatique des rayons de courbure et des bordures partagées pour une finition
                            pixel-perfect.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Use Cases & Patterns -->
        <section class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- Feature 1: Segmented Control -->
            <div
                class="glass-card p-10 space-y-8 bg-gradient-to-br from-violet-500/5 to-transparent group hover:border-violet-500/30 transition-colors border-slate-200 dark:border-white/5">
                <h3
                    class="text-xl font-bold flex items-center gap-3 italic uppercase text-slate-900 dark:text-white tracking-tight">
                    <Icon name="heroicons:swatch" class="text-violet-400" />
                    Segmented Control
                </h3>
                <p class="text-xs text-slate-500 leading-relaxed italic border-l-2 border-violet-500/50 pl-4">
                    Une alternative tactile aux listes déroulantes pour les choix à faible cardinalité.
                </p>
                <div
                    class="flex justify-center p-8 glass bg-slate-100 dark:bg-black/40 rounded-2xl border border-slate-200 dark:border-white/5">
                    <ButtonGroup
                        class="bg-white dark:bg-black/60 p-1.5 rounded-2xl border border-slate-200 dark:border-white/10 shadow-inner">
                        <Button variant="ghost" rounded="xl" size="sm"
                            class="px-6 font-bold text-slate-900 dark:text-white bg-slate-100 dark:bg-white/10 shadow-lg">Day</Button>
                        <Button variant="ghost" rounded="xl" size="sm"
                            class="px-6 font-bold text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">Week</Button>
                        <Button variant="ghost" rounded="xl" size="sm"
                            class="px-6 font-bold text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">Month</Button>
                    </ButtonGroup>
                </div>
            </div>

            <!-- Feature 2: Complex Toolbars -->
            <div
                class="glass-card p-10 space-y-8 group hover:border-indigo-500/30 transition-colors border-slate-200 dark:border-white/5">
                <h3
                    class="text-xl font-bold flex items-center gap-3 italic uppercase text-slate-900 dark:text-white tracking-tight">
                    <Icon name="heroicons:adjustments-horizontal" class="text-indigo-400" />
                    Complex Toolbars
                </h3>
                <p class="text-xs text-slate-500 leading-relaxed italic border-l-2 border-indigo-500/50 pl-4">
                    Combinez différents styles et actions pour créer des barres d'outils denses et fonctionnelles.
                </p>
                <div class="space-y-4">
                    <div
                        class="p-4 glass rounded-xl border-slate-200 dark:border-white/5 flex items-center justify-between bg-slate-50 dark:bg-black/20">
                        <span class="text-[10px] font-black uppercase tracking-widest text-slate-500">Export
                            Options</span>
                        <ButtonGroup>
                            <Button variant="soft" icon="heroicons:document-text"
                                class="bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20">PDF</Button>
                            <Button variant="soft" icon="heroicons:table-cells"
                                class="bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20">CSV</Button>
                        </ButtonGroup>
                    </div>
                </div>
            </div>
        </section>

        <!-- Code Documentation -->
        <section class="space-y-6">
            <h2 class="text-2xl font-bold flex items-center gap-3 italic">
                <span class="w-8 h-1 bg-violet-500 rounded-full"></span>
                Génération Dynamique
            </h2>
            <div class="code-window shadow-2xl shadow-violet-500/5">
                <div class="code-header font-display">
                    <span
                        class="text-[10px] text-slate-500 font-mono tracking-widest uppercase font-black">GroupLogic.vue</span>
                </div>
                <div class="p-8 font-mono text-sm leading-relaxed overflow-x-auto bg-slate-50 dark:bg-slate-950/50">
                    <pre><span class="text-pink-600 dark:text-pink-500">import</span> { <span class="text-violet-600 dark:text-violet-400">ButtonGroup</span> } <span class="text-pink-600 dark:text-pink-500">from</span> <span class="text-emerald-600 dark:text-emerald-400">'@webmx/ui'</span>;

<span class="text-slate-500">// Groupe logique v3</span>
<span class="text-slate-800 dark:text-white">{{ buttonGroupCode }}</span></pre>
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
    background: linear-gradient(135deg, var(--neon-violet), var(--neon-indigo));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>
