<script setup lang="ts">
import { ref, computed } from 'vue'
import { Button, Icon } from 'webflow-ui'
import type { ButtonSeverity, ButtonVariant, ButtonSize, ButtonRounded, ButtonShadow, ButtonRing, ButtonIconPos } from 'webflow-ui/components/button/types'

// Button Configurator State


const selectedSeverity = ref<ButtonSeverity>('primary')
const selectedVariant = ref<ButtonVariant>('soft')
const selectedSize = ref<ButtonSize>('lg')
const selectedRounded = ref<ButtonRounded>('xl')
const selectedShadow = ref<ButtonShadow>('xl')
const selectedRing = ref<ButtonRing>('none')
const selectedIcon = ref('heroicons:rocket-launch')
const selectedIconPos = ref<ButtonIconPos>('left')
const showOnlyIcon = ref(false)
const isLoading = ref(false)

const severityOptions: ButtonSeverity[] = ['primary', 'secondary', 'success', 'info', 'warn', 'help', 'danger', 'contrast']
const variantOptions: ButtonVariant[] = ['soft', 'outlined', 'subtle', 'ghost', 'link']
const sizeOptions: ButtonSize[] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl']
const roundedOptions: ButtonRounded[] = ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', 'full']

const buttonCodeExample = computed(() => {
    let props = ''
    if (selectedSeverity.value !== 'primary') props += ` severity="${selectedSeverity.value}"`
    if (selectedVariant.value !== 'solid') props += ` variant="${selectedVariant.value}"`
    if (selectedSize.value !== 'md') props += ` size="${selectedSize.value}"`
    if (selectedRounded.value !== 'md') props += ` rounded="${selectedRounded.value}"`
    if (selectedShadow.value !== 'none') props += ` shadow="${selectedShadow.value}"`
    if (selectedIcon.value) {
        props += ` icon="${selectedIcon.value}"`
        if (selectedIconPos.value !== 'left') props += ` icon-pos="${selectedIconPos.value}"`
    }
    if (showOnlyIcon.value) props += ` square`
    if (isLoading.value) props += ` loading`

    const label = showOnlyIcon.value ? '' : 'Launch Action'
    return `<Button${props}>${label}</Button>`
})
</script>

