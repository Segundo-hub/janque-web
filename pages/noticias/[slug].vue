<script setup lang="ts">
const route = useRoute();
const { data: page } = await useAsyncData(route.path, () =>
    queryContent(route.path).findOne()
);
if (!page.value) {
    throw createError({ statusCode: 404, statusMessage: "Page not found" });
}
</script>

<template>
    <section class="py-6">
        <div class="p-container">
            <h1 class="text-center">Noticias {{ JSON.stringify(route) }}</h1>
        </div>
    </section>
</template>
