

var Table = ReactBootstrap.Table;
var FormGroup = ReactBootstrap.FormGroup;
var Button = ReactBootstrap.Button;
var Form = ReactBootstrap.Form;
var Col = ReactBootstrap.Col;
var ControlLabel = ReactBootstrap.ControlLabel;
var FormControl = ReactBootstrap.FormControl;

var ProductTable = React.createClass({
     getInitialState: function() {
        return {prods: []};
     },
     componentDidMount: function() {
        this.refeshComponentState();
     },
     onNameChange: function(event){
         this.setState({prods: this.state.prods, newProdName : event.target.value});
     },
     refeshComponentState: function(){
        axios.get('/api/product').then(response => {
                   this.setState({prods: response.data, newProdName : ""});
                 });
     },
     onclickAdd: function(){
        axios.post('/api/product', {
            name: this.state.newProdName,
            id: +new Date
          })
          .then(()=>this.refeshComponentState());
     },
     onClearAll: function(){
        var allReqs = [];
        this.state.prods.forEach(v => {
            allReqs.push(axios.delete('/api/product/'+v.id));
        });

        axios.all(allReqs).then(()=>{
            this.state.prods = [];
            this.refeshComponentState();
        });
     },
     render: function() {
        return(
            <div>
            <Table striped bordered condensed hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.prods.map(function(row, i) {
                            return (
                              <tr>
                                 <td>{i+1}</td>
                                 <td>{row.name}</td>
                              </tr>
                            );
                          })}

                </tbody>
              </Table>
              <Form horizontal>
                   <FormGroup controlId="prodNameId">
                     <Col componentClass={ControlLabel} sm={2}>
                       Name
                     </Col>
                     <Col sm={10}>
                       <FormControl type="text" placeholder="Product Name" onChange={this.onNameChange} />
                     </Col>
                 </FormGroup>
                 <FormGroup>
                      <Col smOffset={2} sm={10}>
                        <Button type="button" onClick={this.onclickAdd}>
                          Add
                        </Button>
                        <Button type="button" onClick={this.onClearAll}>
                           Clear All
                         </Button>
                      </Col>
                    </FormGroup>
               </Form>
               </div>
              );
     }
});


ReactDOM.render( <ProductTable />, document.getElementById('root'));


