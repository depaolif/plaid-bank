import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import AccountsList from './AccountsList'
import { Grid, Row, Col } from 'react-bootstrap'

class Dashboard extends Component {
  render() {
    return (
      <Grid id="dashboard">
        <Row>
          <Navbar />
        </Row>
        <Row>
          <Col md={6}>
            <AccountsList />
          </Col>
          <Col>

          </Col>
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
  accounts: state.accounts,
  transactions: state.transactions
})

export default connect(mapStateToProps)(Dashboard);
