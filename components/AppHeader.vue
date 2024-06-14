<script setup lang="ts">
const menu = [
    {
        id: 1,
        label: "Inicio",
        path: "/",
    },
    {
        id: 2,
        label: "Noticias",
        path: "/noticias",
    },
    {
        id: 3,
        label: "Nosotros",
        path: "/nosotros",
    },
    {
        id: 4,
        label: "Historia",
        path: "/historia",
    },
    {
        id: 5,
        label: "Blog",
        path: "/blog",
    },
    
];  
</script>

<template>
    <header class="w-full page-header">
        <div class="p-container flex items-center justify-between py-8">
            <div>
                <BrandLogotype />
            </div>
            <nav>
                <ul class="flex items-center gap-8">
                    <template v-for="item in menu">
                        <li>
                            <NuxtLink
                                :to="item.path"
                                class="py-2 text-orange-500"
                            >
                                {{ item.label }}
                            </NuxtLink>
                        </li>
                    </template>
                </ul>
            </nav>
            <div>
                Search
            </div>
        </div>
    </header>
</template>
