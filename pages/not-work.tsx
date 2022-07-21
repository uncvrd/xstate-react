import { NoSsr } from "@mui/base";
import { useInterpret } from "@xstate/react";
import { myMachine } from "../machines/test";

const NotWork = () => {

    const service = useInterpret(myMachine);

    return (
        <NoSsr>
            {service.state?.matches("Idle") ? (
                <div>Idle State</div>
            ) : (
                <div>Invalid State</div>
            )}
        </NoSsr>
    )
}

export default NotWork;