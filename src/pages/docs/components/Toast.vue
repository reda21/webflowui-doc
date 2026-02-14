<script setup lang="ts">
import { ref, computed } from 'vue'
import { Button, Icon, useToast } from 'webflow-ui'
import type { ToastPosition, ToastSeverity } from 'webflow-ui/components/toast/types'

const toast = useToast()

// Configurator State
const configTitle = ref('Déploiement Terminé')
const configDesc = ref('Le noyau WebMX v5.4 est opérationnel sur le cluster #01.')
const configSeverity = ref<ToastSeverity>('success')
const configPosition = ref<ToastPosition>('top-right')
const configDuration = ref(5000)
const configClosable = ref(true)
const configShowProgress = ref(true)
const mediaType = ref<'none' | 'icon' | 'avatar'>('icon')
const configCustomIcon = ref('heroicons:check-circle')

const severities: ToastSeverity[] = ['primary', 'secondary', 'success', 'info', 'warn', 'help', 'danger', 'contrast']
const positions: ToastPosition[] = ['top-right', 'top-left', 'bottom-right', 'bottom-left', 'top-center', 'bottom-center']

const triggerToast = () => {
    toast.add({
        title: configTitle.value,
        description: configDesc.value,
        severity: configSeverity.value,
        position: configPosition.value,
        duration: configDuration.value,
        closable: configClosable.value,
        progress: configShowProgress.value,
        icon: mediaType.value === 'icon' ? configCustomIcon.value : (mediaType.value === 'none' ? false : true),
    })
}

const generatedCode = computed(() => {
    let code = `toast.add({\n`
    code += `  title: '${configTitle.value}',\n`
    code += `  description: '${configDesc.value}',\n`
    code += `  severity: '${configSeverity.value}',\n`
    code += `  position: '${configPosition.value}',\n`
    code += `  duration: ${configDuration.value},\n`
    code += `})`
    return code
})
</script>

