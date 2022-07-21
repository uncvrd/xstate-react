import { useInterpret } from "@xstate/react";
import { InterpreterFrom } from "xstate";
import { myMachine } from "../machines/test";
import { NoSsr } from '@mui/base'

const Child: React.FC<{
    service: InterpreterFrom<typeof myMachine>;
}> = ({ service }) => {

    return (
        <div>
            {service.state?.matches("Idle") ? (
                <div>Idle State</div>
            ) : (
                <div>Invalid State</div>
            )}
        </div>
    )
}

const Works = () => {

    const service = useInterpret(myMachine);

    return (
        <NoSsr>
            <Child service={service} />
        </NoSsr>
    )
}

export default Works;