'use client'

import { useState } from 'react'
import BodyText from '../BodyText'
import HeaderText from '../HeaderText'
import './Table.css'

type orderType = 'asc' | 'desc' | 'netural'

export interface cell {
    title: string
    selected?: boolean
}

export type row = cell[]

interface Props {
    name?: string
    selectable?: boolean
    selection?: 'multi' | 'single'
    columns: row
    data: row[]
    onSelect: (selectedList: row[]) => void
}

const Table: React.FC<Props> = ({
    name,
    columns,
    data,
    selectable = false,
    selection = 'single',
    onSelect,
}) => {
    const [rows, setRows] = useState(data)
    const [orderBy, setOrderBy] = useState(0)
    const [sorting, setSorting] = useState<orderType>('desc')

    const ascending = <img src="/sorting_down.png" className="sort-arrow" />
    const descending = <img src="/sorting_up.png" className="sort-arrow" />
    const netural = <img src="/sorting_netural.png" className="sort-arrow" />

    const orderTableByColumn = (index: number) => {
        if (index === orderBy) {
            const orderedRows = rows.sort((a: row, b: row) => {
                if (a[index].title > b[index].title) {
                    if (sorting === 'asc') {
                        return 1
                    } else if (sorting === 'desc') {
                        return -1
                    }
                    return 0
                } else if (a[index].title < b[index].title) {
                    if (sorting === 'asc') {
                        return -1
                    } else if (sorting === 'desc') {
                        return 1
                    }
                    return 0
                }
                return 0
            })
            setRows([...orderedRows])

            if (sorting === 'asc') {
                setSorting('desc')
            } else {
                setSorting('asc')
            }
        } else {
            const orderedRows = rows.sort((a: row, b: row) => {
                if (a[index].title > b[index].title) {
                    return -1
                } else if (a[index].title < b[index].title) {
                    return 1
                }
                return 0
            })
            setRows([...orderedRows])

            setOrderBy(index)
            setSorting('desc')
        }
    }

    const handleRowSelect = (row: row, index: number) => {
        const selected = row[0].selected
        if (selectable) {
            const selectedRow = rows[index]
            if (selection === 'multi') {
                selectedRow[0].selected = !selected
            } else {
                if (!selected) {
                    rows.map((cells) => {
                        cells[0].selected = false
                        return cells
                    })
                    selectedRow[0].selected = true
                }
            }

            // Use deep cloning not to mass up with the reference copy of state array
            const coppiedRows: row[] = JSON.parse(JSON.stringify(rows))
            setRows([...coppiedRows])
            onSelect(coppiedRows.filter((it) => it[0].selected))
        }
    }

    const renderHeader = (item: cell, index: number) => {
        const sortIcons = {
            asc: ascending,
            desc: descending,
            netural: netural,
        }
        return (
            <th key={index}>
                <div
                    className="table-header-cell"
                    onClick={() => {
                        orderTableByColumn(index)
                    }}
                >
                    <HeaderText>{item.title}</HeaderText>
                    {index === orderBy
                        ? sortIcons[sorting]
                        : sortIcons['netural']}
                </div>
            </th>
        )
    }

    const renderCell = (item: cell, index: number) => {
        return (
            <td key={index}>
                <BodyText
                    selectable={index === 0 ? selectable : false}
                    type={selection === 'multi' ? 'checkbox' : 'radio'}
                    selected={item.selected}
                >
                    {item.title}
                </BodyText>
            </td>
        )
    }

    const renderRow = (row: row, index: number) => {
        const selected = row[0].selected
        return (
            <tr
                onClick={() => handleRowSelect(row, index)}
                style={{
                    cursor: selectable ? 'pointer' : 'none',
                    backgroundColor: selected ? '#EFEDFD' : undefined,
                }}
                key={index}
            >
                {row.map(renderCell)}
            </tr>
        )
    }

    const renderSection = (row: row, index: number) => {
        const selected = row[0].selected
        return (
            <div
                key={index}
                className="mobile_section"
                style={{
                    cursor: selectable ? 'pointer' : 'none',
                    backgroundColor: selected ? '#EFEDFD' : undefined,
                }}
                onClick={() => handleRowSelect(row, index)}
            >
                <HeaderText
                    display="section"
                    selectable={selectable}
                    type={selection === 'multi' ? 'checkbox' : 'radio'}
                    selected={selected}
                    data={columns.map((it) => it.title)}
                />
                <BodyText display="section" data={row.map((it) => it.title)} />
            </div>
        )
    }

    return (
        <div>
            <div
                className={`table-div ${
                    rows.length && rows[0].length > 3 ? 'hide-session' : ''
                }`}
            >
                <table id="basic_table">
                    <thead>
                        <tr>{columns.map(renderHeader)}</tr>
                    </thead>
                    <tbody>{rows.map(renderRow)}</tbody>
                </table>
            </div>
            <div
                className={`mobile-div ${
                    rows.length && rows[0].length > 3 ? 'show-session' : ''
                }`}
            >
                <div className="mobile_title">
                    <HeaderText>{name ?? 'Details'}</HeaderText>
                </div>
                {rows.map(renderSection)}
            </div>
        </div>
    )
}

export default Table
