<script lang="ts">
    import resume from "$lib/assets/resume.pdf";
</script>

<div class="header animate-on-load">
    <div class="topbar hidden">
        <div class="name">Dylan DiBeneditto</div>
        <div class="title">Electrical Engineer</div>
    </div>
    <div class="description hidden">
        College freshman who's interested in Electrical Engineering,
        Computer Science, and Math.
    </div>
    <div class="description hidden">
        Attending Virginia Tech for a Bachelors in Electrical Engineering.
    </div>
    <div class="links animate-on-load hidden">
        <a
            class="email hidden"
            target="_blank"
            href="mailto:dyland26@vt.edu">dyland26@vt.edu</a
        >
        <a
            class="github hidden"
            target="_blank"
            href="https://github.com/dylandibeneditto">github</a
        >
        <a class="resume hidden" target="_blank" href={resume}>resume</a>
        <a class="photos hidden" href="/photos" data-sveltekit-reload>photos</a>
    </div>
</div>

<style>
    .header {
        width: 30vw;
        min-width: 500px;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding: 1rem;
        height: min-content;
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
        transition: all 0.3s ease;
    }

    .links > *:hover {
        opacity: 0.7 !important;
    }
</style>
