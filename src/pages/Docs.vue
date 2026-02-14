<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// Active section is now based on route
const activeSection = computed(() => {
    if (route.path.includes('getting-started')) return 'installation'
    if (route.path.includes('navbar')) return 'navbar'
    if (route.path.includes('button-group')) return 'button-group'
    if (route.path.includes('social-button')) return 'social-button'
    if (route.path.includes('button')) return 'button'
    if (route.path.includes('theming')) return 'theming'
    if (route.path.includes('dark-mode')) return 'dark-mode'
    if (route.path.includes('avatar')) return 'avatar'
    if (route.path.includes('icon')) return 'icon'
    if (route.path.includes('tooltip')) return 'tooltip'
    if (route.path.includes('modal')) return 'modal'
    if (route.path.includes('card')) return 'card'
    if (route.path.includes('skeleton')) return 'skeleton'
    if (route.path.includes('toast')) return 'toast'
    if (route.path.includes('progress')) return 'progress'
    if (route.path.includes('separator')) return 'separator'
    return ''
})

const scrollToSection = (sectionId: string) => {
    // No longer scrolling in one page, but navigation is handled by router-link
}
</script>

<template>
    <div class="flex min-h-[calc(100vh-80px)]">
        <!-- Sidebar -->
        <aside class="hidden lg:block w-72 shrink-0 docs-sidebar sticky top-20 h-[calc(100vh-80px)] overflow-y-auto">
            <nav class="p-8 space-y-10">
                <!-- Getting Started -->
                <div>
                    <div class="section-label mb-4">Onboarding</div>
                    <ul class="space-y-2">
                        <li>
                            <router-link to="/docs/getting-started"
                                :class="[activeSection === 'installation' ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50/50 dark:bg-indigo-900/40 border-indigo-200/50 dark:border-indigo-500/30' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/50 dark:hover:bg-slate-800/50 border-transparent']"
                                class="block px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 border">
                                Installation
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/docs/getting-started#usage"
                                :class="[route.hash === '#usage' ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50/50 dark:bg-indigo-900/40 border-indigo-200/50 dark:border-indigo-500/30' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/50 dark:hover:bg-slate-800/50 border-transparent']"
                                class="block px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 border">
                                Utilisation
                            </router-link>
                        </li>
                    </ul>
                </div>

                <!-- Components -->
                <div>
                    <div class="section-label mb-4">Composants</div>
                    <ul class="space-y-2">
                        <li v-for="comp in [
                            { name: 'Navbar', icon: 'bg-blue-500', path: 'navbar' },
                            { name: 'Button', icon: 'bg-indigo-500', path: 'button' },
                            { name: 'ButtonGroup', icon: 'bg-purple-500', path: 'button-group' },
                            { name: 'SocialButton', icon: 'bg-pink-500', path: 'social-button' },
                            { name: 'Avatar', icon: 'bg-rose-500', path: 'avatar' },
                            { name: 'Icon', icon: 'bg-orange-500', path: 'icon' },
                            { name: 'Tooltip', icon: 'bg-amber-500', path: 'tooltip' },
                            { name: 'Modal', icon: 'bg-yellow-500', path: 'modal' },
                            { name: 'Card', icon: 'bg-lime-500', path: 'card' },
                            { name: 'Skeleton', icon: 'bg-green-500', path: 'skeleton' },
                            { name: 'Toast', icon: 'bg-emerald-500', path: 'toast' },
                            { name: 'Progress', icon: 'bg-teal-500', path: 'progress' },
                            { name: 'Separator', icon: 'bg-cyan-500', path: 'separator' }
                        ]" :key="comp.path">
                            <router-link :to="'/docs/components/' + comp.path"
                                :class="[activeSection === comp.path ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50/50 dark:bg-indigo-900/40 border-indigo-200/50 dark:border-indigo-500/30' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/50 dark:hover:bg-slate-800/50 border-transparent']"
                                class="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 border">
                                <span :class="comp.icon"
                                    class="w-2 h-2 rounded-full shadow-lg shadow-current/50"></span>
                                {{ comp.name }}
                            </router-link>
                        </li>
                        <!-- Soon components -->
                        <li>
                            <div
                                class="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-400 dark:text-slate-600 opacity-60">
                                <span class="w-2 h-2 rounded-full bg-slate-400"></span>
                                Input
                                <span
                                    class="ml-auto text-[10px] uppercase font-bold px-1.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500">Soon</span>
                            </div>
                        </li>
                    </ul>
                </div>

                <!-- Customization -->
                <div>
                    <div class="section-label mb-4">Personnalisation</div>
                    <ul class="space-y-2">
                        <li>
                            <router-link to="/docs/theming"
                                :class="[activeSection === 'theming' ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50/50 dark:bg-indigo-900/40 border-indigo-200/50 dark:border-indigo-500/30' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/50 dark:hover:bg-slate-800/50 border-transparent']"
                                class="block px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 border">
                                Thèmes
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/docs/dark-mode"
                                :class="[activeSection === 'dark-mode' ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50/50 dark:bg-indigo-900/40 border-indigo-200/50 dark:border-indigo-500/30' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/50 dark:hover:bg-slate-800/50 border-transparent']"
                                class="block px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 border">
                                Dark Mode
                            </router-link>
                        </li>
                    </ul>
                </div>
            </nav>
        </aside>

        <!-- Main Content (Router View) -->
        <div class="flex-1 min-w-0 bg-slate-50/30 dark:bg-transparent">
            <div class="max-w-5xl mx-auto px-6 lg:px-12 py-16">
                <router-view />
            </div>
        </div>
    </div>
</template>
