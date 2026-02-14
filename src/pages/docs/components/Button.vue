<script setup lang="ts">
import { ref, computed } from 'vue'
import { Button, SocialButton, Icon } from 'webflow-ui'
// Import Types
import type { ButtonSeverity, ButtonVariant, ButtonSize, ButtonRounded, ButtonShadow, ButtonRing, ButtonIconPos } from 'webflow-ui/components/button/types'

// Button Configurator State
type ButtonAs = 'button' | 'a' | 'input'

const selectedSeverity = ref<ButtonSeverity>('primary')
const selectedVariant = ref<ButtonVariant>('soft')
const selectedSize = ref<ButtonSize>('md')
const selectedRounded = ref<ButtonRounded>('md')
const selectedShadow = ref<ButtonShadow>('none')
const selectedRing = ref<ButtonRing>('none')
const selectedAs = ref<ButtonAs>('button')
const selectedIcon = ref('')
const selectedIconPos = ref<ButtonIconPos>('left')
const showOnlyIcon = ref(false)

const severityOptions: ButtonSeverity[] = ['primary', 'secondary', 'success', 'info', 'warn', 'help', 'danger', 'contrast']
const variantOptions: ButtonVariant[] = ['soft', 'outlined', 'subtle', 'ghost', 'link']
const sizeOptions: ButtonSize[] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl']
const roundedOptions: ButtonRounded[] = ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', 'full']

const buttonCodeExample = computed(() => {
    let props = ''
    if (selectedSeverity.value !== 'primary') props += ` severity="${selectedSeverity.value}"`
    if (selectedVariant.value !== 'soft') props += ` variant="${selectedVariant.value}"`
    if (selectedSize.value !== 'md') props += ` size="${selectedSize.value}"`
    if (selectedRounded.value !== 'md') props += ` rounded="${selectedRounded.value}"`
    if (selectedShadow.value !== 'none') props += ` shadow="${selectedShadow.value}"`
    if (selectedRing.value !== 'none') props += ` ring="${selectedRing.value}"`
    if (selectedIcon.value) {
        props += ` icon="${selectedIcon.value}"`
        if (selectedIconPos.value !== 'left') props += ` icon-pos="${selectedIconPos.value}"`
    }
    const label = showOnlyIcon.value && selectedIcon.value ? '' : (selectedIcon.value ? 'Action Button' : 'Button')
    return `<Button${props}>${label}</Button>`
})
</script>

