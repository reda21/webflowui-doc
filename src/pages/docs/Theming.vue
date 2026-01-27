<script setup lang="ts">
import { themeTokens } from 'webflow-ui'
</script>

<template>
    <section id="theming" class="scroll-mt-24 mb-20 px-4 md:px-0">
        <div class="flex items-center gap-3 mb-2">
            <span
                class="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">Configuration</span>
        </div>
        <h1 class="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            Thèmes & Personnalisation
        </h1>
        <p class="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-3xl">
            Webflow UI est construit sur un système de design tokens flexible utilisant les variables CSS et Tailwind
            CSS v4. Vous pouvez personnaliser chaque aspect de la bibliothèque pour qu'elle corresponde à votre image de
            marque.
        </p>

        <!-- CSS Variable Method -->
        <div class="mb-12">
            <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <span
                    class="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-sm">1</span>
                Via Variables CSS
            </h3>
            <p class="text-slate-600 dark:text-slate-400 mb-6">
                Le moyen le plus simple de personnaliser les couleurs est de redéfinir les variables CSS dans votre
                fichier CSS principal.
            </p>
            <div class="bg-slate-900 rounded-xl p-6 shadow-xl overflow-hidden">
                <pre class="text-sm text-indigo-300 font-mono"><code>/* style.css */
@import "webflow-ui/style.css";

:root {
  --primary: #6366f1;       /* Votre couleur primaire */
  --radius-lg: 0.5rem;      /* Arrondi des cartes */
  --background: #ffffff;
}

.dark {
  --primary: #818cf8;
  --background: #0f172a;
}</code></pre>
            </div>
        </div>

        <!-- JS Tokens Method -->
        <div class="mb-12">
            <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <span
                    class="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-sm">2</span>
                Via Design Tokens (Javascript)
            </h3>
            <p class="text-slate-600 dark:text-slate-400 mb-6">
                Vous pouvez accéder programmatiquement aux valeurs par défaut du thème pour les utiliser dans vos
                scripts ou vos composants.
            </p>
            <div class="bg-slate-900 rounded-xl p-6 shadow-xl overflow-hidden">
                <pre class="text-sm text-emerald-300 font-mono"><code>&lt;script setup&gt;
import { themeTokens } from 'webflow-ui'

// Accéder aux couleurs par défaut
const primaryColor = themeTokens.colors.primary.light
&lt;/script&gt;</code></pre>
            </div>
        </div>

        <!-- Tailwind v4 Method -->
        <div class="mb-12">
            <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <span
                    class="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 flex items-center justify-center text-sm">3</span>
                Intégration Tailwind CSS v4
            </h3>
            <p class="text-slate-600 dark:text-slate-400 mb-6">
                Si vous utilisez Tailwind v4, vous pouvez étendre le thème directement dans votre bloc
                <code>@theme</code>.
            </p>
            <div class="bg-slate-900 rounded-xl p-6 shadow-xl overflow-hidden">
                <pre class="text-sm text-amber-300 font-mono"><code>@theme {
  --color-brand: #7c3aed;
  --color-primary: var(--color-brand);
}</code></pre>
            </div>
        </div>
    </section>
</template>
