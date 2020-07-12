import React from 'react'
import Prism from 'prismjs';

export default class CodeExample extends React.Component {

    componentWillMount() {

    }

    componentDidMount() {
        Prism.highlightAll();
    }

    render() {

        return (<div style={{ textAlign: "left" }}>
            This is a test!!!<br />
            <pre className='language-java'>
                <code>public static void main()&#123;
                return 0;
                &#125;
                </code>
            </pre>
        </div>
        )
    }
}

