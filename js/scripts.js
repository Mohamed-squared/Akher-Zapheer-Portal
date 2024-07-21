document.addEventListener('DOMContentLoaded', () => {
    const home = document.getElementById('home');

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
        partition.style.backgroundImage = `url(Database/${folder}/${folder}.png)`;

        partition.onerror = () => {
            console.error(`Partition background image not found: Database/${folder}/${folder}.png`);
        };

        videos.forEach(video => {
            const videoCard = document.createElement('div');
            videoCard.className = 'video-card';

            const videoElement = document.createElement('video');
            videoElement.src = `Database/${folder}/${video}`;
            videoElement.controls = true;
            videoElement.className = 'video-player';

            videoElement.onerror = () => {
                console.error(`Video not found: ${videoElement.src}`);
            };

            videoCard.appendChild(videoElement);
            partition.appendChild(videoCard);
        });

        home.appendChild(partition);
    }
});
