import React from 'react';
import {Link} from 'react-router';

const AdditionalLinks = () => {
    return (
        <div id="additional-links">
            <table>
                <tbody>
                    <tr>
                        <td>
                            <Link to="whatwedo#forecasting-support" className="circle-block">
                                <p className="circle-words">Forecasting Support</p>
                                <p className="circle-arrow">&#8594;</p>
                            </Link>
                        </td>
                        <td>
                            <Link to="whatwedo#software-development" className="circle-block">
                                <p className="circle-words">Software Development</p>
                                <p className="circle-arrow">&#8594;</p>
                            </Link>
                        </td>
                        <td>
                            <Link to="whatwedo#operations-management" className="circle-block">
                                <p className="circle-words">Operations Management</p>
                                <p className="circle-arrow">&#8594;</p>
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default AdditionalLinks;