<script setup lang="ts">
const route = useRoute();
const slug = route.params.slug as string;

const content = ref<HTMLElement>();

const { data: page } = await useAsyncData(slug, async () => {
    const post = await queryContent(`articles`)
        .where({ _path: `/articles/${slug}` })
        .findOne();

    return {
        ...post,
        links: (post.body?.toc?.links || []).map(link => ({ ...link, target: `#${link.id}` })),
    };
});

if (!page.value) {
    throw createError({ statusCode: 404, statusMessage: 'Page not found' });
}

const selectTarget = (target: string) => {
    smoothScroll(document.getElementById(target), { top: -20 });
};

onMounted(() => {
    const options = {
        root: null,
        threshold: [1],
    };
    const state = {
        elements: Array.from(content.value?.querySelectorAll('h2[id]') || []),
        links: Array.from(content.value?.querySelectorAll('li[data-id]') || []),
        current: null as string | null,
        setCurrent: (id: string) => {
            state.current = id;
            for (const el of state.links) {
                el.classList.toggle('text-orange-500', el.getAttribute('data-id') === id);
            }
        },
    };

    let scrollY = 0;
    const observer = new IntersectionObserver(items => {
        items.forEach(item => {
            const currentY = window.scrollY || document.documentElement.scrollTop;
            const isDownScroll = currentY > scrollY;

            if (item.isIntersecting) {
                const id = item.target.getAttribute('id') as string;
                if (!isDownScroll) {
                    state.setCurrent(id);
                } else if (state.current !== id) {
                    state.setCurrent(id);
                }
            }

            scrollY = currentY <= 0 ? 0 : currentY;
        });
    }, options);

    state.elements.forEach(link => observer.observe(link));

    return () => {
        state.elements.forEach(link => observer.unobserve(link));
    };
});
</script>

<template>
    <section class="py-6">
        <div class="p-container">
            <h1>{{ page?.title }}</h1>
        </div>
    </section>
    <section class="py-4">
        <div class="p-container flex gap-10" ref="content">
            <ContentRenderer v-if="page?.body" :value="page" id="post-content" />
            <div class="nav w-80 flex-shrink-0">
                <div class="sticky top-10">
                    <ul class="bg-slate-100 rounded-md p-6 ">
                        <template v-for="link in page?.links">
                            <li :data-id="link.id">
                                <a :href="link.target" @click="selectTarget(link.id)">{{ link.text }}</a>
                            </li>
                        </template>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
#post-content h2 {
    font: normal normal 600 1.8rem/1.5 'Titillium Web';
    color: rgb(216, 141, 0);
    margin-bottom: 0.25em;
}
#post-content p {
    font: normal normal 500 1.125rem/1.75 'Open Sans';
    margin-bottom: 1em;
}
</style>
