import {useLayoutEffect, useState} from "react";
import {Skeleton} from "@arco-design/web-react";

const Loading=()=>{
    const [loading, setLoading] = useState(true);
    useLayoutEffect(() => {

    }, []);
    return (
        <Skeleton
            loading={loading}
            text={{ width: '90%' }}
            image={{ shape: 'circle' }}
            animation
        >
        </Skeleton>
        )
}
export default Loading
