import { createMachine } from "xstate";

export const myMachine = createMachine({
    initial: "Idle",
    states: {
        "Idle": {
            on: {
                STATE_CHANGE: {
                    actions: "changeState"
                }
            }
        }
    }
})