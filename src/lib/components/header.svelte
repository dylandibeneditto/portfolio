<div class="header animate-on-load">
    <div class="topbar hidden">
        <div class="name">Dylan DiBeneditto</div>
        <div class="title">Software Engineer</div>
    </div>
    <div class="description hidden">
        Seventeen-year-old high school student who's interested in Computer
        Science, Engineering, and Math.
    </div>
    <div class="links animate-on-load hidden">
        <a
            class="email hidden"
            target="_blank"
            href="mailto:dibenedittod@gmail.com">dibenedittod@gmail.com</a
        >
        <a
            class="github hidden"
            target="_blank"
            href="https://github.com/dylandibeneditto">github</a
        >
    </div>
</div>

<style>
    .header {
        width: 30vw;
        min-width: 400px;
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
        opacity: 0.7;
        transition: opacity 0.1s ease;
    }

    .links > *:hover {
        opacity: 1;
    }
</style>
