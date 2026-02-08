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
    <div class="data">
        <div class="title">{title}</div>
        <div class="description">{description}</div>
        <div class="tags">
            {#each tags as tag}
                <div class="tag">{tag}</div>
            {/each}
        </div>
        <div class="buttons">
            {#if demolink}
                <a class="demo" target="_blank" href={demolink}>demo</a>
            {/if}
            {#if repolink}
                <a class="repo" target="_blank" href={repolink}>repo</a>
            {/if}
        </div>
    </div>
</div>

<style>
    .repo {
        display: flex;
        flex-direction: column;
        backdrop-filter: blur(2px);
        border-radius: 15px;
        gap: 0.5rem;
        height: 100%;
        border: #8080801f 1px solid;

        @supports (corner-shape: squircle) {
            corner-shape: squircle;
            border-radius: 30px;
        }
    }

    .data {
        flex: 1;
        padding: 1rem;
        padding-top: 0;
        display: grid;
        gap: inherit;
        grid-template-rows: auto 1fr auto auto;
    }

    .title {
        font-size: 20px;
    }

    .description {
        flex: 1 1 auto;
        min-height: 0;
        line-height: 1.2;
        letter-spacing: 0px;
    }

    .tags {
        flex-shrink: 0;
        display: inline-flex;
        flex-direction: row;
        flex-wrap: wrap;
        height: min-content;
        column-gap: 0.7rem;
    }

    .tags > * {
        flex-shrink: 0;
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
        align-self: end;
    }

    .buttons > * {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        border-radius: 10px;
        text-decoration: none;
        transition: opacity 0.1s ease;
        width: 100%;

        @supports (corner-shape: squircle) {
            corner-shape: squircle;
            border-radius: 30px;
        }
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
