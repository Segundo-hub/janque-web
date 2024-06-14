<script setup lang="ts">
const posts = ref<any[]>([]);

const { data } = await useAsyncData('posts', async () => {
    const posts = await queryContent('articles')
        .only(['title', 'description', 'img', 'slug', 'author', 'date', 'time', 'avatar', 'createdAt', '_path'])
        .sort({ createdAt: 1 })
        .find();

    return posts.map(post => ({
        ...post,
        slug: post._path?.split('/').at(-1),
    }));
});

posts.value = data.value || [];
</script>

<template>
    <div>
        <h1>Blog</h1>
        <div>
            <ul>
                <template v-for="post in posts">
                    <li>
                        <NuxtLink :to="`/blog/${post.slug}`">
                            {{ post.title }}
                        </NuxtLink>
                    </li>
                </template>
            </ul>
        </div>
    </div>
</template>
