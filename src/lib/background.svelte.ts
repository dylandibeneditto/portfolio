export function startBackground(canvas: HTMLCanvasElement) {
	const ctx = canvas.getContext('2d');
	let frame: number;
	let mouse = {x: 0, y: 0}

	function draw(t: number) {
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		const time = t *= 0.01;

		// res x res grid
		const resolution = 20;

		for(let x = 0; x < resolution; x++) {
			for(let y = 0; y < resolution; y++) {
				const pos = {
					x: x / (resolution) * canvas.width,
					y: y / (resolution) * canvas.width,
				}
				
				const dx = mouse.x - pos.x;
				const dy = mouse.y - pos.y;

				const dist = Math.max(Math.sqrt(dx*dx + dy*dy), 100);

				const dirx = dx / dist
				const diry = dy / dist

				const k = 3000
				const m = {
					x: -dirx * (k / dist),
					y: -diry * (k / dist)
				}

				ctx.beginPath();
				ctx.arc(pos.x+m.x, pos.y+m.y, 1.5*window.devicePixelRatio, 0, 2*Math.PI);
				ctx.fillStyle = "rgba(0,0,0,0.3)";
				ctx.fill();
			}
		}

		frame = requestAnimationFrame(draw);
	}

	function handleVisibility() {
		if (document.hidden) cancelAnimationFrame(draw);
		else frame = requestAnimationFrame(draw);
	}
	
	function mousemove(event) {
		mouse = { x: event.pageX*window.devicePixelRatio, y: event.pageY*window.devicePixelRatio };
	}

	document.addEventListener("visibilitychange", handleVisibility);
	document.addEventListener("mousemove", mousemove);
	frame = requestAnimationFrame(draw);

	return () => {
		cancelAnimationFrame(draw)
		document.removeEventListener("visibilitychange")
	}
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
