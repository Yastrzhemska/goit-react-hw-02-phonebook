

export const FilterField = ({value, onChangeFilter}) => {
    return (
        <>
            <input type="text" value={value} onChange={onChangeFilter} />
        </>
    )
}