// Video and caption data
const videos = [
  { src: "Videos/Video1.mp4", caption: "Breaking Bad - before color correction" },
  { src: "Videos/Video2.mp4", caption: "Breaking Bad - after color correction" },
  { src: "Videos/Video3.mp4", caption: "The Fast and the Furious - before color correction" },
  { src: "Videos/Video4.mp4", caption: "The Fast and the Furious - after color correction" },
  { src: "Videos/Video5.mp4", caption: "Mad Max: Fury Road - before color correction" },
  { src: "Videos/Video6.mp4", caption: "Mad Max: Fury Road - after color correction" }
];

let currentVideoIndex = 0;
let playbackStarted = false;

function handleClick() {
  const videoPlayer = document.getElementById("video-player");
  const audioPlayer = document.getElementById("audio-player");
  const caption = document.getElementById("caption");
  const overlay = document.getElementById("transition-overlay");

  // Start both video and audio on the first click
  if (!playbackStarted) {
    playbackStarted = true;
    audioPlayer.play();
    videoPlayer.play();
    return;
  }

  // Fade out the video, caption, and overlay for transition
  overlay.style.opacity = 1;
  videoPlayer.style.opacity = 0;
  caption.style.opacity = 0;

  setTimeout(() => {
    // Update to the next video and caption
    const nextVideoIndex = (currentVideoIndex + 1) % videos.length;
    const nextVideo = videos[nextVideoIndex];

    // Store current video time in localStorage
    localStorage.setItem(`videoTime${currentVideoIndex}`, videoPlayer.currentTime);

    // Update video and caption
    videoPlayer.src = nextVideo.src;
    caption.textContent = nextVideo.caption;

    // Restore the playback time of the next video from localStorage
    const previousTime = localStorage.getItem(`videoTime${nextVideoIndex}`);
    if (previousTime) {
      videoPlayer.currentTime = parseFloat(previousTime);
    } else {
      videoPlayer.currentTime = 0;  // If no saved time, start from the beginning
    }

    // Fade back in the video, caption, and overlay
    videoPlayer.style.opacity = 1;
    caption.style.opacity = 1;
    overlay.style.opacity = 0;

    // Update current video index and start playback
    currentVideoIndex = nextVideoIndex;
    videoPlayer.play();
  }, 500); // Duration of fade-out
}

// Restart video if it ends before the next click
const videoPlayer = document.getElementById("video-player");
videoPlayer.addEventListener("ended", () => {
  localStorage.setItem(`videoTime${currentVideoIndex}`, 0); // Reset time for this video
  videoPlayer.currentTime = 0;
  videoPlayer.play();
});