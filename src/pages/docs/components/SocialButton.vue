<script setup lang="ts">
import { ref, computed } from 'vue'
import { SocialButton, Icon } from 'webflow-ui'

// Config State
const configVariant = ref('solid')
const configSize = ref('md')

const generatedCode = computed(() => {
    return `<SocialButton 
  provider="github" 
  variant="${configVariant.value}"
  size="${configSize.value}"
  label="Connect with GitHub"
/>`
})
</script>

<template>
    <div class="space-y-16 pb-20">
        <!-- Header -->
        <header class="space-y-4">
            <div class="flex items-center gap-3">
                <span
                    class="px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em]">Connectivité
                    Sociale</span>
                <span class="text-slate-500 dark:text-slate-500 text-xs font-medium">OAuth 2.0 Ready • Brand Assets
                    Intégrés</span>
            </div>
            <h1 class="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Social <span class="text-gradient">Bridge</span>
            </h1>
            <p class="text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed italic">
                Unifiez vos accès. SocialButton offre une passerelle immédiate vers les plus grands
                écosystèmes numériques, tout en respectant l'esthétique premium de votre application.
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
                    <!-- Digital background particles -->
                    <div class="absolute inset-0 opacity-20 pointer-events-none"
                        style="background-image: radial-gradient(var(--neon-blue) 1px, transparent 1px); background-size: 40px 40px;">
                    </div>

                    <div class="relative z-10 flex flex-col items-center gap-12 w-full max-w-2xl">
                        <div class="space-y-6 text-center w-full">
                            <span class="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Quick Auth
                                Matrix</span>

                            <div
                                class="flex flex-wrap gap-4 justify-center scale-110 p-6 glass rounded-2xl border-white/5 bg-black/20">
                                <SocialButton provider="google" icon-only pill
                                    class="shadow-2xl hover:-translate-y-1 transition-transform" />
                                <SocialButton provider="github" icon-only pill
                                    class="shadow-2xl hover:-translate-y-1 transition-transform" />
                                <SocialButton provider="apple" icon-only pill
                                    class="shadow-2xl hover:-translate-y-1 transition-transform" />
                                <SocialButton provider="discord" icon-only pill
                                    class="shadow-2xl hover:-translate-y-1 transition-transform" />
                                <SocialButton provider="twitter" icon-only pill
                                    class="shadow-2xl hover:-translate-y-1 transition-transform" />
                            </div>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                            <div
                                class="glass p-8 rounded-2xl border-white/5 space-y-6 flex flex-col items-center bg-black/20">
                                <span
                                    class="text-[10px] font-black text-slate-500 uppercase tracking-widest block text-center">Interactive
                                    Config</span>
                                <div class="w-full space-y-4">
                                    <SocialButton provider="github" :variant="configVariant" :size="configSize" block
                                        label="GitHub Access" />
                                    <SocialButton provider="google" :variant="configVariant" :size="configSize" block
                                        label="Google Workspace" />
                                </div>
                            </div>

                            <div class="glass p-8 rounded-2xl border-white/5 space-y-6 bg-black/20">
                                <div class="space-y-4">
                                    <div class="space-y-2">
                                        <label
                                            class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Variant</label>
                                        <select v-model="configVariant"
                                            class="w-full glass bg-transparent border-white/10 rounded-xl px-3 py-2 text-sm outline-none focus:border-blue-500/50 transition-all font-bold text-slate-300 cursor-pointer">
                                            <option value="solid" class="bg-slate-900">Solid</option>
                                            <option value="soft" class="bg-slate-900">Soft</option>
                                            <option value="outlined" class="bg-slate-900">Outlined</option>
                                            <option value="ghost" class="bg-slate-900">Ghost</option>
                                        </select>
                                    </div>
                                    <div class="space-y-2">
                                        <label
                                            class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Size</label>
                                        <select v-model="configSize"
                                            class="w-full glass bg-transparent border-white/10 rounded-xl px-3 py-2 text-sm outline-none focus:border-blue-500/50 transition-all font-bold text-slate-300 cursor-pointer">
                                            <option value="sm" class="bg-slate-900">Small</option>
                                            <option value="md" class="bg-slate-900">Medium</option>
                                            <option value="lg" class="bg-slate-900">Large</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Footer / Tech Spec -->
                <div class="p-8 grid grid-cols-1 md:grid-cols-3 gap-6 bg-black/20 text-center md:text-left">
                    <div class="flex flex-col md:flex-row items-center gap-4">
                        <div class="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                            <Icon name="heroicons:shield-check" />
                        </div>
                        <div>
                            <h4 class="text-[10px] font-black text-slate-400 uppercase tracking-widest">Secure by Design
                            </h4>
                            <p class="text-[10px] text-slate-500 font-bold">Labels sémantiques auto-générés.</p>
                        </div>
                    </div>
                    <div class="flex flex-col md:flex-row items-center gap-4 md:border-x border-white/5 md:px-6">
                        <div
                            class="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                            <Icon name="heroicons:sparkles" />
                        </div>
                        <div>
                            <h4 class="text-[10px] font-black text-slate-400 uppercase tracking-widest">Brand Precision
                            </h4>
                            <p class="text-[10px] text-slate-500 font-bold">Couleurs hexadécimales officielles.</p>
                        </div>
                    </div>
                    <div class="flex flex-col md:flex-row items-center gap-4">
                        <div
                            class="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                            <Icon name="heroicons:device-phone-mobile" />
                        </div>
                        <div>
                            <h4 class="text-[10px] font-black text-slate-400 uppercase tracking-widest">Mobile First
                            </h4>
                            <p class="text-[10px] text-slate-500 font-bold">Zones de contact optimisées.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Specific Variations -->
        <section class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <!-- Feature 1: The Matrix -->
            <div class="glass-card p-10 space-y-6 lg:col-span-2 group hover:border-blue-500/30 transition-colors">
                <h3 class="text-xl font-bold flex items-center gap-3 italic uppercase text-white tracking-tight">
                    <Icon name="heroicons:rectangle-group" class="text-blue-400" />
                    The Social Galaxy
                </h3>
                <div class="grid grid-cols-5 sm:grid-cols-10 gap-3">
                    <div v-for="p in ['google', 'facebook', 'instagram', 'twitter', 'github', 'linkedin', 'apple', 'youtube', 'whatsapp', 'discord', 'slack', 'spotify', 'amazon', 'pinterest', 'tiktok', 'snapchat', 'paypal', 'twitch', 'behance', 'dribbble']"
                        :key="p"
                        class="aspect-square glass rounded-xl flex items-center justify-center hover:bg-white/10 hover:scale-110 transition-all cursor-pointer group/icon border border-white/5 shadow-lg"
                        :title="p">
                        <SocialButton :provider="p" icon-only variant="ghost" size="sm"
                            class="opacity-80 group-hover/icon:opacity-100" />
                    </div>
                </div>
            </div>

            <!-- Feature 2: Grouping -->
            <div
                class="glass-card p-10 space-y-6 bg-gradient-to-br from-blue-500/5 to-transparent group hover:border-indigo-500/30 transition-colors">
                <h3 class="text-xl font-bold flex items-center gap-3 italic uppercase text-white tracking-tight">
                    <Icon name="heroicons:list-bullet" class="text-indigo-400" />
                    Auth Stacking
                </h3>
                <div class="space-y-6">
                    <p class="text-xs text-slate-500 leading-relaxed italic border-l-2 border-indigo-500/50 pl-4">
                        Stacks verticaux optimisés pour les écrans de connexion mobiles.
                    </p>
                    <div class="p-6 glass rounded-2xl border-white/5 bg-black/40 text-center space-y-4">
                        <div class="space-y-3">
                            <SocialButton provider="google" variant="soft" block label="Continue with Google" />
                            <SocialButton provider="apple" variant="soft" block label="Continue with Apple" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Code Documentation -->
        <section class="space-y-6">
            <h2 class="text-2xl font-bold flex items-center gap-3 italic">
                <span class="w-8 h-1 bg-blue-500 rounded-full"></span>
                Génération Dynamique
            </h2>
            <div class="code-window shadow-2xl shadow-blue-500/5">
                <div class="code-header font-display">
                    <span
                        class="text-[10px] text-slate-500 font-mono tracking-widest uppercase font-black">AuthView.vue</span>
                </div>
                <div class="p-8 font-mono text-sm leading-relaxed overflow-x-auto bg-slate-950/50">
                    <pre><span class="text-pink-500">import</span> { <span class="text-blue-400">SocialButton</span> } <span class="text-pink-500">from</span> <span class="text-emerald-400">'@webmx/ui'</span>;

<span class="text-slate-500">// Liaison universelle v4.2</span>
<span class="text-white">{{ generatedCode }}</span></pre>
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
    background: linear-gradient(135deg, var(--neon-blue), var(--neon-indigo));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>
