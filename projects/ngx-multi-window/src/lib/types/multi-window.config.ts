export class MultiWindowConfig {

    /**
     * String to be used as prefix when storing data in the localstorage
     */
    public static keyPrefix = 'ngxmw_';

    /**
     * Time in milliseconds how often a heartbeat should be performed. During a heartbeat a window
     * looks for new messages from other windows and processes these messages.
     */
    public static heartbeat = 1000;

    /**
     * Time in milliseconds how often a scan for new windows should be performed.
     */
    public static newWindowScan = 5000;

    /**
     * Time in milliseconds after which a message delivery is considered to have failed.
     * If no "message_received" confirmation has arrived during the specified duration,
     * the message will be removed from the outbox.
     */
    public static messageTimeout = 10000;

    /**
     * Time in milliseconds after which a window is considered dead.
     *
     * Should be a multiple of {@link MultiWindowConfig#newWindowScan}
     */
    public static windowTimeout = 15000;
}