import React, { Component } from 'react'
import styled from 'styled-components'
import YouTube from 'react-youtube'
import is, { isNot } from 'styled-is'
import remcalc from 'remcalc'

import Play from './Play'

const Video = styled.div``

const VideoWrapper = styled.section`
  position: relative;
  margin: auto;
  ${isNot('cinemaMode')`
    &:before {
      display: block;
      content: '';
      width: 100%;
      padding-top: 56.25%;
    }
    ${Video} {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }
  `};
`

const Iframe = styled(YouTube)`
  position: relative;
  z-index: 3;
  border: none;
  transition: all 200ms ease;
  height: 100%;
  ${is('cinemaMode')`
    height: ${remcalc(600)};
    @media (max-width: ${remcalc(768)}) {
      height: auto;
    }
  `};
`

const Thumbnail = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`

const Image = styled.div`
  position: relative;
  margin: auto;
  height: 100%;
  overflow: hidden;
  box-shadow: ${props => props.theme.shadow};
  ${is('cinemaMode')`
    height: auto;
  `};
`

class Player extends Component {
  state = { showVideo: false }

  showVideo = () => this.setState(({ showVideo }) => ({ showVideo: true }))

  render = () => {
    const {
      id,
      onClick,
      onPlay,
      onPause,
      onEnd,
      onError,
      onStateChange,
      onPlaybackRateChange,
      onPlaybackQualityChange,
      imageSize = 'default',
      playerVars = {},
      noCookies,
      styles = {
        width: '640px',
        height: '360px'
      },
      ...props
    } = this.props

    const { showVideo } = this.state

    const validImageSizes = [
      'default',
      'hqdefault',
      'mqdefault',
      'sddefault',
      'maxresdefault'
    ]

    const image = () =>
      validImageSizes.includes(imageSize) ? imageSize : 'default'
    return (
      <VideoWrapper {...props} style={styles}>
        <Video>
          {showVideo ? (
            <Iframe
              videoId={id}
              id={`a-${id} do-not-delete-this-hack`}
              onReady={e => e.target.playVideo()}
              onPlay={onPlay}
              onPause={onPause}
              onEnd={onEnd}
              onError={onError}
              onStateChange={onStateChange}
              onPlaybackRateChange={onPlaybackRateChange}
              onPlaybackQualityChange={onPlaybackQualityChange}
              opts={{
                width: '100%',
                host: noCookies
                  ? 'https://www.youtube-nocookie.com'
                  : 'https://www.youtube.com',
                playerVars
              }}
            />
          ) : (
            <Image>
              <Play onClick={this.showVideo} aria-label="Play Video" />
              <Thumbnail
                onClick={this.showVideo}
                src={`https://img.youtube.com/vi/${id}/${image()}.jpg`}
                alt="Video"
              />
            </Image>
          )}
        </Video>
      </VideoWrapper>
    )
  }
}

export default Player
