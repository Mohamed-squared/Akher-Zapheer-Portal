import os
import subprocess

# Path to the database directory
database_dir = r'C:\Users\pc\Akher-Zapheer-Portal\Database'

# FFmpeg command template to generate thumbnails
ffmpeg_cmd_template = 'ffmpeg -i "{input}" -ss 00:00:01.000 -vframes 1 "{output}"'

def generate_thumbnails():
    for subdir, dirs, files in os.walk(database_dir):
        for file in files:
            if file.endswith('.mp4'):
                video_path = os.path.join(subdir, file)
                thumbnail_path = os.path.join(subdir, file.replace('.mp4', '.jpg'))

                # Generate thumbnail using FFmpeg
                ffmpeg_cmd = ffmpeg_cmd_template.format(input=video_path, output=thumbnail_path)
                subprocess.run(ffmpeg_cmd, shell=True)

                print(f'Thumbnail generated for {video_path}')

if __name__ == '__main__':
    generate_thumbnails()
