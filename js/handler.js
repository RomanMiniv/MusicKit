document.addEventListener("DOMContentLoaded", function () {

	function MarkAudio (elem) {

		if (!elem) return;

		const prevMarkAudio = document.querySelector("li[class='OST activeAudio']");
		
		if (prevMarkAudio)
			prevMarkAudio.classList.remove("activeAudio");

		elem.classList.add("activeAudio");

	}

	function StopPlayAudio (audio) {
		
		if (!audio) return;

		audio.pause();
		audio.currentTime = 0.0;

		audio.classList.remove("play");

	}

	function PlayOst (e) {

		const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
		if (!audio) return;	// not found audio with this code

		const prevAudio = document.querySelector("audio[class='play']");
		StopPlayAudio(prevAudio);

		audio.volume = 0.1;
		audio.play();
		audio.classList.add("play");

		let li = document.querySelector(`li[data-key="${e.keyCode}"]`);
		MarkAudio(li);

	}

	document.body.addEventListener("keydown", PlayOst);

});
