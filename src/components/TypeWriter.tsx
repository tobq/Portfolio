import React, { useState, useImperativeHandle, forwardRef, useCallback } from "react";

type Props = {
    recording: { text: string; offset: number }[];
    playbackSpeed: number;
};

export interface TypeWriterHandle {
    run: () => void;
}

const TypeWriter = forwardRef<TypeWriterHandle, Props>(({ recording, playbackSpeed }, ref) => {
    const [running, setRunning] = useState(false);
    const [index, setIndex] = useState(0);

    const getOffset = useCallback((i: number) => {
        return recording[i].offset / playbackSpeed;
    }, [recording, playbackSpeed]);

    const run = useCallback(async () => {
        if (running) return;
        setRunning(true);
        setIndex(0);

        for (let i = 0; i < recording.length; i++) {
            setTimeout(() => setIndex(i), getOffset(i));
        }

        return new Promise<void>(resolve => {
            setTimeout(() => {
                setRunning(false);
                resolve();
            }, getOffset(recording.length - 1));
        });
    }, [running, recording, getOffset]);

    useImperativeHandle(ref, () => ({
        run
    }), [run]);

    return <>{recording[index]?.text || ""}</>;
});

TypeWriter.displayName = "TypeWriter";

export default TypeWriter;