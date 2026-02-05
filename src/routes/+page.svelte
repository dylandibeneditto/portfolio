<script lang="ts">
	import { innerWidth, innerHeight } from "svelte/reactivity/window";
</script>

<canvas height={innerHeight.current} width={innerWidth.current}></canvas>

<style>
	* {
		margin: 0;
		padding: 0;
	}

	canvas {
		position: fixed;
		inset: 0;
		width: 100vw;
		height: 100vh;
		display: block; /* removes inline-element baseline gap */
		z-index: -1;
	}
</style>
