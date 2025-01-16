export interface RowBlocksSpecs {
    columns?: Array<ColumnBlocksSpecs>
}

export interface ColumnBlocksSpecs {
    title?: string
    content?: string
    size?: number
    isActive?: boolean
}

