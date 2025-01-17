import type { Alpine } from '@leanadmin/alpine-typescript';

// Replace all occurrences of "AlpinePlugin" with your plugin's name
const AlpinePlugin = {
	start() {
		//Your plugin's code goes here.
	}
}

const alpine = window.deferLoadingAlpine || ((callback: Function) => callback());

window.AlpinePlugin = AlpinePlugin;

window.deferLoadingAlpine = function (callback: Function) {
	window.AlpinePlugin.start();
	alpine(callback);
};

declare global {
	interface Window {
		Alpine: Alpine;
		deferLoadingAlpine: any;
		AlpinePlugin: typeof AlpinePlugin;
	}
}

export default AlpinePlugin;
