<script lang="ts">
</script>

<div class="header">
    <div class="topbar">
        <div class="name">Dylan DiBeneditto</div>
        <div class="title">Software Engineer</div>
    </div>
    <div class="description">
        Seventeen-year-old high school student who's interested in Computer
        Science, Engineering, and Math.
    </div>
    <div class="links">
        <a class="email" href="mailto:dibenedittod@gmail.com"
            >dibenedittod@gmail.com</a
        >
        <a class="github" href="https://github.com/dylandibeneditto">github</a>
    </div>
</div>

<style>
    .header {
        width: 30vw;
        min-width: 400px;
        position: absolute;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        left: 50vw;
        top: 10rem;
        padding: 1rem;
        transform: translateX(-50%);
        backdrop-filter: blur(2px);
    }

    .topbar {
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 3rem;
    }

    .links {
        display: flex;
        flex-direction: row;
        gap: 0.75rem;
    }

    .links > * {
        color: var(--secondary);
        text-decoration: none;
        opacity: 0.5;
        transition: opacity 0.1s ease;
    }

    .links > *:hover {
        opacity: 1;
    }
</style>
