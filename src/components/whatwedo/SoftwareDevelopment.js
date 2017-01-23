import React from 'react';

class SoftwareDevelopment extends React.Component {
    render() {
        return (
            <table id="software-development">
                <tbody>
                    <tr>
                        <td className="what-image"></td>
                        <td className="what-words">
                            <h3>Software Development</h3>
                            <p>
                                Whether the target is a simple task or a complex analysis, automation can, 
                                if employed judiciously, save time and reduce errors. But too often 
                                custom-developed business-to-business software is expensive and user-unfriendly. 
                                Clients end up wasting more resources on licensing fees and training than they 
                                save by using the software.
                            </p>
                            <p>
                                We have found that there is tremendous untapped potential in the office 
                                productivity software clients already use on a daily basis. Our developers 
                                will help you tap this potential to build tools that have the collaborative 
                                and analytical capabilities of a bottom-up custom solution—all at a fraction 
                                of the price, on a faster development schedule, and without the need to adapt 
                                to a new software environment.
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default SoftwareDevelopment;