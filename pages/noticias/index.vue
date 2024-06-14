<script setup lang="ts">
const { data: notices } = await useAsyncData('news', async () => {
    const notices = await queryContent('notices')
        .only(['title', 'description', 'img', 'slug', 'author', 'date', 'time', 'avatar', 'createdAt', '_path'])
        .sort({ createdAt: 1 })
        .find();

    return (notices || []).map(post => ({
        ...post,
        slug: post._path?.split('/').at(-1),
    }));
});
</script>

<template>
    <div>
        <h1>Blog</h1>
        <div>
            <ul>
                <template v-for="post in notices">
                    <li>
                        <NuxtLink :to="`/noticias/${post.slug}`">
                            {{ post.title }}
                        </NuxtLink>
                    </li>
                </template>
            </ul>
        </div>
    </div>
</template>
