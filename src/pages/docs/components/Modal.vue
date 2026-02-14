<script setup lang="ts">
import { ref, computed } from 'vue'
import { Modal, Button, Icon } from 'webflow-ui'
import type { ModalSize, ModalVariant, ModalSeverity, ModalPosition, ModalAnimation } from 'webflow-ui/components/modal/types'

// Configurator State
const isOpen = ref(false)
const selectedSize = ref<ModalSize>('md')
const selectedVariant = ref<ModalVariant>('default')
const selectedSeverity = ref<ModalSeverity>('default')
const selectedPosition = ref<ModalPosition>('center')
const selectedAnimation = ref<ModalAnimation>('scale')
const overlayBlur = ref(4)
const overlayOpacity = ref(0.4)

const sizeOptions: ModalSize[] = ['sm', 'md', 'lg', 'xl', 'full', 'auto']
const variantOptions: ModalVariant[] = ['default', 'clean', 'glass', 'bottom-sheet', 'neumorphic']
const severityOptions: ModalSeverity[] = ['default', 'success', 'danger', 'warning', 'info']

const modalCodeExample = computed(() => {
    let props = ` v-model="isOpen"`
    if (selectedSize.value !== 'md') props += ` size="${selectedSize.value}"`
    if (selectedVariant.value !== 'default') props += ` variant="${selectedVariant.value}"`
    if (selectedSeverity.value !== 'default') props += ` severity="${selectedSeverity.value}"`
    if (selectedPosition.value !== 'center') props += ` position="${selectedPosition.value}"`
    return `<Modal title="Titre"${props}>\n  <p>Contenu...</p>\n</Modal>`
})
</script>

