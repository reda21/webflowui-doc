<script setup lang="ts">
import { ref } from 'vue'
import { Skeleton, SkeletonGroup, Button, Icon } from 'webflow-ui'

const isLoading = ref(true)

const posts = ref([
    { id: 1, title: 'Project Protocol #1', desc: 'Analyse prédictive des flux de données trans-clusters avec auto-correction.' },
    { id: 2, title: 'Project Protocol #2', desc: 'Optimisation des vecteurs de rendu pour les interfaces spatiales.' },
    { id: 3, title: 'Project Protocol #3', desc: 'Synchronisation quantique des états globaux.' }
])
</script>

<template>
    <div class="space-y-16 pb-20">
        <!-- Header -->
        <header class="space-y-4">
            <div class="flex items-center gap-3">
                <span
                    class="px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-black uppercase tracking-[0.2em]">Flux
                    d'Attente</span>
                <span class="text-slate-500 dark:text-slate-500 text-xs font-medium">Réduction de Charge Cognitive •
                    Animation Wave</span>
            </div>
            <h1 class="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Skeleton <span class="text-gradient">Structure</span>
            </h1>
            <p class="text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed italic">
                Anticipez le contenu. Le Skeleton de WebMX permet de simuler la structure de votre interface
                pendant le chargement des données, créant une transition fluide et premium.
            </p>
        </header>

        <!-- Interactive Section -->
        <section class="group relative">
            <div
                class="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-600 rounded-[2rem] blur opacity-25 group-hover:opacity-40 transition duration-1000">
            </div>
            <div class="relative glass-card overflow-hidden">
                <!-- Live Preview Stage -->
                <div
                    class="relative min-h-[400px] flex items-center justify-center bg-slate-50/50 dark:bg-slate-900/50 p-12 overflow-hidden border-b border-white/5">
                    <!-- Background Decoration -->
                    <div class="absolute inset-0 opacity-10 pointer-events-none"
                        style="background-image: radial-gradient(var(--neon-amber) 1px, transparent 1px); background-size: 30px 30px;">
                    </div>

                    <div
                        class="relative z-10 w-full max-w-md p-8 glass rounded-3xl space-y-8 animate-float shadow-2xl shadow-amber-500/10 border border-white/10">
                        <div class="flex items-center gap-4">
                            <Skeleton variant="circle" width="64px" height="64px"
                                class="ring-4 ring-amber-500/10 shadow-xl" />
                            <div class="flex-1 space-y-3">
                                <Skeleton width="60%" height="16px" />
                                <Skeleton width="40%" height="10px" />
                            </div>
                        </div>
                        <div class="space-y-4 pt-4 border-t border-white/5">
                            <SkeletonGroup>
                                <div class="space-y-2">
                                    <Skeleton width="100%" height="12px" />
                                    <Skeleton width="90%" height="12px" />
                                    <Skeleton width="75%" height="12px" />
                                </div>
                            </SkeletonGroup>
                        </div>
                        <div class="flex justify-end pt-4">
                            <Skeleton width="120px" height="40px" radius="12px" />
                        </div>
                    </div>

                    <!-- Controls Overlay -->
                    <div class="absolute bottom-8 right-8">
                        <Button severity="contrast" variant="soft" size="sm" icon="heroicons:arrow-path"
                            @click="isLoading = !isLoading"
                            class="shadow-lg font-black uppercase tracking-widest text-[10px]">
                            Cycle Refresh
                        </Button>
                    </div>
                </div>

                <!-- Meta Grid -->
                <div class="p-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center bg-black/20">
                    <div class="space-y-1">
                        <span class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Morphing</span>
                        <p class="text-xs font-bold text-slate-400 italic">S'adapte dynamiquement au layout</p>
                    </div>
                    <div class="space-y-1 border-x border-white/5">
                        <span class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Performance</span>
                        <p class="text-xs font-bold text-slate-400 italic">Accélération GPU native</p>
                    </div>
                    <div class="space-y-1">
                        <span
                            class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Accessibilité</span>
                        <p class="text-xs font-bold text-slate-400 italic">Support ARIA & Reduce Motion</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Detailed Variations -->
        <section class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Feature 1: Shape Variations -->
            <div class="glass-card p-10 space-y-6 group hover:border-amber-500/30 transition-colors">
                <h3 class="text-xl font-bold italic flex items-center gap-3 uppercase tracking-tighter text-white">
                    <Icon name="heroicons:swatch" class="text-amber-400" />
                    Primitives Géométriques
                </h3>
                <p class="text-xs text-slate-500 leading-relaxed italic border-l-2 border-amber-500/50 pl-4">
                    Un ensemble complet de primitives (<code class="text-amber-400 font-bold">circle</code>, <code
                        class="text-amber-400 font-bold">rounded</code>, <code
                        class="text-amber-400 font-bold">rect</code>) pour prototyper n'importe quelle UI.
                </p>
                <div class="flex items-center justify-around p-8 glass bg-black/40 rounded-2xl border border-white/5">
                    <div class="flex flex-col items-center gap-3 group-hover:scale-105 transition-transform">
                        <Skeleton variant="circle" width="50px" height="50px" class="ring-2 ring-white/10" />
                        <span class="text-[9px] font-black uppercase text-slate-500 tracking-widest">Circle</span>
                    </div>
                    <div class="flex flex-col items-center gap-3 group-hover:scale-105 transition-transform delay-75">
                        <Skeleton variant="rounded" width="50px" height="50px" class="ring-2 ring-white/10" />
                        <span class="text-[9px] font-black uppercase text-slate-500 tracking-widest">Rounded</span>
                    </div>
                    <div class="flex flex-col items-center gap-3 group-hover:scale-105 transition-transform delay-150">
                        <Skeleton variant="rectangle" width="50px" height="50px" class="ring-2 ring-white/10" />
                        <span class="text-[9px] font-black uppercase text-slate-500 tracking-widest">Square</span>
                    </div>
                </div>
            </div>

            <!-- Feature 2: Stagger Animations -->
            <div
                class="glass-card p-10 space-y-6 bg-gradient-to-br from-orange-500/5 to-transparent group hover:border-orange-500/30 transition-colors">
                <h3 class="text-xl font-bold italic flex items-center gap-3 uppercase tracking-tighter text-white">
                    <Icon name="heroicons:sparkles" class="text-orange-400" />
                    Stagger Sequencer
                </h3>
                <p class="text-xs text-slate-500 leading-relaxed italic border-l-2 border-orange-500/50 pl-4">
                    Le composant <code class="text-orange-400 font-bold">SkeletonGroup</code> orchestre les délais
                    d'animation pour créer une vague organique de chargement.
                </p>
                <div class="space-y-4 p-8 glass bg-black/40 rounded-2xl border border-white/5">
                    <SkeletonGroup>
                        <div v-for="i in 3" :key="i" class="flex gap-4 items-center">
                            <Skeleton variant="circle" width="32px" height="32px" />
                            <div class="flex-1 space-y-2">
                                <Skeleton width="100%" height="8px" />
                                <Skeleton width="60%" height="8px" class="opacity-50" />
                            </div>
                        </div>
                    </SkeletonGroup>
                </div>
            </div>
        </section>

        <!-- Real Example Interaction -->
        <section class="space-y-8">
            <div class="flex items-center justify-between">
                <h2 class="text-3xl font-black italic tracking-tighter">Content <span
                        class="text-gradient">Resolution</span></h2>
                <Button severity="contrast" variant="soft" size="sm" @click="isLoading = !isLoading"
                    class="font-black italic uppercase tracking-widest">
                    {{ isLoading ? 'Reveal Data' : 'Reset Simulation' }}
                </Button>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div v-for="(post, i) in posts" :key="post.id"
                    class="p-1 glass-card border border-white/5 bg-black/40 overflow-hidden relative group">
                    <div
                        class="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    </div>

                    <div class="p-6 space-y-6 relative z-10">
                        <!-- Image Slot -->
                        <div
                            class="relative h-48 w-full rounded-2xl overflow-hidden bg-slate-900 border border-white/5">
                            <transition name="fade" mode="out-in">
                                <Skeleton v-if="isLoading" height="100%" variant="rectangle" class="absolute inset-0" />
                                <img v-else :src="`https://picsum.photos/400/200?random=${i}`" alt="Content"
                                    class="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700" />
                            </transition>
                        </div>

                        <!-- Content Slot -->
                        <div class="space-y-3">
                            <transition name="fade" mode="out-in">
                                <div v-if="isLoading" class="space-y-2">
                                    <Skeleton width="70%" height="20px" />
                                    <SkeletonGroup>
                                        <Skeleton width="100%" height="10px" />
                                        <Skeleton width="80%" height="10px" />
                                    </SkeletonGroup>
                                </div>
                                <div v-else class="space-y-2">
                                    <h4 class="text-lg font-bold text-white italic tracking-tight">{{ post.title }}</h4>
                                    <p class="text-xs text-slate-400 leading-relaxed">{{ post.desc }}</p>
                                </div>
                            </transition>
                        </div>

                        <!-- Footer Slot -->
                        <div class="flex items-center justify-between pt-4 border-t border-white/10">
                            <transition name="fade" mode="out-in">
                                <Skeleton v-if="isLoading" width="80px" height="24px" radius="8px" />
                                <span v-else
                                    class="text-[10px] uppercase font-black tracking-widest text-slate-500">System
                                    Log</span>
                            </transition>

                            <transition name="fade" mode="out-in">
                                <Skeleton v-if="isLoading" width="80px" height="32px" radius="8px" />
                                <Button v-else variant="ghost" size="sm"
                                    class="text-amber-400 hover:text-amber-300">Access</Button>
                            </transition>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Code Block Documentation -->
        <section class="space-y-6">
            <h2 class="text-2xl font-bold flex items-center gap-3 italic">
                <span class="w-8 h-1 bg-amber-500 rounded-full"></span>
                Implémentation
            </h2>
            <div class="code-window shadow-2xl shadow-amber-500/5">
                <div class="code-header font-display">
                    <span
                        class="text-[10px] text-slate-500 font-mono tracking-widest uppercase font-black">Loader.vue</span>
                </div>
                <div class="p-8 font-mono text-sm leading-relaxed overflow-x-auto bg-slate-950/50">
                    <pre><span class="text-pink-500">import</span> { <span class="text-amber-400">Skeleton</span>, <span class="text-amber-400">SkeletonGroup</span> } <span class="text-pink-500">from</span> <span class="text-emerald-400">'@webmx/ui'</span>;

<span class="text-slate-500">// Structure avec auto-stagger</span>
<span class="text-white">&lt;<span class="text-amber-400">SkeletonGroup</span>&gt;
  &lt;<span class="text-amber-400">Skeleton</span> <span class="text-indigo-400">variant</span>=<span class="text-emerald-400">"circle"</span> <span class="text-indigo-400">size</span>=<span class="text-emerald-400">"lg"</span> /&gt;
  &lt;<span class="text-amber-400">Skeleton</span> <span class="text-indigo-400">height</span>=<span class="text-emerald-400">"20px"</span> <span class="text-indigo-400">width</span>=<span class="text-emerald-400">"200px"</span> /&gt;
&lt;/<span class="text-amber-400">SkeletonGroup</span>&gt;</span></pre>
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
    background: linear-gradient(135deg, var(--neon-amber), var(--neon-orange));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

@keyframes float {

    0%,
    100% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-10px);
    }
}

.animate-float {
    animation: float 6s ease-in-out infinite;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
