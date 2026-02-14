<script setup lang="ts">
</script>

<template>
    <div class="relative overflow-hidden">
        <!-- Hero Section -->
        <section class="container mx-auto px-6 pt-32 pb-24 relative z-10">
            <div class="flex flex-col items-center text-center max-w-5xl mx-auto">
                <!-- Badge -->
                <div class="section-label mb-8 animate-fade-up">
                    <span class="flex h-2 w-2 rounded-full bg-cyan-400 animate-glow"></span>
                    Built for the future of UI
                </div>

                <!-- Title -->
                <h1 class="text-6xl md:text-8xl font-black mb-8 tracking-tighter animate-fade-up delay-100">
                    Build at the <br />
                    <span class="text-gradient">speed of light</span>
                </h1>

                <!-- Subtitle -->
                <p
                    class="text-xl md:text-2xl text-slate-500 dark:text-slate-400 max-w-2xl mb-12 animate-fade-up delay-200 leading-relaxed font-medium">
                    WebMX is a premium Vue 3 component library designed for high-performance,
                    accessible, and stunning developer experiences.
                </p>

                <!-- CTA Buttons -->
                <div class="flex flex-wrap items-center justify-center gap-6 animate-fade-up delay-300">
                    <router-link to="/docs" class="btn-premium flex items-center gap-3 group">
                        Get Started
                        <span class="text-xl group-hover:translate-x-1 transition-transform">→</span>
                    </router-link>
                    <router-link to="/docs"
                        class="px-8 py-3 rounded-xl border border-border bg-background/50 backdrop-blur-sm text-foreground font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
                        View Components
                    </router-link>
                </div>
            </div>

            <!-- Visual Showcase -->
            <div class="mt-32 relative animate-fade-up delay-400">
                <div
                    class="max-w-6xl mx-auto glass-card p-1 items-center justify-center overflow-hidden border-neon-blue/20">
                    <div
                        class="bg-slate-900/90 dark:bg-black/40 rounded-[22px] p-12 min-h-[400px] flex items-center justify-center group overflow-hidden">
                        <div
                            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full opacity-60 group-hover:opacity-100 transition-opacity duration-700">
                            <!-- Mock components -->
                            <div
                                class="glass p-6 rounded-2xl border-white/5 space-y-4 transform rotate-2 group-hover:rotate-0 transition-transform duration-700">
                                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500"></div>
                                <div class="h-4 w-3/4 bg-white/10 rounded"></div>
                                <div class="h-4 w-1/2 bg-white/5 rounded"></div>
                            </div>
                            <div
                                class="glass p-6 rounded-2xl border-white/5 space-y-4 -rotate-2 group-hover:rotate-0 transition-transform duration-700 mt-8">
                                <div class="w-full h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl"></div>
                            </div>
                            <div
                                class="glass p-6 rounded-2xl border-white/5 space-y-4 rotate-1 group-hover:rotate-0 transition-transform duration-700">
                                <div class="flex gap-2">
                                    <div class="w-8 h-8 rounded-full bg-cyan-400/20"></div>
                                    <div class="w-8 h-8 rounded-full bg-purple-400/20"></div>
                                    <div class="w-8 h-8 rounded-full bg-white/10"></div>
                                </div>
                                <div class="h-10 w-full bg-cyan-500/20 rounded-lg border border-cyan-500/30"></div>
                            </div>
                        </div>
                        <!-- Glow effect -->
                        <div
                            class="absolute -bottom-20 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-cyan-500/20 blur-[120px] rounded-full">
                        </div>
                    </div>
                </div>
            </div>

            <!-- Stats -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mt-32 animate-fade-up delay-500">
                <div class="stat-item">
                    <div class="stat-number text-slate-900 dark:text-white">15+</div>
                    <div class="stat-label">Production Components</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number text-slate-900 dark:text-white">60fps</div>
                    <div class="stat-label">Smooth Animations</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number text-slate-900 dark:text-white">&lt;5kb</div>
                    <div class="stat-label">Core Bundle Size</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number text-slate-900 dark:text-white">A11y</div>
                    <div class="stat-label">WCAG Compliant</div>
                </div>
            </div>
        </section>

        <!-- Features Section -->
        <section class="container mx-auto px-6 py-32 relative z-10">
            <div class="flex flex-col md:flex-row gap-12 items-end mb-20">
                <div class="flex-1">
                    <div class="section-label mb-4">Core Ecosystem</div>
                    <h2 class="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                        Everything you need to <br />
                        <span class="text-cyan-500">launch your vision</span>
                    </h2>
                </div>
                <p class="flex-1 text-lg text-slate-500 dark:text-slate-400 pb-1">
                    Carefully crafted utilities and components that prioritize
                    visual excellence and functional performance out of the box.
                </p>
            </div>

            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="feature in [
                    { title: 'Glass & Glow', icon: '✨', color: 'var(--neon-blue)', desc: 'Elegant blur effects and neon glows that give your UI a futuristic, deep feel.' },
                    { title: 'Responsive Flow', icon: '📱', color: 'var(--neon-purple)', desc: 'Mobile-first components that adapt seamlessly to any screen size or orientation.' },
                    { title: 'Dark Mode Native', icon: '🌙', color: 'var(--neon-cyan)', desc: 'A first-class dark mode experience with deep shadows and vibrant contrast.' },
                    { title: 'Advanced Theming', icon: '🎨', color: '#f59e0b', desc: 'Powerful HSL-based customization for global colors, radius, and spacing.' },
                    { title: 'Typescript First', icon: '🎯', color: '#10b981', desc: 'Rock-solid type definitions for an error-free development workflow.' },
                    { title: 'Pure Performance', icon: '⚡', color: '#ef4444', desc: 'Zero external dependencies and highly optimized code for blinking fast loads.' }
                ]" :key="feature.title"
                    class="glass-card p-10 group hover:border-neon-blue/40 transition-colors duration-500">
                    <div
                        class="text-4xl mb-6 transform group-hover:scale-125 transition-transform duration-500 origin-left">
                        {{ feature.icon }}</div>
                    <h3 class="text-xl font-bold mb-3 text-slate-900 dark:text-white">{{ feature.title }}</h3>
                    <p class="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                        {{ feature.desc }}
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>
