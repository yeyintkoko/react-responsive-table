'use client'
import Table, { row } from './components/Table/Table'
import { fourColumnsDataSet, threeColumnsDataSet } from './data'

/**
 * This is the main page of the site.
 * Here we can play with Table component
 *  */

export default function Home() {
    /** Uncomment the data you want to test, and comment the other */
    const data = fourColumnsDataSet
    // const data = threeColumnsDataSet

    return (
        <div>
            <Table
                name="Contract details"
                selectable
                selection="multi"
                columns={data.columns}
                data={data.rows}
                onSelect={(list: row[]) => {
                    console.log(
                        '---- selected list -----',
                        JSON.stringify(list, null, 4)
                    )
                }}
            />
        </div>
    )
}
