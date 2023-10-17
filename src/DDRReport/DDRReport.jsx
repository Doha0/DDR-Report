import React from 'react';
import "./DDRReport.css"

const DDRReport = () => {


    return (
        < section className='section-style' >
            <div className='container'>
                <div className='flex flex-wrap -mx-4'>
                    <div className='w-full '>
                        <div className='max-w-full overflow-x-auto'>
                            <table className='w-full table-auto'>
                                <thead className='text-center bg-primary'>
                                    <tr>
                                        <th className="ThStyle"> Id </th>
                                        <th className="ThStyle"> Start Date </th>
                                        <th className="ThStyle"> End Date </th>
                                        <th className="ThStyle"> Month, Year </th>
                                        <th className="ThStyle"> Dated Excluded </th>
                                        <th className="ThStyle"> Number of days </th>
                                        <th className="ThStyle"> Lead Count </th>
                                        <th className="ThStyle"> Expected DDR </th>
                                        <th className="ThStyle"> Last Updated </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td className="TdStyle">.com</td>
                                        <td className="TdStyle">1 Year</td>
                                        <td className="TdStyle">$75.00</td>
                                        <td className="TdStyle">$5.00</td>
                                        <td className="TdStyle">$10.00</td>
                                        <td className="TdStyle">
                                            <a href='/#' className={"TdButton"}>
                                                Sign Up
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section >

    );
};

export default DDRReport;