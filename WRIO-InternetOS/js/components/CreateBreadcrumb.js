import React from 'react';
import {getServiceUrl,getDomain} from '../servicelocator.js';

var domain = getDomain();

export default React.createClass({
    propTypes: {
        editMode: React.PropTypes.bool.isRequired,
        onEditClick: React.PropTypes.func.isRequired,
        onReadClick: React.PropTypes.func.isRequired,
        onTransactionsClick: React.PropTypes.func.isRequired,
        editAllowed: React.PropTypes.bool.isRequired,
        actionButton: React.PropTypes.any
    },
    render: function() {
        var readEditMode;
        var transactions;

        if (window.location.host === "webgold." + domain) {
            transactions = (
                <li>
                    <a onClick={ this.props.onTransactionsClick }>Transactions</a>
                </li>
            );
        }

        if (!this.props.editMode) {
            readEditMode = (
                <ul itemProp="breadcrumb" className="breadcrumb">
                    <li className="active">
                        Read
                    </li>
                    <li>
                        <a onClick={ this.props.onEditClick }>Edit</a>
                    </li>
                    {transactions}
                </ul>
            );
        } else {
            readEditMode = (
                <ul itemProp="breadcrumb" className="breadcrumb">
                    <li>
                        <a onClick={ this.props.onReadClick }>Read</a>
                    </li>
                    <li className="active">
                        Edit
                    </li>
                    {transactions}
                </ul>
            );
        }

        if (!this.props.editAllowed) {
            readEditMode = (
                <ul itemProp="breadcrumb" className="breadcrumb">
                    <li className="active">
                        Read
                    </li>
                    {transactions}
                </ul>
            );
        }

        if (this.props.actionButton) {
            readEditMode = (
                <ul itemProp="breadcrumb" className="breadcrumb">
                    <li className="active">
                        {this.props.actionButton}
                    </li>
                </ul>
            );
        }

        return (
            <section>
                <ul className="hide breadcrumb controls tooltip-demo">
                    <li title="Read time" data-placement="top" data-toggle="tooltip">
                        <span className="glyphicon glyphicon-time"></span>4-5 minutes
                    </li>
                    <li title="Last modified" data-placement="top" data-toggle="tooltip">
                        <span className="glyphicon glyphicon-calendar"></span>30 May, 2014
                    </li>
                </ul>
                { readEditMode }
            </section>
        );
    }
});
