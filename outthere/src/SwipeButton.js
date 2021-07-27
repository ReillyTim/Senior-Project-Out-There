import React from "react";
import IconButton from "@material-ui/core/IconButton";
//icons here
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CloseIcon from '@material-ui/icons/Close';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown';
import LinearScaleIcon from '@material-ui/icons/LinearScale';

//icons here
import "./SwipeButton.css";

const SwipeButton = () => {
    return (
        <div className="swipeButton">
            <IconButton className="swipe_last">
                <ArrowBackIcon fontSize= "large" />
            </IconButton>
            
            <IconButton className="swipe_left">
                <CloseIcon fontSize= "large" />
            </IconButton>

            <IconButton className="swipe_rank">
                <LinearScaleIcon fontSize= "large" />
            </IconButton>

            <IconButton className="swipe_right">
                <FavoriteIcon fontSize= "large" />
            </IconButton>

            <IconButton className="swipe_unsure">
                <ThumbsUpDownIcon fontSize= "large" />
            </IconButton>
        </div>
    );
};

export default SwipeButton;