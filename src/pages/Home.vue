<script setup lang="ts">
import { Icon, Button } from 'webflow-ui'
</script>

<template>
    <div class="relative min-h-screen bg-transparent overflow-hidden">
        <!-- Orbital Glows -->
        <div
            class="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none">
        </div>
        <div
            class="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-500/10 blur-[180px] rounded-full pointer-events-none">
        </div>

        <!-- Hero Section -->
        <section class="container mx-auto px-6 pt-40 pb-32 relative z-10 text-center">
            <div class="space-y-12 max-w-5xl mx-auto items-center flex flex-col">
                <!-- Badge -->
                <div
                    class="inline-flex items-center gap-3 px-4 py-1.5 rounded-full glass border-cyan-500/20 shadow-lg shadow-cyan-500/5 animate-fade-in">
                    <span class="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
                    <span class="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-400/80">Stitch v5.4 is
                        LIVE</span>
                </div>

                <!-- Main Heading -->
                <div class="space-y-6">
                    <h1
                        class="text-7xl md:text-9xl font-black tracking-tighter text-slate-900 dark:text-white leading-[0.9] italic">
                        THINK <br />
                        <span class="text-gradient">BEYOND</span>
                    </h1>
                    <p
                        class="text-xl md:text-2xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium italic">
                        "L'esthétique n'est pas une option, c'est l'interface."
                        WebMX propulse vos applications Vue dans une nouvelle dimension graphique.
                    </p>
                </div>

                <!-- CTAs -->
                <div class="flex flex-wrap items-center justify-center gap-8 pt-6">
                    <router-link to="/docs">
                        <Button severity="primary" size="lg" rounded="full"
                            class="px-12 h-16 font-black tracking-widest italic shadow-2xl shadow-cyan-500/20 group">
                            DÉCOLLAGE
                            <Icon name="heroicons:arrow-right"
                                class="ml-2 group-hover:translate-x-2 transition-transform" />
                        </Button>
                    </router-link>
                    <router-link to="/docs/components/Button">
                        <Button variant="ghost" size="lg" rounded="full"
                            class="px-10 h-16 font-black tracking-widest opacity-80 hover:opacity-100">
                            LABORATOIRE
                        </Button>
                    </router-link>
                </div>
            </div>

            <!-- Futuristic Dashboard Preview -->
            <div class="mt-40 relative group animate-fade-in-up">
                <div
                    class="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition duration-1000">
                </div>
                <div
                    class="relative glass rounded-[3rem] border-slate-200 dark:border-white/5 shadow-2xl overflow-hidden p-2 bg-white/50 dark:bg-transparent">
                    <div
                        class="bg-slate-100 dark:bg-black/60 rounded-[2.5rem] min-h-[500px] flex items-center justify-center p-12 overflow-hidden border border-slate-200 dark:border-white/5 transition-colors duration-500">
                        <!-- Geometric background nodes -->
                        <div class="absolute inset-0 opacity-10 pointer-events-none">
                            <div
                                class="absolute top-1/4 left-1/4 w-[400px] h-[400px] border border-cyan-500/20 rounded-full">
                            </div>
                            <div
                                class="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] border border-indigo-500/20 rounded-full">
                            </div>
                            <div class="grid grid-cols-12 h-full gap-4 px-4 opacity-50">
                                <div v-for="i in 12" :key="i"
                                    class="border-x border-slate-300 dark:border-white/5 h-full"></div>
                            </div>
                        </div>

                        <!-- Content grid -->
                        <div class="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
                            <div
                                class="glass-card p-10 space-y-6 hover:-translate-y-2 transition-transform duration-500 bg-white/60 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                                <div
                                    class="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                                    <Icon name="heroicons:bolt" size="lg" />
                                </div>
                                <div class="space-y-2">
                                    <h3
                                        class="font-black italic uppercase tracking-widest text-slate-900 dark:text-white">
                                        Quantum Core</h3>
                                    <div class="h-1.5 w-full bg-slate-200 dark:bg-white/5 rounded-full overflow-hidden">
                                        <div class="h-full bg-cyan-500 w-3/4 animate-pulse"></div>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="glass-card p-10 space-y-6 hover:-translate-y-2 transition-transform duration-500 mt-12 bg-indigo-50 dark:bg-indigo-500/5 border border-indigo-200 dark:border-indigo-500/20">
                                <div
                                    class="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                                    <Icon name="heroicons:sparkles" size="lg" />
                                </div>
                                <div class="space-y-4">
                                    <div v-for="i in 3" :key="i"
                                        class="h-2 w-full bg-indigo-200 dark:bg-white/5 rounded-full"
                                        :style="{ width: [100, 80, 60][i - 1] + '%' }"></div>
                                </div>
                            </div>
                            <div
                                class="glass-card p-10 space-y-6 hover:-translate-y-2 transition-transform duration-500 bg-white/60 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                                <div
                                    class="w-12 h-12 rounded-2xl bg-violet-500/10 flex items-center justify-center text-violet-400">
                                    <Icon name="heroicons:command-line" size="lg" />
                                </div>
                                <div class="p-4 bg-slate-200 dark:bg-black/40 rounded-xl space-y-2">
                                    <div class="h-1 w-20 bg-emerald-500/50 rounded-full"></div>
                                    <div class="h-1 w-full bg-slate-300 dark:bg-white/10 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Stats Matrix -->
        <section
            class="container mx-auto px-6 py-20 border-y border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-black/5">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-12">
                <div v-for="stat in [
                    { val: '200K+', label: 'ASSETS ICONIFY' },
                    { val: '60FPS', label: 'FLUIDITÉ NATIVE' },
                    { val: '< 5KB', label: 'CORE PAYLOAD' },
                    { val: 'ZERO', label: 'DEPENDENCIES' }
                ]" :key="stat.label" class="text-center space-y-2">
                    <div class="text-4xl font-black italic text-slate-900 dark:text-white tracking-widest">{{ stat.val
                    }}</div>
                    <div class="text-[10px] font-black text-slate-500 tracking-[0.3em]">{{ stat.label }}</div>
                </div>
            </div>
        </section>

        <!-- Detailed Features -->
        <section class="container mx-auto px-6 py-40">
            <div class="flex flex-col lg:flex-row gap-20 items-end mb-32">
                <div class="flex-1 space-y-6 text-center lg:text-left">
                    <div class="text-[10px] font-black tracking-[0.4em] text-cyan-500 uppercase">Ecosystem Topology
                    </div>
                    <h2
                        class="text-5xl md:text-7xl font-black text-slate-900 dark:text-white italic tracking-tighter leading-tight">
                        LA MATRICE <br />
                        <span class="text-cyan-500">SÉMANTIQUE</span>
                    </h2>
                </div>
                <p class="flex-1 text-lg text-slate-500 italic leading-relaxed text-center lg:text-left">
                    Chaque composant est une particule d'un univers interconnecté.
                    WebMX ne se contente pas d'afficher, il dialogue avec votre flux de données.
                </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="feat in [
                    { title: 'Glass & Glow', icon: 'heroicons:sparkles', color: 'cyan', desc: 'Effets de flou adaptatifs et lueurs néon pour une interface de profondeur.' },
                    { title: 'Responsive Flow', icon: 'heroicons:device-phone-mobile', color: 'indigo', desc: 'Adaptation organique à tous les terminaux de consultation.' },
                    { title: 'Night Vision', icon: 'heroicons:moon', color: 'violet', desc: 'Mode sombre total avec contrastes haute-fidélité et noirs abyssaux.' },
                    { title: 'DNA Overwrite', icon: 'heroicons:variable', color: 'amber', desc: 'Personnalisation moléculaire via variables CSS et Tailwind native.' },
                    { title: 'Strong Typing', icon: 'heroicons:shield-check', color: 'emerald', desc: 'Définitions TypeScript strictes pour une intégrité de code totale.' },
                    { title: 'Blink Engine', icon: 'heroicons:bolt', color: 'rose', desc: 'Optimisation de rendu atomique pour une réactivité instantanée.' }
                ]" :key="feat.title"
                    class="glass-card p-10 group hover:bg-white/5 transition-all duration-500 border border-slate-100 dark:border-white/5">
                    <div class="flex items-center gap-6 mb-8">
                        <div
                            :class="`w-14 h-14 rounded-2xl bg-${feat.color}-500/10 flex items-center justify-center text-${feat.color}-400 group-hover:scale-110 transition-transform duration-500`">
                            <Icon :name="feat.icon" size="lg" />
                        </div>
                        <h3 class="text-xl font-black italic uppercase tracking-tighter text-slate-900 dark:text-white">
                            {{ feat.title }}
                        </h3>
                    </div>
                    <p class="text-sm text-slate-600 dark:text-slate-500 italic leading-relaxed">{{ feat.desc }}</p>
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

@keyframes fade-in-up {
    from {
        opacity: 0;
        transform: translateY(40px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fade-in-up {
    animation: fade-in-up 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes fade-in {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

.animate-fade-in {
    animation: fade-in 1s ease-out forwards;
}
</style>
