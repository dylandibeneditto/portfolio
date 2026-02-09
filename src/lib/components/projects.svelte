<script lang="ts">
    import Repo from "$lib/components/repo.svelte";
</script>

<div class="repos animate-on-load hidden">
    <Repo
        image="src/lib/assets/repo-images/fmov.png"
        title="fmov"
        description="What started as a project to create chess videos programmatically turned into the most efficient python library for generating videos. I simply wanted something that would handle the interactions between FFmpeg and python, without having to hard-code shell commands. The library is simple, taking in image objects from PIL, piping them into FFmpeg, handling all of the flags for rendering, and finally assembling the video with any sound effects. Got to learn a lot about the process of creating effective projects for real users and writing documentation. 'pip install fmov'"
        tags={["Python", "FFmpeg", "PyPi", "PIL"]}
        repolink="https://github.com/dylandibeneditto/fmov"
    />
    <Repo
        image="src/lib/assets/repo-images/printjava.png"
        title="PrintJava"
        description="As president of my high school's Computer Science National Honor Society, we submitted a grant to the district for a 3D printer. Upon recieving the printer, I took it upon myself to create a project which would allow controlling the printer through code. This project was difficult, as there are no dependencies as the project must be installed manually to work with the software we use in school. That means I had to work out the logic: from turning a 3D function into a list of triangles, down to converting my abstracted Java object's data straight into binary files. The model seen above is the Mandelbulb Fractal, and was generated with PrintJava. This library is now used as educational material for my high school's Computer Math and AP Computer Science classes."
        tags={["Java"]}
        repolink="https://github.com/dylandibeneditto/printjava"
    />
    <Repo
        image="src/lib/assets/repo-images/waldron-catering.png"
        title="Waldron Catering"
        description="Created a functional website for a catering business. Got to learn a lot about setting up and deploying websites, along with the design that goes into creating a professional feeling, responsive site. Making sure to account for all the small failure points that could occur and turn away customers was my top priority in designing the site, and I got a taste of SEO optimization too."
        tags={["HTML", "CSS", "JavaScript"]}
        demolink="https://waldron-catering.com"
    />

    <Repo
        image=""
        title="Compiler"
        description=""
        tags={["Python", "Assembly"]}
        repolink="https://github.com/dylandibeneditto/compiler"
    />

    <Repo
        image=""
        title="MNIST Desmos Character Recognition"
        description="Winner of the 2025 Desmos Art Competition for the 17-18yo range"
        tags={["Python", "Keras", "Neural Networks", "Machine Learning"]}
        demolink="https://www.desmos.com/calculator/lylglzov6x"
        repolink="https://github.com/dylandibeneditto/mnist-desmos"
    />

    <Repo
        image=""
        title="Null36 Split Keyboard"
        description=""
        tags={[
            "PCB Design",
            "Product Design",
            "CAD (Fusion360)",
            "Electronics",
        ]}
        repolink="https://github.com/dylandibeneditto/null36"
    />
</div>

<style>
    .repos {
        width: 80vw;
        display: grid;
        grid-template-columns: repeat(auto-fit, 500px);
        gap: 1rem;
        justify-content: center;
        align-items: stretch;
    }
</style>
