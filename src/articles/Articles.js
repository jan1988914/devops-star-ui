import React, { useEffect, useState } from "react";
import test from 'articles/test.md';
import ReactMarkdown from 'react-markdown';
import restAPI from "shared/restAPI";

const Articles = (props) => {

    const [md, setMd] = useState('');

    useEffect(() => {
        restAPI.fetchMD(test).then(res => setMd(res))
    }, []);

    return (
        <div>
            <ReactMarkdown source={md} />
        </div>
    );
}

export default Articles;
