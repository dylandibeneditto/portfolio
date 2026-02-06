<script lang="ts">
	import {
		innerWidth,
		innerHeight,
		devicePixelRatio,
	} from "svelte/reactivity/window";
	import { startBackground } from "$lib/background.svelte";
	import { onMount } from "svelte";
	import Header from "$lib/components/header.svelte";

	let canvas: HTMLCanvasElement;

	onMount(() => {
		const stop = startBackground(canvas);
		return stop;
	});
</script>

<canvas
	bind:this={canvas}
	height={(innerHeight.current ?? 0) * (devicePixelRatio.current ?? 1)}
	width={(innerWidth.current ?? 0) * (devicePixelRatio.current ?? 1)}
></canvas>

<style>
	canvas {
		position: fixed;
		inset: 0;
		width: 100vw;
		height: 100vh;
		display: block;
		z-index: -1;
	}
</style>
