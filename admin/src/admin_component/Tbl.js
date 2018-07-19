// import './css/jquert.dataTables.css';
import React, { Component } from 'react'

const $ = require('jquery')
$.DataTable = require('datatables.net')

export class Tbl extends Component {
  componentDidMount() {
    this.$el = $(this.el)
    this.$el.DataTable(
      {
        data: this.props.data,
        columns: [
          { title: "Name" },
          { title: "Position" },
          { title: "Office" },
          { title: "Extn." },
          { title: "Start date" },
          { title: "Salary" },
        ]
      }
    )

  }

  render() {
    return(
    <div>

      <table className="display" width="100%" ref={el => this.el = el}></table>

    </div>
    )
  }
}