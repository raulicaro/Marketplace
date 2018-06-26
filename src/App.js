import React, { Component } from 'react';
import './App.css';
import {Row, Col, Card, CardBody, CardImg, CardText, CardTitle, Button, Pagination, PaginationItem, PaginationLink, Container,  TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
import classnames from 'classnames';

export default class App extends Component {

  constructor(props) {
         super(props);

         this.toggle = this.toggle.bind(this);
         this.state = {
           activeTab: '1'
         };
        this.state = { cSelected: [] };
        this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);
  }

  toggle(tab) {
         if (this.state.activeTab !== tab) {
           this.setState({
             activeTab: tab
           });
         }
  }

  onCheckboxBtnClick(selected) {
    const index = this.state.cSelected.indexOf(selected);
    if (index < 0) {
      this.state.cSelected.push(selected);
    } else {
      this.state.cSelected.splice(index, 1);
    }
    this.setState({ cSelected: [...this.state.cSelected] });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">MarketPlace</h1>
        </header>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })} onClick={() => { this.toggle('1'); }}>
              Lista
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classnames({ active: this.state.activeTab === '2' })}onClick={() => { this.toggle('2'); }}>
              Carrinho
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })} onClick={() => { this.toggle('3'); }}>
              Checkout
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
        <Container>
          <Row>
            <Col xs="8">
              <Card>
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>
                    <CardTitle>Item 1</CardTitle>
                    <CardText>Texto sobre o item.</CardText>
                    <Button color="primary" onClick={() => this.onCheckboxBtnClick(1)} active={this.state.cSelected.includes(1)}>Adicionar ao Carrinho</Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <h1>   </h1>
          <Row>
            <Col xs="8">
              <Card>
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>
                    <CardTitle>Item 2</CardTitle>
                    <CardText>Texto sobre o item. </CardText>
                    <Button color="primary" onClick={() => this.onCheckboxBtnClick(2)} active={this.state.cSelected.includes(2)}>Adicionar ao Carrinho</Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <h1>   </h1>
          <Row>
            <Col xs="8">
              <Card>
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>
                    <CardTitle>Item 3</CardTitle>
                    <CardText>Texto sobre o item.</CardText>
                    <Button color="primary" onClick={() => this.onCheckboxBtnClick(3)} active={this.state.cSelected.includes(3)}>Adicionar ao Carrinho</Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col sm="12" md={{ size: 8, offset: 5 }}>
            <Pagination aria-label="Page navigation example">
            <PaginationItem>
             <PaginationLink previous href="#"/>
            </PaginationItem>
             <PaginationItem>
               <PaginationLink  href ="#" >
                 1
               </PaginationLink>
             </PaginationItem>
             <PaginationItem>
               <PaginationLink  next href="#"/>
             </PaginationItem>
          </Pagination>
            </Col>
          </Row>
        </Container>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col>
                <Card body>
                  <p>Itens selecionados: {JSON.stringify(this.state.cSelected)}</p>
                  <Button onClick={() => { this.toggle('3'); }}>Checkout</Button>
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col>
                <Card body>
                  <Button>Finalizar</Button>
                </Card>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

