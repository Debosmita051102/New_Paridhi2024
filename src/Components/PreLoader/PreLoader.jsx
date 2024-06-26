import { LoaderContainer,LoaderVideoElement } from "./PreLoader.styled";


import LoaderVideo from "../Hero/assets/preloader.mp4";

const Loading = () => {
    return (
        <LoaderContainer>
        <LoaderVideoElement autoPlay loop muted>
            <source src={LoaderVideo} type="video/mp4" />
        </LoaderVideoElement>
    </LoaderContainer>
    );
};

export default Loading;