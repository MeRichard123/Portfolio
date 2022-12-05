import styled from "@emotion/styled";

const Main = styled.main`
    display: grid;
    place-items: center;
    
    img{
        width: 100%;
        height: auto;
        max-width: 40vw
    }
    
    p{
        /* text-align: center; */
        max-width: 70ch;
    }

    h1,h2,h3{
        text-align: center;
        margin: 20px 0;
    }
`;

export default function ProjectLayout({ children }: any) {
    return (
        <>
            <Main>
                {children}
            </Main>
        </>
    );
}