<template>
    <div class="space-y-16 pb-20">
        <!-- Header Section -->
        <header class="space-y-4">
            <div class="flex items-center gap-3">
                <span
                    class="px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em]">Core
                    Interaction</span>
                <span class="text-slate-500 dark:text-slate-500 text-xs font-medium">Haptic Feedback • State
                    Engine</span>
            </div>
            <h1 class="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Button <span class="text-gradient">Module</span>
            </h1>
            <p class="text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed italic">
                "Le déclencheur d'intention."
                Un composant polymorphe conçu pour capturer l'action utilisateur avec
                une précision millimétrée et un retour visuel premium.
            </p>
        </header>

        <!-- Interactive Configurator (Hero Preview) -->
        <section class="group relative">
            <div
                class="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-violet-600 rounded-[2rem] blur opacity-25 group-hover:opacity-40 transition duration-1000">
            </div>
            <div class="relative glass-card overflow-hidden">
                <!-- Live Preview Area -->
                <div
                    class="p-12 lg:p-24 flex flex-col items-center justify-center min-h-[400px] bg-slate-50/50 dark:bg-slate-900/50 border-b border-white/5 relative">
                    <!-- Background Grid -->
                    <div class="absolute inset-0 opacity-10 pointer-events-none"
                        style="background-image: radial-gradient(var(--neon-indigo) 1px, transparent 1px); background-size: 30px 30px;">
                    </div>

                    <div class="relative z-10 p-12 glass rounded-3xl shadow-2xl flex flex-col items-center gap-8">
                        <Button class="scale-125 transition-all duration-300" :severity="selectedSeverity"
                            :variant="selectedVariant" :size="selectedSize" :rounded="selectedRounded"
                            :shadow="selectedShadow" :ring="selectedRing" :as="selectedAs" :icon="selectedIcon"
                            :icon-pos="selectedIconPos">
                            {{ showOnlyIcon && selectedIcon ? '' : (selectedIcon ? 'Action Button' : 'Button') }}
                        </Button>

                        <div class="flex items-center gap-4 text-xs font-mono text-slate-500 opacity-60">
                            <span>w: {{ selectedSize === '2xl' ? '180px' : 'auto' }}</span>
                            <span>h: {{ selectedSize === '2xl' ? '64px' : 'auto' }}</span>
                        </div>
                    </div>
                </div>

                <!-- Controls Area -->
                <div class="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-black/5">
                    <div class="space-y-2">
                        <label class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Sévérité</label>
                        <select v-model="selectedSeverity"
                            class="w-full glass bg-transparent border-white/10 rounded-xl px-3 py-2 text-sm outline-none focus:border-indigo-500/50 transition-all font-bold text-slate-300">
                            <option v-for="opt in severityOptions" :key="opt" :value="opt" class="bg-slate-900">{{ opt
                                }}</option>
                        </select>
                    </div>
                    <div class="space-y-2">
                        <label class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Variante</label>
                        <select v-model="selectedVariant"
                            class="w-full glass bg-transparent border-white/10 rounded-xl px-3 py-2 text-sm outline-none focus:border-indigo-500/50 transition-all font-bold text-slate-300">
                            <option v-for="opt in variantOptions" :key="opt" :value="opt" class="bg-slate-900">{{ opt }}
                            </option>
                        </select>
                    </div>
                    <div class="space-y-2">
                        <label class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Taille &
                            Forme</label>
                        <div class="flex gap-2">
                            <select v-model="selectedSize"
                                class="w-1/2 glass bg-transparent border-white/10 rounded-xl px-3 py-2 text-sm outline-none focus:border-indigo-500/50 transition-all font-bold text-slate-300">
                                <option v-for="opt in sizeOptions" :key="opt" :value="opt" class="bg-slate-900">{{ opt
                                    }}</option>
                            </select>
                            <select v-model="selectedRounded"
                                class="w-1/2 glass bg-transparent border-white/10 rounded-xl px-3 py-2 text-sm outline-none focus:border-indigo-500/50 transition-all font-bold text-slate-300">
                                <option v-for="opt in roundedOptions" :key="opt" :value="opt" class="bg-slate-900">{{
                                    opt }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="space-y-2">
                        <label
                            class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Iconographie</label>
                        <select v-model="selectedIcon"
                            class="w-full glass bg-transparent border-white/10 rounded-xl px-3 py-2 text-sm outline-none focus:border-indigo-500/50 transition-all font-bold text-slate-300">
                            <option value="" class="bg-slate-900">Aucune</option>
                            <option value="heroicons:bolt" class="bg-slate-900">Bolt</option>
                            <option value="heroicons:arrow-right" class="bg-slate-900">Arrow</option>
                            <option value="heroicons:trash" class="bg-slate-900">Trash</option>
                            <option value="heroicons:check" class="bg-slate-900">Check</option>
                        </select>
                    </div>
                </div>
            </div>
        </section>

        <!-- Code Documentation Section -->
        <section class="space-y-6">
            <h2 class="text-2xl font-bold flex items-center gap-3 italic">
                <span class="w-8 h-1 bg-indigo-500 rounded-full"></span>
                Synthèse du Code
            </h2>
            <div class="code-window">
                <div class="code-header font-display">
                    <span
                        class="text-[10px] text-slate-500 font-mono font-black tracking-widest uppercase">Implementation.vue</span>
                </div>
                <div class="p-8 font-mono text-sm leading-relaxed overflow-x-auto bg-slate-950/50">
                    <pre><span class="text-pink-500">import</span> { <span class="text-indigo-400">Button</span> } <span class="text-pink-500">from</span> <span class="text-emerald-400">'@webmx/ui'</span>;

<span class="text-slate-500">// Bouton configuré pour l'interface</span>
<span class="text-white">{{ buttonCodeExample }}</span></pre>
                </div>
            </div>
        </section>

        <!-- Visual Examples Grid -->
        <section class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Variants -->
            <div class="glass-card p-10 space-y-8">
                <div class="flex items-center gap-4">
                    <Icon name="heroicons:swatch" class="text-indigo-500" />
                    <h3 class="text-xl font-bold italic uppercase tracking-tighter">Variantes Spectrales</h3>
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <Button variant="soft" class="w-full">Soft</Button>
                    <Button variant="outlined" class="w-full">Outlined</Button>
                    <Button variant="ghost" class="w-full">Ghost</Button>
                    <Button variant="link" class="w-full">Link</Button>
                </div>
                <p class="text-xs text-slate-500 italic leading-relaxed">
                    Chaque variante est calibrée pour un niveau de hiérarchie visuelle spécifique dans le flux de
                    l'application.
                </p>
            </div>

            <!-- Social -->
            <div
                class="glass-card p-10 space-y-8 bg-gradient-to-br from-indigo-500/5 to-transparent flex flex-col justify-between">
                <div class="flex items-center gap-4">
                    <Icon name="heroicons:users" class="text-indigo-500" />
                    <h3 class="text-xl font-bold italic uppercase tracking-tighter">Authentification Sociale</h3>
                </div>
                <div class="flex flex-wrap gap-4 justify-center py-6">
                    <SocialButton provider="google" />
                    <SocialButton provider="github" />
                    <SocialButton provider="twitter" />
                    <SocialButton provider="discord" />
                </div>
                <p class="text-xs text-slate-500 italic leading-relaxed text-center">
                    Composants pré-assemblés pour les principaux fournisseurs d'identité avec icônes SVG natives.
                </p>
            </div>
        </section>

        <!-- Props API Table -->
        <section class="space-y-6">
            <h2 class="text-2xl font-bold flex items-center gap-3 italic">
                <span class="w-8 h-1 bg-indigo-500 rounded-full"></span>
                Props Matrix
            </h2>
            <div class="glass rounded-3xl overflow-hidden border border-white/5 bg-black/20">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr
                            class="bg-white/5 border-b border-white/5 text-[10px] uppercase font-black tracking-widest text-slate-500">
                            <th class="py-6 px-8">Propriété</th>
                            <th class="py-6 px-8">Signature de Type</th>
                            <th class="py-6 px-8">Valeur Par Défaut</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-white/5">
                        <tr v-for="prop in [
                            { name: 'severity', type: 'primary | secondary | success | ...', default: '\'primary\'' },
                            { name: 'variant', type: 'soft | outlined | ghost | link', default: '\'soft\'' },
                            { name: 'size', type: 'xs | sm | md | lg | xl | 2xl', default: '\'md\'' },
                            { name: 'icon', type: 'string (Iconify)', default: 'undefined' },
                            { name: 'loading', type: 'boolean', default: 'false' },
                            { name: 'rounded', type: 'none | sm | md | lg | xl | full', default: '\'md\'' },
                        ]" :key="prop.name" class="hover:bg-white/5 transition-colors group">
                            <td
                                class="py-4 px-8 font-mono text-sm text-indigo-400 group-hover:text-indigo-300 transition-colors font-bold">
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
    background: linear-gradient(135deg, var(--neon-indigo), var(--neon-violet));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>
