/**
 * Latency Test Results Data
 */
export declare class LatencyTestResults {
    ReceiptTimeMs: number;
    TransmissionTimeMs: number;
    PreCaptureTimeMs: number;
    PostCaptureTimeMs: number;
    PreEncodeTimeMs: number;
    PostEncodeTimeMs: number;
    EncodeMs: number;
    CaptureToSendMs: number;
    testStartTimeMs: number;
    browserReceiptTimeMs: number;
    latencyExcludingDecode: number;
    testDuration: number;
    networkLatency: number;
    browserSendLatency: number;
    frameDisplayDeltaTimeMs: number;
    endToEndLatency: number;
    encodeLatency: number;
    /**
     * Sets the Delta Time Milliseconds
     * @param DeltaTimeMs - Delta Time Milliseconds
     */
    setFrameDisplayDeltaTime(DeltaTimeMs: number): void;
    /**
     * Process the encoder times and set them
     */
    processFields(): void;
}
