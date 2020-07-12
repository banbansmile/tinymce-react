import React from 'react'
import Prism from 'prismjs';
//import './prism.css'
//const loadLanguages = import ('prismjs/components/');

export default class CodeExample extends React.Component {

    constructor(props) {
        super(props);

    }

    state = {
        html: '',
        content: ""
    }

    componentWillMount() {
        var content = "<p>This is the initial content of the editor、、】、</p>" +
            "<p>偶iu哦</p>" +
            "<pre class=\"language-java\"><code>public static void main(){" +
            "System.out.println(\"helloWord\");" +
            "return 0;" +
            "}</code></pre>"
        this.setState({ content });

    }

    componentDidMount() {
        Prism.highlightAll();
        const code = `var data = 1;`;
        const html = Prism.highlight(code, Prism.languages.javascript, 'javascript');
        this.setState({ html });
        Prism.highlightAll();
        //  loadLanguages(['haml']);
    }

    render() {

        return (<div>
            <div dangerouslySetInnerHTML={{ __html: this.state.html }} >

            </div>
            <p>This is the initial content of the editor</p>
            <p>code Editor Example</p>
            <div dangerouslySetInnerHTML={{ __html: this.state.content }}>

            </div>

        </div>
        )

    }
}

