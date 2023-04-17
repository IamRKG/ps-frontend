// Copyright Epic Games, Inc. All Rights Reserved.

import { useState } from 'react';
import { PixelStreamingWrapper } from './PixelStreamingWrapper';


export const PSOne = () => {
    const [remoteURl] = useState("ws://65.1.154.156");
    return (
        <div
            style={{
                height: '100%',
                width: '100%'
            }}
        >
            <PixelStreamingWrapper
                initialSettings={{
                    AutoPlayVideo: true,
                    AutoConnect: true,
                    ss: remoteURl,
                    StartVideoMuted: true,
                    HoveringMouse: true,
                    MatchViewportRes:true
                }}
            />
        </div>
    );
};
