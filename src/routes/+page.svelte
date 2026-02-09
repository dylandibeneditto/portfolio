<script lang="ts">
	import {
		innerWidth,
		innerHeight,
		devicePixelRatio,
	} from "svelte/reactivity/window";
	import { startBackground } from "$lib/background.svelte";
	import { triggerAnimateEffect } from "$lib/animateLoad";
	import { onMount } from "svelte";
	import Header from "$lib/components/header.svelte";
	import Projects from "$lib/components/projects.svelte";

	let canvas: HTMLCanvasElement;

	onMount(() => {
		const stop = startBackground(canvas);
		console.log("Mounted");
		setTimeout(() => {
			triggerAnimateEffect();
		}, 600);
		return stop;
	});
</script>

<canvas
	bind:this={canvas}
	height={(innerHeight.current ?? 0) * (devicePixelRatio.current ?? 1)}
	width={(innerWidth.current ?? 0) * (devicePixelRatio.current ?? 1)}
></canvas>

<div class="page">
	<div></div>
	<Header />
	<div></div>
	<Projects />
</div>

<style>
	canvas {
		position: fixed;
		inset: 0;
		width: 100vw;
		height: 100vh;
		display: block;
		z-index: 0;
		pointer-events: none;
	}

	.page {
		display: grid;
		grid-template-rows: 10rem auto 5rem auto;
		z-index: 1;
		width: 100dvw;
		height: fit-content;
		justify-content: center;
		justify-items: center;
		background: none;
	}
</style>
