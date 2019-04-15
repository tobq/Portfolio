import * as React from "react";

interface State {
    running: boolean,
    index: number
}

type Props = { recording: { text: string, offset: number }[] };

export default class extends React.Component<Props, State> {
    state = {
        running: false,
        index: 0
    };

    constructor(props: Props) {
        super(props);
        console.log(props);
        this.run();
    }

    async run() {
        console.log(this.state.running, this.state);
        if (this.state.running) return;
        console.log(2);
            this.setState({running: true}, ()=>console.log(4));
        console.log(3);
        const recording = this.props.recording;

        for (let i = 0; i < recording.length; i++) {
            setTimeout(() => this.setState({index: i}), this.getOffset(i));
        }
        return new Promise(resolve => {
            setTimeout(
                () => this.setState({running: false}, resolve),
                this.getOffset(recording.length - 1));
        });
    }

    render() {
        return this.props.recording[this.state.index].text;
    }
    private getOffset(i: number) {
        return this.props.recording[i].offset;
    }
}