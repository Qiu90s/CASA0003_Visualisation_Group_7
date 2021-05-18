var config = {
    style: 'mapbox://styles/ric92/ckos609pt4ida17pi0mzhf8hz',
    accessToken: 'pk.eyJ1IjoicmljOTIiLCJhIjoiY2ttNjFnbzEzMDRxNzJ2bGF3ZjIza3ExdiJ9.HEEieF4NwtWQcSRejRNhdw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'Landmarkers in Shanghai',
    subtitle: 'A storytelling interavtive map designed through Mapbox',
    byline: '',
    footer: 'Made by Qiuyu Li',
    chapters: [
        {
            id: 'Seat of the 1st Congress of Chinese Communist Party',
            alignment: 'left',
            hidden: false,
            title: 'Seat of the 1st Congress of Chinese Communist Party',
            image: './images/Seat of the 1st Congress of Chinese Communist Party.jpg',
            description: 'The 1st National Congress of the Communist Party of China in 1921 was held here in secret, which was of great significance to the establishment of the PRC. In 1952, a memorial was established here. Opened to the public in 1961, this memorial hall at No. 76-78 Xingye Road was one of the few cultural attractions that Shanghai residents could freely visit at that time.',
            location: {
                center: [121.47033, 31.22210],
                zoom: 18.88,
                pitch: 50.00,
                bearing: -20.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'Wukang Mansion',
            alignment: 'right',
            hidden: false,
            title: 'Wukang Mansion',
            image: './images/Wukang Mansion.jpg',
            description: 'Wukang Building, formerly known as Normandie Apartment, is located at 1842-1858 Huaihai Middle Road and was designed by Hungarian architect Wudak. The building started in 1924 and was selected as one of outstanding historical buildings in Shanghai in 1994. In the eyes of local residents during the long 70 years, this was just an apartment building with high rents.',
            location: {
                center: [121.43386, 31.20611],
                zoom: 18.79,
                pitch: 52.50,
                bearing: 56.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },      
        {
            id: 'Shanghai Customs Building',
            alignment: 'left',
            hidden: false,
            title: 'Shanghai Customs Building',
            image: './images/Shanghai customs building.jpg',
            description: 'The building is located at No. 13 Zhongshan Dongyi Road. The existing building was built between 1925 and 1927. When residents in the past talked about it, they talked about it as a symbol of Shanghai’s opening of a port. When a new generation of Shanghainese pass by it, he or she has already regarded it as the most representative Bund building in Shanghai.',
            location: {
                center: [121.48523, 31.23844],
                zoom: 18.88,
                pitch: 48.00,
                bearing: -72.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Oriental Pearl Tower',
            alignment: 'right',
            hidden: false,
            title: 'Oriental Pearl Tower',
            image: './images/Oriental Pearl Tower.jpg',
            description: 'The Oriental Pearl Tower is located at No. 1 Century Avenue. Construction started in 1991 and completed in 1994. This building appears in the enlightenment textbooks of all Chinese born in the 90s, and is considered by almost all Chinese to be the most famous landmark in Shanghai.',
            location: {
                center: [121.49621, 31.23981],
                zoom: 16.21,
                pitch: 43.50,
                bearing: 125.60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Jin Mao Tower',
            alignment: 'left',
            hidden: false,
            title: 'Jin Mao Tower',
            image: './images/jinmao tower.jpg',
            description: 'Jin Mao Tower is located in the Lujiazui financial district by the Huangpu River. Construction began in 1994 and completed in 1998. It has 88 floors and is still the 3rd tallest skyscraper in Shanghai.',
            location: {
                center: [121.5001, 31.23808],
                zoom: 16.57,
                pitch: 21.00,
                bearing: -12.91
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Plaza 66',
            alignment: 'right',
            hidden: false,
            title: 'Plaza 66',
            image: './images/Plaza 66.jpg',
            description: 'The building is located at No. 1266 Nanjing West Road. It has 66 floors. It was completed and opened in 2001. It was the tallest building on the west bank of the Huangpu River and one of the best commercial centers in Shanghai at that time.',
            location: {
                center: [121.45092, 31.23031],
                zoom: 16.60,
                pitch: 39.00,
                bearing: 3.53
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Shanghai Tower',
            alignment: 'left',
            hidden: false,
            title: 'Shanghai Tower',
            image: './images/Shanghai tower.jpg',
            description: 'The Shanghai Tower is the tallest building in Shanghai and China, with a total of 127 floors and a height of 632 meters. Construction began in 2008 and completed in 2016. In 2020, it was selected as one of Shanghai‘s top 10 new landmark buildings.',
            location: {
                center: [121.50219, 31.23393],
                zoom: 16.28,
                pitch: 20.50,
                bearing: -169.91
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Shanghai Natural History Museum',
            alignment: 'right',
            hidden: false,
            title: 'Shanghai Natural History Museum',
            image: './images/Shanghai Natural History Museum.jpg',
            description: 'The new building of the Shanghai Natural History Museum is located in the Sculpture Park. Construction started in 2009 and completed in 2016. It is one of the largest natural museums in China. It receives more than 200,000 students from Shanghai and surrounding provinces every year, and is one of the landmarks young Shanghai residents visit most often.',
            location: {
                center: [121.45884, 31.23695],
                zoom: 17.65,
                pitch: 46.00,
                bearing: 3.70
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Sinar Mas Center',
            alignment: 'left',
            hidden: false,
            title: 'Sinar Mas Center',
            image: './images/Sinar Mas Center.jpeg',
            description: 'Sinar Mas center is located at North Bund, the intersection of theSuzhou River and Huangpu River. Construction started in 2008 and completed in 2017. Center consists of 3 buildings and the highest one has 66 floors with a height of 320 meters.',
            location: {
                center: [121.49153, 31.25117],
                zoom: 16.54,
                pitch: 25.00,
                bearing: -22.40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Shanghai Disney World',
            alignment: 'right',
            hidden: false,
            title: 'Shanghai DisneyLand',
            image: './images/Disney world.jpg',
            description: 'Shanghai Disneyland is located at No.310 Huangzhao Road. The construction started in 2011 and was completed in 2016. It is the most famous landmark in the eyes of the new generation of Shanghai. It is the first Disney theme park in mainland China, which means that Shanghai is unique to China. At the same time, it is also the sixth Disney theme park in the world and a window to the world in Shanghai.',
            location: {
                center: [121.65406, 31.14508],
                zoom: 17.52,
                pitch: 24.00,
                bearing: 158.37
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        } 
    ]
};
