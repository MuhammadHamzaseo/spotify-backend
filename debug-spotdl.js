const { exec } = require('child_process');
const path = require('path');
const ffmpegPath = require('ffmpeg-static');

const FFMPEG_DIR = path.dirname(ffmpegPath);
const target = 'https://open.spotify.com/album/2vPm0Vhwr9l8FqnbQaAg4h?si=AgEdrWp5T5eRs7B5i6A5mw'; // User's Album

console.log(`🎥 FFmpeg path: ${ffmpegPath}`);
console.log(`📂 FFmpeg Dir: ${FFMPEG_DIR}`);

const env = { ...process.env, PATH: `${process.env.PATH}${path.delimiter}${FFMPEG_DIR}` };
const command = `python -m spotdl "${target}" --output "{artist} - {title}.{ext}" --simple-tui`;

console.log(`🚀 Running command: ${command}`);

const child = exec(command, { env: env }, (error, stdout, stderr) => {
    if (error) {
        console.error(`✗ Exec error: ${error}`);
    }
    console.log(`Stdout: ${stdout}`);
    console.error(`Stderr: ${stderr}`);
});
