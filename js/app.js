const App = React.createClass({
    getInitialState: function () {
        return {
            isEditor: true,
            elements: []
        };
    },
    toggle: function () {
        this.setState({
            isEditor: !this.state.isEditor
        })
    },
    addElement: function (element) {
        const elements = this.state.elements;
        elements.push(element);
        this.setState({elements})
    },
    deleteElement: function (index) {
        const elements = this.state.elements;
        elements.splice(index, 1);
        this.setState({elements})
    },
    render: function () {
        const isEditor = this.state.isEditor;
        return <div className="container-fluid">
            <ReactRouter.Link to={this.state.isEditor? "/previewer" : "/"}>
                <button id="pd" className="btn btn-default btn-lg col-md-1 col-md-offset-5" onClick={this.toggle}>
                    {this.state.isEditor? "Preview":"Edit" }
                </button>
            </ReactRouter.Link>
            {this.props.children && React.cloneElement(this.props.children, {
                elements:this.state.elements,
                onAdd:this.addElement,
                onDelete:this.deleteElement
            })}
        </div>
    }
});

const Editor = React.createClass({
    render: function () {
        return <div>
            <Left elements={this.props.elements} onDelete={this.props.onDelete}/>
            <Right onAdd={this.props.onAdd}/>
        </div>
    }
});

const Left = React.createClass({
    remove: function (index) {
        this.props.onDelete(index)
    },
    render: function () {
        const elements = this.props.elements.map((ele, index)=> {
            return <div key={index} className="left col-md-8 col-md-offset-3 btn-lg">
                <input className="col-md-4" type={ele}/>
                <button className="btn btn-danger" onClick={this.remove.bind(this, index)}>X</button>
            </div>
        });
        return <div>
            {elements}
        </div>
    }
});

const Right = React.createClass({
    add: function () {
        const element = $("input[name=element]:checked").val();
        this.props.onAdd(element)
    },
    render: function () {
        return <div className="right col-md-offset-8">
            <div className="radio">
                <input type="radio" name="element" value="text"/><span>Text</span>
            </div>
            <div className="radio">
                <input type="radio" name="element" value="date"/><span>Date</span>
            </div>
            <button className="add btn btn-default btn-lg" onClick={this.add}>+</button>
        </div>
    }
});

const Previewer = React.createClass({
    render: function () {
        const elements = this.props.elements.map((ele, index)=> {
            return <div key={index} className="col-md-8 col-md-offset-4 btn-lg">
                <input type={ele} className="col-md-4 box-shadow"/>
            </div>
        });
        return <div>
            {elements}
            <button className="btn btn-default btn-lg col-md-1 col-md-offset-5">Submit</button>
        </div>
    }
});

ReactDOM.render(
    <ReactRouter.Router>
        <ReactRouter.Route path="/" component={App}>
            <ReactRouter.IndexRoute component={Editor}/>
            <ReactRouter.Route path="/previewer" component={Previewer}/>
        </ReactRouter.Route>
    </ReactRouter.Router>
, document.getElementById('content'));