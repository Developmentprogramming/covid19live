import React from 'react'

const CasesTableItem = ({ date, confirmed, active, recovered, deaths }) => {
    return (
        <tr>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                        {date}
                    </div>
                    {/* <!-- <div className="text-sm text-gray-500">
                        jane.cooper@example.com
                    </div> --> */}
                    </div>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{confirmed}</div>
                {/* <!-- <div className="text-sm text-gray-500">Optimization</div> --> */}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {active}
                </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                    {recovered}
                </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                    {deaths}
                </span>
            </td>
        </tr>
    )
}

export default CasesTableItem;