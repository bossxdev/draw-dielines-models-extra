import {useEffect, useRef} from 'react';
import {dequal as deepEqual} from 'dequal';

const useDeepCompare = (deps) => {
    const ref = useRef();

    if (!deepEqual(ref.current, deps)) {
        ref.current = deps;
    }

    return ref.current;
};

export const useDeepEffect = (callback, deps) => {
    useEffect(callback, useDeepCompare(deps));
};
