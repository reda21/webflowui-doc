<script setup lang="ts">
import { ref, computed } from 'vue'
import { Icon, Button } from 'webflow-ui'

const searchQuery = ref('')
const activeCategory = ref('Tous')

const categories = ['Tous', 'Interface', 'Communication', 'Média', 'Flèches', 'Marques']

const icons = [
    { name: 'Home', category: 'Interface', icon: 'heroicons:home', lib: 'heroicons' },
    { name: 'User', category: 'Interface', icon: 'heroicons:user', lib: 'heroicons' },
    { name: 'Settings', category: 'Interface', icon: 'heroicons:cog-6-tooth', lib: 'heroicons' },
    { name: 'Mail', category: 'Communication', icon: 'heroicons:envelope', lib: 'heroicons' },
    { name: 'Phone', category: 'Communication', icon: 'heroicons:phone', lib: 'heroicons' },
    { name: 'Camera', category: 'Média', icon: 'heroicons:camera', lib: 'heroicons' },
    { name: 'Play', category: 'Média', icon: 'heroicons:play', lib: 'heroicons' },
    { name: 'Arrow Right', category: 'Flèches', icon: 'heroicons:arrow-right', lib: 'heroicons' },
    { name: 'Github', category: 'Marques', icon: 'logos:github-icon', lib: 'logos' },
    { name: 'Twitter', category: 'Marques', icon: 'logos:twitter', lib: 'logos' },
    { name: 'Bell', category: 'Interface', icon: 'heroicons:bell', lib: 'heroicons' },
    { name: 'Search', category: 'Interface', icon: 'heroicons:magnifying-glass', lib: 'heroicons' },
    { name: 'Rocket', category: 'Média', icon: 'heroicons:rocket-launch', lib: 'heroicons' },
    { name: 'Star', category: 'Interface', icon: 'heroicons:star', lib: 'heroicons' },
    { name: 'Shield', category: 'Interface', icon: 'heroicons:shield-check', lib: 'heroicons' },
    { name: 'Fire', category: 'Média', icon: 'heroicons:fire', lib: 'heroicons' },
    { name: 'Vue', category: 'Marques', icon: 'logos:vue', lib: 'logos' },
    { name: 'React', category: 'Marques', icon: 'logos:react', lib: 'logos' },
    { name: 'Bolt', category: 'Interface', icon: 'heroicons:bolt', lib: 'heroicons' },
    { name: 'Cloud', category: 'Interface', icon: 'heroicons:cloud', lib: 'heroicons' },
    { name: 'Chat', category: 'Communication', icon: 'heroicons:chat-bubble-left-right', lib: 'heroicons' },
    { name: 'Video', category: 'Média', icon: 'heroicons:video-camera', lib: 'heroicons' },
    { name: 'Map', category: 'Interface', icon: 'heroicons:map', lib: 'heroicons' },
    { name: 'Calendar', category: 'Interface', icon: 'heroicons:calendar', lib: 'heroicons' },
]

const filteredIcons = computed(() => {
    return icons.filter(icon => {
        const matchesSearch = icon.name.toLowerCase().includes(searchQuery.value.toLowerCase()) || icon.icon.includes(searchQuery.value.toLowerCase())
        const matchesCategory = activeCategory.value === 'Tous' || icon.category === activeCategory.value
        return matchesSearch && matchesCategory
    })
})
</script>

