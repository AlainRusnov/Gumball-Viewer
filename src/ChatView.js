import React, { useEffect } from 'react';
import "./ChatView.css";
import { useSelector } from "react-redux";
import { selectSelectedImage } from "./features/appSlice";
import { useHistory } from "react-router-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

function ChatView() {
  const selectedImage = useSelector(selectSelectedImage);
  const history = useHistory();

  const exit = () => {
    history.replace("/chats");
  };

  useEffect(() => {
    if (!selectedImage) {
      exit();
    }
  }, [selectedImage]);


  return (
    <div className='chatView'>
      <img src={selectedImage} onClick={exit} alt="" />
      <div className="chatView__timer">
        <CountdownCircleTimer
          isPlaying
          duration={10}
          strokeWidth={6}
          size={50}
          colors={[
            ["#E20CED", 0.33],
            ["#ED0C8F", 0.33],
            ["#A30000", 0.33],
          ]}
        >
          {({ remainingTime }) => {
            if ( remainingTime === 0) {
              exit();
            }

            return remainingTime;
          }}
        </CountdownCircleTimer>
      </div>
    </div>
  );
};

export default ChatView;