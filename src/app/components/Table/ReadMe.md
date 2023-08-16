# Table

Table component accept data and display it in a responsive table.
It provide sorting and selections and return the selected rows data in a callback.

#### Properties

```
interface Props {
    name?: string
    selectable?: boolean
    selection?: 'multi' | 'single'
    columns: row
    data: row[]
    onSelect: (selectedList: row[]) => void
}
```

#### Data Format

```
export interface cell {
    title: string
    selected?: boolean
}

export type row = cell[]
```

#### Usage

```
<Table
    name="Contract details"
    selectable
    selection="multi"
    columns={data.columns}
    data={data.rows}
    onSelect={(list) => {
        console.log(list)
    }}
/>
```

#### Sample Data

```
export const data = {
    columns: [
        {
            title: 'Name:',
        },
        {
            title: 'Mobile:',
        },
        {
            title: 'Expiry:',
        },
        {
            title: 'Penalty:',
        },
    ],
    rows: [
        [
            {
                title: 'Mavis Chen',
                selected: true,
            },
            {
                title: '8899 7654',
            },
            {
                title: 'Dec 2022',
            },
            {
                title: '$192',
            },
        ],
        [
            {
                title: 'Rodney Artichoke',
            },
            {
                title: '9988 7676',
            },
            {
                title: 'Nov 2022',
            },
            {
                title: '$300',
            },
        ],
        [
            {
                title: 'Valentino Morose',
            },
            {
                title: '8900 7654',
            },
            {
                title: 'Dec 2022',
            },
            {
                title: '$600',
            },
        ],
        [
            {
                title: 'Tony Stark',
            },
            {
                title: '9123 9805',
            },
            {
                title: 'Feb 2023',
            },
            {
                title: '$478',
            },
        ],
        [
            {
                title: 'Eric Widget',
            },
            {
                title: '9809 7654',
            },
            {
                title: 'Sep 2023',
            },
            {
                title: '$215',
            },
        ],
    ],
}
```
