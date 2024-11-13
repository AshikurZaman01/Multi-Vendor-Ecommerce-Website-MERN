import ProfileImage from "./ProfileImage";
import ProfileData from "./ProfileData";

const LeftSide = () => {

    const image = false;
    const loader = false;
    const status = 'active';
    const userInfo = true;

    return (
        <div>
            <ProfileImage image={image} loader={loader}></ProfileImage>

            <ProfileData status={status} userInfo={userInfo}></ProfileData>

        </div>
    )
}

export default LeftSide