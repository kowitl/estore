(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var Table = ReactBootstrap.Table;
var FormGroup = ReactBootstrap.FormGroup;
var Button = ReactBootstrap.Button;
var Form = ReactBootstrap.Form;
var Col = ReactBootstrap.Col;
var ControlLabel = ReactBootstrap.ControlLabel;
var FormControl = ReactBootstrap.FormControl;

var ProductTable = React.createClass({
  displayName: 'ProductTable',

  getInitialState: function getInitialState() {
    return { prods: [] };
  },
  componentDidMount: function componentDidMount() {
    this.refeshComponentState();
  },
  onNameChange: function onNameChange(event) {
    this.setState({ prods: this.state.prods, newProdName: event.target.value });
  },
  refeshComponentState: function refeshComponentState() {
    var _this = this;

    axios.get('/api/product').then(function (response) {
      _this.setState({ prods: response.data, newProdName: "" });
    });
  },
  onclickAdd: function onclickAdd() {
    var _this2 = this;

    axios.post('/api/product', {
      name: this.state.newProdName,
      id: +new Date()
    }).then(function () {
      return _this2.refeshComponentState();
    });
  },
  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        Table,
        { striped: true, bordered: true, condensed: true, hover: true },
        React.createElement(
          'thead',
          null,
          React.createElement(
            'tr',
            null,
            React.createElement(
              'th',
              null,
              '#'
            ),
            React.createElement(
              'th',
              null,
              'Name'
            )
          )
        ),
        React.createElement(
          'tbody',
          null,
          this.state.prods.map(function (row, i) {
            return React.createElement(
              'tr',
              null,
              React.createElement(
                'td',
                null,
                i + 1
              ),
              React.createElement(
                'td',
                null,
                row.name
              )
            );
          })
        )
      ),
      React.createElement(
        Form,
        { horizontal: true },
        React.createElement(
          FormGroup,
          { controlId: 'prodNameId' },
          React.createElement(
            Col,
            { componentClass: ControlLabel, sm: 2 },
            'Name'
          ),
          React.createElement(
            Col,
            { sm: 10 },
            React.createElement(FormControl, { type: 'text', placeholder: 'Product Name', onChange: this.onNameChange })
          )
        ),
        React.createElement(
          FormGroup,
          null,
          React.createElement(
            Col,
            { smOffset: 2, sm: 10 },
            React.createElement(
              Button,
              { type: 'button', onClick: this.onclickAdd },
              'Add'
            )
          )
        )
      )
    );
  }
});

ReactDOM.render(React.createElement(ProductTable, null), document.getElementById('root'));

},{}]},{},[1]);
