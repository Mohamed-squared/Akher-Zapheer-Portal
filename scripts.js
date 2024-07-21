document.addEventListener("DOMContentLoaded", function() {
    const albumsDiv = document.getElementById('albums');

    // Sample data structure representing the database
    const database = [
        {
            name: 'اعكس ثقافة',
            videos: [
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
            ]
        },
        {
            name: 'ام الموسيقى',
            videos: [
                'Ballet.mp4',
                'Batlasha.mp4',
                'El-Khotta.mp4',
                'Emm el Mousiqa.mp4',
                'Ghubar Njoom.mp4',
                'Ismo Albi (Live).mp4',
                'Metfaje.mp4',
                'Mohbat.mp4',
                'Zay El Qetar.mp4'
            ]
        },
        {
            name: 'ثعبان',
            videos: [
                'Jumanji.mp4',
                'Khatem.mp4',
                'Ma3maqni.mp4',
                'Shakhsi El Daem.mp4',
                'Tasbeereh.mp4',
                'Tho3ban.mp4',
                'Urtuwazi.mp4'
            ]
        },
        {
            name: 'مش فن',
            videos: [
                '80.mp4',
                'Mesh Fann.mp4',
                'Mesh Sahel.mp4'
            ]
        }
    ];

    // Function to create partitions
    function createPartition(partition) {
        const partitionDiv = document.createElement('div');
        partitionDiv.classList.add('partition');
        partitionDiv.style.backgroundImage = `url('images/${partition.name}.png')`;

        const partitionTitle = document.createElement('h2');
        partitionTitle.textContent = partition.name;
        partitionDiv.appendChild(partitionTitle);

        partition.videos.forEach(video => {
            const videoItem = document.createElement('div');
            videoItem.classList.add('video-item');
            
            const videoElement = document.createElement('video');
            videoElement.controls = true;
            videoElement.src = `database/${partition.name}/${video}`;

            videoItem.appendChild(videoElement);
            partitionDiv.appendChild(videoItem);
        });

        return partitionDiv;
    }

    // Populate albums div with partitions
    database.forEach(partition => {
        albumsDiv.appendChild(createPartition(partition));
    });
});
