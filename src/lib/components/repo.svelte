<script lang="ts">
    let {
        image,
        title,
        description,
        tags,
        repolink = undefined,
        demolink = undefined,
    } = $props();
</script>

<div class="repo">
    <img class="image" src={image} />
    <div class="title">{title}</div>
    <div class="description">{description}</div>
    <div class="tags">
        {#each tags as tag}
            <div class="tag">{tag}</div>
        {/each}
    </div>
    <div class="buttons">
        {#if demolink}
            <a class="demo" href={demolink}>demo</a>
        {/if}
        {#if repolink}
            <a class="repo" href={repolink}>repo</a>
        {/if}
    </div>
</div>

<style>
    .repo {
        display: flex;
        flex-direction: column;
        max-width: 350px;
        padding: 10px;
        backdrop-filter: blur(2px);
        border-radius: 15px;
        border: #8080801f 1px solid;
        gap: 0.5rem;
    }

    .tags {
        display: inline-flex;
        flex-direction: row;
        flex-wrap: wrap;
        height: min-content;
        column-gap: 0.7rem;
    }

    .tags > * {
        opacity: 0.7;
        transition: opacity 0.1s ease;
        cursor: default;
    }

    .tags > :hover {
        opacity: 1;
    }

    .buttons {
        display: flex;
        gap: 0.75rem;
    }

    .buttons > * {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        padding: 10px;
        text-decoration: none;
        transition: opacity 0.1s ease;
        width: 100%;
    }

    .buttons > :hover {
        opacity: 0.7;
    }

    .buttons > .demo {
        background: #e6e6e6;
        color: var(--primary);
    }

    .buttons > .repo {
        background: var(--primary);
        color: var(--bg);
    }
</style>
