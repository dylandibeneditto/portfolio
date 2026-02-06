<script lang="ts">
    import Repo from "$lib/components/repo.svelte";
</script>

<div class="repos">
    <Repo
        image=""
        title="hello world project"
        description="this project is about hello world blah blah blah hello world blah blah"
        tags={["hello", "world", "hello", "hello", "hello", "world", "world"]}
        repolink="google.com"
        demolink="google.com"
    />
</div>

<style>
    .repos {
        max-width: 800px;
        width: 80vw;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1rem;
    }
</style>
