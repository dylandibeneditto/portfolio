<script lang="ts">
    import Repo from "$lib/components/repo.svelte";
</script>

<div class="repos animate-on-load">
    <Repo
        image="repo-images/fmov.png"
        title="fmov"
        description="What started as a project to create chess videos programmatically turned into the most efficient python library for generating videos, currently at 10k+ downloads on PyPi. I simply wanted something that would handle the interactions between FFmpeg and python, without having to hard-code shell commands. The library is simple, taking in image objects from PIL, piping them into FFmpeg, handling all of the flags for rendering, and finally assembling the video with any sound effects. Got to learn a lot about the process of creating effective projects for real users and writing documentation. 'pip install fmov'"
        tags={["Python", "FFmpeg", "PyPi", "PIL"]}
        demolink="https://dylandibeneditto.github.io/fmov"
        repolink="https://github.com/dylandibeneditto/fmov"
    />
    <Repo
        image="repo-images/k42.png"
        title="K42"
        description="A custom wireless split ergonomic mechanical keyboard with a 42 key layout (21 per half). Built around a bare-die nRF52840 MCU, with haptic feedback via a DRV2605L driver and LRA actuator, per-half OLED displays, and Kailh Choc V1 hotswap sockets. Designed in KiCad, from schematic capture through JLCPCB PCBA. Worked with impedance matching networks using a pi filter as well as trace antenna for 2.4GHz BLE connectivity. Also evaluated the margins on selling the completed keyboard pre-assembled, and found the difficulty between trying to stay competitive in the market and provide a scalable completed product."
        tags={["PCB Design", "KiCad", "Electronics", "Embedded Firmware", "CAD (Fusion360)"]}
        repolink="https://github.com/dylandibeneditto/k42"
    />
    <Repo
        image="repo-images/printjava.png"
        title="PrintJava"
        description="As president of my high school's Computer Science National Honor Society, we submitted a grant to the district for a 3D printer. Upon recieving the printer, I took it upon myself to create a project which would allow controlling the printer through code. This project was difficult, as there are no dependencies since the project must be installed manually to work with the software we use in school. That means I had to work out the logic—from turning a 3D function into a list of triangles, all the way down to converting my abstracted Java object's data straight into binary files. The model seen above is the Mandelbulb Fractal, and was generated with PrintJava. This library is now used as educational material for my high school's Computer Math and AP Computer Science classes."
        tags={["Java"]}
        repolink="https://github.com/dylandibeneditto/printjava"
    />
    <Repo
        image="repo-images/waldron-catering.png"
        title="Waldron Catering"
        description="Created a functional website for a catering business. Got to learn a lot about setting up and deploying websites, along with the design that goes into creating a professional feeling, responsive site. Making sure to account for all the small failure points that could occur and turn away customers was my top priority in designing the site, and I got a taste of SEO optimization too."
        tags={["HTML", "CSS", "JavaScript"]}
        demolink="https://waldron-catering.com"
    />

    <!-- <Repo -->
    <!--     image="" -->
    <!--     title="Compiler" -->
    <!--     description="" -->
    <!--     tags={["C++", "Assembly"]} -->
    <!--     repolink="https://github.com/dylandibeneditto/compiler" -->
    <!-- /> -->

    <Repo
        image="repo-images/desmos.png"
        title="MNIST Desmos Character Recognition"
        description="Winner of the 2025 Desmos Art Competition for the 17-18yo range. Built out the MNIST Character recognition inside of a graphing calculator. I trained the model in python using keras, came up with a way to export the weights and biases of the model, and built out the logic of a Multi-layer Perceptron Neural Net."
        tags={["Python", "Keras", "Neural Networks", "Machine Learning"]}
        demolink="https://www.desmos.com/calculator/lylglzov6x"
        repolink="https://github.com/dylandibeneditto/mnist-desmos"
    />

    <Repo
        image="repo-images/null36.png"
        title="Null36 Split Keyboard"
        description="A fun project to get me into the world of electronics and hardware. Got to design my own wireless split keyboard that perfectly fit my hands and allowed me to customize my layout to maximize my productivity when programming. Created everything from scratch: the physical layout of the keys, wiring of the PCB, case, firmware, and key layout. Also got my first experience sending designs to manufacturers for both PCB and 3D printing. I found the process of turning my own ideas into a physically tangible product to be very satisfying."
        tags={[
            "PCB Design",
            "CAD (Fusion360)",
            "Electronics",
            "C",
            "Embedded Firmware",
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
