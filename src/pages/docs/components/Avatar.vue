<script setup lang="ts">
import { ref, computed } from 'vue'
import { Avatar, Icon } from 'webflow-ui'
import type { AvatarSize, AvatarRounded } from 'webflow-ui/components/avatar/types'

// Configurator State
const configSrc = ref('https://i.pravatar.cc/300?u=webmx')
const configAlt = ref('User Profile')
const configSize = ref<AvatarSize>('xl')
const configRounded = ref<AvatarRounded>('full')
const configPresence = ref<'online' | 'busy' | 'offline' | 'none'>('online')
const configChip = ref(false)

const sizeOptions: AvatarSize[] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl']
const roundedOptions: AvatarRounded[] = ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', 'full']
const presenceOptions = ['online', 'busy', 'offline', 'none']

const avatarCodeExample = computed(() => {
    let props = ''
    if (configSize.value !== 'md') props += ` size="${configSize.value}"`
    if (configRounded.value !== 'full') props += ` rounded="${configRounded.value}"`
    if (configPresence.value !== 'none') props += ` presence="${configPresence.value}"`
    if (configChip.value) props += ` chip`

    return `<Avatar 
  src="${configSrc.value}" 
  alt="${configAlt.value}"${props} 
/>`
})
</script>

<template>
    <div class="space-y-16 pb-20">
        <!-- Header -->
        <header class="space-y-4">
            <div class="flex items-center gap-3">
                <span
                    class="px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em]">Profile
                    Entity</span>
                <span class="text-slate-500 dark:text-slate-500 text-xs font-medium">Smart Fallback • Presence
                    Chip</span>
            </div>
            <h1 class="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Avatar <span class="text-gradient">Identity</span>
            </h1>
            <p class="text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed italic">
                "La représentation numérique du Soi."
                Un composant d'identité polymorphe capable de gérer images, initiales et
                états de présence avec une fluidité absolue.
            </p>
        </header>

        <!-- Interactive Section -->
        <section class="group relative">
            <div
                class="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-[2rem] blur opacity-25 group-hover:opacity-40 transition duration-1000">
            </div>
            <div class="relative glass-card overflow-hidden">
                <!-- Live Preview Stage -->
                <div
                    class="relative min-h-[400px] flex items-center justify-center bg-slate-50/50 dark:bg-slate-900/50 p-12 overflow-hidden border-b border-white/5">
                    <!-- Geometric Background -->
                    <div class="absolute inset-0 opacity-20 pointer-events-none"
                        style="background-image: radial-gradient(var(--neon-blue) 1px, transparent 1px); background-size: 40px 40px;">
                    </div>

                    <div
                        class="relative z-10 p-10 bg-white/50 dark:bg-black/20 rounded-3xl border border-slate-200 dark:border-white/10 backdrop-blur-sm group-hover:scale-105 transition-transform duration-500">
                        <Avatar :src="configSrc" :alt="configAlt" :size="configSize" :rounded="configRounded"
                            :presence="configPresence === 'none' ? undefined : configPresence" :chip="configChip"
                            class="shadow-2xl shadow-blue-500/20 ring-4 ring-white/10" />
                    </div>
                </div>

                <!-- Configuration Grid -->
                <div class="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-slate-50 dark:bg-black/20">
                    <div class="space-y-2">
                        <label class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Taille</label>
                        <select v-model="configSize"
                            class="w-full glass bg-transparent border-slate-300 dark:border-white/10 rounded-xl px-3 py-2 text-sm outline-none focus:border-blue-500/50 transition-all font-bold text-slate-700 dark:text-slate-300 cursor-pointer">
                            <option v-for="opt in sizeOptions" :key="opt" :value="opt"
                                class="bg-white dark:bg-slate-900">{{ opt }}</option>
                        </select>
                    </div>
                    <div class="space-y-2">
                        <label class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Forme
                            (Rounded)</label>
                        <select v-model="configRounded"
                            class="w-full glass bg-transparent border-slate-300 dark:border-white/10 rounded-xl px-3 py-2 text-sm outline-none focus:border-blue-500/50 transition-all font-bold text-slate-700 dark:text-slate-300 cursor-pointer">
                            <option v-for="opt in roundedOptions" :key="opt" :value="opt"
                                class="bg-white dark:bg-slate-900">{{ opt }}</option>
                        </select>
                    </div>
                    <div class="space-y-2">
                        <label class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Presence</label>
                        <select v-model="configPresence"
                            class="w-full glass bg-transparent border-slate-300 dark:border-white/10 rounded-xl px-3 py-2 text-sm outline-none focus:border-blue-500/50 transition-all font-bold text-slate-700 dark:text-slate-300 cursor-pointer">
                            <option v-for="opt in presenceOptions" :key="opt" :value="opt"
                                class="bg-white dark:bg-slate-900">{{ opt }}</option>
                        </select>
                    </div>
                    <div class="space-y-2 pt-6">
                        <label class="flex items-center gap-2 cursor-pointer group">
                            <div class="relative">
                                <input type="checkbox" v-model="configChip" class="peer sr-only">
                                <div
                                    class="w-9 h-5 bg-slate-200 dark:bg-slate-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500/50 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-500">
                                </div>
                            </div>
                            <span
                                class="text-[10px] font-black text-slate-500 uppercase tracking-widest group-hover:text-blue-500 transition-colors">Chip</span>
                        </label>
                    </div>
                </div>
            </div>
        </section>

        <!-- Features Grid -->
        <section class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="glass-card p-8 space-y-4 hover:border-blue-500/30 transition-colors group">
                <div
                    class="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                    <Icon name="heroicons:user-circle" class="text-xl" />
                </div>
                <h3 class="font-black italic uppercase text-slate-900 dark:text-white tracking-tight">Initials Fallback
                </h3>
                <p class="text-xs text-slate-500 leading-relaxed italic">
                    Génération automatique des initiales si l'image échoue ou est absente.
                </p>
            </div>
            <div class="glass-card p-8 space-y-4 hover:border-blue-500/30 transition-colors group">
                <div
                    class="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                    <Icon name="heroicons:user-group" class="text-xl" />
                </div>
                <h3 class="font-black italic uppercase text-slate-900 dark:text-white tracking-tight">Group Stacking
                </h3>
                <p class="text-xs text-slate-500 leading-relaxed italic">
                    Support natif pour les groupes d'avatars avec limite et compteur de surplus (+3).
                </p>
            </div>
            <div class="glass-card p-8 space-y-4 hover:border-blue-500/30 transition-colors group">
                <div
                    class="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                    <Icon name="heroicons:signal" class="text-xl" />
                </div>
                <h3 class="font-black italic uppercase text-slate-900 dark:text-white tracking-tight">Status Live</h3>
                <p class="text-xs text-slate-500 leading-relaxed italic">
                    Indicateurs de présence intégrés avec positionnement adaptatif selon la forme.
                </p>
            </div>
        </section>

        <!-- Code Documentation -->
        <section class="space-y-6">
            <h2 class="text-2xl font-bold flex items-center gap-3 italic">
                <span class="w-8 h-1 bg-blue-500 rounded-full"></span>
                Injection
            </h2>
            <div class="code-window shadow-2xl shadow-blue-500/5">
                <div class="code-header font-display">
                    <span
                        class="text-[10px] text-slate-500 font-mono font-black tracking-widest uppercase">UserProfile.vue</span>
                </div>
                <div class="p-8 font-mono text-sm leading-relaxed overflow-x-auto bg-slate-50 dark:bg-slate-950/50">
                    <pre><span class="text-pink-600 dark:text-pink-500">import</span> { <span class="text-blue-600 dark:text-blue-400">Avatar</span> } <span class="text-pink-600 dark:text-pink-500">from</span> <span class="text-emerald-600 dark:text-emerald-400">'@webmx/ui'</span>;

<span class="text-slate-500">// Identité utilisateur</span>
<span class="text-slate-800 dark:text-white">{{ avatarCodeExample }}</span></pre>
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
    background: linear-gradient(135deg, var(--neon-blue), var(--neon-purple));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>