<template>
    <div class="space-y-16 pb-20">
        <!-- Header -->
        <header class="space-y-4">
            <div class="flex items-center gap-3">
                <span
                    class="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-[0.2em]">Système
                    de Notification</span>
                <span class="text-slate-500 dark:text-slate-500 text-xs font-medium">Flux Low-Latency • Stackable</span>
            </div>
            <h1 class="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Toast <span class="text-gradient">Protocol</span>
            </h1>
            <p class="text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed italic">
                "Informer sans interrompre."
                Un feed d'événements non-bloquant pour transmettre les états du système
                directement à la rétine de l'utilisateur.
            </p>
        </header>

        <!-- Interactive Section -->
        <section class="group relative">
            <div
                class="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-[2rem] blur opacity-25 group-hover:opacity-40 transition duration-1000">
            </div>
            <div class="relative glass-card overflow-hidden">
                <!-- Live Preview Stage -->
                <div
                    class="relative min-h-[450px] flex items-center justify-center bg-slate-50/50 dark:bg-slate-900/50 p-12 overflow-hidden border-b border-white/5">
                    <!-- Grid Background -->
                    <div class="absolute inset-0 opacity-20"
                        style="background-image: radial-gradient(var(--neon-emerald) 1px, transparent 1px); background-size: 40px 40px;">
                    </div>

                    <!-- Mock Active Toast -->
                    <div
                        class="relative z-10 w-full max-w-sm glass rounded-2xl shadow-2xl shadow-emerald-500/10 border border-white/10 p-5 flex gap-4 items-start animate-float group-hover:scale-105 transition-transform duration-500 bg-emerald-900/20">
                        <div
                            class="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/10 border border-emerald-500/20">
                            <Icon name="heroicons:check-badge" class="text-emerald-400 text-xl" />
                        </div>
                        <div class="flex-1 space-y-1">
                            <h4 class="font-black text-white tracking-tight italic uppercase text-sm">Operation Complete
                            </h4>
                            <p class="text-xs text-slate-300 dark:text-slate-400 leading-relaxed font-medium">Les
                                données ont été
                                synchronisées avec le cloud.</p>
                        </div>
                        <button class="text-slate-400 dark:text-slate-500 hover:text-white transition-colors">
                            <Icon name="heroicons:x-mark" size="xs" />
                        </button>

                        <!-- Progress Bar Simulation -->
                        <div
                            class="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-400 w-full rounded-b-2xl animate-progress origin-left">
                        </div>
                    </div>

                    <!-- Trigger Controls -->
                    <div class="absolute bottom-12 flex gap-4 z-20">
                        <Button severity="success" size="lg" icon="heroicons:bolt" @click="triggerToast"
                            class="font-black tracking-widest uppercase italic shadow-xl shadow-emerald-500/20 hover:scale-105 transition-transform">
                            INITIALISER SIGNAL
                        </Button>
                    </div>
                </div>

                <!-- Configuration Controls -->
                <div class="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 bg-slate-50 dark:bg-black/20">
                    <div class="space-y-2">
                        <label class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Niveau
                            d'alerte</label>
                        <select v-model="configSeverity"
                            class="w-full glass bg-transparent border-slate-300 dark:border-white/10 rounded-xl px-4 py-2 text-sm outline-none focus:border-emerald-500/50 transition-all cursor-pointer text-slate-700 dark:text-slate-300 font-bold">
                            <option v-for="s in severities" :key="s" :value="s" class="bg-white dark:bg-slate-900">{{ s
                            }}</option>
                        </select>
                    </div>
                    <div class="space-y-2">
                        <label class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Vecteur
                            d'apparition</label>
                        <select v-model="configPosition"
                            class="w-full glass bg-transparent border-slate-300 dark:border-white/10 rounded-xl px-4 py-2 text-sm outline-none focus:border-emerald-500/50 transition-all cursor-pointer text-slate-700 dark:text-slate-300 font-bold">
                            <option v-for="p in positions" :key="p" :value="p" class="bg-white dark:bg-slate-900">{{ p
                            }}</option>
                        </select>
                    </div>
                    <div class="space-y-2">
                        <label class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Contenu
                            (Msg)</label>
                        <input v-model="configDesc" type="text"
                            class="w-full glass bg-transparent border-slate-300 dark:border-white/10 rounded-xl px-4 py-2 text-sm outline-none focus:border-emerald-500/50 transition-all text-slate-700 dark:text-slate-300 font-bold placeholder-slate-400 dark:placeholder-slate-600" />
                    </div>
                    <div class="space-y-2">
                        <label class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Durée
                            (ms)</label>
                        <input v-model.number="configDuration" type="number" step="500"
                            class="w-full glass bg-transparent border-slate-300 dark:border-white/10 rounded-xl px-4 py-2 text-sm outline-none focus:border-emerald-500/50 transition-all text-slate-700 dark:text-slate-300 font-mono font-bold" />
                    </div>
                    <div class="space-y-2">
                        <label
                            class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Iconographie</label>
                        <select v-model="mediaType"
                            class="w-full glass bg-transparent border-slate-300 dark:border-white/10 rounded-xl px-4 py-2 text-sm outline-none focus:border-emerald-500/50 transition-all cursor-pointer text-slate-700 dark:text-slate-300 font-bold">
                            <option value="none" class="bg-white dark:bg-slate-900">Aucune</option>
                            <option value="icon" class="bg-white dark:bg-slate-900">Icone</option>
                            <option value="avatar" class="bg-white dark:bg-slate-900">Avatar (Simulé)</option>
                        </select>
                    </div>
                    <div v-if="mediaType === 'icon'" class="space-y-2">
                        <label class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Icone
                            Custom</label>
                        <input v-model="configCustomIcon" type="text"
                            class="w-full glass bg-transparent border-slate-300 dark:border-white/10 rounded-xl px-4 py-2 text-sm outline-none focus:border-emerald-500/50 transition-all text-slate-700 dark:text-slate-300 font-bold placeholder-slate-400 dark:placeholder-slate-600" />
                    </div>
                    <div class="space-y-2 flex items-center gap-4 pt-6">
                        <label class="flex items-center gap-2 cursor-pointer group">
                            <div class="relative">
                                <input type="checkbox" v-model="configShowProgress" class="peer sr-only">
                                <div
                                    class="w-9 h-5 bg-slate-200 dark:bg-slate-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-emerald-500/50 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-emerald-500">
                                </div>
                            </div>
                            <span
                                class="text-[10px] font-black text-slate-500 uppercase tracking-widest group-hover:text-emerald-500 transition-colors">Progress</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer group">
                            <div class="relative">
                                <input type="checkbox" v-model="configClosable" class="peer sr-only">
                                <div
                                    class="w-9 h-5 bg-slate-200 dark:bg-slate-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-emerald-500/50 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-emerald-500">
                                </div>
                            </div>
                            <span
                                class="text-[10px] font-black text-slate-500 uppercase tracking-widest group-hover:text-emerald-500 transition-colors">Closable</span>
                        </label>
                    </div>
                </div>
            </div>
        </section>

        <!-- Features Grid -->
        <section class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="glass-card p-8 space-y-4 hover:border-emerald-500/30 transition-colors group">
                <div
                    class="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                    <Icon name="heroicons:arrow-path" class="text-xl" />
                </div>
                <h3 class="font-black italic uppercase text-slate-900 dark:text-white tracking-tight">Async Promise</h3>
                <p class="text-xs text-slate-500 leading-relaxed italic">
                    Gérez automatiquement les états <span class="text-emerald-400">loading</span>, <span
                        class="text-emerald-400">success</span> et <span class="text-rose-400">error</span> des
                    promesses via l'API unifiée.
                </p>
            </div>
            <div class="glass-card p-8 space-y-4 hover:border-emerald-500/30 transition-colors group">
                <div
                    class="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                    <Icon name="heroicons:arrow-uturn-left" class="text-xl" />
                </div>
                <h3 class="font-black italic uppercase text-slate-900 dark:text-white tracking-tight">Undo Action</h3>
                <p class="text-xs text-slate-500 leading-relaxed italic">
                    Intégrez des actions contextuelles directement dans le toast pour permettre l'annulation rapide
                    d'opérations.
                </p>
            </div>
            <div class="glass-card p-8 space-y-4 hover:border-emerald-500/30 transition-colors group">
                <div
                    class="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                    <Icon name="heroicons:queue-list" class="text-xl" />
                </div>
                <h3 class="font-black italic uppercase text-slate-900 dark:text-white tracking-tight">Smart Queue</h3>
                <p class="text-xs text-slate-500 leading-relaxed italic">
                    Les notifications s'empilent intelligemment sans encombrer l'interface, avec limite configurable par
                    position.
                </p>
            </div>
        </section>

        <!-- Code Documentation -->
        <section class="space-y-6">
            <h2 class="text-2xl font-bold flex items-center gap-3 italic">
                <span class="w-8 h-1 bg-emerald-500 rounded-full"></span>
                Injection
            </h2>
            <div class="code-window shadow-2xl shadow-emerald-500/5">
                <div class="code-header font-display">
                    <span
                        class="text-[10px] text-slate-500 font-mono font-black tracking-widest uppercase">Logic.ts</span>
                </div>
                <div class="p-8 font-mono text-sm leading-relaxed overflow-x-auto bg-slate-50 dark:bg-slate-950/50">
                    <pre><span class="text-pink-600 dark:text-pink-500">import</span> { <span class="text-cyan-600 dark:text-cyan-400">useToast</span> } <span class="text-pink-600 dark:text-pink-500">from</span> <span class="text-emerald-600 dark:text-emerald-400">'@webmx/ui'</span>;

<span class="text-pink-600 dark:text-pink-500">const</span> <span class="text-slate-900 dark:text-white">toaster</span> = <span class="text-cyan-600 dark:text-cyan-400">useToast</span>();

<span class="text-slate-500">// Émission de signal</span>
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
    background: linear-gradient(135deg, var(--neon-emerald), var(--neon-teal));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

@keyframes float {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-6px);
    }
}

.animate-float {
    animation: float 4s ease-in-out infinite;
}

@keyframes progress {
    from {
        transform: scaleX(1);
    }

    to {
        transform: scaleX(0);
    }
}

.text-gradient {
    background: linear-gradient(135deg, var(--neon-emerald), var(--neon-teal));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

@keyframes float {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-6px);
    }
}

.animate-float {
    animation: float 4s ease-in-out infinite;
}

@keyframes progress {
    from {
        transform: scaleX(1);
    }

    to {
        transform: scaleX(0);
    }
}

.animate-progress {
    animation: progress 5s linear forwards;
}

.code-window {
    border-radius: 1rem;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.05);
    background-color: rgba(0, 0, 0, 0.4);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.code-header {
    padding: 0.75rem 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    background-color: rgba(255, 255, 255, 0.05);
    display: flex;
    align-items: center;
}
</style>