<template>
    <div class="space-y-16 pb-20">
        <!-- Header -->
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

        <!-- Interactive Configurator -->
        <section class="group relative">
            <div
                class="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-[2rem] blur opacity-25 group-hover:opacity-40 transition duration-1000">
            </div>
            <div class="relative glass-card overflow-hidden">
                <!-- Live Preview Stage -->
                <div
                    class="relative min-h-[400px] flex items-center justify-center bg-slate-50/50 dark:bg-slate-900/50 p-12 overflow-hidden border-b border-white/5">
                    <!-- Geometric Background -->
                    <div class="absolute inset-0 opacity-20 pointer-events-none"
                        style="background-image: radial-gradient(var(--neon-indigo) 1px, transparent 1px); background-size: 40px 40px;">
                    </div>

                    <!-- The Button -->
                    <div
                        class="relative z-10 p-10 bg-white/50 dark:bg-black/20 rounded-3xl border border-slate-200 dark:border-white/10 backdrop-blur-sm group-hover:scale-105 transition-transform duration-500">
                        <Button :severity="selectedSeverity" :variant="selectedVariant" :size="selectedSize"
                            :rounded="selectedRounded" :shadow="selectedShadow" :ring="selectedRing"
                            :icon="selectedIcon" :icon-pos="selectedIconPos" :square="showOnlyIcon" :loading="isLoading"
                            @click="isLoading = !isLoading" class="font-bold italic uppercase tracking-wider">
                            {{ showOnlyIcon ? '' : 'Launch Action' }}
                        </Button>
                    </div>
                </div>

                <!-- Configuration Grid -->
                <div class="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-slate-50 dark:bg-black/20">
                    <div class="space-y-2">
                        <label class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Severity</label>
                        <select v-model="selectedSeverity"
                            class="w-full glass bg-transparent border-slate-300 dark:border-white/10 rounded-xl px-3 py-2 text-sm outline-none focus:border-indigo-500/50 transition-all font-bold text-slate-700 dark:text-slate-300 cursor-pointer">
                            <option v-for="opt in severityOptions" :key="opt" :value="opt"
                                class="bg-white dark:bg-slate-900">{{ opt }}</option>
                        </select>
                    </div>
                    <div class="space-y-2">
                        <label class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Variant</label>
                        <select v-model="selectedVariant"
                            class="w-full glass bg-transparent border-slate-300 dark:border-white/10 rounded-xl px-3 py-2 text-sm outline-none focus:border-indigo-500/50 transition-all font-bold text-slate-700 dark:text-slate-300 cursor-pointer">
                            <option v-for="opt in variantOptions" :key="opt" :value="opt"
                                class="bg-white dark:bg-slate-900">{{ opt }}</option>
                        </select>
                    </div>
                    <div class="space-y-2">
                        <label class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Size</label>
                        <select v-model="selectedSize"
                            class="w-full glass bg-transparent border-slate-300 dark:border-white/10 rounded-xl px-3 py-2 text-sm outline-none focus:border-indigo-500/50 transition-all font-bold text-slate-700 dark:text-slate-300 cursor-pointer">
                            <option v-for="opt in sizeOptions" :key="opt" :value="opt"
                                class="bg-white dark:bg-slate-900">{{ opt }}</option>
                        </select>
                    </div>
                    <div class="space-y-2">
                        <label class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Rounded</label>
                        <select v-model="selectedRounded"
                            class="w-full glass bg-transparent border-slate-300 dark:border-white/10 rounded-xl px-3 py-2 text-sm outline-none focus:border-indigo-500/50 transition-all font-bold text-slate-700 dark:text-slate-300 cursor-pointer">
                            <option v-for="opt in roundedOptions" :key="opt" :value="opt"
                                class="bg-white dark:bg-slate-900">{{ opt }}</option>
                        </select>
                    </div>

                    <!-- Advanced Controls -->
                    <div class="col-span-1 md:col-span-2 lg:col-span-2 grid grid-cols-2 gap-4">
                        <div class="space-y-2">
                            <label class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Icon</label>
                            <input v-model="selectedIcon" type="text"
                                class="w-full glass bg-transparent border-slate-300 dark:border-white/10 rounded-xl px-3 py-2 text-sm outline-none focus:border-indigo-500/50 transition-all font-bold text-slate-700 dark:text-slate-300" />
                        </div>
                        <div class="space-y-2 pt-6 flex items-center gap-4">
                            <label class="flex items-center gap-2 cursor-pointer group">
                                <div class="relative">
                                    <input type="checkbox" v-model="showOnlyIcon" class="peer sr-only">
                                    <div
                                        class="w-9 h-5 bg-slate-200 dark:bg-slate-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-indigo-500/50 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-500">
                                    </div>
                                </div>
                                <span
                                    class="text-[10px] font-black text-slate-500 uppercase tracking-widest group-hover:text-indigo-500 transition-colors">Square</span>
                            </label>
                            <label class="flex items-center gap-2 cursor-pointer group">
                                <div class="relative">
                                    <input type="checkbox" v-model="isLoading" class="peer sr-only">
                                    <div
                                        class="w-9 h-5 bg-slate-200 dark:bg-slate-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-indigo-500/50 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-500">
                                    </div>
                                </div>
                                <span
                                    class="text-[10px] font-black text-slate-500 uppercase tracking-widest group-hover:text-indigo-500 transition-colors">Loading</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Features Grid -->
        <section class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
                class="glass-card p-8 space-y-4 hover:border-indigo-500/30 transition-colors group border-slate-200 dark:border-white/5">
                <div
                    class="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                    <Icon name="heroicons:cursor-arrow-rays" class="text-xl" />
                </div>
                <h3 class="font-black italic uppercase text-slate-900 dark:text-white tracking-tight">Polymorphic</h3>
                <p class="text-xs text-slate-500 leading-relaxed italic">
                    Rendu dynamique en <code class="text-indigo-500 font-bold">&lt;button&gt;</code>, <code
                        class="text-indigo-500 font-bold">&lt;a&gt;</code> ou <code
                        class="text-indigo-500 font-bold">&lt;router-link&gt;</code> selon les props.
                </p>
            </div>

            <div
                class="glass-card p-8 space-y-4 hover:border-indigo-500/30 transition-colors group border-slate-200 dark:border-white/5">
                <div
                    class="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                    <Icon name="heroicons:sparkles" class="text-xl" />
                </div>
                <h3 class="font-black italic uppercase text-slate-900 dark:text-white tracking-tight">Haptech™</h3>
                <p class="text-xs text-slate-500 leading-relaxed italic">
                    Micro-interactions et retours haptiques simulés pour une sensation tactile premium à chaque clic.
                </p>
            </div>

            <div
                class="glass-card p-8 space-y-4 hover:border-indigo-500/30 transition-colors group border-slate-200 dark:border-white/5">
                <div
                    class="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                    <Icon name="heroicons:eye" class="text-xl" />
                </div>
                <h3 class="font-black italic uppercase text-slate-900 dark:text-white tracking-tight">A11y Core</h3>
                <p class="text-xs text-slate-500 leading-relaxed italic">
                    Conforme WCAG 2.1 avec états focus visibles et support complet de la navigation au clavier.
                </p>
            </div>
        </section>

        <!-- Code Documentation -->
        <section class="space-y-6">
            <h2 class="text-2xl font-bold flex items-center gap-3 italic">
                <span class="w-8 h-1 bg-indigo-500 rounded-full"></span>
                Integration
            </h2>
            <div class="code-window shadow-2xl shadow-indigo-500/5">
                <div class="code-header font-display">
                    <span
                        class="text-[10px] text-slate-500 font-mono font-black tracking-widest uppercase">Component.vue</span>
                </div>
                <div class="p-8 font-mono text-sm leading-relaxed overflow-x-auto bg-slate-50 dark:bg-slate-950/50">
                    <pre><span class="text-pink-600 dark:text-pink-500">import</span> { <span class="text-indigo-600 dark:text-indigo-400">Button</span> } <span class="text-pink-600 dark:text-pink-500">from</span> <span class="text-emerald-600 dark:text-emerald-400">'@webmx/ui'</span>;

<span class="text-slate-500">// Utilisation simple</span>
<span class="text-slate-800 dark:text-white">{{ buttonCodeExample }}</span></pre>
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
    background: linear-gradient(135deg, var(--neon-indigo), var(--neon-violet));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>
