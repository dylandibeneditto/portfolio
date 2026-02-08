export function startBackground(canvas: HTMLCanvasElement) {
	const ctx = canvas.getContext('2d');
	let frame: number;
	let mouse = {x: 0, y: 0}

	function draw(t: number) {
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		const time = t * 0.001;

		// res tall grid
		const resY = 30;
		const resX = resY * (canvas.width / canvas.height);

		const scale = 0.1;
		const multiplier = 75;
		const k = 3000;
		const distMax = 75;

		for(let x = 0; x < resX; x++) {
			for(let y = 0; y < resY; y++) { // TODO: lots of indents, maybe refactor this
				let px = (x-resX/8) / (resX*0.75) * canvas.width;
				let py = (y-resY/8) / (resY*0.75) * canvas.height;

				const n = perlin(x * scale, y * scale, time * scale) * Math.PI * 2;

				px += Math.cos(n) * multiplier;
				py += Math.sin(n) * multiplier;
				
				const dx = mouse.x - (px);
				const dy = mouse.y - (py);

				const dist = Math.max(Math.sqrt(dx*dx + dy*dy), distMax);

				const dirx = dx / dist
				const diry = dy / dist

				px += -dirx * (k / dist);
				py += -diry * (k / dist);

				ctx.beginPath();
				ctx.arc(px, py, window.devicePixelRatio, 0, 2*Math.PI);
				ctx.fillStyle = "rgba(0,0,0,"+(n/(Math.PI*6)+0.1)+")";
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
		mouse = { x: event.clientX*window.devicePixelRatio, y: event.clientY*window.devicePixelRatio };
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

//
// PERLIN NOISE IMPLEMENTATION
//
const PERM = new Uint8Array(512);
const P = new Uint8Array([
	151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,
	140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,
	247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,
	57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,
	74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,
	60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,
	65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,
	200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,
	52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,
	207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,
	119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,
	129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,
	218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,
	81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,
	184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,
	222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180
]);

for (let i = 0; i < 512; i++) PERM[i] = P[i & 255];

const fade = (t: number) => t * t * t * (t * (t * 6 - 15) + 10);
const lerp = (a: number, b: number, t: number) => a + t * (b - a);

function grad(hash: number, x: number, y: number, z: number) {
	const h = hash & 15;
	const u = h < 8 ? x : y;
	const v = h < 4 ? y : h === 12 || h === 14 ? x : z;
	return ((h & 1) ? -u : u) + ((h & 2) ? -v : v);
}

function perlin(x: number, y: number, z: number): number {
	const X = Math.floor(x) & 255;
	const Y = Math.floor(y) & 255;
	const Z = Math.floor(z) & 255;

	x -= Math.floor(x);
	y -= Math.floor(y);
	z -= Math.floor(z);

	const u = fade(x);
	const v = fade(y);
	const w = fade(z);

	const A  = PERM[X] + Y;
	const AA = PERM[A] + Z;
	const AB = PERM[A + 1] + Z;
	const B  = PERM[X + 1] + Y;
	const BA = PERM[B] + Z;
	const BB = PERM[B + 1] + Z;

	return lerp(
		lerp(
			lerp(grad(PERM[AA], x, y, z),     grad(PERM[BA], x - 1, y, z),     u),
			lerp(grad(PERM[AB], x, y - 1, z), grad(PERM[BB], x - 1, y - 1, z), u),
			v
		),
		lerp(
			lerp(grad(PERM[AA + 1], x, y, z - 1),     grad(PERM[BA + 1], x - 1, y, z - 1),     u),
			lerp(grad(PERM[AB + 1], x, y - 1, z - 1), grad(PERM[BB + 1], x - 1, y - 1, z - 1), u),
			v
		),
		w
	) * 0.5 + 0.5; // normalize to 0 → 1
}
