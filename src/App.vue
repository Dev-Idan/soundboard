<template>
	<v-app>
		<v-app-bar app color="grey darken-4" height="80px">
			<h3 class="indigo--text text--lighten-2 text-h4">Soundboard</h3>
		</v-app-bar>

		<v-main class="grey lighten-2">
			<v-container class="py-15 px-sm-10" fluid>
				<v-row justify="center">
					<v-col cols="12" sm="6" md="4" lg="3" xl="2" v-for="sound in soundsList" :key="sound.title">
						<the-sound-card
						:soundTitle="sound.title"
						:soundPath="sound.path"
						></the-sound-card>
					</v-col>
				</v-row>
			</v-container>
		</v-main>

	</v-app>
</template>

<script>
import TheSoundCard from '@/components/TheSoundCard.vue';

import tadaSound from '@/assets/audio/tada.mp3';
import badumtssSound from '@/assets/audio/badumtss.mp3';
import booSound from '@/assets/audio/boo.mp3';
import drumrollSound from '@/assets/audio/drumroll.mp3';
import sadTromboneSound from '@/assets/audio/trombone.mp3';

export default {
	components: {
		TheSoundCard,
	},
	data: () => ({
		soundsList: [
			{
				title: 'TADA',
				path: tadaSound,
			},
			{
				title: 'BA DUM TSS',
				path: badumtssSound,
			},
			{
				title: 'BOO',
				path: booSound,
			},
			{
				title: 'DRUMROLL',
				path: drumrollSound,
			},
			{
				title: 'SAD TROMBONE',
				path: sadTromboneSound,
			},
		]
	}),
};
</script>

<style>
	:root {
		overflow: auto;
	}
</style>
