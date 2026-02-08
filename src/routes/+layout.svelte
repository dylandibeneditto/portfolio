<script lang="ts">
	import favicon from "$lib/assets/favicon.svg";
	import "$lib/global.css";

	let { children } = $props();
</script>

<svelte:head>
	<title>Dylan DiBeneditto</title>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
