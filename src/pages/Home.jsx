import styled from 'styled-components';
import TopBar from 'components/navigation/TopBar';
import VideoCard from 'components/videos/VideoCard';
import VideoWrapper from 'components/videos/VideoWrapper';
import { useState, useEffect } from 'react';
const Main = styled.main`
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 50px 0px;
`;

function Home(props) {
    const [loading, setLoading] = useState(true);
    const [videos, setVideos] = useState({});
    const [search, setSearch] = useState('wizeline');

    const onChange = (value) => {
        setSearch(value);
    };

    useEffect(() => {
        getYoutubeVideos();
    }, [search]);

    const getYoutubeVideos = () => {
        window.gapi.client.init({
            'apiKey': 'AIzaSyCDXngKgFQ4hqym6ppDf9FPWdzxAxf6L1A',
            'discoveryDocs': ['https://people.googleapis.com/$discovery/rest'],
        }).then(() => {
            return window.gapi.client.request({
                'path': `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${search}&type=video`,
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
    }

    return (
        <div>
            <TopBar onChange={onChange} />
            <Main>
                {loading &&
                    <p>Loading ...</p>
                }
                {!loading &&
                    <VideoWrapper data-testid="videos">
                        {videos}
                    </VideoWrapper>
                }
            </Main>
        </div>
    );
}

export default Home;
