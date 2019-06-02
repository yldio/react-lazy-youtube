import React, { Component } from "react"
import styled from "styled-components";
import is from "styled-is";
import remcalc from "remcalc";
import ReactYouTube from "react-youtube"
import PropTypes from "prop-types"

const Iframe = styled(ReactYouTube)`
                position: relative;
                z-index: 3;
                border: none;
                transition: all 200ms ease;
                height: 100%;
                ${is("cinemaMode")`
                  height: ${remcalc(600)};
                  @media (max-width: ${remcalc(768)}) {
                    height: auto;
                  }
                `};
              `;

class YouTube extends Component {

    render () {

        const {
            id,
            onPlay,
            onPause,
            onEnd,
            onError,
            onStateChange,
            onPlaybackRateChange,
            onPlaybackQualityChange,
            playerVars,
            noCookies,
            ...props
        } = this.props

        return (
            <Iframe
                videoId={id}
                id={id}
                onReady={e => e.target.playVideo()}
                onPlay={onPlay}
                onPause={onPause}
                onEnd={onEnd}
                onError={onError}
                onStateChange={onStateChange}
                onPlaybackRateChange={onPlaybackRateChange}
                onPlaybackQualityChange={onPlaybackQualityChange}
                opts={{
                    width: "100%",
                    host: noCookies
                        ? "https://www.youtube-nocookie.com"
                        : "https://www.youtube.com",
                    ...playerVars
                }}
            />
        )

    }
}

export default YouTube

YouTube.propTypes = {
    /** ID of the youtube video to play . */
    id: PropTypes.string.isRequired,
    /** .function to run when the video starts Playing */
    onPlay: PropTypes.func,
    /** .Function that runs when the video is paused */
    onPause: PropTypes.func,
    /** . Functinn that runs on the end of the video */
    onEnd: PropTypes.func,
    /** .Function that runs when the video encounters an error */
    onError: PropTypes.func,
    /** .Function that runs when the video changes state like from playing to paused */
    onStateChange: PropTypes.func,
    /** .Function that runs when the video encounters changes playback rater */
    onPlaybackRateChange: PropTypes.func,
    /** .Function that runs when the video changes quality */
    onPlaybackQualityChange: PropTypes.func,
    /** https://developers.google.com/youtube/player_parameters */
    playerVars: PropTypes.object,
    /** .Styles to apply over the wrappr */
    styles: PropTypes.object,
    /** .if set to true will change the host to  "https://www.youtube-nocookie.com" */
    noCookies: PropTypes.bool,
    /** .Size of the thumbnail we get from youtube */
};
