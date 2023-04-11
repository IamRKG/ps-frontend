import { TwoWayMap } from './TwoWayMap';
export declare class ToStreamerMessage {
    id: number;
    byteLength: number;
    structure?: Array<string>;
}
export declare class StreamMessageController {
    toStreamerHandlers: Map<string, (messageData?: Array<number> | undefined) => void>;
    fromStreamerHandlers: Map<string, (messageType: string, messageData?: ArrayBuffer | undefined) => void>;
    toStreamerMessages: TwoWayMap<string, ToStreamerMessage>;
    fromStreamerMessages: TwoWayMap<string, number>;
    constructor();
    /**
     * Populate the Default message protocol
     */
    populateDefaultProtocol(): void;
    /**
     * Register a message handler
     * @param messageDirection - the direction of the message; toStreamer or fromStreamer
     * @param messageType - the type of the message
     * @param messageHandler - the function or method to be executed when this handler is called
     */
    registerMessageHandler(messageDirection: MessageDirection, messageType: string, messageHandler: (messageData?: unknown | undefined) => void): void;
}
/**
 * The enum for message directions
 */
export declare enum MessageDirection {
    ToStreamer = 0,
    FromStreamer = 1
}
