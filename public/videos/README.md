# Hero Video Background

## Setup Instructions

This folder contains the hero section background video for VeriCheck's website.

### Current Status
- `hero-bg.mp4` is currently a placeholder file
- The hero section will fall back to using `/public/images/textiles.jpg` as a poster image until a proper video is added

### Adding Your Video

To add a high-definition video of a modern laboratory or industrial inspection site:

1. **Prepare your video:**
   - Format: MP4 (H.264 codec)
   - Resolution: 1920x1080 (Full HD) or higher
   - Duration: 15-30 seconds recommended
   - File size: Keep under 10MB for web optimization (use compression)
   - Audio: Muted (video tag has `muted` attribute)

2. **Optimization tips:**
   - Use tools like FFmpeg to compress: `ffmpeg -i input.mp4 -vcodec libx264 -crf 23 -acodec aac -b:a 128k output.mp4`
   - Consider using WebM format for better compression (add second source in video tag)
   - Test on various devices for smooth playback

3. **Replace the placeholder:**
   - Rename your optimized video to `hero-bg.mp4`
   - Place it in this directory (`/public/videos/`)
   - The video will automatically load on the hero section

### Video Characteristics for Best Results
- Dark/industrial theme (laboratory, inspection site, manufacturing facility)
- Slow, smooth camera movements
- Professional B-roll quality
- Can show: equipment inspection, quality control processes, laboratory settings, Egyptian industrial facilities
- Muted (no audio track needed)
- High contrast to work with the dark scrim overlay

### Fallback Behavior
If the video file is missing or fails to load, the site will:
1. Display the poster image (`textiles.jpg`)
2. Continue to function normally (the hero section is fully readable and interactive)

---

For questions or updates, contact the development team.
