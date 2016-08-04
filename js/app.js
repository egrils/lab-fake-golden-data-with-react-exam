const App = React.createClass({
    render: function () {
        return <div>
            <button>Preview</button>
            <Editor />
            <Previewer />
        </div>
    }
});

const Editor = React.createClass({
    render: function () {
        return <div>
            Editor
        </div>
    }
});

const Previewer = React.createClass({
    render: function () {
        return <div>
            Previewer
        </div>
    }
});

ReactDOM.render(<App />, document.getElementById('content'));