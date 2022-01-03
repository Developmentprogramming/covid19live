import React, { Component } from 'react'
import CasesTableItem from './CasesTableItem/CasesTableItem'

const fetchCovidApi = async () => {
    let array_data = await fetch("http://api.covid19api.com/country/sudan")
    let decoded_data = await array_data.json();
    return decoded_data;
}

const fetchVisitorsCount = async () => {
    return (await fetch('https://covid19livesudanapi.herokuapp.com/get_visitors')).json();
}

class CasesTable extends Component {
    constructor(props) {
        super(props)
        this.state = { casesList: [], visitors: 0 }
        fetchCovidApi().then(data => {
            this.setState({ casesList: data })
        })
        fetchVisitorsCount().then(data => {
            this.setState({ visitors: data })
        })
    }

    render() {
        return (
            <div className="flex flex-col" id="casesTable">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Date
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Confirmed
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Active
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Recovered
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Deaths
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {/* <CasesTableItem date="2020-11-25" confirmed="16649" active="5531" recovered="9908" deaths="1210" /> */}
                                    {
                                        this.state.casesList.slice().reverse().map((data, index) => {
                                            return <CasesTableItem key={index} date={data.Date} confirmed={data.Confirmed} active={data.Active} recovered={data.Recovered} deaths={data.Deaths} />
                                        })
                                    }
                                {/* <!-- More rows... --> */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col text-center m-20">
                    <span className="text-3xl text-black-500">#Visitors  <span className="text-green-600 font-semibold">{this.state.visitors}</span></span>
                </div>
            </div>
        )
    }
}

export default CasesTable;