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
            <Left />
            <Right />
        </div>
    }
});

const Left = React.createClass({
    render: function () {
        return <div>
            Left
        </div>
    }
});

const Right = React.createClass({
    render: function () {
        return <div>
            Right
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