<template>
    <div class="space-y-16 pb-20">
        <!-- Header Section -->
        <header class="space-y-4">
            <div class="flex items-center gap-3">
                <span
                    class="px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em]">Flux
                    Interrupt</span>
                <span class="text-slate-500 dark:text-slate-500 text-xs font-medium">Focus Trap • Z-Index Manager</span>
            </div>
            <h1 class="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Modal <span class="text-gradient">Engine</span>
            </h1>
            <p class="text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed italic">
                "Une fenêtre sur le contexte."
                Gérez les interruptions de flux avec élégance.
                Supporte les animations physiques et les variantes glassmorphic natives.
            </p>
        </header>

        <!-- Interactive Preview Area -->
        <section class="group relative">
            <div
                class="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-[2rem] blur opacity-25 group-hover:opacity-40 transition duration-1000">
            </div>
            <div class="relative glass-card overflow-hidden">
                <!-- Live Preview Stage -->
                <div
                    class="relative min-h-[450px] flex items-center justify-center bg-slate-50/50 dark:bg-slate-900/50 p-12 overflow-hidden border-b border-white/5">
                    <!-- Geometric Background -->
                    <div class="absolute inset-0 pointer-events-none opacity-20"
                        style="background-image: radial-gradient(var(--neon-cyan) 1px, transparent 1px); background-size: 40px 40px;">
                    </div>

                    <!-- Mock Modal -->
                    <div
                        class="relative z-10 w-full max-w-md glass rounded-3xl shadow-2xl shadow-cyan-500/10 border border-slate-200 dark:border-white/10 p-8 transform group-hover:scale-[1.02] transition-transform duration-500 bg-white/80 dark:bg-transparent">
                        <div class="flex items-center justify-between mb-8">
                            <div class="flex items-center gap-3">
                                <div
                                    class="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                                    <Icon name="heroicons:bolt" />
                                </div>
                                <div>
                                    <h3 class="text-lg font-black italic tracking-tight text-slate-900 dark:text-white">
                                        System Alert</h3>
                                    <p class="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                                        Confirmation Protocol</p>
                                </div>
                            </div>
                        </div>
                        <p class="text-slate-600 dark:text-slate-500 text-sm leading-relaxed mb-8 italic">
                            Êtes-vous sûr de vouloir initialiser le déploiement ? Cette action est irréversible et
                            affectera le noyau central.
                        </p>
                        <div class="grid grid-cols-2 gap-4">
                            <Button variant="ghost" @click="isOpen = true" class="w-full">Simuler</Button>
                            <Button severity="primary" @click="isOpen = true"
                                class="w-full shadow-lg shadow-cyan-500/20">Déployer</Button>
                        </div>
                    </div>
                </div>

                <!-- Real Modal Triggered here -->
                <Modal v-model="isOpen" title="Configuration de la Modal" :size="selectedSize"
                    :variant="selectedVariant" :severity="selectedSeverity" :animation="selectedAnimation"
                    :overlay-blur="overlayBlur" :overlay-opacity="overlayOpacity">
                    <div class="space-y-6">
                        <div
                            class="p-6 bg-slate-100 dark:bg-slate-950/50 rounded-2xl border border-slate-200 dark:border-white/5 flex items-start gap-4">
                            <Icon name="heroicons:information-circle" class="text-cyan-500 dark:text-cyan-400 mt-1" />
                            <p class="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                                Vous visualisez actuellement une instance réelle de la <span
                                    class="text-cyan-500 dark:text-cyan-400 font-bold">Modal Premium</span>.
                                Testez l'interaction clavier (Echap) et le focus trap.
                            </p>
                        </div>
                        <div class="grid grid-cols-2 gap-4">
                            <div
                                class="p-4 glass rounded-xl space-y-1 bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/5">
                                <span
                                    class="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Dimensions</span>
                                <p class="font-bold font-mono text-cyan-500 dark:text-cyan-400">{{ selectedSize }}</p>
                            </div>
                            <div
                                class="p-4 glass rounded-xl space-y-1 bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/5">
                                <span
                                    class="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Style</span>
                                <p class="font-bold font-mono text-cyan-500 dark:text-cyan-400">{{ selectedVariant }}
                                </p>
                            </div>
                        </div>
                    </div>
                    <template #footer>
                        <div class="flex gap-3 justify-end w-full">
                            <Button variant="ghost" @click="isOpen = false">Annuler</Button>
                            <Button severity="primary" @click="isOpen = false">Confirmer</Button>
                        </div>
                    </template>
                </Modal>

                <!-- Dynamic Controls -->
                <div class="p-8 grid grid-cols-1 md:grid-cols-3 gap-8 bg-slate-50 dark:bg-black/20">
                    <div class="space-y-2">
                        <label
                            class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Dimensions</label>
                        <select v-model="selectedSize"
                            class="w-full glass bg-transparent border-slate-300 dark:border-white/10 rounded-xl px-4 py-2 text-sm outline-none focus:border-cyan-500/50 transition-all cursor-pointer text-slate-700 dark:text-slate-300 font-bold">
                            <option v-for="opt in sizeOptions" :key="opt" :value="opt"
                                class="bg-white dark:bg-slate-900">{{ opt }}
                            </option>
                        </select>
                    </div>
                    <div class="space-y-2">
                        <label class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Variante
                            Visuelle</label>
                        <select v-model="selectedVariant"
                            class="w-full glass bg-transparent border-slate-300 dark:border-white/10 rounded-xl px-4 py-2 text-sm outline-none focus:border-cyan-500/50 transition-all cursor-pointer text-slate-700 dark:text-slate-300 font-bold">
                            <option v-for="opt in variantOptions" :key="opt" :value="opt"
                                class="bg-white dark:bg-slate-900">{{ opt }}
                            </option>
                        </select>
                    </div>
                    <div class="space-y-2">
                        <label class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Sévérité</label>
                        <select v-model="selectedSeverity"
                            class="w-full glass bg-transparent border-slate-300 dark:border-white/10 rounded-xl px-4 py-2 text-sm outline-none focus:border-cyan-500/50 transition-all cursor-pointer text-slate-700 dark:text-slate-300 font-bold">
                            <option v-for="opt in severityOptions" :key="opt" :value="opt"
                                class="bg-white dark:bg-slate-900">{{ opt
                                }}</option>
                        </select>
                    </div>
                </div>
            </div>
        </section>

        <!-- Variants Grid -->
        <section class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
                class="glass-card p-10 space-y-6 hover:-translate-y-2 transition-transform duration-500 border-slate-200 dark:border-white/5">
                <div
                    class="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 dark:text-indigo-400 shadow-lg shadow-indigo-500/10">
                    <Icon name="heroicons:device-phone-mobile" size="lg" />
                </div>
                <h3 class="text-xl font-bold italic text-slate-900 dark:text-white uppercase tracking-tighter">Mobile
                    First</h3>
                <p class="text-sm text-slate-500 leading-relaxed italic">
                    La variante <code class="text-indigo-500 dark:text-indigo-400 font-bold">bottom-sheet</code>
                    transforme la
                    modal en
                    panneau
                    glissant sur mobile, mimant les interactions natives iOS/Android.
                </p>
            </div>

            <div
                class="glass-card p-10 space-y-6 hover:-translate-y-2 transition-transform duration-500 border-slate-200 dark:border-white/5">
                <div
                    class="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 dark:text-emerald-400 shadow-lg shadow-emerald-500/10">
                    <Icon name="heroicons:eye" size="lg" />
                </div>
                <h3 class="text-xl font-bold italic text-slate-900 dark:text-white uppercase tracking-tighter">
                    Accessibilité
                    WCAG</h3>
                <p class="text-sm text-slate-500 leading-relaxed italic">
                    Focus trap intégré, attributs ARIA automatiques et restauration du focus à la fermeture.
                    Certifié compatible lecteur d'écran.
                </p>
            </div>
        </section>

        <!-- Code Documentation -->
        <section class="space-y-6">
            <h2 class="text-2xl font-bold flex items-center gap-3 italic">
                <span class="w-8 h-1 bg-cyan-500 rounded-full"></span>
                Implémentation
            </h2>
            <div class="code-window shadow-2xl shadow-cyan-500/5">
                <div class="code-header font-display">
                    <span
                        class="text-[10px] text-slate-500 font-mono font-black tracking-widest uppercase">DialogController.vue</span>
                </div>
                <div class="p-8 font-mono text-sm leading-relaxed overflow-x-auto bg-slate-50 dark:bg-slate-950/50">
                    <pre><span class="text-pink-600 dark:text-pink-500">import</span> { <span
                    class="text-cyan-600 dark:text-cyan-400">Modal</span>, <span
                    class="text-cyan-600 dark:text-cyan-400">useModal</span> } <span
                    class="text-pink-600 dark:text-pink-500">from</span> <span
                    class="text-emerald-600 dark:text-emerald-400">'@webmx/ui'</span>;

                <span class="text-slate-500">// Déclencheur réactif</span>
                <span class="text-slate-800 dark:text-white">{{ modalCodeExample }}</span>
            </pre>
                </div>
            </div>
        </section>

        <!-- Props Reference Table -->
        <section class="space-y-6">
            <h2 class="text-2xl font-bold flex items-center gap-3 italic">
                <span class="w-8 h-1 bg-cyan-500 rounded-full"></span>
                Matrix API
            </h2>
            <div
                class="glass rounded-3xl overflow-hidden border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-black/20">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr
                            class="bg-white/5 border-b border-white/5 text-[10px] uppercase font-black tracking-widest text-slate-500">
                            <th class="py-6 px-8">Propriété</th>
                            <th class="py-6 px-8">Signature</th>
                            <th class="py-6 px-8">Défaut</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-white/5">
                        <tr v-for="prop in [
                            { name: 'isOpen', type: 'boolean (v-model)', default: 'false' },
                            { name: 'size', type: 'sm | md | lg | xl | full', default: '\'md\'' },
                            { name: 'variant', type: 'default | glass | bottom-sheet', default: '\'default\'' },
                            { name: 'animation', type: 'scale | slide | fade', default: '\'scale\'' },
                            { name: 'severity', type: 'info | warning | danger | success', default: '\'default\'' },
                        ]" :key="prop.name" class="hover:bg-cyan-500/5 dark:hover:bg-white/5 transition-colors group">
                            <td
                                class="py-4 px-8 font-mono text-sm text-cyan-600 dark:text-cyan-400 group-hover:text-cyan-500 dark:group-hover:text-cyan-300 transition-colors font-bold">
                                {{ prop.name }}</td>
                            <td class="py-4 px-8 font-mono text-xs text-slate-400 italic opacity-80">{{ prop.type }}
                            </td>
                            <td class="py-4 px-8 font-mono text-xs text-slate-500">{{ prop.default }}</td>
                        </tr>
                    </tbody>
                </table>
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
