<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { Icon } from 'webflow-ui'

const route = useRoute()

// Active section logic
const activeSection = computed(() => {
    const path = route.path
    if (path.includes('getting-started')) return 'installation'
    if (path.includes('navbar')) return 'navbar'
    if (path.includes('button-group')) return 'button-group'
    if (path.includes('social-button')) return 'social-button'
    if (path.includes('button')) return 'button'
    if (path.includes('theming')) return 'theming'
    if (path.includes('dark-mode')) return 'dark-mode'
    if (path.includes('avatar')) return 'avatar'
    if (path.includes('icon-library')) return 'icon-library'
    if (path.includes('icon')) return 'icon'
    if (path.includes('tooltip')) return 'tooltip'
    if (path.includes('modal')) return 'modal'
    if (path.includes('card')) return 'card'
    if (path.includes('skeleton')) return 'skeleton'
    if (path.includes('toast')) return 'toast'
    if (path.includes('progress')) return 'progress'
    if (path.includes('separator')) return 'separator'
    if (path.includes('changelog')) return 'changelog'
    return ''
})

// Styles definition to avoid @apply issues in SFC
const navLinkClass = "flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-300 italic"
const navActiveClass = "flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 shadow-lg shadow-indigo-500/5 italic"
</script>

<template>
    <div class="flex min-h-[calc(100vh-80px)] bg-transparent">
        <!-- Dashboard Sidebar (Glass) -->
        <aside
            class="hidden lg:block w-80 shrink-0 sticky top-20 h-[calc(100vh-80px)] overflow-y-auto border-r border-white/5 bg-black/5 backdrop-blur-3xl custom-scrollbar">
            <nav class="p-8 space-y-12">
                <!-- Group: Start -->
                <div class="space-y-4">
                    <div
                        class="flex items-center gap-2 px-2 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
                        <Icon name="heroicons:bolt" size="xs" class="text-indigo-500" />
                        Inisialisation
                    </div>
                    <ul class="space-y-1">
                        <li>
                            <router-link to="/docs/getting-started"
                                :class="[activeSection === 'installation' ? navActiveClass : navLinkClass]">
                                <Icon name="heroicons:rocket-launch" size="xs" />
                                Installation
                            </router-link>
                        </li>
                    </ul>
                </div>

                <!-- Group: Elements -->
                <div class="space-y-4">
                    <div
                        class="flex items-center gap-2 px-2 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
                        <Icon name="heroicons:square-3-stack-3d" size="xs" class="text-cyan-500" />
                        Composants Flux
                    </div>
                    <ul class="space-y-1">
                        <li v-for="comp in [
                            { name: 'Navbar', icon: 'heroicons:window', path: 'navbar' },
                            { name: 'Button', icon: 'heroicons:cursor-arrow-ripple', path: 'button' },
                            { name: 'ButtonGroup', icon: 'heroicons:rectangle-group', path: 'button-group' },
                            { name: 'SocialButton', icon: 'heroicons:globe-alt', path: 'social-button' },
                            { name: 'Avatar', icon: 'heroicons:user-circle', path: 'avatar' },
                            { name: 'Icon', icon: 'heroicons:face-smile', path: 'icon' },
                            { name: 'Tooltip', icon: 'heroicons:chat-bubble-left-ellipsis', path: 'tooltip' },
                            { name: 'Modal', icon: 'heroicons:square-2-stack', path: 'modal' },
                            { name: 'Card', icon: 'heroicons:rectangle-stack', path: 'card' },
                            { name: 'Skeleton', icon: 'heroicons:sparkles', path: 'skeleton' },
                            { name: 'Toast', icon: 'heroicons:bell-alert', path: 'toast' },
                            { name: 'Progress', icon: 'heroicons:chart-bar', path: 'progress' },
                            { name: 'Separator', icon: 'heroicons:minus', path: 'separator' }
                        ]" :key="comp.path">
                            <router-link :to="'/docs/components/' + comp.path"
                                :class="[activeSection === comp.path ? navActiveClass : navLinkClass]">
                                <Icon :name="comp.icon" size="xs" />
                                {{ comp.name }}
                            </router-link>
                        </li>
                    </ul>
                </div>

                <!-- Group: System -->
                <div class="space-y-4">
                    <div
                        class="flex items-center gap-2 px-2 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
                        <Icon name="heroicons:command-line" size="xs" class="text-violet-500" />
                        Configuration
                    </div>
                    <ul class="space-y-1">
                        <li>
                            <router-link to="/docs/theming"
                                :class="[activeSection === 'theming' ? navActiveClass : navLinkClass]">
                                <Icon name="heroicons:swatch" size="xs" />
                                DNA (Théming)
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/docs/dark-mode"
                                :class="[activeSection === 'dark-mode' ? navActiveClass : navLinkClass]">
                                <Icon name="heroicons:moon" size="xs" />
                                Spectre Sombre
                            </router-link>
                        </li>
                    </ul>
                </div>

                <!-- Group: Archives -->
                <div class="space-y-4">
                    <div
                        class="flex items-center gap-2 px-2 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
                        <Icon name="heroicons:archive-box" size="xs" class="text-rose-500" />
                        Ressources
                    </div>
                    <ul class="space-y-1">
                        <li>
                            <router-link to="/docs/icon-library"
                                :class="[activeSection === 'icon-library' ? navActiveClass : navLinkClass]">
                                <Icon name="heroicons:rectangle-group" size="xs" />
                                Icon Library
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/docs/changelog"
                                :class="[activeSection === 'changelog' ? navActiveClass : navLinkClass]">
                                <Icon name="heroicons:list-bullet" size="xs" />
                                Changelog
                            </router-link>
                        </li>
                    </ul>
                </div>
            </nav>
        </aside>

        <!-- Content Area -->
        <main class="flex-1 min-w-0">
            <!-- Dynamic Background -->
            <div class="fixed inset-0 pointer-events-none -z-10 bg-slate-50 dark:bg-black overflow-hidden opacity-30">
                <div class="absolute -top-1/4 -right-1/4 w-full h-full bg-indigo-500/10 blur-[200px] rounded-full">
                </div>
            </div>

            <div class="max-w-6xl mx-auto px-6 lg:px-12 py-16">
                <router-view v-slot="{ Component }">
                    <transition name="page" mode="out-in">
                        <component :is="Component" />
                    </transition>
                </router-view>
            </div>
        </main>
    </div>
</template>

<style scoped>
/* Page Transition */
.page-enter-active,
.page-leave-active {
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.page-enter-from {
    opacity: 0;
    transform: translateY(20px);
}

.page-leave-to {
    opacity: 0;
    transform: translateY(-20px);
}

.custom-scrollbar::-webkit-scrollbar {
    width: 4px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
}
</style>
