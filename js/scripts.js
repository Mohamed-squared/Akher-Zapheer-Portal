document.addEventListener('DOMContentLoaded', () => {
    const home = document.getElementById('home');
    const videoPlayerTemplate = document.getElementById('video-player-template');

    const Database = {
        'اعكس ثقافة': [
            'Akher Zapheer - Bel Layl Tnaffast اخر زفير- بالليل تنفَست هوى بيجرح.mp4',
            'Akherto Lahen Hazeen.mp4',
            'Arba Sneen.mp4',
            'Bteghwee.mp4',
            'Cacharel.mp4',
            'Dayman Mawjood.mp4',
            'Feekee.mp4',
            'Keef Akoun Sadeeq.mp4',
            'Laylee Tal.mp4',
            'Tahet El Bahar El Mayyet.mp4',
            'Testai Metel El Shams.mp4'
        ],
        'ام الموسيقى': [
            'Ballet.mp4',
            'Batlasha.mp4',
            'El-Khotta.mp4',
            'Emm el Mousiqa.mp4',
            'Ghubar Njoom.mp4',
            'Ismo Albi (Live).mp4',
            'Metfaje.mp4',
            'Mohbat.mp4',
            'Zay El Qetar.mp4'
        ],
        'ثعبان': [
            'Jumanji.mp4',
            'Khatem.mp4',
            'Ma3maqni.mp4',
            'Shakhsi El Daem.mp4',
            'Tasbeereh.mp4',
            'Tho3ban.mp4',
            'Urtuwazi.mp4'
        ],
        'مش فن': [
            '80.mp4',
            'Mesh Fann.mp4',
            'Mesh Sahel.mp4'
        ]
    };

    for (const [folder, videos] of Object.entries(Database)) {
        const partition = document.createElement('div');
        partition.className = 'partition';

        const encodedFolder = encodeURIComponent(folder);
        const backgroundImagePath = `Database/${encodedFolder}/${encodedFolder}.png`;
        console.log(`Setting background image for ${folder} to ${backgroundImagePath}`);

        // Create a temporary image element to check if the image exists
        const img = new Image();
        img.src = backgroundImagePath;
        img.onload = () => {
            partition.style.backgroundImage = `url(${backgroundImagePath})`;
        };
        img.onerror = () => {
            console.error(`Partition background image not found: ${backgroundImagePath}`);
        };

        videos.forEach(video => {
            const videoCard = document.createElement('div');
            videoCard.className = 'video-card';

            const videoPlayerInstance = videoPlayerTemplate.content.cloneNode(true);
            const videoElement = videoPlayerInstance.querySelector('.video-player');
            videoElement.src = `Database/${encodedFolder}/${encodeURIComponent(video)}`;
            videoElement.controls = false;  // Disable default controls

            videoElement.onerror = () => {
                console.error(`Video not found: ${videoElement.src}`);
            };

            setupCustomControls(videoPlayerInstance, videoElement);

            videoCard.appendChild(videoPlayerInstance);
            partition.appendChild(videoCard);
        });

        home.appendChild(partition);
    }

    function setupCustomControls(videoPlayerInstance, videoElement) {
        const playPauseButton = videoPlayerInstance.querySelector('.play-pause');
        const progressBar = videoPlayerInstance.querySelector('.progress-bar');
        const volumeBar = videoPlayerInstance.querySelector('.volume-bar');
        const fullscreenButton = videoPlayerInstance.querySelector('.fullscreen');

        playPauseButton.addEventListener('click', () => {
            if (videoElement.paused) {
                videoElement.play();
                playPauseButton.textContent = 'Pause';
            } else {
                videoElement.pause();
                playPauseButton.textContent = 'Play';
            }
        });

        videoElement.addEventListener('timeupdate', () => {
            const progress = (videoElement.currentTime / videoElement.duration) * 100;
            progressBar.value = progress;
        });

        progressBar.addEventListener('input', () => {
            const time = (progressBar.value / 100) * videoElement.duration;
            videoElement.currentTime = time;
        });

        volumeBar.addEventListener('input', () => {
            videoElement.volume = volumeBar.value;
        });

        fullscreenButton.addEventListener('click', () => {
            if (videoElement.requestFullscreen) {
                videoElement.requestFullscreen();
            } else if (videoElement.webkitRequestFullscreen) { /* Safari */
                videoElement.webkitRequestFullscreen();
            } else if (videoElement.msRequestFullscreen) { /* IE11 */
                videoElement.msRequestFullscreen();
            }
        });
    }
});