<template>
    <div class="space-y-16 pb-20">
        <!-- Header -->
        <header class="space-y-6">
            <div class="flex items-center gap-3">
                <span
                    class="px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em]">Ressources
                    Graphiques</span>
                <span class="text-slate-500 dark:text-slate-500 text-xs font-medium">Iconify Framework • 200k+
                    assets</span>
            </div>
            <h1
                class="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white uppercase italic tracking-tighter">
                Icon <span class="text-gradient">Galaxy</span>
            </h1>
            <p class="text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed italic">
                "Naviguez dans l'infini visuel."
                Accédez à la collection complète d'Iconify directement via le composant <code
                    class="text-indigo-400 bg-indigo-500/10 px-1 rounded">@webmx/icon</code>.
                Optimisation SVG, CSS mask et Sprite incluse.
            </p>
        </header>

        <!-- Navigation & Search -->
        <div class="space-y-8 glass-card p-8 border-indigo-500/10 sticky top-4 z-20 backdrop-blur-xl bg-black/40">
            <div class="flex flex-col md:flex-row gap-6 items-center">
                <div class="relative flex-1 group w-full">
                    <div
                        class="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-indigo-400 transition-colors">
                        <Icon name="heroicons:magnifying-glass" size="sm" />
                    </div>
                    <input v-model="searchQuery" type="text" placeholder="Scanner la galaxie d'icônes..."
                        class="w-full glass bg-black/20 border-white/10 rounded-2xl pl-12 pr-4 py-4 text-sm font-bold placeholder:text-slate-600 placeholder:italic transition-all focus:border-indigo-500/50 outline-none hover:bg-white/5 text-slate-200" />
                </div>
                <div class="flex flex-wrap gap-2 justify-center w-full md:w-auto">
                    <button v-for="cat in categories" :key="cat" @click="activeCategory = cat" :class="[
                        activeCategory === cat
                            ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/20'
                            : 'glass bg-white/5 text-slate-400 hover:bg-white/10'
                    ]"
                        class="px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95">
                        {{ cat }}
                    </button>
                </div>
            </div>
        </div>

        <!-- Icon Grid -->
        <div v-if="filteredIcons.length > 0"
            class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
            <div v-for="icon in filteredIcons" :key="icon.icon"
                class="group glass-card p-4 flex flex-col items-center gap-4 text-center hover:bg-white/5 transition-all cursor-pointer border border-white/5 hover:border-indigo-500/30 relative">

                <div class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Icon name="heroicons:clipboard" size="xs" class="text-slate-500 hover:text-white" />
                </div>

                <div
                    class="p-4 rounded-2xl glass bg-black/20 group-hover:scale-110 transition-transform duration-500 shadow-inner">
                    <Icon :name="icon.icon" size="lg"
                        class="text-slate-400 group-hover:text-indigo-400 transition-colors" />
                </div>

                <div class="space-y-1 w-full">
                    <p
                        class="text-[10px] font-black text-slate-300 uppercase tracking-tighter truncate w-full group-hover:text-white transition-colors">
                        {{ icon.name }}</p>
                    <p
                        class="text-[9px] font-mono text-slate-600 truncate opacity-0 group-hover:opacity-100 transition-opacity">
                        {{ icon.icon }}</p>
                </div>

                <div
                    class="absolute bottom-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                    <span
                        class="px-2 py-0.5 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-[8px] font-bold text-indigo-300 uppercase">{{
                        icon.lib }}</span>
                </div>
            </div>
        </div>

        <!-- Empty State -->
        <div v-else
            class="glass-card py-24 text-center space-y-6 flex flex-col items-center justify-center border-dashed border-2 border-slate-800">
            <div class="relative">
                <div class="absolute inset-0 bg-indigo-500 blur-2xl opacity-20 animate-pulse"></div>
                <div
                    class="w-24 h-24 rounded-full bg-slate-900/50 flex items-center justify-center mx-auto border border-white/5 relative z-10">
                    <Icon name="heroicons:sparkles" size="2xl" class="text-slate-600" />
                </div>
            </div>
            <div class="space-y-2 max-w-sm mx-auto">
                <h3 class="text-2xl font-black uppercase italic tracking-tighter text-slate-700 dark:text-slate-300">
                    Secteur Inconnu</h3>
                <p class="text-xs text-slate-500 italic">Aucun asset graphique ne correspond à votre signature
                    énergétique actuelle.</p>
            </div>
            <div class="pt-4">
                <Button @click="searchQuery = ''; activeCategory = 'Tous'" variant="outlined" size="sm"
                    class="font-black tracking-widest uppercase text-xs hover:bg-white/5">
                    RÉINITIALISER LES RADARS
                </Button>
            </div>
        </div>
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
    border-radius: 2rem;
}

.text-gradient {
    background: linear-gradient(135deg, var(--neon-indigo), var(--neon-purple));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>
