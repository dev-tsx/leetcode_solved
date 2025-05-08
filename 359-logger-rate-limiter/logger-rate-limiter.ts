class Logger {
    messages: Record<string, number>;
    constructor() {
        this.messages = {}
    }

    shouldPrintMessage(timestamp: number, message: string): boolean {
        if (this.messages[message] == undefined || this.messages[message] + 10 <= timestamp) {
            this.messages[message] = timestamp;
            return true;
        }
        return false
    }
}
