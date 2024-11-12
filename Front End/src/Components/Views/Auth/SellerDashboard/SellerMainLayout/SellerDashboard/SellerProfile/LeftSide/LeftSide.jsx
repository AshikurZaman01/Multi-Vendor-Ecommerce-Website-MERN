import ProfileImage from "./ProfileImage";

const LeftSide = () => {

    const image = false;
    const loader = false;

    return (
        <div>
            <ProfileImage image={image} loader={loader}></ProfileImage>
        </div>
    )
}

export default LeftSide