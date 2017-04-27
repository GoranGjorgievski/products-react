import React from 'react'

export default class EditModal extends React.Component {


    render() {
        return (
            <table className="table table-hover table-striped">
                <thead>
                <tr>
                    <th className="text-right">
                        Property
                    </th>
                    <th className="text-center">
                        Value
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="text-right">
                        Name
                    </td>
                    <td>
                        <input id="name" ref="name" className="form-control" type="text"
                               defaultValue={this.props.selectedProduct.name}/>
                    </td>
                </tr>
                <tr>
                    <td className="text-right">
                        Description
                    </td>
                    <td>
                        <input id="description" ref="description" className="form-control" type="text"
                               defaultValue={this.props.selectedProduct.description}/>
                    </td>
                </tr>
                <tr>
                    <td className="text-right">
                        Price
                    </td>
                    <td>
                        <input id="price" ref="price" className="form-control" type="number"
                               defaultValue={this.props.selectedProduct.price}/>
                    </td>
                </tr>
                <tr>
                    <td className="text-right">
                        Created on
                    </td>
                    <td>
                        <input id="created_on" ref="created_on"
                               className="form-control"
                               readOnly
                               type="text"
                               defaultValue={this.props.selectedProduct.creation_date != '' ? this.props.selectedProduct.creation_date : new Date() }/>
                    </td>
                </tr>
                </tbody>
            </table>
        );
    }
}