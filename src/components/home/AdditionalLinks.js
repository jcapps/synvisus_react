import React from 'react';
import {Link} from 'react-router';

const AdditionalLinks = () => {
    return (
        <div id="additional-links">
            <table>
                <tbody>
                    <tr>
                        <td>
                            <Link to="whatwedo" className="circle-block">
                                <p className="circle-words">Forecasting Support</p>
                            </Link>
                        </td>
                        <td>
                            <Link to="whatwedo" className="circle-block">
                                <p className="circle-words">Software Development</p>
                            </Link>
                        </td>
                        <td>
                            <Link to="whatwedo" className="circle-block">
                                <p className="circle-words">Operations Management</p>
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default AdditionalLinks;