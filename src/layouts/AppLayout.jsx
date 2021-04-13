import styled from 'styled-components';
import TopBar from '../components/navigation/TopBar';

const Main = styled.main`
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 50px 0px;
`;

function AppLayout({ children }) {
    return (
        <div>
            <TopBar />
            <Main>
                {children}
            </Main>
        </div>
    );
}

export default AppLayout;
