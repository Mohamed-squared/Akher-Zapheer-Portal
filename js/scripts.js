document.addEventListener('DOMContentLoaded', () => {
    const home = document.getElementById('home');

    if (!home) {
        console.error('Element with ID "home" not found.');
        return;
    }

    const database = {
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

    const createVideoCard = (folder, video) => {
        const videoCard = document.createElement('div');
        videoCard.className = 'video-card';

        const thumbnail = document.createElement('img');
        const videoName = video.replace(/\.mp4$/, '');
        thumbnail.src = `database/${folder}/${videoName}.jpg`;
        thumbnail.alt = videoName;
        thumbnail.className = 'thumbnail';

        thumbnail.onerror = () => {
            console.error(`Thumbnail not found: ${thumbnail.src}`);
            thumbnail.src = 'path/to/default-thumbnail.jpg'; // Set a default thumbnail if the image is not found
        };

        videoCard.appendChild(thumbnail);

        const playVideo = () => {
            // Remove any existing video elements
            const existingVideo = videoCard.querySelector('video');
            if (existingVideo) {
                existingVideo.remove();
            }

            // Create a new video element
            const videoElement = document.createElement('video');
            videoElement.src = `database/${folder}/${video}`;
            videoElement.controls = true;
            videoElement.autoplay = true;
            videoElement.className = 'video-player';

            videoElement.onerror = () => {
                console.error(`Video not found: ${videoElement.src}`);
            };

            // Append the video element to the video card
            videoCard.appendChild(videoElement);
        };

        thumbnail.addEventListener('click', playVideo);

        return videoCard;
    };

    for (const [folder, videos] of Object.entries(database)) {
        const partition = document.createElement('div');
        partition.className = 'partition';
        partition.style.backgroundImage = `url(database/${folder}/${folder}.png)`;

        partition.onerror = () => {
            console.error(`Partition background image not found: database/${folder}/${folder}.png`);
        };

        videos.forEach(video => {
            const videoCard = createVideoCard(folder, video);
            partition.appendChild(videoCard);
        });

        home.appendChild(partition);
    }
});
