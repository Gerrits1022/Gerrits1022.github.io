// Array of videos and captions
const videos = [
  { src: "Videos/video1.mp4", caption: "Breaking Bad - Before" },
  { src: "Videos/video2.mp4", caption: "Breaking Bad - After" },
  { src: "Videos/Video3.mp4", caption: "The Fast and the Furious - Before" },
  { src: "Videos/video4.mp4", caption: "The Fast and the Furious - After" },
  { src: "Videos/video5.mp4", caption: "Mad Max - Before" },
  { src: "Videos/video6.mp4", caption: "Mad Max - After" }
];

let currentVideoIndex = 0;
let videoTimes = new Array(videos.length).fill(0); // Array to store the last playback time of each video

function changeVideo() {
  const videoPlayer = document.getElementById("video-player");
  const caption = document.getElementById("caption");
  const videoContainer = document.getElementById("video-container");

  // Store the current playback time of the video
  videoTimes[currentVideoIndex] = videoPlayer.currentTime;

  // Add the scale-up effect
  videoContainer.classList.add("scale-up");

  // Start fade-out effect on the video and caption
  videoPlayer.classList.add("fade-out");
  caption.classList.add("fade-out");

  // After the fade-out transition is complete (0.5 seconds), change the video
  setTimeout(() => {
    // Increment the video index
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;

    // Update the video source and caption
    videoPlayer.src = videos[currentVideoIndex].src;
    caption.textContent = videos[currentVideoIndex].caption;

    // Restart the video, but continue from the stored time
    videoPlayer.load();
    videoPlayer.currentTime = videoTimes[currentVideoIndex]; // Resume from the last saved position
    videoPlayer.play();

    // Remove the fade-out and scale-up class after transition
    videoPlayer.classList.remove("fade-out");
    caption.classList.remove("fade-out");

    // Apply the scale-down effect to bring everything back to normal
    videoContainer.classList.remove("scale-up");
    videoContainer.classList.add("scale-down");

    // After the scale-down transition (1s), remove the scale-down effect
    setTimeout(() => {
      videoContainer.classList.remove("scale-down");
    }, 1000);
  }, 500); // The timeout should match the fade-out duration
}