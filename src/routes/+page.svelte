<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { randomAscii } from '$lib/random_ascii';

	const fetch_ascii: { state: null | { content: string; label: string } } = $state({ state: null });

	onMount(() => {
		fetch_ascii.state = randomAscii();
	});

	function typewriter(
		node: HTMLElement,
		{ speed = 1, delay = 0 }: { speed?: number; delay?: number }
	) {
		const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

		if (!valid) {
			throw new Error(`This transition only works on elements with a single text node child`);
		}

		const text = node.textContent || ''; // Add a default value to avoid error
		const duration = text.length / (speed * 0.01);

		return {
			duration,
			delay: delay,
			tick: (t) => {
				const i = ~~(text.length * t);
				node.textContent = text.slice(0, i);
			}
		};
	}
</script>

<div class="p-8 sm:p-16">
	{#if window_loaded.state}
		<section class="">
			<span class="text-gray">[tobybridle@home resume]$&ThinSpace;</span>
			<span in:typewriter={{ speed: 1.2 }}>tobyfetch</span>&NoBreak;
			<pre class="cursor inline">█</pre>
		</section>
	{/if}
	<br />
	<br />
	{#if fetch_ascii.state !== null}
		<section
			class="flex h-[35%] w-full flex-col items-center gap-16 md:flex-row md:items-start"
			in:fade={{ delay: 1200 }}
		>
			<pre
				class="aspect-square max-w-fit overflow-hidden text-clip whitespace-pre-wrap text-center text-xs max-[450px]:hidden"
				title={fetch_ascii.state.label}
				in:typewriter={{
					speed: fetch_ascii.state.content.length / 3,
					delay: 1200
				}}>{fetch_ascii.state.content}</pre>
			<div class="flex w-max flex-col gap-2">
				<h1
					class="mb-2 min-h-[2ch] border-x-0 border-b-2 border-t-0 border-dashed py-2 [border-color:var(--base02)] [width:fit-content]"
					id="about-me"
				>
					tobybridle
				</h1>
				<ul>
					<li>
						<h3 class="emphasised-text">Email:</h3>
						<a href="mailto:bridle.toby@gmail.com">bridle.toby@gmail.com</a>
					</li>
					<li>
						<h3 class="emphasised-text">Location:</h3>
						United Kingdom
					</li>
					<li>
						<h3 class="emphasised-text">GitHub:</h3>
						<a href="https://github.com/tobybridle">@TobyBridle</a>
					</li>
					<li>
						<h3 class="emphasised-text">Location:</h3>
						United Kingdom
					</li>
				</ul>
			</div>
		</section>
	{/if}
</div>

<style>
	ul > li > h3 {
		min-width: 10ch;
	}

	.cursor {
		position: absolute;
		animation: blink 530ms infinite steps(2);
	}

	@keyframes blink {
		0% {
			opacity: 0;
		}
	}
</style>
