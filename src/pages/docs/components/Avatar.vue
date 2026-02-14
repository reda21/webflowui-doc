<script setup lang="ts">
import { ref, computed } from 'vue'
import { Avatar, AvatarGroup, Icon } from 'webflow-ui'

// New features refs
const isGradient = ref(false)
const isSkeleton = ref(false)
const isInteractive = ref(false)
const showChip = ref(false)
const chipColor = ref<string>('success')

const avatarCodeExample = computed(() => {
    let props = ''
    if (isGradient.value) props += ' gradient'
    if (isSkeleton.value) props += ' skeleton'
    if (showChip.value) props += ` :chip="{ color: '${chipColor.value}' }"`
    return `<Avatar src="/portrait.jpg" alt="User"${props} />`
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
                    class="relative min-h-[350px] flex items-center justify-center bg-slate-50/50 dark:bg-slate-900/50 p-12 overflow-hidden border-b border-white/5">
                    <!-- Geometric Background -->
                    <div class="absolute inset-0 opacity-20 pointer-events-none"
                        style="background-image: radial-gradient(var(--neon-blue) 1px, transparent 1px); background-size: 30px 30px;">
                    </div>
                    <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div class="w-64 h-64 rounded-full border border-blue-500/10 animate-pulse-slow"></div>
                        <div class="absolute w-96 h-96 rounded-full border border-indigo-500/5"></div>
                    </div>

                    <!-- Main Avatar Display -->
                    <div
                        class="relative z-10 flex items-center gap-8 bg-black/40 p-10 rounded-full border border-white/10 backdrop-blur-xl hover:scale-105 transition-transform duration-500 group-hover:border-blue-500/20">
                        <div class="relative">
                            <Avatar
                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150"
                                alt="Alex Johnson" size="3xl" :gradient="isGradient" :skeleton="isSkeleton"
                                :interactive="isInteractive"
                                :chip="showChip ? { color: chipColor, inset: true } : false"
                                class="ring-4 ring-black shadow-2xl" />
                            <!-- Decorative orbits -->
                            <div v-if="isGradient"
                                class="absolute -inset-2 rounded-full border-2 border-transparent border-t-blue-500/50 border-r-indigo-500/50 animate-spin-slow pointer-events-none">
                            </div>
                        </div>

                        <div class="hidden md:block space-y-1">
                            <h4 class="text-2xl font-black text-white italic tracking-tight">Alex Johnson</h4>
                            <div class="flex items-center gap-2">
                                <span class="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                                <p class="text-xs text-blue-400 font-bold tracking-widest uppercase">System Architect
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Controls Area -->
                <div class="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 bg-black/20">
                    <div class="flex items-center justify-between p-4 glass rounded-xl w-full hover:bg-white/5 transition-colors cursor-pointer"
                        @click="isGradient = !isGradient">
                        <label
                            class="text-[10px] font-black text-slate-400 uppercase tracking-widest cursor-pointer">Mode
                            Néon</label>
                        <div :class="[isGradient ? 'bg-blue-500 border-blue-500' : 'bg-transparent border-slate-600']"
                            class="w-4 h-4 rounded border flex items-center justify-center transition-colors">
                            <Icon v-if="isGradient" name="heroicons:check" size="xs" class="text-white w-3 h-3" />
                        </div>
                    </div>
                    <div class="flex items-center justify-between p-4 glass rounded-xl w-full hover:bg-white/5 transition-colors cursor-pointer"
                        @click="isInteractive = !isInteractive">
                        <label
                            class="text-[10px] font-black text-slate-400 uppercase tracking-widest cursor-pointer">Haptic
                            Touch</label>
                        <div :class="[isInteractive ? 'bg-blue-500 border-blue-500' : 'bg-transparent border-slate-600']"
                            class="w-4 h-4 rounded border flex items-center justify-center transition-colors">
                            <Icon v-if="isInteractive" name="heroicons:check" size="xs" class="text-white w-3 h-3" />
                        </div>
                    </div>
                    <div class="flex items-center justify-between p-4 glass rounded-xl w-full hover:bg-white/5 transition-colors cursor-pointer"
                        @click="isSkeleton = !isSkeleton">
                        <label
                            class="text-[10px] font-black text-slate-400 uppercase tracking-widest cursor-pointer">Simuler
                            Load</label>
                        <div :class="[isSkeleton ? 'bg-blue-500 border-blue-500' : 'bg-transparent border-slate-600']"
                            class="w-4 h-4 rounded border flex items-center justify-center transition-colors">
                            <Icon v-if="isSkeleton" name="heroicons:check" size="xs" class="text-white w-3 h-3" />
                        </div>
                    </div>
                    <div class="flex items-center justify-between p-4 glass rounded-xl w-full hover:bg-white/5 transition-colors cursor-pointer"
                        @click="showChip = !showChip">
                        <label
                            class="text-[10px] font-black text-slate-400 uppercase tracking-widest cursor-pointer">Status
                            Chip</label>
                        <div :class="[showChip ? 'bg-blue-500 border-blue-500' : 'bg-transparent border-slate-600']"
                            class="w-4 h-4 rounded border flex items-center justify-center transition-colors">
                            <Icon v-if="showChip" name="heroicons:check" size="xs" class="text-white w-3 h-3" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Variants Grid -->
        <section class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Feature 1: Grouping -->
            <div class="glass-card p-10 space-y-6 group hover:border-blue-500/30 transition-colors">
                <div class="flex items-center justify-between">
                    <h3
                        class="text-xl font-bold italic flex items-center gap-3 text-white uppercase tracking-tighter w-full">
                        <Icon name="heroicons:users" class="text-blue-400" />
                        Cluster Grouping
                    </h3>
                </div>
                <p class="text-xs text-slate-500 leading-relaxed italic">
                    Agérez automatiquement les listes d'utilisateurs denses avec l'empilement intelligent
                    et l'indicateur de surplus dynamique.
                </p>
                <div class="p-8 glass bg-black/40 rounded-2xl flex justify-center border border-white/5">
                    <AvatarGroup :max="4">
                        <Avatar src="https://i.pravatar.cc/150?img=11" class="ring-4 ring-black" />
                        <Avatar src="https://i.pravatar.cc/150?img=12" class="ring-4 ring-black" />
                        <Avatar src="https://i.pravatar.cc/150?img=13" class="ring-4 ring-black" />
                        <Avatar src="https://i.pravatar.cc/150?img=4" class="ring-4 ring-black" />
                        <Avatar src="https://i.pravatar.cc/150?img=5" class="ring-4 ring-black" />
                    </AvatarGroup>
                </div>
            </div>

            <!-- Feature 2: Fallbacks -->
            <div class="glass-card p-10 space-y-6 group hover:border-indigo-500/30 transition-colors">
                <div class="flex items-center justify-between">
                    <h3
                        class="text-xl font-bold italic flex items-center gap-3 text-white uppercase tracking-tighter w-full">
                        <Icon name="heroicons:arrow-path" class="text-indigo-400" />
                        Smart Fallback
                    </h3>
                </div>
                <p class="text-xs text-slate-500 leading-relaxed italic">
                    En l'absence d'image source, le système bascule gracieusement vers les initiales
                    générées ou une iconographie vectorielle thématique.
                </p>
                <div class="flex justify-center gap-8 py-4">
                    <div class="flex flex-col items-center gap-2">
                        <Avatar text="BC" size="lg"
                            class="ring-2 ring-white/10 bg-indigo-500/20 text-indigo-300 font-black" />
                        <span class="text-[9px] uppercase font-bold text-slate-600">Initials</span>
                    </div>
                    <div class="flex flex-col items-center gap-2">
                        <Avatar icon="heroicons:user" size="lg"
                            class="ring-2 ring-white/10 bg-white/5 text-slate-400" />
                        <span class="text-[9px] uppercase font-bold text-slate-600">Icon Mode</span>
                    </div>
                    <div class="flex flex-col items-center gap-2">
                        <Avatar alt="John Doe" size="lg"
                            class="ring-2 ring-white/10 bg-rose-500/20 text-rose-300 font-black" />
                        <span class="text-[9px] uppercase font-bold text-slate-600">Auto-Gen</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Code Block -->
        <section class="space-y-6">
            <h2 class="text-2xl font-bold flex items-center gap-3 italic">
                <span class="w-8 h-1 bg-blue-500 rounded-full"></span>
                Génération de Code
            </h2>
            <div class="code-window">
                <div class="code-header font-display">
                    <span
                        class="text-[10px] text-slate-500 font-mono font-black tracking-widest uppercase">ProfileView.vue</span>
                </div>
                <div class="p-8 font-mono text-sm leading-relaxed overflow-x-auto bg-slate-950/50">
                    <pre><span class="text-pink-500">import</span> { <span class="text-blue-400">Avatar</span> } <span class="text-pink-500">from</span> <span class="text-emerald-400">'@webmx/ui'</span>;

<span class="text-slate-500">// Instantation du profil</span>
<span class="text-white">{{ avatarCodeExample }}</span></pre>
                </div>
            </div>
        </section>

        <!-- Props API -->
        <section class="space-y-6">
            <h2 class="text-2xl font-bold flex items-center gap-3 italic">
                <span class="w-8 h-1 bg-blue-500 rounded-full"></span>
                Spécifications Techniques
            </h2>
            <div class="glass rounded-3xl overflow-hidden border border-white/5 bg-black/20">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-white/5 border-b border-white/5">
                        <tr>
                            <th class="py-6 px-8 text-[10px] font-black uppercase tracking-widest text-slate-500">
                                Propriété</th>
                            <th class="py-6 px-8 text-[10px] font-black uppercase tracking-widest text-slate-500">Typage
                            </th>
                            <th class="py-6 px-8 text-[10px] font-black uppercase tracking-widest text-slate-500">Défaut
                            </th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-white/5">
                        <tr v-for="prop in [
                            { name: 'src', type: 'string (URL)', default: 'undefined' },
                            { name: 'alt', type: 'string (a11y)', default: 'undefined' },
                            { name: 'size', type: '3xs | ... | 3xl', default: '\'md\'' },
                            { name: 'gradient', type: 'boolean', default: 'false' },
                            { name: 'chip', type: 'boolean | ChipOptions', default: 'false' },
                            { name: 'rounded', type: 'sm | full | none', default: '\'full\'' },
                        ]" :key="prop.name" class="hover:bg-white/5 transition-colors group">
                            <td
                                class="py-4 px-8 font-mono text-sm text-blue-400 font-bold group-hover:text-blue-300 transition-colors">
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
    background: linear-gradient(135deg, var(--neon-blue), var(--neon-purple));
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
        opacity: 0.2;
        transform: scale(1.05);
    }
}

.animate-pulse-slow {
    animation: pulse-slow 4s ease-in-out infinite;
}

@keyframes spin-slow {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

.animate-spin-slow {
    animation: spin-slow 10s linear infinite;
}
</style>
