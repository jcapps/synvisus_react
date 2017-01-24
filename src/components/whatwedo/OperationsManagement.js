import React from 'react';

class OperationsManagement extends React.Component {
    render() {

        const image = require("../../images/OperationsManagementClipArt.png");

        return (
            <table id="operations-management">
                <tbody>
                    <tr>
                        <td className="what-words">
                            <h3>Operations Management</h3>
                            <p>
                                Profit margins for manufacturers are increasingly driven by supply 
                                chain management. Furthermore, as online channels begin to displace traditional 
                                brick-and-mortar outlets, retailers must find ways to adapt and maintain efficiency.
                            </p>
                            <p>
                                Our consultants will help you construct a multi-channel and/or multi-SKU demand 
                                planning module that reflects the complexities of your operations and enables 
                                you to optimize resource allocation. We will work with you to ensure that the 
                                module is easy to use and integrates seamlessly with the other modules in your 
                                operations management system.
                            </p>
                        </td>
                        <td className="what-image">
                            <img id="operations-management-image" src={image} alt="Topic Picture"/>
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default OperationsManagement;