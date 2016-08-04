const App = React.createClass({
    getInitialState: function () {
        return {
            elements: []
        }
    },
    addElement: function (element) {
        const elements = this.state.elements;
        elements.push(element);
        this.setState({elements})
    },
    render: function () {
        return <div>
            <button>Preview</button>
            <Editor elements={this.state.elements} onAdd={this.addElement}/>
            <Previewer />
        </div>
    }
});

const Editor = React.createClass({
    render: function () {
        return <div>
            <Left />
            <Right onAdd={this.props.onAdd}/>
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
    add: function () {
        const element = $("input[name=element]:checked").val();
        this.props.onAdd(element)
    }
    ,
    render: function () {
        return <div>
            <input type="radio" name="element" value="text"/>Text
            <input type="radio" name="element" value="date"/>Date
            <button onClick={this.add}>+</button>
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