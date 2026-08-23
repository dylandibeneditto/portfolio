<script lang="ts">
    import resume from "$lib/assets/resume.pdf";
</script>

<div class="footer animate-on-load">
    <div class="name hidden">Dylan DiBeneditto</div>
    <div class="title hidden">Electrical Engineer</div>
    <div></div>
    <a class="email hidden" href="mailto:dibenedittod@gmail.com" target="_blank"
        >dibenedittod@gmail.com</a
    >
    <a
        class="github hidden"
        href="https://github.com/dylandibeneditto"
        target="_blank">github</a
    >
    <a class="resume hidden" href={resume} target="_blank">resume</a>
    <a class="photos hidden" href="/photos" target="_blank">photos</a>
</div>

<style>
    .footer {
        width: 70vw;
        min-width: 780px;
        padding: 1rem;
        height: min-content;
        backdrop-filter: blur(2px);
        display: grid;
        grid-template-columns: auto auto 1fr auto auto auto auto;
        gap: 3rem;
        padding-bottom: 5rem;
    }

    .footer > a {
        color: var(--secondary);
        text-decoration: none;
        transition: opacity 0.3s ease;
    }

    .footer > a:hover {
        opacity: 0.7 !important;
    }

    @media (max-width: 900px) {
        .footer > :nth-child(1),
        .footer > :nth-child(2),
        .footer > :nth-child(3) {
            display: none;
        }

        .footer {
            grid-template-columns: auto auto auto auto;
        }
    }
</style>
