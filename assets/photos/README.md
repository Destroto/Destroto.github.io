Place Claire's polaroid photos in this folder with these filenames:

- `favorite-memory.jpg`
- `proud-moment.jpg`
- `next-adventure.jpg`

The page will show each image in its polaroid and enlarge it inside the message dialog when clicked.

## Letter videos

Videos can play directly inside the site. Put video files in this folder or in a subfolder such as:

- `videos/person-name.mp4`
- `videos/person-name.webm`

Then add a `video` field to that person's letter object in `script.js`:

```js
{
  name: "Person Name",
  text: "Short intro text that appears above or below the video.",
  video: "./assets/photos/videos/person-name.mp4",
  videoType: "video/mp4",
  videoPoster: "./assets/photos/videos/person-name-poster.jpg"
}
```

Paths should start with `./assets/`. For example, use `./assets/photos/test.mp4`, not `.assets/photos/test.mp4`.

`videoPoster` is optional. Use it if you want a still image to show before the video is played.

For best browser support, use MP4 files encoded as H.264 video with AAC audio. If an MP4 still fails after the path is correct, re-export or convert it with those settings.

GIFs should use the `image` field, not the `video` field:

```js
{
  name: "Person Name",
  text: "Optional message text.",
  image: "./assets/photos/person-name.gif"
}
```

Letter text supports returns and tab indents. In `script.js`, use `\n` for a new line and `\t` for an indent, or copy the Kelly Joe letter format as a reference.
