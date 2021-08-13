<template>
	<div>
		<audio :src="soundPath" ref="sound"></audio>
		<v-btn
		color="indigo lighten-2"
		class="pa-15 white--text rounded-lg text-md-h4 text-h5"
		style="width: 100%;"
		elevation="5"
		x-large
		@click="playSound"
	>
		{{ soundTitle }}
	</v-btn>
	</div>
</template>

<script>
export default {
	props: {
		soundPath: {
			type: String,
			required: true,
		},
		soundTitle: {
			type: String,
			required: true,
		},
	},
	methods: {
		playSound() {
			// mute all ongoing sounds
			[...document.querySelectorAll('audio')].forEach(this.resetSound);

			// play sound
			this.$refs.sound.play();
		},
		resetSound(soundElement) {
			soundElement.pause();
			soundElement.currentTime = 0;
		}
	}
}
</script>