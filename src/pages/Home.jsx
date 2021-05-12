import AppLayout from 'layouts/AppLayout';
import VideoCard from 'components/videos/VideoCard';
import VideoWrapper from 'components/videos/VideoWrapper';
import { useState, useEffect } from 'react';

function Home(props) {
    const [loading, setLoading] = useState(true);
    const [videos, setVideos] = useState({});

    useEffect(() => {
        window.gapi.client.init({
            'apiKey': 'AIzaSyCDXngKgFQ4hqym6ppDf9FPWdzxAxf6L1A',
            'discoveryDocs': ['https://people.googleapis.com/$discovery/rest'],
        }).then(() => {
            return window.gapi.client.request({
                'path': 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=wizeline&type=video',
            });
        }).then((response) => {
            const videoList = response.result.items.map((video, index) =>
                <VideoCard
                    key={index}
                    title={video.snippet.title}
                    description={video.snippet.description}
                    thumbnail={video.snippet.thumbnails.medium}
                />
            );
            setVideos(videoList);
            setLoading(false);
        }).catch((error) => {
            console.log('Error: ' + error);
        });
    }, []);

    return (
        <AppLayout>
            {loading &&
                <p>Loading ...</p>
            }
            {!loading &&
                <VideoWrapper>
                    {videos}
                </VideoWrapper>
            }
        </AppLayout>
    );
}

export default Home;
