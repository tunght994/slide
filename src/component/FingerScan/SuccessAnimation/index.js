import Lottie from "lottie-react";

const SuccessAnimation = ({ successAnimation, handleComplete,isLoop = false, ...props }) => {
    return (
        <Lottie
            animationData={successAnimation}
            onComplete={handleComplete}
            loop={isLoop}
            {...props}
        />
    )
}

export default SuccessAnimation