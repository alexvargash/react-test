import AppLayout from 'layouts/AppLayout';
import VideoCard from 'components/videos/VideoCard';
import VideoWrapper from 'components/videos/VideoWrapper';
import Mock from 'utils/mock';

function Home(props) {
    const videoList = Mock.items.map((video, index) =>
        <VideoCard
            key={index}
            title={video.snippet.title}
            description={video.snippet.description}
            thumbnail={video.snippet.thumbnails.medium}
        />
    );

    return (
        <AppLayout>
            <VideoWrapper>
                {videoList}
            </VideoWrapper>
        </AppLayout>
    );
}

export default Home;
